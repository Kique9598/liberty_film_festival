import { useEffect, useState } from "react";
import { SUBMISSION_DEADLINE } from "../constants/links";
import Section from "./Section";

function Tooltip({ text }: { text: string }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    // next frame: lets the element paint at the hidden state first, then animate in
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <span
      className={`pointer-events-none absolute bottom-full mb-2 right-0 whitespace-nowrap text-[10px] xs:text-sm sm:text-base text-[#D4C9B0] transition-all duration-200 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {text}
    </span>
  );
}

const Timeline = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date(SUBMISSION_DEADLINE);
  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  function formatTime(time: number) {
    return time < 10 ? "0" + time : "" + time;
  }

  const phases = [
    {
      label: "Submissions",
      align: "left",
      active: true,
      tip: "Submit your film for free through the festival submission form through Jan 23.",
    },
    {
      label: "Judging",
      align: "center",
      active: false,
      tip: "A panel of student and industry jurors scores every entry.",
    },
    {
      label: "Lineup Drop",
      align: "center",
      active: false,
      tip: "The official selection is announced publicly.",
    },
    {
      label: "Showtime",
      align: "right",
      active: false,
      tip: "Feb 12, 2027 · 6:00 PM EST — the live NYC screening.",
    },
  ] as const;

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  } as const;

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Section className="bg-gradient-to-r from-[#3D573E] to-[#5D745D]">
      <div className="flex flex-col gap-2">
        <span className="text-[#D4C9B0] mx-auto lg:mx-0">
          Submissions close in
        </span>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex gap-3">
            {[
              { value: days, label: "DAY" },
              { value: hours, label: "HRS" },
              { value: minutes, label: "MIN" },
              { value: seconds, label: "SEC" },
            ].map(({ value, label }) => (
              <div key={label} className="flex gap-1 items-end">
                <span className="font-xanh-mono text-2xl  xs:text-3xl sm:text-5xl md:text-6xl text-white">
                  {formatTime(value)}
                </span>
                <span className="text-[#D4C9B0]">{label}</span>
              </div>
            ))}
          </div>
          <div className="relative flex w-full lg:flex-1 items-center gap-1 rounded-md bg-[#5D745D] px-4 py-2 text-white  select-none cursor-pointer">
            {hovered !== null && (
              <Tooltip key={hovered} text={phases[hovered].tip} />
            )}
            {phases.map((p, i) => (
              <div
                key={p.label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex flex-1 hover:flex-1/50 duration-200 flex-col gap-2 hover:z-20"
              >
                {/* <div className="absolute -inset-y-1 -inset-x-2 z-0 rounded-md bg-[#5D745D] opacity-0 shadow-[0px_0px_4px_rgba(0,0,0,0.35)]  duration-200 group-hover:opacity-100" /> */}

                <span
                  className={`relative z-10 text-[10px] xs:text-sm md:text-base ${alignClass[p.align]}`}
                >
                  {p.label}
                </span>
                <div
                  className={`relative z-10 h-1 rounded-full ${p.active ? "bg-[#A8945C]" : "bg-[#E4D9C0]"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
