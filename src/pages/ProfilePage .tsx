// src/ProfilePage.jsx
//
// The whole Liberty Film Festival submission experience in one component you
// can tweak. Drop it into a route (or render it from App) and go.
//
// How it maps to the plain-JS version:
//   - getElementById(...).value      -> useState + <input value onChange>
//   - onAuthStateChange / on load    -> useEffect
//   - show/hide sections             -> conditional rendering ({cond ? ... : ...})
//   - the Supabase calls themselves  -> unchanged
//
// The database enforces the real rules (unique student email, one primary
// director per film, runtime <= 600s, owner-only RLS). This UI just calls it.

import type { ChangeEvent, CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Database } from "../lib/database.types";
import type { User } from "@supabase/supabase-js";

type SubmissionRow = Database["public"]["Tables"]["submissions"]["Row"];
type SubmissionUpdate = Database["public"]["Tables"]["submissions"]["Update"];
type DirectorRow = Database["public"]["Tables"]["directors"]["Row"];
type SubmissionWithDirectors = SubmissionRow & { directors: DirectorRow[] };
type Status = { err: boolean; msg: string };
type DirectorDraft = {
  first: string;
  middle: string;
  last: string;
  isPrimary: boolean;
};
type PhaseOneFields = {
  title: string;
  studentEmail: string;
  studentId: string;
  university: string;
  gradYear: string;
  major: string;
  screener: string;
  runtime: string;
  completionYear: string;
  logline: string;
  synopsis: string;
};
type PhaseTwoFields = {
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
      <h1 style={{ fontSize: 22 }}>Liberty Film Festival — submission</h1>
      {user ? <SubmissionArea user={user} /> : <AuthPanel />}
    </div>
  );
}

