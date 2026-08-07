import Hero from "../components/Hero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import backdrop from "../assets/backdrop.png";

const Home = () => {
  return (
    <>
      <img src={backdrop} alt="" className="absolute -z-1 right-20 -top-36" />
      <Hero />
      <Section>
        <Timeline />
      </Section>
      <Section>
        <h2>Submission Requirements</h2>
      </Section>
      <Section className="bg-[#DCDFD5]">
        <h2>A City-Wide Celebration of Student Filmmaking</h2>
      </Section>
      <Section>
        <h2 className="text-center">Participating Schools</h2>
      </Section>
      <Section>
        <h2>Donate</h2>
      </Section>
      <Section>
        <h2>Join our mailing list</h2>
      </Section>
      <Section className="bg-[#DCDFD5]">
        <h2>Footer tmp</h2>
      </Section>
    </>
  );
};

export default Home;
