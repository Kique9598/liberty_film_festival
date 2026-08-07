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
    </>
  );
};

export default Home;
