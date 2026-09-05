export type DonorTier = {
  tier: string;
  amount: string;
  perks: string;
};

export const donorTiers: DonorTier[] = [
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

export const wishlistNeeds = [
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
