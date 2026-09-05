import { sponsors } from "../data/sponsors";
import SectionHeader from "./SectionHeader";

const sponsorTiers = [
  { key: "presenting" as const, label: "Presenting" },
  { key: "partner" as const, label: "Partners" },
  { key: "supporter" as const, label: "Supporters" },
];

const SponsorsSection = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <SectionHeader
        title="Sponsors"
        description="Partners who make Liberty Film Festival possible."
        centered
        showDivider
      />

      {sponsors.length === 0 ? (
        <div className="flex flex-wrap justify-center gap-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="sponsor-pill" aria-hidden />
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
                <span className="label-caps">{label}</span>
                <div className="flex flex-wrap justify-center gap-3">
                  {tierSponsors.map(({ name, logo, url }) => {
                    const content = logo ? (
                      <img
                        src={logo}
                        alt={name}
                        className="max-h-8 max-w-full object-contain"
                      />
                    ) : (
                      <span className="truncate font-cormorant text-sm text-ink">
                        {name}
                      </span>
                    );

                    return url ? (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sponsor-pill transition-colors hover:border-parch-600"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={name} className="sponsor-pill">
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
  );
};

export default SponsorsSection;
