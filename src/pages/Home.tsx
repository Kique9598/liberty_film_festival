import Hero from "../components/Hero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import ParticipatingSchools from "../components/ParticipatingSchools";
import backdrop from "../assets/backdrop.png";
import HeroButton from "../components/HeroButton";

const DONATE_LINK =
  "https://seedandspark.com/fund/liberty-film-festival?token=bf0c826a9df594042974045f508da13c0554cdca4c31ad8dddcd3fdaca56844c";

const FILMFREEWAY_LINK = "https://filmfreeway.com/TheLibertyFilmFestival";

const submissionHighlights = [
  {
    title: "Eligibility",
    description:
      "Student filmmakers from participating NYC universities. Including current students and recent graduates.",
  },
  {
    title: "Format",
    description:
      "10 minutes max, including titles and credits. Any genre, primarily student-produced.",
  },
  {
    title: "Deadline",
    description: "Submit by January 23, 2027. Free to enter via FilmFreeway.",
  },
];

const donateImpact = [
  {
    title: "Screenings & venue",
    description:
      "Professional screening space, projection, and printed programs.",
  },
  {
    title: "Filmmaker access",
    description:
      "Submission support and logistics for undergrad filmmakers across NYC.",
  },
  {
    title: "Industry connections",
    description:
      "Panels and programming that connect students with working professionals.",
  },
];

const Home = () => {
  return (
    <>
      <img src={backdrop} alt="" className="absolute -z-1 right-20 -top-36" />
      <Hero />
      <Section variant="narrow">
        <Timeline />
      </Section>
      <Section>
        <div className="flex flex-col">
        <h2>Submission requirements</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-4">
            {submissionHighlights.map(({ title, description }) => (
              <div
                key={title}
                className="flex h-full flex-col gap-2 rounded-lg border border-[#c8baa8]/50 bg-[#faf8f2] p-5"
              >
                <h4 className="text-left text-xl">{title}</h4>
                <p className="mb-0 text-sm leading-relaxed text-[#3a312a]">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
              <HeroButton link={FILMFREEWAY_LINK}>
                Submit via FilmFreeway
              </HeroButton>
              <HeroButton to="/submit" variant="secondary">
                Read full requirements
              </HeroButton>
            </div>
        </div>
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
        <ParticipatingSchools />
      </Section>
      <Section className="bg-[#DCDFD5]">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-2xl flex-col gap-6">
            <h2>Student filmmaking runs on community support.</h2>
            <p className="mb-0">
              Liberty Film Festival is entirely student-run and independently
              funded. Every dollar goes directly toward giving young filmmakers
              a real venue, a real audience, and real industry access.
            </p>
            <div className="flex flex-wrap gap-4">
              <HeroButton link={DONATE_LINK}>Donate on Seed&Spark</HeroButton>
              <HeroButton to="/donate#donor-tiers" variant="secondary">
                See donor tiers
              </HeroButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {donateImpact.map(({ title, description }) => (
              <div
                key={title}
                className="flex h-full flex-col gap-2 rounded-lg border border-[#c8baa8]/50 bg-[#F1ECE7] p-5"
              >
                <h4 className="text-left text-xl">{title}</h4>
                <p className="mb-0 text-sm leading-relaxed text-[#3a312a]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
