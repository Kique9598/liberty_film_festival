import Hero from "../components/Hero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import backdrop from "../assets/backdrop.png";
import HeroButton from "../components/HeroButton";

const schools = ["Columbia", "Pratt", "Fordham", "NYU", "Pace", "SVA", "Brooklyn College", "More"];


const cell =
  "relative w-full aspect-video grid place-items-center p-3 " +
  "border-b border-[#B3A96F] " +
  "[&:nth-child(n+7)]:border-b-0 md:[&:nth-child(n+5)]:border-b-0 " + // no line under last row
  "after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-[#B3A96F] " +
  "[&:nth-child(2n)]:after:hidden md:[&:nth-child(2n)]:after:block md:[&:nth-child(4n)]:after:hidden";

const Home = () => {
  return (
    <>
      <img src={backdrop} alt="" className="absolute -z-1 right-20 -top-36" />
      <Hero />
      <Section variant="narrow">
        <Timeline />
      </Section>
      <Section>
        <h2>Submission Requirements</h2>
      </Section>
      <Section className="bg-[#DCDFD5]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div className="md:col-start-1 md:row-start-1">
            <h2>A City-Wide Celebration of Student Filmmaking</h2>
          </div>

          <div className="flex justify-center items-center md:col-start-2 md:row-start-1 md:row-span-2">
            <div className="bg-white w-full max-w-[455px] aspect-video rounded-lg"></div>
          </div>

          <div className="flex flex-col items-start self-center md:col-start-1 md:row-start-2">
            <p>
              The Liberty Film Festival is a 2027 intercollegiate film festival
              gearing up to be one of the largest undergraduate film festivals
              in the nation, uniting New York City’s top institutions —
              including Columbia, NYU, Fordham, Pratt, Pace, SVA, Brooklyn
              College, and more — to celebrate the future of cinema.
              <br />
              This premier city-wide showcase provides student voices with a
              powerful platform and grants them direct access to industry
              professionals, bridging the gap between academia and Hollywood. By
              curating a cutting-edge lineup of short films, the festival serves
              as a critical launching pad, ushering in the next generation of
              filmmakers and offering audiences an exclusive first look at the
              defining talents of tomorrow.
            </p>
            <HeroButton to="/about">Learn More</HeroButton>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-center">Participating Schools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto">
          {schools.map((s) => (
            <div key={s} className={cell}>
              <h4>{s}</h4>
            </div>
          ))}
        </div>
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
