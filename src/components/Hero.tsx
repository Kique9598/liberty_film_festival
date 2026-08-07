import SprocketHoles from "./SprocketHoles";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <>
      <SprocketHoles />
      <div className=" flex justify-between items-center py-9 px-10">
        <div className="flex flex-3/5 flex-col gap-7">
          <h1>The Future of <br /> Cinema Starts Here.</h1>
          <div className="flex items-center gap-2">
            <p>date*</p>
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            <p>time*</p>
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            <p>location*</p>
          </div>

          <p>
            Welcome to Liberty Film Festival — the first independent
            intercollegiate film festival to unite New York City's leading
            universities, showcasing the next generation of filmmakers while
            connecting student voices with industry professionals.
          </p>
          <div className="flex gap-4">
            <HeroButton to="/submit">Submit a Film</HeroButton>
            <HeroButton to="#mailing-list" variant="secondary">
              Join Mailing List
            </HeroButton>
          </div>
        </div>
        <div className="flex-2/5"></div>
      </div>
      <SprocketHoles />
    </>
  );
};

export default Hero;
