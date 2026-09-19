// src/ProfilePage.tsx
//
// TypeScript version. Types come from ./lib/database.types (generated from your
// live schema), so columns, the university enum, and the status enum are all
// checked at compile time.
//
// Changes in this version:
//   - University is per-director (a dropdown of the 9 participating schools).
//     The submission's affiliation is the qualifying student director's university.
//   - Optional contact email; if left blank we store the account email at
//     submit time, so the column always holds a real address.

import { useEffect, useState } from "react";
import type { ChangeEvent, ReactNode, CSSProperties } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";
import type { Database } from "../lib/database.types";

type University = Database["public"]["Enums"]["university"];
type SubmissionRow = Database["public"]["Tables"]["submissions"]["Row"];
type DirectorRow = Database["public"]["Tables"]["directors"]["Row"];
type SubmissionWithDirectors = SubmissionRow & { directors: DirectorRow[] };

type StatusMsg = { err: boolean; msg: string } | null;
type FieldErrors = Record<string, string | undefined>;
type DirectorInput = {
  first: string;
  middle: string;
  last: string;
  university: University | "";
  isPrimary: boolean;
};

// Full official name is the stored value; the short label is what we show.
const UNIVERSITIES: { value: University; label: string }[] = [
  { value: "Columbia University", label: "Columbia" },
  { value: "New York University", label: "NYU" },
  { value: "Fordham University", label: "Fordham" },
  { value: "Pace University", label: "Pace" },
  { value: "Pratt Institute", label: "Pratt" },
  { value: "Sarah Lawrence College", label: "Sarah Lawrence" },
  { value: "School of Visual Arts", label: "SVA" },
  { value: "Brooklyn College", label: "Brooklyn College" },
  { value: "The New School", label: "The New School" },
];

function friendlyAuthError(message: string, action: "signup" | "login") {
  const normalized = message.toLowerCase();
  if (
    normalized.includes("already registered") ||
    normalized.includes("already exists")
  ) {
    return "This account is already taken. Try logging in instead.";
  }
  if (normalized.includes("invalid login credentials")) {
    return "That email or password is incorrect. Please try again.";
  }
  if (normalized.includes("email not confirmed")) {
    return "Please confirm your email address before logging in.";
  }
  if (normalized.includes("password") && normalized.includes("character")) {
    return "Your password must be at least 6 characters.";
  }
  if (normalized.includes("rate limit")) {
    return "Too many attempts. Please wait a moment and try again.";
  }
  return action === "signup"
    ? "We could not create your account. Please check your details and try again."
    : "We could not log you in. Please check your details and try again.";
}

function friendlySubmissionError(code?: string) {
  if (code === "23505") return "This student email already has a submission.";
  if (code === "23514") return "Runtime must be between 1 and 600 seconds.";
  return "We could not save your submission. Please check the form and try again.";
}

function validatePhaseField(key: keyof PhaseOneFields, value: string) {
  const trimmed = value.trim();
  if (
    [
      "title",
      "studentEmail",
      "studentId",
      "gradYear",
      "major",
      "screener",
      "runtime",
      "completionYear",
      "logline",
      "synopsis",
    ].includes(key) &&
    !trimmed
  ) {
    return `${key === "studentEmail" ? "Student email" : key} is required.`;
  }
  if (key === "studentEmail" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "Enter a valid student email address.";
  }
  if (key === "gradYear" || key === "completionYear") {
    const year = Number(trimmed);
    const minimumYear = key === "completionYear" ? 2025 : 2023;
    if (!Number.isInteger(year) || year < minimumYear || year > 2027) {
      return `${key === "gradYear" ? "Expected graduation year" : "Completion year"} must be between ${minimumYear} and 2027.`;
    }
  }
  if (key === "runtime") {
    const runtime = Number(trimmed);
    if (!Number.isInteger(runtime) || runtime < 1 || runtime > 600) {
      return "Runtime must be between 1 and 600 seconds.";
    }
  }
  if (key === "screener") {
    try {
      new URL(trimmed);
    } catch {
      return "Enter a valid film screener URL.";
    }
  }
  return undefined;
}

