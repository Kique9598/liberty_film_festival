import Section from "../components/Section";
import ParticipatingSchools from "../components/ParticipatingSchools";
import { sponsors } from "../data/sponsors";

const founders = [
  {
    name: "Kallen Fenster",
    school: "Columbia University",
    title: "Festival Director",
  },
  {
    name: "Evan O'Rourke",
    school: "NYU",
    title: "Managing Director",
  },
];

const team = [
  {
    name: "Emerson Min",
    school: "Columbia University",
    title: "Finance & Administration Director",
  },
  {
    name: "Abigail Jang",
    school: "Columbia University",
    title: "School Relations Director",
  },
  {
    name: "Ava Blum",
    school: "Columbia University",
    title: "Guest & Industry Relations Co-Director",
  },
  {
    name: "Kacey Fifield",
    school: "Columbia University",
    title: "Guest & Industry Relations Co-Director",
  },
  {
    name: "Chara Blagrove",
    school: "Fordham University",
    title: "Fordham School Representative",
  },
  {
    name: "Benjamin Mattingly",
    school: "NYU",
    title: "Programming & Structure Director",
  },
  {
    name: "Evalise Abreu",
    school: "Pace University",
    title: "Pace School Representative",
  },
  {
    name: "Jacqueline Wilson",
    school: "Pratt Institute",
    title: "Programming & Structure Coordinator",
  },
  {
    name: "Caroline Coia",
    school: "Columbia University",
    title: "Programming & Structure Coordinator",
  },
  {
    name: "Ray Wu",
    school: "Columbia University",
    title: "Creative Development Co-Director",
  },
  {
    name: "Milo Timberake",
    school: "NYU",
    title: "Creative Development Co-Director",
  },
  {
    name: "Isaiah Arias",
    school: "Brooklyn College",
    title: "Creative Development Coordinator",
  },
  {
    name: "Samuel Guzman-Almonte",
    school: "Fordham University",
    title: "Creative Development Coordinator",
  },
  {
    name: "Enrique Alverde",
    school: "",
    title: "Creative Development Coordinator",
  },
  {
    name: "Dimitri Botsacos",
    school: "Pace University",
    title: "Venue & Experience Co-Director",
  },
  {
    name: "Dylan Koa",
    school: "NYU",
    title: "Venue & Experience Co-Director",
  },
  {
    name: "Sanky Chari",
    school: "NYU",
    title: "Sponsorship & Partnership Director",
  },
  {
    name: "Amethyst Stencik",
    school: "Fordham University",
    title: "Marketing & Publicity Director",
  },
  {
    name: "Taylor Hutchinson",
    school: "NYU",
    title: "Marketing & Publicity Coordinator",
  },
  {
    name: "Herman Singh",
    school: "Fordham University",
    title: "Marketing & Publicity Coordinator",
  },
  {
    name: "William Yeh",
    school: "NYU",
    title: "Finance & Administration Coordinator",
  },
  {
    name: "Elliot Kim",
    school: "",
    title: "Finance & Administration Coordinator",
  },
  {
    name: "Manav Sannappanavar",
    school: "NYU",
    title: "NYU Representative",
  },
  {
    name: "Simon Beltran",
    school: "Fordham University",
    title: "Fordham Representative",
  },
  {
    name: "Marc Alexander",
    school: "School of Visual Arts",
    title: "SVA Representative",
  },
];

const sponsorTiers = [
  { key: "presenting" as const, label: "Presenting" },
  { key: "partner" as const, label: "Partners" },
  { key: "supporter" as const, label: "Supporters" },
];

