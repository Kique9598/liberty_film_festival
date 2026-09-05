import HeroButton from "../components/HeroButton";
import Section from "../components/Section";
import SubmissionTimeline from "../components/SubmissionTimeline";

const FILMFREEWAY_LINK = "https://filmfreeway.com/TheLibertyFilmFestival";

const eligibilityRules = [
  "Films must have been created while the director was enrolled as a student at a participating college or university.",
  "Films completed during the summer immediately before a student's first semester or immediately following their final semester are eligible.",
  "Only one submission per film is permitted.",
  "Co-directed films are eligible provided at least one director meets all student eligibility requirements.",
  "Submit substantial evidence that the film was produced within the scope of eligible time restrictions (e.g. BTS footage, DaVinci Resolve timestamps).",
];

const inauguralRules = [
  "Films must have been completed within the past two (2) years.",
  "The film's director must be a current student or have graduated within the past two years.",
];

const verificationRequirements = [
  "Student email address (.edu preferred when available)",
  "University or college name",
  "Student ID number (may be redacted except for the final four digits if required by institutional policy)",
  "Expected graduation year",
  "Proof of enrollment or recent graduation upon request",
  "Major or intended area of study",
];

const filmRequirements = [
  "Maximum runtime: 10 minutes, including opening titles and end credits.",
  "Any genre is eligible.",
  "Films must be primarily student-produced.",
  "The submitting filmmaker must hold all necessary rights and permissions for the film's content, music, and materials.",
  "Rights and permissions must be granted to Liberty Film Festival for screening and publicity purposes.",
];

const atSubmission = [
  "Film screener (private Vimeo, YouTube, or downloadable link)",
  "Film title",
  "Runtime (10 minutes maximum, including credits)",
  "Director name",
  "University or college affiliation",
  "Student email address",
  "Student ID number",
  "Completion year",
  "Synopsis (50–150 words)",
  "Logline (one sentence)",
];

const ifSelected = [
  "High-resolution horizontal promotional image (landscape)",
  "High-resolution vertical poster (portrait)",
  "3–10 behind-the-scenes (BTS) still photographs",
  "Complete cast list",
  "Complete crew list",
  "Contact email addresses for cast and crew",
  "Director headshot",
  "Director biography (50–150 words)",
  "Optional trailer or teaser",
  "Social media handles for the film and filmmakers (optional)",
];

const recommendedDeliverables = [
  "Closed captions (.srt file preferred)",
  "Exhibition-quality screening file (1080p minimum)",
  "Film stills from the completed film (3–5)",
  "Finished screenplay",
];

const publicityRights = [
  "Screen the film as part of the festival and any official festival-related events.",
  "Use film stills, posters, trailers, clips (up to 60 seconds), filmmaker names, and project information for promotional, marketing, educational, archival, and publicity purposes.",
  "Feature selected films and related materials on Liberty Film Festival's website, social media channels, press materials, and promotional content.",
];

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="flex list-disc flex-col gap-2 pl-5 text-[#3a312a]">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const Submit = () => {
  return (
    <>
      <Section variant="hero">
        <div className="flex justify-between">
          <div className="flex flex-3/5 flex-col gap-7">
            <h1>Submit your film.</h1>
            <p>
              Read everything below before you head to FilmFreeway — it covers
              eligibility, student verification, film requirements, and the
              materials you'll need. Submission is free.
            </p>
            <div className="flex gap-4">
              <HeroButton link={FILMFREEWAY_LINK}>
                Submit via FilmFreeway
              </HeroButton>
            </div>
          </div>
          <div className="flex-2/5"></div>
        </div>
      </Section>

      <Section variant="narrow">
        <SubmissionTimeline />
      </Section>

      <Section>
        <div className="flex max-w-3xl flex-col gap-8">
          <div>
            <h2>Eligibility</h2>
            <p className="mb-0 text-[#635748]">
              Liberty Film Festival is open to student filmmakers from
              participating colleges and universities across New York City.
            </p>
          </div>

          <BulletList items={eligibilityRules} />

          <div className="rounded-lg border border-[#c8baa8]/50 bg-[#faf8f2] p-6">
            <h3 className="mb-3 font-cormorant text-2xl font-medium text-[#2a2420]">
              Inaugural festival
            </h3>
            <p className="mb-4 text-sm text-[#635748]">
              For the inaugural Liberty Film Festival:
            </p>
            <BulletList items={inauguralRules} />
          </div>
        </div>
      </Section>

      <Section className="bg-[#DCDFD5]">
        <div className="flex max-w-3xl flex-col gap-8">
          <div>
            <h2>Student verification</h2>
            <p className="mb-0 text-[#3a312a]">
              Submissions must be made through the official Liberty Film
              Festival submission form and include:
            </p>
          </div>

          <BulletList items={verificationRequirements} />
        </div>
      </Section>

      <Section>
        <div className="flex max-w-3xl flex-col gap-8">
          <div>
            <h2>Film requirements</h2>
            <p className="mb-0 text-[#635748]">
              Before you submit, make sure your film meets these technical and
              rights requirements.
            </p>
          </div>

          <BulletList items={filmRequirements} />

          <p className="mb-0 rounded-lg border border-[#d9cfc4] bg-white px-5 py-4 font-cormorant text-xl text-[#4a6259]">
            10 minutes max — including opening titles and end credits.
          </p>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <h2>Submission materials</h2>
            <p className="mb-0 text-[#635748]">
              What you need at the time of submission, and what selected
              filmmakers will be asked to provide later.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg border border-[#c8baa8]/50 bg-[#F1ECE7] p-6">
              <h3 className="font-cormorant text-2xl font-medium text-[#2a2420]">
                At submission
              </h3>
              <BulletList items={atSubmission} />
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-[#c8baa8]/50 bg-[#F1ECE7] p-6">
              <h3 className="font-cormorant text-2xl font-medium text-[#2a2420]">
                If selected
              </h3>
              <BulletList items={ifSelected} />
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="mb-4 font-cormorant text-2xl font-medium text-[#2a2420]">
              Additional deliverables (recommended)
            </h3>
            <BulletList items={recommendedDeliverables} />
          </div>

          <div className="max-w-3xl border-t border-[#e6ddd4] pt-8">
            <h3 className="mb-4 font-cormorant text-2xl font-medium text-[#2a2420]">
              Publicity & screening rights
            </h3>
            <p className="text-[#3a312a]">
              By submitting a film to Liberty Film Festival, the filmmaker
              grants Liberty Film Festival the non-exclusive right to:
            </p>
            <BulletList items={publicityRights} />

            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-[#635748]">
              <p className="mb-0">
                <span className="font-medium text-[#3a312a]">
                  YouTube & online exhibition —
                </span>{" "}
                Liberty Film Festival may invite selected filmmakers to have
                their films featured on the festival's official YouTube channel
                following the festival. Such online publication within the first
                year after the festival will only occur with the filmmaker's
                written permission.
              </p>
              <p className="mb-0">
                One (1) year after the conclusion of the festival, Liberty Film
                Festival reserves the right to exhibit selected films on its
                official YouTube channel and other official Liberty Film
                Festival platforms for archival, educational, and promotional
                purposes unless the filmmaker submits a written opt-out request.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <h2 className="mb-0">Ready to submit?</h2>
          <p className="mb-0 text-[#635748]">
            Submissions are handled through FilmFreeway. You'll create a free
            account there to upload your film and materials.
          </p>
          <HeroButton link={FILMFREEWAY_LINK}>
            Submit via FilmFreeway
          </HeroButton>
        </div>
      </Section>
    </>
  );
};

export default Submit;
