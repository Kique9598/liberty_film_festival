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
import IconButton from "../components/IconButton";
import { SiLinktree } from "react-icons/si";
import { TbTicket } from "react-icons/tb";
import Icon from "../components/Icon";

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

      <Section className="bg-[#DCD8C9]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
          <div className="flex gap-4 items-center">
            <div className="hidden md:block shrink-0 -rotate-45">
              <Icon
                icon={<TbTicket strokeWidth={1} />}
                size="90"
                color="#C8BAA8"
              />
            </div>
            <SectionHeader
              title={"A night at the movies — live in New York City."}
              description={`Liberty culminates in an in-person screening and awards night! Venue, and tickets will soon be announced on our social media platforms. Be the first to know! →`}
              showDivider={false}
            />
          </div>

          <IconButton
            href={contactLinks.linktree}
            aria-label="LinkTree"
            title="LinkTree"
            icon={<SiLinktree aria-hidden="true" />}
            ariaLabel={"LinkTree"}
            variant="green"
            size="medium"
          />
        </div>
      </Section>
      <Section >
        <div className="flex flex-col flex-1 gap-4">
          <SectionHeader
            title={"How Does It Work?"}
            description="Your film. Your school. Your stage."
          />
          <ButtonContainer>
            <Button to={"/profile"} label="Start a submission" />
            <Button to={"/submit"} label="Full requirements" ghost />
          </ButtonContainer>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card
            id="01"
            title="Submit Your Film"
            body="Submit any film you made as an undergraduate. It doesn’t have to be a school assignment, if you made it while you were an undergraduate, it’s eligible."
          />
          <Card
            id="02"
            title="Your School Selects Its Nominees"
            body="Each participating university will have a panel of student judges who review submissions from their school and select films to be nominated for the festival’s awards."
            className="mx-auto"
          />
          <Card
            id="03"
            title="The Festival Jury Chooses the Winners"
            body="Each participating university will have a panel of student judges who review submissions from their school and select films to be nominated for the festival’s awards."
            className="mx-auto"
          />
          <Card
            id="04"
            title="Public Screening & Awards Ceremony!"
            body="All nominated films will screen at the Liberty Film Festival, culminating in an awards ceremony where the winners will be announced. Everyone is invited to attend."
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
