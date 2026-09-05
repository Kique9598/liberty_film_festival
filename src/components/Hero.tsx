import SprocketHoles from "./SprocketHoles";
import HeroButton from "./HeroButton";
import PageHero from "./PageHero";
import Section from "./Section";

const Hero = () => {
  return (
    <>
      <SprocketHoles />
      <Section variant="hero">
        <PageHero
          title={
            <>
              The Future of <br className="hidden sm:block" /> Cinema Starts
              Here.
            </>
          }
          actions={<HeroButton to="/submit">Submit a Film</HeroButton>}
        >
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
            <span>date*</span>
            <div className="h-1.5 w-1.5 rounded-full bg-ink" />
            <span>time*</span>
            <div className="h-1.5 w-1.5 rounded-full bg-ink" />
            <span>location*</span>
          </div>
          <p className="mb-0">
            Welcome to Liberty Film Festival — the first independent
            intercollegiate film festival to unite New York City's leading
            universities, showcasing the next generation of filmmakers while
            connecting student voices with industry professionals.
          </p>
        </PageHero>
      </Section>
      <SprocketHoles />
    </>
  );
};

export default Hero;
