import Button from "./Button";
import PageHero from "./PageHero";
import Section from "./Section";

const Hero = () => {
  return (
    <Section variant="hero">
      <PageHero
        title={
          <>
            The Future of <br className="hidden sm:block" /> Cinema Starts Here.
          </>
        }
        actions={<Button to="/submit" label="Submit a Film" />}
      >
        <p className="mb-0">
          Welcome to Liberty Film Festival — the first independent
          intercollegiate film festival to unite New York City's leading
          universities, showcasing the next generation of filmmakers while
          connecting student voices with industry professionals.
        </p>
      </PageHero>
    </Section>
  );
};

export default Hero;
