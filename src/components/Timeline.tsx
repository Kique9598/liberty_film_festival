import { useEffect, useState } from "react";
import { SUBMISSION_DEADLINE } from "../constants/links";

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

  return (
    <div className="surface-panel flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-2">
      <div className="hidden flex-col gap-1 lg:flex">
        <span className="text-sm">Call for Films</span>
        <span className="text-xs text-muted">Submit for your school</span>
      </div>

      <div className="flex flex-1 flex-col gap-2 text-sm">
        <div className="flex">
          <span className="flex flex-1">Submissions</span>
          <span className="flex flex-1 justify-center text-subtle">
            Processing
          </span>
          <span className="flex flex-1 justify-center text-subtle">
            Lineup Drop
          </span>
          <span className="flex flex-1 justify-end text-subtle">Showtime</span>
        </div>
        <div className="flex gap-1">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-gold-200">
            <div className="timeline-progress-fill h-full rounded-full bg-gold-500" />
          </div>
          <div className="h-1 flex-1 rounded-full bg-gold-200" />
          <div className="h-1 flex-1 rounded-full bg-gold-200" />
          <div className="h-1 flex-1 rounded-full bg-gold-200" />
        </div>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <span className="text-right text-sm text-muted">
          Submissions <br /> close in
        </span>
        <div className="flex gap-3 rounded-lg bg-parch-100 px-2 py-1 sm:gap-4">
          {[
            { value: days, label: "DAY" },
            { value: hours, label: "HRS" },
            { value: minutes, label: "MIN" },
            { value: seconds, label: "SEC" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-bold">{formatTime(value)}</span>
              <span className="text-xs text-subtle">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
