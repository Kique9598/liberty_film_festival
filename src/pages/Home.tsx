import Hero from "../components/Hero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import ParticipatingSchools from "../components/ParticipatingSchools";
import Button from "../components/Button";
import VideoPlayer from "../components/VideoPlayer";
import backdrop from "../assets/backdrop.png";
import { PROMO_VIDEO_ID, DONATE_LINK } from "../constants/links";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import ButtonContainer from "../components/ButtonContainer";
import { contactLinks } from "../data/contactLinks";

const Home = () => {
  return (
    <>
      <img
        src={backdrop}
        alt=""
        className="pointer-events-none absolute -top-24 -z-1 right-0 hidden w-48 opacity-90 sm:block md:-top-36 md:right-20 md:w-auto"
      />
      <Hero />
      <Timeline />

      <Section variant="banner" dark>
        <div className="flex flex-col gap-6 text-center md:text-left">
          <p className="label-caps mb-0 text-gold-300">Live event</p>
          <h2 className="mb-0 text-3xl text-white sm:text-4xl md:text-5xl">
            A night at the movies — live in New York City.
          </h2>
          <p className="mb-0 max-w-3xl text-lg text-white/80">
            Liberty culminates in an in-person screening and awards night.
            Venue, date, and tickets are announced soon. Be the first to know.
          </p>
          <ButtonContainer>
            <Button
              link={contactLinks.linktree}
              label="Follow on Linktree"
              variant="gold"
            />
          </ButtonContainer>
        </div>
      </Section>
      <Section row>
        <div className="flex flex-col flex-1 gap-4">
          <SectionHeader title={"Three things to know before you submit."} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            sollicitudin, eros sed convallis laoreet, diam turpis tempus lacus,
            ornare imperdiet dui felis at dolor. Nulla et accumsan diam. Aenean
            vitae neque finibus neque euismod imperdiet non id sem. Nullam
            tincidunt elementum sapien, in tempor erat sodales in.
          </p>
          <ButtonContainer>
            <Button to={"/submitform"} label="Start a submission" />
            <Button to={"/submit"} label="Full requirements" ghost />
          </ButtonContainer>
        </div>

        <div className="flex flex-col flex-1/4 gap-4">
          <Card
            id="01"
            title="Eligibility"
            body="Current students and recent graduates of participating NYC universities."
          />
          <Card
            id="02"
            title="Format"
            body="10 minutes max, credits included. Any genre, primarily student-produced."
            className="mx-auto"
          />
          <Card
            id="03"
            title="Deadline"
            body="Submissions close January 23, 2027. Selected films are asked for stills, poster art and cast & crew later."
            className="ml-auto"
          />
        </div>
      </Section>
      <Section variant="full" className="bg-[#DCD8C9]">
        <SectionHeader title={"Participating Schools"} centered />
        <ParticipatingSchools />
      </Section>
      <Section row variant="banner" dark>
        <div className="flex flex-col gap-4">
          <SectionHeader
            title="Student filmmaking runs on community support."
            description="Liberty is entirely student-run and independently funded. Every dollar goes toward a real venue, a real audience, and real industry access for young filmmakers."
          />
          <ButtonContainer>
            <Button
              link={DONATE_LINK}
              label="Support the festival"
              variant="gold"
            />
          </ButtonContainer>
        </div>
        <VideoPlayer
          videoId={PROMO_VIDEO_ID}
          className="max-w-full md:max-w-[455px]"
        />
      </Section>
      {/* <Section>
        <SectionHeader title="With the Support of" centered />
      </Section> */}
    </>
  );
};

export default Home;
