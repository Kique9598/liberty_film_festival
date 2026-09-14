import Button from "../components/Button";
import Section from "../components/Section";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import BulletList from "../components/BulletList";
import SubmissionTimeline from "../components/SubmissionTimeline";
import backdrop from "../assets/backdrop.png";
import {
  filmRequirements,
  submissionRules,
  primaryStudentDirectorDefinition,
  faqItems,
  atSubmission,
  ifSelected,
  recommendedDeliverables,
  publicityRights,
} from "../data/submitContent";

const Submit = () => {
  return (
    <>
      <img
        src={backdrop}
        alt=""
        className="pointer-events-none absolute -top-24 -z-1 right-0 hidden w-48 opacity-90 sm:block md:-top-36 md:right-20 md:w-auto"
      />
      <Section variant="hero">
        <PageHero
          title="Submit your film."
          actions={<Button to={"/submitform"} label="Start a submission" />}
        >
          <p className="mb-0">
            Read everything below before you head to FilmFreeway. It covers
            eligibility, student verification, film requirements, and the
            materials you'll need. Submission is free.
          </p>
          <p className="mb-0 font-sans text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
            Free to enter · 10 minutes maximum · Any genre
          </p>
        </PageHero>
      </Section>

      <Section className="bg-[#DCD8C9]">
        <SectionHeader
          title="The road to the festival"
          description="Keep these dates close as you prepare your submission."
        />
        <SubmissionTimeline />
      </Section>

      <Section>
        <div className="flex flex-col gap-8">
          <SectionHeader
            title="Film requirements"
            description="Before you submit, make sure your film meets the following requirements."
          />
          <BulletList items={filmRequirements} />
          <div className="callout-box">
            <h3 className="mb-3">Submission rules</h3>
            <BulletList items={submissionRules} />
          </div>
        </div>
      </Section>

      <Section className="bg-[#DCD8C9]">
        <div className="flex flex-col gap-6">
          <SectionHeader
            title="Primary Student Director"
            description="This person is the primary student director for the film."
          />
          <p className="mb-0 text-body">{primaryStudentDirectorDefinition}</p>
        </div>
      </Section>

      <Section className="bg-[#DCD8C9]">
        <div className="flex flex-col gap-8">
          <SectionHeader
            title="Required submission materials"
            description="What you need to provide at submission and if your film is selected."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="card-default flex flex-col gap-4">
              <h3>At submission</h3>
              <BulletList items={atSubmission} />
            </div>
            <div className="card-default flex flex-col gap-4">
              <h3>If selected</h3>
              <BulletList items={ifSelected} />
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="mb-4">Optional deliverables</h3>
            <BulletList items={recommendedDeliverables} />
          </div>

          <div className="max-w-3xl border-t border-parch-300 pt-8">
            <h3 className="mb-4">Publicity & screening rights</h3>
            <p className="text-body">
              By submitting a film to Liberty Film Festival, the filmmaker
              grants Liberty Film Festival the non-exclusive right to:
            </p>
            <BulletList items={publicityRights} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <SectionHeader
            title="FAQ"
            description="Common questions about eligibility and directorial credit."
          />
          {faqItems.map(({ question, answer }) => (
            <details
              key={question}
              className="rounded-lg border border-parch-400 bg-parch-50 p-4"
            >
              <summary className="cursor-pointer list-none font-medium text-body">
                {question}
              </summary>
              <p className="mb-0 mt-3 text-body">{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <h2 className="mb-0">Ready to submit?</h2>
          <p className="mb-0 text-muted">
            Submissions are handled through FilmFreeway. You'll create a free
            account there to upload your film and materials.
          </p>
          <Button to={"/submitform"} label="Start a submission" />
        </div>
      </Section>
    </>
  );
};

export default Submit;
