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
    </>
  );
};

export default Submit;
