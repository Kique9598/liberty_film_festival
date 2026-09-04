import HeroButton from "../components/HeroButton";
import Section from "../components/Section";

const Submit = () => {
  return (
    <>
      <Section variant="hero">
        <div className="flex justify-between">
          <div className="flex flex-3/5 flex-col gap-7">
            <h1>Submit your film.</h1>
            <p>
              Read everything below before you head to FilmFreeway — it covers
              eligibility, formatting, required materials, dates, and how films
              are judged. Submission is free.
            </p>
            <div className="flex gap-4">
              <HeroButton link="https://filmfreeway.com/TheLibertyFilmFestival">
                Submit via FilmFreeway
              </HeroButton>
            </div>
          </div>
          <div className="flex-2/5"></div>
        </div>
      </Section>
      <Section variant="default">timeline</Section>
      <Section>Eligibility</Section>
      <Section>Film Requirments</Section>
      <Section>What you'll need to provide</Section>
      <Section>
        <h2 className="text-center">Ready to Submit?</h2>
        <p className="text-center">
          Submissions are handled through FilmFreeway. You'll create a free
          account there to upload your film and materials.
        </p>
        <div className="m-auto">
          <HeroButton link="https://filmfreeway.com/TheLibertyFilmFestival">
            Submit via FilmFreeway
          </HeroButton>
        </div>
      </Section>
    </>
  );
};

export default Submit;
