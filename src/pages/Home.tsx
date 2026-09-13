import Hero from "../components/Hero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import ParticipatingSchools from "../components/ParticipatingSchools";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import TwoColumnMedia from "../components/TwoColumnMedia";
import VideoPlayer from "../components/VideoPlayer";
import backdrop from "../assets/backdrop.png";
import {
  FILMFREEWAY_LINK,
  DONATE_LINK,
  PROMO_VIDEO_ID,
} from "../constants/links";
import { submissionHighlights } from "../data/homeContent";
import { impactAreasShort } from "../data/impactAreas";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

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
          <div className="flex gap-4">
            <Button to={"/submit"} label="Start a submission" />
            <Button to={"/submit"} label="Full requirements" ghost />
          </div>
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
      <Section variant="alt">
        <TwoColumnMedia
          title="A City-Wide Celebration of Student Filmmaking"
          media={
            <VideoPlayer
              videoId={PROMO_VIDEO_ID}
              className="max-w-full md:max-w-[455px]"
            />
          }
          actions={<Button to="/about" label="Learn More" />}
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
              <Button link={DONATE_LINK} label="Donate on Seed&Spark" />
              <Button to="/donate#donor-tiers" ghost label="See donor tiers" />
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
