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

import type { ChangeEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Database } from "../lib/database.types";
import type { User } from "@supabase/supabase-js";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

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
    return (
      <Section>
        <p className="text-center text-muted">Loading your submission...</p>
      </Section>
    );

  return (
    <>
      <Section variant="hero" className="bg-[#DCD8C9]">
        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          <p className="mb-0 font-sans text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
            Liberty Film Festival · Phase one
          </p>
          <h1 className="mb-0 max-w-3xl">Submit your film.</h1>
          <p className="mb-0 max-w-2xl text-lg text-body md:text-xl">
            Start with your film details and student verification. If your film
            is selected, return to this exact submission page to add the
            finalist materials.
          </p>
        </div>
      </Section>
      <Section>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
          {user ? <SubmissionArea user={user} /> : <AuthPanel />}
        </div>
      </Section>
    </>
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
    <section className="card-default flex flex-col gap-5">
      <SectionHeader
        title="Create your submission account"
        description="Use one email for your festival correspondence and your submission login."
        showDivider={false}
      />
      <div className="border-l-4 border-gold-500 bg-gold-100 px-4 py-3">
        <p className="mb-0 text-sm text-body">
          We will use this email to contact you about your submission. Keep it
          accessible: you will use it and your password to return here, check
          your submission status, and add materials later if your film is
          selected.
        </p>
      </div>
      <Field label="Email for festival contact and submission login">
        <input
          className={inputClass}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field>
      <Field label="Password">
        <input
          className={inputClass}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Field>
      <div className="flex flex-wrap gap-3">
        <button className={buttonClass} onClick={signUp}>
          Create account
        </button>
        <button className={goldButtonClass} onClick={logIn}>
          Log in
        </button>
      </div>
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
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-parch-400 pb-4 text-sm">
        <p className="mb-0 text-muted">
          Signed in as <span className="text-body">{user.email}</span>
        </p>
        <button
          className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-gold-600 underline decoration-gold-400 underline-offset-4 transition-colors hover:text-gold-700"
          onClick={() => supabase.auth.signOut()}
        >
          Log out
        </button>
      </div>

      {loading ? (
        <p>Loading…</p>
      ) : submission ? (
        <>
          <ExistingSummary submission={submission} />
          {submission.status === "selected" ? (
            <PhaseTwoForm submission={submission} user={user} onSaved={load} />
          ) : (
            <section className="card-default border-l-4 border-green-500">
              <p className="mb-0 text-body">
                Finalist materials will open here when your status is
                <strong> selected</strong>. Your current status is “
                {submission.status}”.
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
    <section className="card-default flex flex-col gap-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <strong className="font-sans text-lg">{submission.title || "(untitled)"}</strong>
        <span className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-gold-600">
          Status: {submission.status}
        </span>
      </div>
      <div className="text-sm text-muted">
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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <SectionHeader
          title="Phase one: submit your film"
          description="Complete the student verification and film details below."
        />
        <div className="border-l-4 border-green-500 bg-green-100 px-4 py-3">
          <p className="mb-0 text-sm text-body">
            This is the first phase of your submission. If your film is
            selected, you will return to this exact form using your account to
            add the finalist materials.
          </p>
        </div>
      </div>

      <section className="card-default flex flex-col gap-5">
        <SectionHeader
          title="Qualifying Director"
          description="Verify the student director and choose the university this film will represent in the competition."
          showDivider={false}
        />
        <p className="mb-0 text-sm text-muted">
          If multiple eligible student directors worked on the film, decide
          together which one university the submission will be made on behalf
          of. The selected university is the university represented by this
          film in the competition.
        </p>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          <Field label="Student email (eligibility)">
            <input className={inputClass} type="email" value={f.studentEmail} onChange={set("studentEmail")} />
          </Field>
          <Field label="Student ID">
            <input className={inputClass} value={f.studentId} onChange={set("studentId")} />
          </Field>
          <Field label="University represented by this submission">
            <input className={inputClass} value={f.university} onChange={set("university")} />
          </Field>
          <Field label="Major">
            <input className={inputClass} value={f.major} onChange={set("major")} />
          </Field>
          <Field label="Expected graduation year">
            <input className={inputClass} type="number" value={f.gradYear} onChange={set("gradYear")} />
          </Field>
        </div>

        <div className="border-t border-parch-300 pt-4">
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.12em] text-gold-600">
            Select the qualifying director
          </p>
          <div className="flex flex-col gap-3">
            {directors.map((d, i) => (
              <div key={i} className="grid grid-cols-1 items-end gap-3 sm:grid-cols-[1fr_1fr_1fr_auto]">
                <Field label="First name">
                  <input className={inputClass} value={d.first} onChange={(e) => updateDirector(i, "first", e.target.value)} />
                </Field>
                <Field label="Middle name">
                  <input className={inputClass} value={d.middle} onChange={(e) => updateDirector(i, "middle", e.target.value)} />
                </Field>
                <Field label="Last name">
                  <input className={inputClass} value={d.last} onChange={(e) => updateDirector(i, "last", e.target.value)} />
                </Field>
                <label className="mb-2 flex items-center gap-2 whitespace-nowrap font-sans text-xs font-bold uppercase tracking-[0.08em] text-gold-700">
                  <input type="radio" name="primary" checked={d.isPrimary} onChange={() => setPrimary(i)} />
                  Qualifying director
                </label>
              </div>
            ))}
          </div>
          <button className={secondaryButtonClass} type="button" onClick={addDirector}>
            + Add another director
          </button>
        </div>
      </section>

      <section className="card-default flex flex-col gap-5">
        <SectionHeader
          title="Film materials"
          description="Tell us about the film you are submitting on behalf of the qualifying university."
          showDivider={false}
        />
        <Field label="Film title">
          <input className={inputClass} value={f.title} onChange={set("title")} />
        </Field>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          <Field label="Completion year">
            <input className={inputClass} type="number" value={f.completionYear} onChange={set("completionYear")} />
          </Field>
          <Field label="Runtime (seconds, maximum 600)">
            <input className={inputClass} type="number" value={f.runtime} onChange={set("runtime")} />
          </Field>
        </div>
        <Field label="Film screener URL (private Vimeo, YouTube, or link)">
          <input className={inputClass} value={f.screener} onChange={set("screener")} />
        </Field>
        <Field label="Logline (one sentence)">
          <input className={inputClass} value={f.logline} onChange={set("logline")} />
        </Field>
        <Field label="Synopsis (50–150 words)">
          <textarea className={`${inputClass} min-h-24`} value={f.synopsis} onChange={set("synopsis")} />
        </Field>
        <div>
          <button className={buttonClass} onClick={submit}>Submit phase one</button>
        </div>
      </section>
      <StatusLine status={status} />
    </div>
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
    <section className="card-default flex flex-col gap-5">
      <SectionHeader
        title="Finalist materials"
        description="Your film has been selected. Add the remaining materials below, then save your updates."
        showDivider={false}
      />
      <Field label="Cast list">
        <textarea
          className={`${inputClass} min-h-20`}
          value={t.castList}
          onChange={setText("castList")}
        />
      </Field>
      <Field label="Crew list">
        <textarea
          className={`${inputClass} min-h-20`}
          value={t.crewList}
          onChange={setText("crewList")}
        />
      </Field>
      <Field label="Social media handles">
        <input
          className={inputClass}
          value={t.socialMedia}
          onChange={setText("socialMedia")}
        />
      </Field>
      <Field label="Trailer URL">
        <input className={inputClass} value={t.trailer} onChange={setText("trailer")} />
      </Field>
      <Field label="Website URL">
        <input className={inputClass} value={t.website} onChange={setText("website")} />
      </Field>
      <Field label="Screening file URL (1080p+)">
        <input
          className={inputClass}
          value={t.screeningFile}
          onChange={setText("screeningFile")}
        />
      </Field>
      <Field label="Vertical poster (image)">
        <input className={fileInputClass} type="file" accept="image/*" onChange={setFile("vPoster")} />
      </Field>
      <Field label="Horizontal poster (image)">
        <input className={fileInputClass} type="file" accept="image/*" onChange={setFile("hPoster")} />
      </Field>
      <Field label="Closed captions">
        <input className={fileInputClass} type="file" onChange={setFile("captions")} />
      </Field>
      <Field label="Finished screenplay (PDF)">
        <input
          className={fileInputClass}
          type="file"
          accept="application/pdf"
          onChange={setFile("screenplay")}
        />
      </Field>
      <div>
        <button className={buttonClass} onClick={save}>
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
    <div className="flex flex-col gap-1">
      <label className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-gold-700">
        {label}
      </label>
      {children}
    </div>
  );
}

function StatusLine({ status }: { status: Status | null }) {
  if (!status) return null;
  return (
    <p
      className={`font-sans text-sm ${status.err ? "text-red-700" : "text-green-700"}`}
    >
      {status.msg}
    </p>
  );
}

const inputClass =
  "w-full border border-parch-400 bg-parch-50 px-3 py-2 font-sans text-sm text-body outline-none transition-colors placeholder:text-parch-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-400";
const fileInputClass =
  "w-full border border-dashed border-parch-400 bg-parch-50 px-3 py-2 font-sans text-sm text-body file:mr-3 file:border-0 file:bg-gold-100 file:px-3 file:py-1 file:font-sans file:text-xs file:font-bold file:uppercase file:tracking-[0.08em] file:text-gold-700";
const buttonClass =
  "button cursor-pointer border-0 bg-green-700 px-6 py-3 font-sans text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-green-600";
const goldButtonClass =
  "button cursor-pointer border-0 bg-gold-500 px-6 py-3 font-sans text-xs font-bold uppercase tracking-[0.12em] text-black-50 transition-colors hover:bg-gold-400";
const secondaryButtonClass =
  "mt-4 cursor-pointer border border-green-700 bg-transparent px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-green-700 transition-colors hover:bg-green-100";
