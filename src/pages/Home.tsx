import Hero from "../components/Hero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import backdrop from "../assets/backdrop.png";
import HeroButton from "../components/HeroButton";

const v_lineStyle = "bg-[#B3A96F] h-1/2 my-auto";
const h_lineStyle = "bg-[#B3A96F] col-span-3 md:col-span-7 h-[1px]";
const gridBlockStyle = "w-full aspect-video grid place-items-center p-3";

const DONATE_LINK =
  "https://seedandspark.com/fund/liberty-film-festival?token=bf0c826a9df594042974045f508da13c0554cdca4c31ad8dddcd3fdaca56844c";

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
        <div className="grid grid-cols-[1fr_1px_1fr] md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] max-w-4xl m-auto">
          <div className={`${gridBlockStyle}`}>
            <h4>Columbia</h4>
          </div>
          <div className={`${v_lineStyle}`}></div>
          <div className={`${gridBlockStyle}`}>
            <h4>Pratt</h4>
          </div>
          <div className={`hidden md:block ${v_lineStyle}`}></div>
          <div className={`md:hidden ${h_lineStyle}`}></div>
          <div className={`${gridBlockStyle}`}>
            <h4>Fordham</h4>
          </div>
          <div className={`${v_lineStyle}`}></div>
          <div className={`${gridBlockStyle}`}>
            <h4>NYU</h4>
          </div>
          <div className={`${v_lineStyle}`}></div>
          <div className={`${h_lineStyle}`}></div>

          <div className={`${gridBlockStyle}`}>
            <h4>Pace</h4>
          </div>
          <div className={`${v_lineStyle}`}></div>

          <div className={`${gridBlockStyle}`}>
            <h4>SVA</h4>
          </div>
          <div className={`hidden md:block ${v_lineStyle}`}></div>
          <div className={`md:hidden ${h_lineStyle}`}></div>

          <div className={`${gridBlockStyle}`}>
            <h4>Brooklyn College</h4>
          </div>
          <div className={`${v_lineStyle}`}></div>

          <div className={`${gridBlockStyle}`}>
            <h4>More</h4>
          </div>
        </div>
      </Section>
      <Section className="bg-[#DCDFD5]">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-x-8">
          <div className="flex flex-col gap-6">
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

          <div className="flex flex-col gap-4">
            {donateImpact.map(({ title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-2 rounded-lg border border-[#c8baa8]/50 bg-[#F1ECE7] p-5"
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
