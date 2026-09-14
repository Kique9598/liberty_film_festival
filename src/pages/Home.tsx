import Hero from "../components/Hero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import ParticipatingSchools from "../components/ParticipatingSchools";
import Button from "../components/Button";
import VideoPlayer from "../components/VideoPlayer";
import backdrop from "../assets/backdrop.png";
import { PROMO_VIDEO_ID } from "../constants/links";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import ButtonContainer from "../components/ButtonContainer";

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
      <Section row>
        <div className="flex flex-col flex-1 gap-4">
          <SectionHeader
            title={"Three things to know before you submit."}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, eros sed convallis laoreet, diam turpis tempus lacus, ornare imperdiet dui felis at dolor. Nulla et accumsan diam. Aenean vitae neque finibus neque euismod imperdiet non id sem. Nullam tincidunt elementum sapien, in tempor erat sodales in."
            }
          />
          <ButtonContainer>
            <Button to={"/submit"} label="Start a submission" />
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
      <Section className="bg-[#DCD8C9]">
        <SectionHeader title={"Participating Schools"} centered />
        <ParticipatingSchools />
      </Section>
      <Section row variant="banner" className={"bg-[#201F1B]"}>
        <div className="flex flex-col gap-4">
          <SectionHeader
            dark
            title="Student filmmaking runs on community support."
            description="Liberty is entirely student-run and independently funded. Every dollar goes toward a real venue, a real audience, and real industry access for young filmmakers."
          />
          <ButtonContainer>
            <Button
              to={"/donate"}
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
