const vLineStyle = "bg-[#B3A96F] h-1/2 my-auto";
const hLineStyle = "bg-[#B3A96F] col-span-3 md:col-span-7 h-[1px]";
const gridBlockStyle = "w-full aspect-video grid place-items-center p-3";

const ParticipatingSchools = () => {
  return (
    <>
      <h2 className="text-center">Participating schools</h2>
      <div className="grid max-w-4xl grid-cols-[1fr_1px_1fr] m-auto md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr]">
        <div className={gridBlockStyle}>
          <h4>Columbia</h4>
        </div>
        <div className={vLineStyle}></div>
        <div className={gridBlockStyle}>
          <h4>Pratt</h4>
        </div>
        <div className={`hidden md:block ${vLineStyle}`}></div>
        <div className={`md:hidden ${hLineStyle}`}></div>
        <div className={gridBlockStyle}>
          <h4>Fordham</h4>
        </div>
        <div className={vLineStyle}></div>
        <div className={gridBlockStyle}>
          <h4>NYU</h4>
        </div>
        <div className={vLineStyle}></div>
        <div className={hLineStyle}></div>

        <div className={gridBlockStyle}>
          <h4>Pace</h4>
        </div>
        <div className={vLineStyle}></div>

        <div className={gridBlockStyle}>
          <h4>SVA</h4>
        </div>
        <div className={`hidden md:block ${vLineStyle}`}></div>
        <div className={`md:hidden ${hLineStyle}`}></div>

        <div className={gridBlockStyle}>
          <h4>Brooklyn College</h4>
        </div>
        <div className={vLineStyle}></div>

        <div className={gridBlockStyle}>
          <h4>More</h4>
        </div>
      </div>
    </>
  );
};

export default ParticipatingSchools;
