import Hero from "../components/Hero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import backdrop from "../assets/backdrop.png";
import HeroButton from "../components/HeroButton";

const Home = () => {
  return (
    <>
      <img src={backdrop} alt="" className="absolute -z-1 right-20 -top-36" />
      <Hero />
      <Section>
        <Timeline />
      </Section>
      <Section>
        <h2>Submission Requirements</h2>
      </Section>
      <Section className="bg-[#DCDFD5]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start order-2 md:order-1 self-center">
            <h2>A City-Wide Celebration of Student Filmmaking</h2>
            <p>
              The Liberty Film Festival is a 2027 intercollegiate film festival
              gearing up to be one of the largest undergraduate film festivals
              in the nation, uniting New York City’s top institutions—including
              Columbia, NYU, Fordham, Pratt, Pace, SVA, Brooklyn College, and
              more—to celebrate the future of cinema.
              <br />
              This premier city-wide showcase provides student voices with a
              powerful platform and grants them direct access to industry
              professionals, bridging the gap between academia and Hollywood. By
              curating a cutting-edge lineup of short films, the festival serves
              as a critical launching pad, ushering in the next generation of
              filmmakers and offering audiences an exclusive first look at the
              defining talents of tomorrow.
            </p>
            <HeroButton to="/about">
              Learn More
            </HeroButton>
          </div>
          <div className="flex order-1 md:order-2 justify-center items-center">
            <div className="bg-white w-full max-w-113.75 aspect-video rounded-lg"></div>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-center">Participating Schools</h2>
      </Section>
      <Section>
        <h2>Donate</h2>
      </Section>
      <Section className="bg-[#DCDFD5]">
        <h2>Footer tmp</h2>
      </Section>
    </>
  );
};

export default Home;
