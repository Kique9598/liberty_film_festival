export type Sponsor = {
  name: string;
  tier?: "presenting" | "partner" | "supporter";
  logo?: string;
  url?: string;
};

/** Add confirmed sponsors here — the About page renders this list automatically. */
export const sponsors: Sponsor[] = [
  
];
