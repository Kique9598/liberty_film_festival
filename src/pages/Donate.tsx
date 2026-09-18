import Section from "../components/Section";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import InfoCard from "../components/InfoCard";
import { DONATE_LINK } from "../constants/links";
import { impactAreas } from "../data/impactAreas";
import { donorTiers, wishlistNeeds } from "../data/donateContent";
import { useHashScroll } from "../hooks/useHashScroll";
import backdrop from "../assets/backdrop.png";

const Donate = () => {
  useHashScroll();

  return (
    <>
      <img
        src={backdrop}
        alt=""
        className="pointer-events-none absolute -top-24 -z-1 right-0 hidden w-48 opacity-90 sm:block md:-top-36 md:right-20 md:w-auto"
      />
      <Section variant="hero">
        <PageHero
          title={<>Fuel The Festival</>}
          actions={<Button link={DONATE_LINK} label="Donate on Seed&Spark" />}
        >
          <p className="mb-0">
            <b>We believe young filmmakers deserve a chance to be seen.</b>{" "}
            <br />
            Liberty Film Festival is entirely student-run and independently
            funded. Your donation helps give emerging filmmakers <b>
              a real venue, a
              real audience, and real industry access.
            </b>
          </p>
          <p className="mb-0 font-sans text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
            Even a small contribution helps put a film, and the filmmaker behind
            it, in front of the world.
          </p>
        </PageHero>
      </Section>

      <Section className="bg-[#DCD8C9]">
        <div className="flex flex-col gap-10">
          <SectionHeader
            title="Where your donation goes"
            description="We are building this festival from the ground up. Your support funds the essentials, not overhead, so every contribution has a visible impact on the event."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {impactAreas.map(({ title, description }, index) => (
              <InfoCard
                key={title}
                title={title}
                titleSize="lg"
                variant={index === 1 ? "highlight" : "default"}
                className={
                  index === 1
                    ? "md:translate-y-6"
                    : index === 2
                      ? "md:translate-y-12"
                      : ""
                }
              >
                <p className="mb-0 text-sm leading-relaxed text-body">
                  {description}
                </p>
              </InfoCard>
            ))}
          </div>
        </div>
      </Section>

      <Section scrollMargin>
        <div className="flex flex-col gap-10">
          <SectionHeader
            title="Donor incentives"
            description="Every tier includes all the perks from the tiers below it, plus what's listed here."
          />

          <div className="table-shell">
            <table className="w-full min-w-[640px] border-collapse sm:min-w-[680px]">
              <thead>
                <tr className="border-b-2 border-parch-300 bg-parch-100">
                  <th className="label-caps px-4 py-3 text-left sm:px-6 sm:py-4">
                    Tier
                  </th>
                  <th className="label-caps px-4 py-3 text-left sm:px-6 sm:py-4">
                    Gift
                  </th>
                  <th className="label-caps px-4 py-3 text-left sm:px-6 sm:py-4">
                    New at this level
                  </th>
                </tr>
              </thead>
              <tbody>
                {donorTiers.map(({ tier, amount, perks }, index) => (
                  <tr
                    key={tier}
                    className={`border-b border-parch-300 last:border-b-0 ${
                      index % 2 === 1 ? "bg-parch-50" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3 font-cormorant text-lg font-medium text-ink sm:px-6 sm:py-4 sm:text-xl">
                      {tier}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-cormorant text-lg font-semibold text-accent sm:px-6 sm:py-4 sm:text-xl">
                      {amount}
                    </td>
                    <td className="px-4 py-3 text-sm leading-relaxed text-ink sm:px-6 sm:py-4 sm:text-base">
                      {perks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ButtonContainer>
            <Button link={DONATE_LINK} label="Donate on Seed&Spark" />
            <Button to="#wishlist" label="View the wishlist" ghost />
          </ButtonContainer>
          <p className="mb-0 text-sm text-muted">
            All donations are processed securely through Seed&Spark.
          </p>
        </div>
      </Section>

      <Section id="wishlist" className="bg-[#DCD8C9]">
        <div className="flex max-w-2xl flex-col gap-8">
          <SectionHeader
            title="Wishlist"
            description="We also maintain a wishlist on Seed&Spark for cash pledges and loan items."
          />

          <ul className="flex flex-col border-t border-parch-500">
            {wishlistNeeds.map(({ item, cost }) => (
              <li key={item} className="list-row border-parch-500">
                <span className="text-body">{item}</span>
                <span className="shrink-0 font-cormorant font-semibold text-accent">
                  {cost}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-3">
            <Button
              link={DONATE_LINK}
              label="View the Wishlist on Seed&Spark"
            />
            <p className="mb-0 text-sm text-muted">
              Pledges and loan items are handled on Seed&Spark.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Donate;
