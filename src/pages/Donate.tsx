import React from "react";
import Section from "../components/Section";
import HeroButton from "../components/HeroButton";

const rowClass =
  "border-b border-[#e4e0d4] transition-colors hover:bg-[#5a7a5210]";
const dataClass = "py-2 pr-8 text-sm";
const headerClass =
  "py-2 pr-8 font-cormorant text-left text-sm font-bold uppercase tracking-[0.15em] text-[#8a8578]";

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
      <Section>
        <h2>Donor incentives</h2>
        <span>
          Every tier includes all the perks from the tiers below it, plus what's
          listed here.
        </span>
        <table className="border-collapse">
          <tr className="border-b border-[#d8d4c8]">
            <th className={headerClass}>TIER</th>
            <th className={headerClass}>GIFT</th>
            <th className={headerClass}>NEW AT THIS LEVEL</th>
          </tr>
          <tr className={rowClass}>
            <td className={dataClass}>Supporter</td>
            <td className={dataClass}>$10</td>
            <td className={dataClass}>
              Digital sticker pack + name on the website as an inaugural
              Founding Supporter
            </td>
          </tr>
          <tr className={rowClass}>
            <td className={dataClass}>Friend</td>
            <td className={dataClass}>$15</td>
            <td className={dataClass}>A handwritten thank-you note</td>
          </tr>
          <tr className={rowClass}>
            <td className={dataClass}>Champion</td>
            <td className={dataClass}>$25</td>
            <td className={dataClass}>
              Name in the pre-show slideshow + an Instagram shoutout in a reel
            </td>
          </tr>
          <tr className={rowClass}>
            <td className={dataClass}>Insider</td>
            <td className={dataClass}>$50</td>
            <td className={dataClass}>
              Name in the printed festival program + priority presale access to
              tickets
            </td>
          </tr>
          <tr className={rowClass}>
            <td className={dataClass}>Patron</td>
            <td className={dataClass}>$100</td>
            <td className={dataClass}>
              A digital commemorative booklet + personalized thank-you video
              from the founders
            </td>
          </tr>
          <tr className={rowClass}>
            <td className={dataClass}>Producer</td>
            <td className={dataClass}>$250</td>
            <td className={dataClass}>
              A signed festival poster + reserved-section seat selection during
              presale
            </td>
          </tr>
          <tr className={rowClass}>
            <td className={dataClass}>Executive Producer</td>
            <td className={dataClass}>$500</td>
            <td className={dataClass}>
              An invitation to the pre-festival reception
            </td>
          </tr>
          <tr className={rowClass}>
            <td className={dataClass}>Founder's Circle</td>
            <td className={dataClass}>$1,000</td>
            <td className={dataClass}>
              Reception invite for two, public recognition in opening remarks,
              and a permanent inaugural-underwriter credit
            </td>
          </tr>
        </table>
        <HeroButton link="https://seedandspark.com/fund/liberty-film-festival?token=bf0c826a9df594042974045f508da13c0554cdca4c31ad8dddcd3fdaca56844c">
          Donate on Seed&Spark
        </HeroButton>
      </Section>
      <Section>
        <h2 className="text-center">Ready to help?</h2>
        <p className="text-center">All donations are processed securely through Seed&Spark.</p>
        <div className="m-auto">
            <HeroButton link="https://seedandspark.com/fund/liberty-film-festival?token=bf0c826a9df594042974045f508da13c0554cdca4c31ad8dddcd3fdaca56844c">
              Donate on Seed&Spark
            </HeroButton>
        </div>
      </Section>
    </>
  );
};

export default Donate;
