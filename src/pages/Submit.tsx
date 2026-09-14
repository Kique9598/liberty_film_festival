import Button from "../components/Button";
import Section from "../components/Section";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import BulletList from "../components/BulletList";
import SubmissionTimeline from "../components/SubmissionTimeline";
import Card from "../components/Card";
import { FILMFREEWAY_LINK } from "../constants/links";
import backdrop from "../assets/backdrop.png";
import {
  eligibilityRules,
  inauguralRules,
  verificationRequirements,
  filmRequirements,
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
          actions={
            <Button link={FILMFREEWAY_LINK} label="Submit via FilmFreeway" />
          }
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

      <Section row>
        <div className="flex flex-1 flex-col gap-8">
          <SectionHeader
            title="Eligibility"
            description="Liberty Film Festival is open to student filmmakers from participating colleges and universities across New York City."
          />
          <BulletList items={eligibilityRules} />
          <div className="callout-box">
            <h3 className="mb-3">Inaugural festival</h3>
            <p className="mb-4 text-sm text-muted">
              For the inaugural Liberty Film Festival:
            </p>
            <BulletList items={inauguralRules} />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Card id="01" title="Who can submit?" body="Current students and recent graduates of participating NYC colleges and universities." />
          <Card id="02" title="What can I submit?" body="Any genre of primarily student-produced short film, completed within the eligible period." className="mx-auto" />
          <Card id="03" title="What does it cost?" body="Nothing. Submission through FilmFreeway is completely free." className="ml-auto" />
        </div>
      </Section>

      <Section className="bg-[#DCD8C9]">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <SectionHeader
            title="Student verification"
            description="Submissions must be made through the official Liberty Film Festival submission form and include:"
          />
          <BulletList items={verificationRequirements} />
        </div>
      </Section>

      <Section className="bg-[#DCD8C9]">
        <div className="flex flex-col gap-8">
          <SectionHeader
            title="Film requirements"
            description="Before you submit, make sure your film meets these technical and rights requirements."
          />
          <BulletList items={filmRequirements} />
          <p className="callout-emphasis mb-0">
            10 minutes max, including opening titles and end credits.
          </p>
        </div>
      </Section>

      <Section className="bg-[#DCD8C9]">
        <div className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <SectionHeader
              title="Submission materials"
              description="What you need at the time of submission, and what selected filmmakers will be asked to provide later."
            />
          </div>

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
            <h3 className="mb-4">Additional deliverables (recommended)</h3>
            <BulletList items={recommendedDeliverables} />
          </div>

          <div className="max-w-3xl border-t border-parch-300 pt-8">
            <h3 className="mb-4">Publicity & screening rights</h3>
            <p className="text-body">
              By submitting a film to Liberty Film Festival, the filmmaker
              grants Liberty Film Festival the non-exclusive right to:
            </p>
            <BulletList items={publicityRights} />

            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted">
              <p className="mb-0">
                <span className="font-medium text-body">
                  YouTube & online exhibition,
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
          <p className="mb-0 text-muted">
            Submissions are handled through FilmFreeway. You'll create a free
            account there to upload your film and materials.
          </p>
          <Button link={FILMFREEWAY_LINK} label="Submit via FilmFreeway" />
        </div>
      </Section>
    </>
  );
};

export default Submit;
