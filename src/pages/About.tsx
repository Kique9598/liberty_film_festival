import HeroButton from "../components/HeroButton";
import Section from "../components/Section";

const About = () => {
  return (
    <>
      <Section variant="hero">
        <div className="flex justify-between">
          <div className="flex flex-3/5 flex-col gap-7">
            <h1>
              Built by students for the <br /> future of independent film.
            </h1>
            <p>
              Liberty Film Festival is a 2027 intercollegiate film festival
              uniting New York City's top universities — Columbia, NYU, Fordham,
              Pratt, Pace, SVA, Brooklyn College, and more — to celebrate the
              next generation of filmmakers.
            </p>
          </div>
          <div className="flex-2/5"></div>
        </div>
      </Section>
    </>
  );
};

export default About;
