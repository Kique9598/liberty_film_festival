const schools = [
  "Columbia",
  "NYU",
  "Fordham",
  "PACE",
  "Pratt",
  "Sarah Lawrence",
  "SVA",
  "Brooklyn College",
  "The New School",
];

const ParticipatingSchools = () => {
  return (
    <>
      <div
        className="cursor-default marquee group relative w-full overflow-hidden 
                   [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] border-t-1 border-b-1"
      >
        <div className="sprockets" />
        <div className="marquee-track flex py-6 w-max group-hover:[animation-play-state:paused] ">
          {/* render the list TWICE back-to-back so the loop is seamless */}
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {schools.map((s) => (
                <span key={s} className="flex items-center whitespace-nowrap">
                  <span className="px-10 text-2xl md:text-3xl font-serif">
                    {s}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="sprockets" />
      </div>
      <p className="text-center text-xs text-[#635748]">
        Columbia · NYU · Fordham · PACE · Pratt · Sarah Lawrence · SVA ·
        Brooklyn College · The New School
      </p>
    </>
  );
};

export default ParticipatingSchools;
