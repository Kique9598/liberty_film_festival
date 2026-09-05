const vLineStyle = "bg-gold-500 h-1/2 my-auto";
const hLineStyle = "bg-gold-500 col-span-3 md:col-span-7 h-px";
const gridBlockStyle =
  "grid w-full place-items-center p-2 aspect-video sm:p-3";

const schools = [
  "Columbia", "NYU", "Fordham", "PACE", "Pratt", "Sarah", "Lawrence", "SVA", "Brooklyn", "College", "The New School"
];

const ParticipatingSchools = () => {
  return (
    <>
      <h2 className="text-center">Participating schools</h2>
      <div className="m-auto grid max-w-4xl grid-cols-[1fr_1px_1fr] md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr]">
        <div className={gridBlockStyle}>
          <h4>{schools[0]}</h4>
        </div>
        <div className={vLineStyle} />
        <div className={gridBlockStyle}>
          <h4>{schools[1]}</h4>
        </div>
        <div className={`hidden md:block ${vLineStyle}`} />
        <div className={`md:hidden ${hLineStyle}`} />
        <div className={gridBlockStyle}>
          <h4>{schools[2]}</h4>
        </div>
        <div className={vLineStyle} />
        <div className={gridBlockStyle}>
          <h4>{schools[3]}</h4>
        </div>
        <div className={vLineStyle} />
        <div className={hLineStyle} />

        <div className={gridBlockStyle}>
          <h4>{schools[4]}</h4>
        </div>
        <div className={vLineStyle} />

        <div className={gridBlockStyle}>
          <h4>{schools[5]}</h4>
        </div>
        <div className={`hidden md:block ${vLineStyle}`} />
        <div className={`md:hidden ${hLineStyle}`} />

        <div className={gridBlockStyle}>
          <h4>{schools[6]}</h4>
        </div>
        <div className={vLineStyle} />

        <div className={gridBlockStyle}>
          <h4>{schools[7]}</h4>
        </div>

        <div className={vLineStyle} />
        <div className={hLineStyle} />

        <div className={gridBlockStyle}>
          <h4>{schools[8]}</h4>
        </div>
        <div className={vLineStyle} />

        <div className={gridBlockStyle}>
          <h4>{schools[9]}</h4>
        </div>
        <div className={`hidden md:block ${vLineStyle}`} />
        <div className={`md:hidden ${hLineStyle}`} />

        <div className={gridBlockStyle}>
          <h4>{schools[10]}</h4>
        </div>
      </div>
    </>
  );
};

export default ParticipatingSchools;
