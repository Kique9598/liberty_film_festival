import Hero from "../components/Hero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import ParticipatingSchools from "../components/ParticipatingSchools";
import HeroButton from "../components/HeroButton";
import InfoCard from "../components/InfoCard";
import TwoColumnMedia from "../components/TwoColumnMedia";
import backdrop from "../assets/backdrop.png";
import { FILMFREEWAY_LINK, DONATE_LINK } from "../constants/links";
import { submissionHighlights } from "../data/homeContent";
import { impactAreasShort } from "../data/impactAreas";

const Home = () => {
  return (
    <>
      <img
        src={backdrop}
        alt=""
        className="pointer-events-none absolute -top-24 -z-1 right-0 hidden w-48 opacity-90 sm:block md:-top-36 md:right-20 md:w-auto"
      />
      <Hero />
      <Section variant="narrow">
        <Timeline />
      </Section>
      <Section>
        <div className="flex flex-col gap-6">
          <h2 className="mb-0">Submission requirements</h2>

          <div className="mb-2 grid grid-cols-1 gap-4 md:grid-cols-3">
            {submissionHighlights.map(({ title, description }) => (
              <InfoCard key={title} title={title} variant="light">
                <p className="mb-0 text-sm leading-relaxed text-body">
                  {description}
                </p>
              </InfoCard>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <HeroButton link={FILMFREEWAY_LINK}>
              Submit via FilmFreeway
            </HeroButton>
            <HeroButton to="/submit" variant="secondary">
              Read full requirements
            </HeroButton>
          </div>
        </div>
      </Section>
      <Section variant="alt">
        <TwoColumnMedia
          title="A City-Wide Celebration of Student Filmmaking"
          mediaClassName="media-placeholder max-w-full md:max-w-[455px]"
          actions={<HeroButton to="/about">Learn More</HeroButton>}
        >
          <p className="mb-0">
            The Liberty Film Festival is a 2027 intercollegiate film festival
            gearing up to be one of the largest undergraduate film festivals in
            the nation, uniting New York City's top institutions — including
            Columbia, NYU, Fordham, Pratt, Pace, SVA, Brooklyn College, and more
            — to celebrate the future of cinema.
          </p>
          <p className="mb-0">
            This premier city-wide showcase provides student voices with a
            powerful platform and grants them direct access to industry
            professionals, bridging the gap between academia and Hollywood. By
            curating a cutting-edge lineup of short films, the festival serves
            as a critical launching pad, ushering in the next generation of
            filmmakers and offering audiences an exclusive first look at the
            defining talents of tomorrow.
          </p>
        </TwoColumnMedia>
      </Section>
      <Section>
        <ParticipatingSchools />
      </Section>
      <Section variant="alt">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-2xl flex-col gap-6">
            <h2 className="mb-0">
              Student filmmaking runs on community support.
            </h2>
            <p className="mb-0">
              Liberty Film Festival is entirely student-run and independently
              funded. Every dollar goes directly toward giving young filmmakers
              a real venue, a real audience, and real industry access.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <HeroButton link={DONATE_LINK}>Donate on Seed&Spark</HeroButton>
              <HeroButton to="/donate#donor-tiers" variant="secondary">
                See donor tiers
              </HeroButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {impactAreasShort.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                <p className="mb-0 text-sm leading-relaxed text-body">
                  {description}
                </p>
              </InfoCard>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
