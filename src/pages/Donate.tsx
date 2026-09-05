import Section from "../components/Section";
import HeroButton from "../components/HeroButton";
const DONATE_LINK =
  "https://seedandspark.com/fund/liberty-film-festival?token=bf0c826a9df594042974045f508da13c0554cdca4c31ad8dddcd3fdaca56844c";

const impactAreas = [
  {
    title: "Screenings & venue",
    description:
      "Renting a professional screening space, projection equipment, and printed programs so student films are shown the way they deserve.",
  },
  {
    title: "Filmmaker access",
    description:
      "Travel stipends, submission support, and festival logistics that remove barriers for undergrad filmmakers across NYC.",
  },
  {
    title: "Industry connections",
    description:
      "Panels, networking events, and guest programming that give students direct access to working professionals.",
  },
];

const donorTiers = [
  {
    tier: "Supporter",
    amount: "$10",
    perks:
      "Digital sticker pack + name on the website as an inaugural Founding Supporter",
  },
  {
    tier: "Friend",
    amount: "$15",
    perks: "A handwritten thank-you note",
  },
  {
    tier: "Champion",
    amount: "$25",
    perks:
      "Name in the pre-show slideshow + an Instagram shoutout in a reel",
  },
  {
    tier: "Insider",
    amount: "$50",
    perks:
      "Name in the printed festival program + priority presale access to tickets",
  },
  {
    tier: "Patron",
    amount: "$100",
    perks:
      "A digital commemorative booklet + personalized thank-you video from the founders",
  },
  {
    tier: "Producer",
    amount: "$250",
    perks:
      "A signed festival poster + reserved-section seat selection during presale",
  },
  {
    tier: "Executive Producer",
    amount: "$500",
    perks: "An invitation to the pre-festival reception",
  },
  {
    tier: "Founder's Circle",
    amount: "$1,000",
    perks:
      "Reception invite for two, public recognition in opening remarks, and a permanent inaugural-underwriter credit",
  },
];

const wishlistNeeds = [
  { item: "Venue rental (NYU Skirball)", cost: "$7,500" },
  { item: "Venue staff & front of house", cost: "$3,600" },
  { item: "Venue technical crew", cost: "$3,600" },
  { item: "Theater insurance", cost: "$1,000" },
  { item: "Marketing", cost: "$1,000" },
  {
    item: "Festival materials, programming & experience",
    cost: "$1,500",
  },
];

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
              <HeroButton link={DONATE_LINK}>Donate on Seed&Spark</HeroButton>
            </div>
          </div>
          <div className="flex-2/5"></div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl">
            <h2>Where your donation goes</h2>
            <p className="mb-0 text-[#3a312a]">
              We are building this festival from the ground up. Your support
              funds the essentials — not overhead — so every contribution has a
              visible impact on the event.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {impactAreas.map(({ title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-lg border border-[#c8baa8]/50 bg-[#F1ECE7] p-6"
              >
                <h4 className="text-left text-2xl">{title}</h4>
                <p className="mb-0 text-sm leading-relaxed text-[#3a312a]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl">
            <h2>Donor incentives</h2>
            <p className="mb-0 text-[#635748]">
              Every tier includes all the perks from the tiers below it, plus
              what's listed here.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#d9cfc4] bg-white shadow-sm">
            <table className="w-full min-w-[680px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#d8d4c8] bg-[#f8f5f1]">
                  <th className="px-6 py-4 text-left font-cormorant text-base font-bold uppercase tracking-[0.12em] text-[#635748]">
                    Tier
                  </th>
                  <th className="px-6 py-4 text-left font-cormorant text-base font-bold uppercase tracking-[0.12em] text-[#635748]">
                    Gift
                  </th>
                  <th className="px-6 py-4 text-left font-cormorant text-base font-bold uppercase tracking-[0.12em] text-[#635748]">
                    New at this level
                  </th>
                </tr>
              </thead>
              <tbody>
                {donorTiers.map(({ tier, amount, perks }, index) => (
                  <tr
                    key={tier}
                    className={`border-b border-[#e4e0d4] last:border-b-0 ${
                      index % 2 === 1 ? "bg-[#faf8f5]" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 font-cormorant text-xl font-medium text-[#2a2420]">
                      {tier}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-cormorant text-xl font-semibold text-[#4a6259]">
                      {amount}
                    </td>
                    <td className="px-6 py-4 text-base leading-relaxed text-[#2a2420]">
                      {perks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-start gap-3">
            <HeroButton link={DONATE_LINK}>Donate on Seed&Spark</HeroButton>
            <p className="mb-0 text-sm text-[#635748]">
              All donations are processed securely through Seed&Spark.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex max-w-2xl flex-col gap-8">
          <div>
            <h2>Wishlist</h2>
            <p className="mb-0 text-[#3a312a]">
              We also maintain a wishlist on Seed&Spark for cash pledges and
              loan items — specific festival needs you can help cover directly.
            </p>
          </div>

          <ul className="flex flex-col border-t border-[#e6ddd4]">
            {wishlistNeeds.map(({ item, cost }) => (
              <li
                key={item}
                className="flex items-baseline justify-between gap-6 border-b border-[#e6ddd4] py-3"
              >
                <span className="text-[#3a312a]">{item}</span>
                <span className="shrink-0 font-cormorant font-semibold text-[#4a6259]">
                  {cost}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-3">
            <HeroButton link={DONATE_LINK}>
              View the Wishlist on Seed&Spark
            </HeroButton>
            <p className="mb-0 text-sm text-[#635748]">
              Pledges and loan items are handled on Seed&Spark.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Donate;