// ============================================================ top level
export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setReady(true);
    });
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  if (!ready)
    return <p style={{ textAlign: "center", marginTop: 40 }}>Loading…</p>;

  return (
    <div
      style={{
        maxWidth: 620,
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "system-ui, sans-serif",
        lineHeight: 1.5,
      }}
    >
      <h1 style={{ fontSize: 22 }}>Liberty Film Festival — Submission</h1>
      {user ? <SubmissionArea user={user} /> : <AuthPanel />}
    </div>
  );
}

// ============================================================ auth
function AuthPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<StatusMsg>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validateAuthField = (key: "email" | "password", value: string) => {
    const message = !value.trim()
      ? `${key === "email" ? "Email" : "Password"} is required.`
      : key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        ? "Enter a valid email address."
        : key === "password" && value.length < 6
          ? "Password must be at least 6 characters."
          : undefined;
    setFieldErrors((current) => ({ ...current, [key]: message }));
    return message;
  };

  async function signUp() {
    if (
      validateAuthField("email", email) ||
      validateAuthField("password", password)
    )
      return;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "https://www.libertyfilmfestival.org/profile",
      },
    });
    if (error) {
      return setStatus({
        err: true,
        msg: friendlyAuthError(error.message, "signup"),
      });
    }
    if (
      data.user &&
      data.user.identities &&
      data.user.identities.length === 0
    ) {
      return setStatus({
        err: true,
        msg: "That email already has an account — log in instead.",
      });
    }
    setStatus({
      err: false,
      msg: data.session
        ? "Logged in."
        : "Account created. Confirm via email, then log in.",
    });
  }

  async function logIn() {
    if (
      validateAuthField("email", email) ||
      validateAuthField("password", password)
    )
      return;
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setStatus({ err: true, msg: friendlyAuthError(error.message, "login") });
    }
  }

  return (
    <section style={card}>
      <h2 style={h2}>Account</h2>
      <Field label="Email (your submission login)">
        <input
          style={input}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateAuthField("email", e.target.value);
          }}
          onBlur={() => validateAuthField("email", email)}
        />
        <FieldError message={fieldErrors.email} />
      </Field>
      <Field label="Password">
        <input
          style={input}
          type="password"
          minLength={6}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validateAuthField("password", e.target.value);
          }}
          onBlur={() => validateAuthField("password", password)}
        />
        <FieldError message={fieldErrors.password} />
      </Field>
      <button style={btn} onClick={signUp}>
        Sign up
      </button>{" "}
      <button style={btn} onClick={logIn}>
        Log in
      </button>
      <StatusLine status={status} />
    </section>
  );
}

// ============================================================ submission area
function SubmissionArea({ user }: { user: User }) {
  const [submission, setSubmission] = useState<SubmissionWithDirectors | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("submissions")
      .select("*, directors(*)")
      .limit(1)
      .maybeSingle();
    if (!error) setSubmission((data as SubmissionWithDirectors) ?? null);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <p style={{ fontSize: 14, opacity: 0.85 }}>
        Logged in as {user.email}{" "}
        <button
          style={{ ...btn, background: "#666", marginLeft: 8 }}
          onClick={() => supabase.auth.signOut()}
        >
          Log out
        </button>
      </p>

      {loading ? (
        <p>Loading…</p>
      ) : submission ? (
        <>
          <ExistingSummary submission={submission} />
          {submission.status === "selected" ? (
            <PhaseTwoForm submission={submission} user={user} onSaved={load} />
          ) : (
            <section style={card}>
              <p style={{ fontSize: 14, opacity: 0.75, margin: 0 }}>
                Finalist materials open when your status is “selected”
                (currently “{submission.status}”).
              </p>
            </section>
          )}
        </>
      ) : (
        <PhaseOneForm user={user} onCreated={load} />
      )}
    </>
  );
}

