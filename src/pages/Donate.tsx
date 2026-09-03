import React from "react";
import Section from "../components/Section";
import HeroButton from "../components/HeroButton";

const Donate = () => {
  return (
    <>
      <Section variant="hero">
        <div className="flex justify-between">
          <div className="flex flex-3/5 flex-col gap-7">
            <h1>
              Student filmmaking runs <br /> on community support.
            </h1>
            <p>
              Liberty Film Festival is entirely student-run and independently
              funded. Every dollar goes directly toward giving young filmmakers
              a real venue, a real audience, and real industry access.
            </p>
            <div className="flex gap-4">
              <HeroButton link="https://seedandspark.com/fund/liberty-film-festival?token=bf0c826a9df594042974045f508da13c0554cdca4c31ad8dddcd3fdaca56844c">
                Donate on Seed&Spark
              </HeroButton>
            </div>
          </div>
          <div className="flex-2/5"></div>
        </div>
      </Section>
    </>
  );
};

export default Donate;
