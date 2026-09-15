import Section from "../components/Section";
import ParticipatingSchools from "../components/ParticipatingSchools";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FounderCard from "../components/FounderCard";
import SponsorsSection from "../components/SponsorsSection";
import TwoColumnMedia from "../components/TwoColumnMedia";
import VideoPlayer from "../components/VideoPlayer";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import { PROMO_VIDEO_ID } from "../constants/links";
import { founders, team } from "../data/team";
import backdrop from "../assets/backdrop.png";
import Icon from "../components/Icon";
import { TbTicket } from "react-icons/tb";
import IconButton from "../components/IconButton";
import { contactLinks } from "../data/contactLinks";
import { SiLinktree } from "react-icons/si";

const About = () => {
  return (
    <>
      <img
        src={backdrop}
        alt=""
        className="pointer-events-none absolute -top-24 -z-1 right-0 hidden w-48 opacity-90 sm:block md:-top-36 md:right-20 md:w-auto"
      />
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
            Liberty Film Festival is a 2027 intercollegiate film festival
            uniting New York City's top universities — Columbia, NYU, Fordham,
            Pratt, Pace, SVA, Brooklyn College, and more — to celebrate the next
            generation of filmmakers.
          </p>
          <ButtonContainer>
            <Button to="/submit" label="Submit a film" />
            <Button to="/donate" label="Support the festival" ghost />
          </ButtonContainer>
        </PageHero>
      </Section>
      <Section dark>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
          <div className="flex gap-4 items-center">
            <div className="hidden md:block shrink-0 -rotate-45">
              <Icon
                icon={<TbTicket strokeWidth={1} />}
                size="90"
                color="#635748"
              />
            </div>
            <SectionHeader
              title={"A night at the movies — live in New York City."}
              description={`Liberty culminates in an in-person screening and awards night. Venue, date, and tickets are announced soon. Follow us on yor favorate social media platform and be the first to know! →`}
              showDivider={false}
            />
          </div>

          <IconButton
            href={contactLinks.linktree}
            aria-label="LinkTree"
            title="LinkTree"
            icon={<SiLinktree />}
            ariaLabel={"LinkTree"}
            variant="gold"
            size="medium"
          />
        </div>
      </Section>
      <Section className="bg-[#DCD8C9]">
        <TwoColumnMedia
          title="Our mission"
          media={
            <VideoPlayer
              videoId={PROMO_VIDEO_ID}
              className="max-w-full md:max-w-[520px]"
            />
          }
        >
          <p className="mb-0">
            Liberty Film Festival exists to give undergraduate filmmakers a real
            stage in New York City, connecting student voices with audiences,
            peers, and industry professionals across the city's leading
            universities.
          </p>
          <p className="mb-0">
            We are building a city-wide celebration of short film that bridges
            the gap between academia and the professional world, launching the
            next generation of independent filmmakers through curated
            programming, industry access, and community support.
          </p>
        </TwoColumnMedia>
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

      <Section variant="banner">
        <SponsorsSection />
      </Section>

      {/* <Section>
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
      </Section> */}

      <Section className="bg-[#DCD8C9]">
        <SectionHeader title={"Participating Schools"} centered />
        <ParticipatingSchools />
      </Section>
    </>
  );
};

export default About;