// ============================================================ auth
function AuthPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status | null>(null);

  async function signUp() {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return setStatus({ err: true, msg: error.message });
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
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setStatus({ err: true, msg: error.message });
  }

  return (
    <section style={card}>
      <h2 style={h2}>Account</h2>
      <Field label="Email (your submission login)">
        <input
          style={input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field>
      <Field label="Password">
        <input
          style={input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
    // RLS limits this to your own rows; a team has at most one here.
    const { data, error } = await supabase
      .from("submissions")
      .select("*, directors(*)")
      .limit(1)
      .maybeSingle();
    if (!error) setSubmission(data ?? null);
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
    .map(
      (d) =>
        [d.first_name, d.last_name].filter(Boolean).join(" ") +
        (d.is_primary_student ? " (primary)" : ""),
    )
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
    university: "",
    gradYear: "",
    major: "",
    screener: "",
    runtime: "",
    completionYear: "",
    logline: "",
    synopsis: "",
  });
  const [directors, setDirectors] = useState<DirectorDraft[]>([
    { first: "", middle: "", last: "", isPrimary: true },
  ]);
  const [status, setStatus] = useState<Status | null>(null);

  const set =
    (key: keyof PhaseOneFields) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setF((previous) => ({ ...previous, [key]: event.target.value }));
  const addDirector = () =>
    setDirectors((d) => [
      ...d,
      { first: "", middle: "", last: "", isPrimary: false },
    ]);
  const updateDirector = (
    index: number,
    key: keyof DirectorDraft,
    value: string,
  ) =>
    setDirectors((d) =>
      d.map((row, rowIndex) =>
        rowIndex === index ? { ...row, [key]: value } : row,
      ),
    );
  const setPrimary = (index: number) =>
    setDirectors((d) =>
      d.map((row, rowIndex) => ({ ...row, isPrimary: rowIndex === index })),
    );

  async function submit() {
    const dirs = directors.filter((d) => d.first || d.last);
    if (!dirs.length)
      return setStatus({ err: true, msg: "Add at least one director." });
    if (dirs.filter((d) => d.isPrimary).length !== 1) {
      return setStatus({
        err: true,
        msg: "Mark exactly one primary student director.",
      });
    }

    const { data: sub, error: subErr } = await supabase
      .from("submissions")
      .insert({
        team_id: user.id,
        title: f.title.trim(),
        student_email: f.studentEmail.trim() || null,
        student_id: f.studentId.trim() || null,
        university: f.university.trim() || null,
        expected_graduation_year: f.gradYear ? Number(f.gradYear) : null,
        expected_major: f.major.trim() || null,
        film_screener: f.screener.trim() || null,
        runtime_sec: f.runtime ? Number(f.runtime) : null,
        completion_year: f.completionYear ? Number(f.completionYear) : null,
        logline: f.logline.trim() || null,
        synopsis: f.synopsis.trim() || null,
      })
      .select()
      .single();

    if (subErr) {
      const msg =
        subErr.code === "23505"
          ? "This student email already has a submission."
          : subErr.code === "23514"
            ? "Runtime must be 1–600 seconds (10 min max)."
            : subErr.message;
      return setStatus({ err: true, msg });
    }

    const rows = dirs.map((d) => ({
      submission_id: sub.id,
      first_name: d.first || null,
      middle_name: d.middle || null,
      last_name: d.last || null,
      is_primary_student: d.isPrimary,
    }));
    const { error: dirErr } = await supabase.from("directors").insert(rows);
    if (dirErr) {
      // roll back so we never leave a submission with no directors
      await supabase.from("submissions").delete().eq("id", sub.id);
      return setStatus({ err: true, msg: "Director error: " + dirErr.message });
    }

    setStatus({ err: false, msg: "Submitted." });
    onCreated();
  }

  return (
    <section style={card}>
      <h2 style={h2}>Submit your film</h2>
      <Field label="Film title">
        <input style={input} value={f.title} onChange={set("title")} />
      </Field>
      <Field label="Student email (eligibility)">
        <input
          style={input}
          type="email"
          value={f.studentEmail}
          onChange={set("studentEmail")}
        />
      </Field>
      <Field label="Student ID">
        <input style={input} value={f.studentId} onChange={set("studentId")} />
      </Field>
      <Field label="University">
        <input
          style={input}
          value={f.university}
          onChange={set("university")}
        />
      </Field>
      <Field label="Major">
        <input style={input} value={f.major} onChange={set("major")} />
      </Field>
      <Field label="Expected graduation year">
        <input
          style={input}
          type="number"
          value={f.gradYear}
          onChange={set("gradYear")}
        />
      </Field>
      <Field label="Completion year">
        <input
          style={input}
          type="number"
          value={f.completionYear}
          onChange={set("completionYear")}
        />
      </Field>
      <Field label="Film screener URL (private Vimeo/YouTube/link)">
        <input style={input} value={f.screener} onChange={set("screener")} />
      </Field>
      <Field label="Runtime (seconds, max 600)">
        <input
          style={input}
          type="number"
          value={f.runtime}
          onChange={set("runtime")}
        />
      </Field>
      <Field label="Logline (one sentence)">
        <input style={input} value={f.logline} onChange={set("logline")} />
      </Field>
      <Field label="Synopsis (50–150 words)">
        <textarea
          style={{ ...input, minHeight: 70 }}
          value={f.synopsis}
          onChange={set("synopsis")}
        />
      </Field>

      <label style={labelStyle}>
        Directors — mark one as the primary student director
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
            style={{ ...input, flex: 1, minWidth: 90 }}
            placeholder="First"
            value={d.first}
            onChange={(e) => updateDirector(i, "first", e.target.value)}
          />
          <input
            style={{ ...input, flex: 1, minWidth: 90 }}
            placeholder="Middle"
            value={d.middle}
            onChange={(e) => updateDirector(i, "middle", e.target.value)}
          />
          <input
            style={{ ...input, flex: 1, minWidth: 90 }}
            placeholder="Last"
            value={d.last}
            onChange={(e) => updateDirector(i, "last", e.target.value)}
          />
          <label style={{ fontSize: 12, whiteSpace: "nowrap" }}>
            <input
              type="radio"
              name="primary"
              checked={d.isPrimary}
              onChange={() => setPrimary(i)}
            />{" "}
            primary
          </label>
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
function PhaseTwoForm({
  submission,
  user,
  onSaved,
}: {
  submission: SubmissionWithDirectors;
  user: User;
  onSaved: () => void;
}) {
  const [t, setT] = useState<PhaseTwoFields>({
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
  const [status, setStatus] = useState<Status | null>(null);

  const MAX = 6 * 1024 * 1024;
  const setText =
    (key: keyof PhaseTwoFields) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setT((previous) => ({ ...previous, [key]: event.target.value }));
  const setFile =
    (key: keyof PhaseTwoFiles) => (event: ChangeEvent<HTMLInputElement>) =>
      setFiles((previous) => ({
        ...previous,
        [key]: event.target.files?.[0] ?? null,
      }));

  async function uploadOne(prefix: string, key: string, file: File | null) {
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
      const patch: SubmissionUpdate = {
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
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setStatus({ err: true, msg: "Error: " + message });
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

// ============================================================ small helpers + styles
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function StatusLine({ status }: { status: Status | null }) {
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
  background: "#2d6cdf",
  color: "#fff",
  cursor: "pointer",
  marginTop: 10,
};
