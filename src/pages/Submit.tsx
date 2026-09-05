import HeroButton from "../components/HeroButton";
import Section from "../components/Section";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import BulletList from "../components/BulletList";
import SubmissionTimeline from "../components/SubmissionTimeline";
import { FILMFREEWAY_LINK } from "../constants/links";
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
      <Section variant="hero">
        <PageHero
          title="Submit your film."
          actions={
            <HeroButton link={FILMFREEWAY_LINK}>
              Submit via FilmFreeway
            </HeroButton>
          }
        >
          <p className="mb-0">
            Read everything below before you head to FilmFreeway. It covers
            eligibility, student verification, film requirements, and the
            materials you'll need. Submission is free.
          </p>
        </PageHero>
      </Section>

      <Section variant="narrow">
        <SubmissionTimeline />
      </Section>

      <Section variant="prose">
        <div className="flex flex-col gap-8">
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
      </Section>

      <Section variant="alt">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <SectionHeader
            title="Student verification"
            description="Submissions must be made through the official Liberty Film Festival submission form and include:"
          />
          <BulletList items={verificationRequirements} />
        </div>
      </Section>

      <Section variant="prose">
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

      <Section>
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
          <HeroButton link={FILMFREEWAY_LINK}>
            Submit via FilmFreeway
          </HeroButton>
        </div>
      </Section>
    </>
  );
};

export default Submit;