function ExistingSummary({
  submission,
}: {
  submission: SubmissionWithDirectors;
}) {
  const names = (submission.directors || [])
    .map((d) => {
      const name = [d.first_name, d.last_name].filter(Boolean).join(" ");
      const uni = d.university ? ` — ${d.university}` : "";
      return name + uni + (d.is_primary_student ? " (qualifying)" : "");
    })
    .join(", ");
  return (
    <section style={card}>
      <strong>{submission.title || "(untitled)"}</strong> — status:{" "}
      <strong>{submission.status}</strong>
      <div style={{ fontSize: 14, marginTop: 6 }}>
        Directors: {names || "none"}
      </div>
    </section>
  );
}

// ============================================================ phase one
type PhaseOneFields = {
  title: string;
  studentEmail: string;
  studentId: string;
  gradYear: string;
  major: string;
  contactEmail: string;
  screener: string;
  runtime: string;
  completionYear: string;
  logline: string;
  synopsis: string;
};

function PhaseOneForm({
  user,
  onCreated,
}: {
  user: User;
  onCreated: () => void;
}) {
  const [f, setF] = useState<PhaseOneFields>({
    title: "",
    studentEmail: "",
    studentId: "",
    gradYear: "",
    major: "",
    contactEmail: "",
    screener: "",
    runtime: "",
    completionYear: "",
    logline: "",
    synopsis: "",
  });
  const [directors, setDirectors] = useState<DirectorInput[]>([
    { first: "", middle: "", last: "", university: "", isPrimary: true },
  ]);
  const [status, setStatus] = useState<StatusMsg>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const set =
    (key: keyof PhaseOneFields) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setF((previous) => ({ ...previous, [key]: value }));
      setFieldErrors((current) => ({
        ...current,
        [key]: validatePhaseField(key, value),
      }));
    };
  const validateField = (key: keyof PhaseOneFields) => {
    const message = validatePhaseField(key, f[key]);
    setFieldErrors((current) => ({ ...current, [key]: message }));
    return message;
  };

  const addDirector = () =>
    setDirectors((d) => [
      ...d,
      { first: "", middle: "", last: "", university: "", isPrimary: false },
    ]);
  const updateDirector = (
    i: number,
    key: keyof DirectorInput,
    value: string | boolean,
  ) =>
    setDirectors((d) =>
      d.map((row, idx) => (idx === i ? { ...row, [key]: value } : row)),
    );
  const setQualifyingDirector = (i: number) =>
    setDirectors((d) =>
      d.map((row, idx) => ({ ...row, isPrimary: idx === i })),
    );
  const removeDirector = (index: number) =>
    setDirectors((current) => {
      const remaining = current.filter((_, rowIndex) => rowIndex !== index);
      if (!remaining.some((director) => director.isPrimary) && remaining[0]) {
        remaining[0] = { ...remaining[0], isPrimary: true };
      }
      return remaining;
    });

  async function submit() {
    const fieldsToValidate: Array<keyof PhaseOneFields> = [
      "title",
      "studentEmail",
      "studentId",
      "gradYear",
      "major",
      "screener",
      "runtime",
      "completionYear",
      "logline",
      "synopsis",
    ];
    const errors = Object.fromEntries(
      fieldsToValidate.map((key) => [key, validatePhaseField(key, f[key])]),
    ) as FieldErrors;
    setFieldErrors(errors);
    const firstError = fieldsToValidate.map((key) => errors[key]).find(Boolean);
    if (firstError) return setStatus({ err: true, msg: firstError });

    const dirs = directors.filter((d) => d.first || d.last);
    if (!dirs.length)
      return setStatus({ err: true, msg: "Add at least one director." });
    const primaries = dirs.filter((d) => d.isPrimary);
    if (primaries.length !== 1)
      return setStatus({
        err: true,
        msg: "Mark exactly one qualifying student director.",
      });
    if (!primaries[0].university) {
      return setStatus({
        err: true,
        msg: "The qualifying student director must select their university.",
      });
    }

    const { data: sub, error: subErr } = await supabase
      .from("submissions")
      .insert({
        team_id: user.id,
        title: f.title.trim(),
        student_email: f.studentEmail.trim() || null,
        student_id: f.studentId.trim() || null,
        expected_graduation_year: f.gradYear ? Number(f.gradYear) : null,
        expected_major: f.major.trim() || null,
        // Fall back to the account email so contact_email is always populated.
        contact_email: f.contactEmail.trim() || user.email || null,
        film_screener: f.screener.trim() || null,
        runtime_sec: f.runtime ? Number(f.runtime) : null,
        completion_year: f.completionYear ? Number(f.completionYear) : null,
        logline: f.logline.trim() || null,
        synopsis: f.synopsis.trim() || null,
      })
      .select()
      .single();

    if (subErr) {
      return setStatus({
        err: true,
        msg: friendlySubmissionError(subErr.code),
      });
    }

    const rows = dirs.map((d) => ({
      submission_id: sub.id,
      first_name: d.first || null,
      middle_name: d.middle || null,
      last_name: d.last || null,
      university: d.university || null,
      is_primary_student: d.isPrimary,
    }));
    const { error: dirErr } = await supabase.from("directors").insert(rows);
    if (dirErr) {
      await supabase.from("submissions").delete().eq("id", sub.id);
      return setStatus({
        err: true,
        msg: "We could not save the director details. Please try again.",
      });
    }

    setStatus({ err: false, msg: "Submitted." });
    onCreated();
  }

  return (
    <section style={card}>
      <h2 style={h2}>Submit your film</h2>
      <Field label="Film title">
        <input
          style={input}
          value={f.title}
          onChange={set("title")}
          onBlur={() => validateField("title")}
        />
        <FieldError message={fieldErrors.title} />
      </Field>
      <Field label="Student email (eligibility)">
        <input
          style={input}
          type="email"
          value={f.studentEmail}
          onChange={set("studentEmail")}
          onBlur={() => validateField("studentEmail")}
        />
        <FieldError message={fieldErrors.studentEmail} />
      </Field>
      <Field label="Student ID">
        <input
          style={input}
          value={f.studentId}
          onChange={set("studentId")}
          onBlur={() => validateField("studentId")}
        />
        <FieldError message={fieldErrors.studentId} />
      </Field>
      <Field label="Contact email (optional — defaults to your login email)">
        <input
          style={input}
          type="email"
          value={f.contactEmail}
          onChange={set("contactEmail")}
        />
      </Field>
      <Field label="Expected graduation year">
        <input
          style={input}
          type="number"
          min={2020}
          max={2027}
          value={f.gradYear}
          onChange={set("gradYear")}
          onBlur={() => validateField("gradYear")}
        />
        <FieldError message={fieldErrors.gradYear} />
      </Field>
      <Field label="Major">
        <input
          style={input}
          value={f.major}
          onChange={set("major")}
          onBlur={() => validateField("major")}
        />
        <FieldError message={fieldErrors.major} />
      </Field>
      <Field label="Film screener URL (private Vimeo/YouTube/link)">
        <input
          style={input}
          value={f.screener}
          onChange={set("screener")}
          onBlur={() => validateField("screener")}
        />
        <FieldError message={fieldErrors.screener} />
      </Field>
      <Field label="Runtime (seconds, max 600)">
        <input
          style={input}
          type="number"
          min={1}
          max={600}
          value={f.runtime}
          onChange={set("runtime")}
          onBlur={() => validateField("runtime")}
        />
        <FieldError message={fieldErrors.runtime} />
      </Field>
      <Field label="Completion year">
        <input
          style={input}
          type="number"
          min={2025}
          max={2027}
          value={f.completionYear}
          onChange={set("completionYear")}
          onBlur={() => validateField("completionYear")}
        />
        <FieldError message={fieldErrors.completionYear} />
      </Field>
      <Field label="Logline (one sentence)">
        <input
          style={input}
          value={f.logline}
          onChange={set("logline")}
          onBlur={() => validateField("logline")}
        />
        <FieldError message={fieldErrors.logline} />
      </Field>
      <Field label="Synopsis (50–150 words)">
        <textarea
          style={{ ...input, minHeight: 70 }}
          value={f.synopsis}
          onChange={set("synopsis")}
          onBlur={() => validateField("synopsis")}
        />
        <FieldError message={fieldErrors.synopsis} />
      </Field>

      <label style={labelStyle}>
        Directors — each selects their university. Mark one as the qualifying
        student director (their university is the submission’s affiliation).
      </label>
      {directors.map((d, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 6,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            style={{ ...input, flex: 1, minWidth: 80 }}
            placeholder="First"
            value={d.first}
            onChange={(e) => updateDirector(i, "first", e.target.value)}
          />
          <input
            style={{ ...input, flex: 1, minWidth: 80 }}
            placeholder="Middle"
            value={d.middle}
            onChange={(e) => updateDirector(i, "middle", e.target.value)}
          />
          <input
            style={{ ...input, flex: 1, minWidth: 80 }}
            placeholder="Last"
            value={d.last}
            onChange={(e) => updateDirector(i, "last", e.target.value)}
          />
          <select
            style={{ ...input, flex: 1, minWidth: 110 }}
            value={d.university}
            onChange={(e) => updateDirector(i, "university", e.target.value)}
          >
            <option value="">University…</option>
            {UNIVERSITIES.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>
          <label style={{ fontSize: 12, whiteSpace: "nowrap" }}>
            <input
              type="radio"
              name="primary"
              checked={d.isPrimary}
              style={{ accentColor: "#5d745d" }}
              onChange={() => setQualifyingDirector(i)}
            />{" "}
            qualifying
          </label>
          <button
            type="button"
            style={{ ...btn, marginTop: 0, background: "#8c4b43" }}
            onClick={() => removeDirector(i)}
            aria-label={`Remove director ${i + 1}`}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        style={{ ...btn, background: "#666" }}
        type="button"
        onClick={addDirector}
      >
        + Add director
      </button>

      <div>
        <button style={btn} onClick={submit}>
          Submit
        </button>
      </div>
      <StatusLine status={status} />
    </section>
  );
}

// ============================================================ phase two
type PhaseTwoText = {
  castList: string;
  crewList: string;
  socialMedia: string;
  trailer: string;
  website: string;
  screeningFile: string;
};
type PhaseTwoFiles = {
  vPoster: File | null;
  hPoster: File | null;
  captions: File | null;
  screenplay: File | null;
};

function PhaseTwoForm({
  submission,
  user,
  onSaved,
}: {
  submission: SubmissionWithDirectors;
  user: User;
  onSaved: () => void;
}) {
  const [t, setT] = useState<PhaseTwoText>({
    castList: "",
    crewList: "",
    socialMedia: "",
    trailer: "",
    website: "",
    screeningFile: "",
  });
  const [files, setFiles] = useState<PhaseTwoFiles>({
    vPoster: null,
    hPoster: null,
    captions: null,
    screenplay: null,
  });
  const [status, setStatus] = useState<StatusMsg>(null);

  const MAX = 6 * 1024 * 1024;
  const setText =
    (k: keyof PhaseTwoText) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setT((p) => ({ ...p, [k]: e.target.value }));
  const setFile =
    (k: keyof PhaseTwoFiles) => (e: ChangeEvent<HTMLInputElement>) =>
      setFiles((p) => ({ ...p, [k]: e.target.files?.[0] ?? null }));

  async function uploadOne(
    prefix: string,
    key: string,
    file: File | null,
  ): Promise<string | null> {
    if (!file) return null;
    if (!file.type.startsWith("image/") && file.type !== "application/pdf")
      throw new Error(`${key}: images or PDF only.`);
    if (file.size > MAX) throw new Error(`${key}: over 6 MB.`);
    const ext = (file.name.split(".").pop() || "bin").toLowerCase();
    const path = `${prefix}/${key}.${ext}`;
    const { error } = await supabase.storage
      .from("posters")
      .upload(path, file, { upsert: true, contentType: file.type });
    if (error) throw error;
    return supabase.storage.from("posters").getPublicUrl(path).data.publicUrl;
  }

  async function save() {
    const prefix = `${user.id}/${submission.id}`;
    try {
      const patch: Database["public"]["Tables"]["submissions"]["Update"] = {
        cast_list: t.castList.trim() || null,
        crew_list: t.crewList.trim() || null,
        social_media: t.socialMedia.trim() || null,
        trailer: t.trailer.trim() || null,
        website: t.website.trim() || null,
        screening_file: t.screeningFile.trim() || null,
      };
      const v = await uploadOne(prefix, "vPoster", files.vPoster);
      if (v) patch.v_poster = v;
      const h = await uploadOne(prefix, "hPoster", files.hPoster);
      if (h) patch.h_poster = h;
      const c = await uploadOne(prefix, "captions", files.captions);
      if (c) patch.closed_captions = c;
      const s = await uploadOne(prefix, "screenplay", files.screenplay);
      if (s) patch.finished_screenplay = s;

      const { error } = await supabase
        .from("submissions")
        .update(patch)
        .eq("id", submission.id);
      if (error) throw error;
      setStatus({ err: false, msg: "Finalist materials saved." });
      onSaved();
    } catch {
      setStatus({
        err: true,
        msg: "We could not save the finalist materials. Please check the files and try again.",
      });
    }
  }

  return (
    <section style={card}>
      <h2 style={h2}>Finalist materials</h2>
      <Field label="Cast list">
        <textarea
          style={{ ...input, minHeight: 60 }}
          value={t.castList}
          onChange={setText("castList")}
        />
      </Field>
      <Field label="Crew list">
        <textarea
          style={{ ...input, minHeight: 60 }}
          value={t.crewList}
          onChange={setText("crewList")}
        />
      </Field>
      <Field label="Social media handles">
        <input
          style={input}
          value={t.socialMedia}
          onChange={setText("socialMedia")}
        />
      </Field>
      <Field label="Trailer URL">
        <input style={input} value={t.trailer} onChange={setText("trailer")} />
      </Field>
      <Field label="Website URL">
        <input style={input} value={t.website} onChange={setText("website")} />
      </Field>
      <Field label="Screening file URL (1080p+)">
        <input
          style={input}
          value={t.screeningFile}
          onChange={setText("screeningFile")}
        />
      </Field>
      <Field label="Vertical poster (image)">
        <input type="file" accept="image/*" onChange={setFile("vPoster")} />
      </Field>
      <Field label="Horizontal poster (image)">
        <input type="file" accept="image/*" onChange={setFile("hPoster")} />
      </Field>
      <Field label="Closed captions">
        <input type="file" onChange={setFile("captions")} />
      </Field>
      <Field label="Finished screenplay (PDF)">
        <input
          type="file"
          accept="application/pdf"
          onChange={setFile("screenplay")}
        />
      </Field>
      <div>
        <button style={btn} onClick={save}>
          Save finalist materials
        </button>
      </div>
      <StatusLine status={status} />
    </section>
  );
}

// ============================================================ helpers + styles
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <span role="alert" style={{ color: "#a33f36", fontSize: 12 }}>
      {message}
    </span>
  );
}

function StatusLine({ status }: { status: StatusMsg }) {
  if (!status) return null;
  return (
    <p
      style={{
        fontSize: 14,
        marginTop: 10,
        color: status.err ? "#c0392b" : "#1a8a3b",
      }}
    >
      {status.msg}
    </p>
  );
}

const card: CSSProperties = {
  border: "1px solid rgba(128,128,128,0.35)",
  borderRadius: 10,
  padding: 16,
  margin: "16px 0",
};
const h2: CSSProperties = { fontSize: 17, margin: "0 0 12px" };
const labelStyle: CSSProperties = {
  display: "block",
  fontSize: 13,
  margin: "8px 0 2px",
};
const input: CSSProperties = {
  width: "100%",
  padding: "7px 9px",
  border: "1px solid rgba(128,128,128,0.5)",
  borderRadius: 6,
  boxSizing: "border-box",
  fontFamily: "inherit",
  background: "transparent",
  color: "inherit",
};
const btn: CSSProperties = {
  padding: "8px 14px",
  border: "none",
  borderRadius: 6,
  background: "#5d745d",
  color: "#fff",
  cursor: "pointer",
  marginTop: 10,
};
