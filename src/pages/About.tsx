import Section from "../components/Section";
import ParticipatingSchools from "../components/ParticipatingSchools";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FounderCard from "../components/FounderCard";
import SponsorsSection from "../components/SponsorsSection";
import { founders, team } from "../data/team";

const About = () => {
  return (
    <>
      <Section variant="hero">
        <PageHero
          title={
            <>
              Built by students for the <br className="hidden sm:block" />{" "}
              future of independent film.
            </>
          }
        >
          <p className="mb-0">
            Liberty Film Festival is a 2027 intercollegiate film festival uniting
            New York City's top universities — Columbia, NYU, Fordham, Pratt,
            Pace, SVA, Brooklyn College, and more — to celebrate the next
            generation of filmmakers.
          </p>
        </PageHero>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10">
          <div className="flex flex-col gap-6 md:col-start-1 md:row-start-1 md:row-span-2 md:justify-center">
            <h2 className="mb-0">Our mission</h2>
            <p className="mb-0">
              Liberty Film Festival exists to give undergraduate filmmakers a
              real stage in New York City — connecting student voices with
              audiences, peers, and industry professionals across the city's
              leading universities.
            </p>
            <p className="mb-0">
              We are building a city-wide celebration of short film that bridges
              the gap between academia and the professional world, launching the
              next generation of independent filmmakers through curated
              programming, industry access, and community support.
            </p>
          </div>
          <div className="flex items-center justify-center md:col-start-2 md:row-start-1 md:row-span-2">
            <div className="media-placeholder max-w-full md:max-w-[520px]" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-10">
          <SectionHeader
            title="Organizing team"
            description="Student leaders building the inaugural festival"
            centered
            showDivider
          />
          <div className="flex flex-wrap justify-center gap-4">
            {founders.map((member) => (
              <FounderCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Section>

      <Section variant="alt">
        <SponsorsSection />
      </Section>

      <Section>
        <div className="flex flex-col gap-6">
          <SectionHeader
            title="Team"
            description={`${team.length} students across participating schools.`}
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
            {team.map(({ name, title }) => (
              <div key={name}>
                <p className="mb-0 font-cormorant text-base leading-tight text-ink">
                  {name}
                </p>
                <p className="mb-0 text-xs leading-snug text-subtle">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <ParticipatingSchools />
      </Section>
    </>
  );
};

export default About;
