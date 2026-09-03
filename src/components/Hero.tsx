import SprocketHoles from "./SprocketHoles";
import HeroButton from "./HeroButton";
import Section from "./Section";

const Hero = () => {
  return (
    <>
      <SprocketHoles />
      <Section variant="hero">
        <div className="flex justify-between">
          <div className="flex flex-3/5 flex-col gap-7">
            <h1>
              The Future of <br /> Cinema Starts Here.
            </h1>
            <div className="flex items-center gap-2">
              <span>date*</span>
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              <span>time*</span>
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              <span>location*</span>
            </div>
            <p>
              Welcome to Liberty Film Festival — the first independent
              intercollegiate film festival to unite New York City's leading
              universities, showcasing the next generation of filmmakers while
              connecting student voices with industry professionals.
            </p>
            <div className="flex gap-4">
              <HeroButton to="/submit">Submit a Film</HeroButton>
            </div>
          </div>
          <div className="flex-2/5"></div>
        </div>
      </Section>
      <SprocketHoles />
    </>
  );
};

export default Hero;