const About = () => {
  return (
    <>
      <Section variant="hero">
        <div className="flex justify-between">
          <div className="flex flex-3/5 flex-col gap-7">
            <h1>
              Built by students for the <br /> future of independent film.
            </h1>
            <p className="mb-0">
              Liberty Film Festival is a 2027 intercollegiate film festival
              uniting New York City's top universities — Columbia, NYU, Fordham,
              Pratt, Pace, SVA, Brooklyn College, and more — to celebrate the
              next generation of filmmakers.
            </p>
          </div>
          <div className="flex-2/5"></div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10">
          <div className="flex flex-col gap-6 md:col-start-1 md:row-start-1 md:row-span-2 md:justify-center">
            <h2 className="mb-0">Our mission</h2>
            <p className="mb-0">
              Liberty Film Festival exists to give undergraduate filmmakers a
              real stage in New York City — connecting student voices with
              audiences, peers, and industry professionals across the city's
              leading universities.
            </p>
            <p className="mb-0">
              We are building a city-wide celebration of short film that bridges
              the gap between academia and the professional world, launching
              the next generation of independent filmmakers through curated
              programming, industry access, and community support.
            </p>
          </div>

          <div className="flex items-center justify-center md:col-start-2 md:row-start-1 md:row-span-2">
            <div className="aspect-video w-full max-w-[520px] rounded-lg bg-[#e6ddd4]" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="mb-0">Organizing team</h2>
            <p className="mb-0 text-sm text-[#8a8578]">
              Student leaders building the inaugural festival
            </p>
            <div className="h-px w-10 bg-[#d9cfc4]" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {founders.map(({ name, school, title }) => (
              <div
                key={name}
                className="flex w-44 flex-col items-center rounded-lg border border-[#e6ddd4] bg-white px-3 py-4 text-center"
              >
                <div className="mb-3 h-12 w-12 shrink-0 rounded-full border border-[#d9cfc4] bg-[#faf8f2]" />
                <p className="mb-0 font-cormorant text-base font-medium leading-tight text-[#2a2420]">
                  {name}
                </p>
                <p className="mb-0 mt-1 text-xs leading-snug text-[#8a8578]">
                  {school}
                </p>
                <p className="mb-0 mt-1 font-cormorant text-sm leading-snug text-[#2a2420]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#DCDFD5]">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="mb-0">Sponsors</h2>
            <p className="mb-0 max-w-md text-sm text-[#635748]">
              Partners who make Liberty Film Festival possible.
            </p>
            <div className="h-px w-10 bg-[#c8baa8]" />
          </div>

          {sponsors.length === 0 ? (
            <div className="flex flex-wrap justify-center gap-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-12 w-36 rounded border border-[#c8baa8]/50 bg-[#F1ECE7]"
                />
              ))}
            </div>
          ) : (
            <div className="flex w-full max-w-2xl flex-col gap-8">
              {sponsorTiers.map(({ key, label }) => {
                const tierSponsors = sponsors.filter(
                  (s) => (s.tier ?? "supporter") === key,
                );
                if (tierSponsors.length === 0) return null;

                return (
                  <div key={key} className="flex flex-col items-center gap-4">
                    <span className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#8a8578]">
                      {label}
                    </span>
                    <div className="flex flex-wrap justify-center gap-3">
                      {tierSponsors.map(({ name, logo, url }) => {
                        const content = logo ? (
                          <img
                            src={logo}
                            alt={name}
                            className="max-h-8 max-w-full object-contain"
                          />
                        ) : (
                          <span className="truncate font-cormorant text-sm text-[#2a2420]">
                            {name}
                          </span>
                        );

                        const cardClass =
                          "flex h-12 w-36 items-center justify-center rounded border border-[#c8baa8]/50 bg-[#F1ECE7] px-3";

                        return url ? (
                          <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${cardClass} transition-colors hover:border-[#b0a08c]`}
                          >
                            {content}
                          </a>
                        ) : (
                          <div key={name} className={cardClass}>
                            {content}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6">
          <div className="max-w-2xl">
            <h2 className="mb-2">Team</h2>
            <p className="mb-0 text-sm text-[#635748]">
              {team.length} students across participating schools.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
            {team.map(({ name, title }) => (
              <div key={name}>
                <p className="mb-0 font-cormorant text-base leading-tight text-[#2a2420]">
                  {name}
                </p>
                <p className="mb-0 text-xs leading-snug text-[#8a8578]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <ParticipatingSchools />
      </Section>
    </>
  );
};

export default About;
