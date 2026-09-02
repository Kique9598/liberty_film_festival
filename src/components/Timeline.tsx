import { useEffect, useState } from "react";

const Timeline = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date("2027-02-16T00:00:00");
  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  function formatTime(time: number) {
    return time < 10 ? "0" + time : "" + time;
  }

  return (
    <div className="flex items-center py-2 px-6 gap-6 bg-[#FDFBFC] rounded-lg">

      <div className="hidden lg:flex flex-col gap-1">
        <span className="text-sm">Call for Films</span>
        <span className="text-xs text-gray-600">Submit for your school</span>
      </div>

      <div className="flex flex-col flex-1 gap-2 text-sm">
        <div className="flex">
          <span className="flex flex-1 ">Submissions</span>
          <span className="flex flex-1 justify-center text-gray-400">Processing</span>
          <span className="flex flex-1 justify-center text-gray-400">Lineup Drop</span>
          <span className="flex flex-1 justify-end text-gray-400">Showtime</span>
        </div>
        <div className="flex gap-1">
          <div className="flex-1 bg-[#E3DDB0] rounded-full h-1 overflow-hidden">
            <div className="h-full bg-[#B3A96F] rounded-full timeline-progress-fill" />
          </div>
          <div className="flex-1 bg-[#E3DDB0] rounded-full h-1 text-sm"></div>
          <div className="flex-1 bg-[#E3DDB0] rounded-full h-1 text-sm"></div>
          <div className="flex-1 bg-[#E3DDB0] rounded-full h-1 text-sm"></div>
        </div>
      </div>

      <div className="hidden md:flex gap-3 items-center">
        <span className="text-gray-600 text-sm text-right">
          Submissions <br /> close in
        </span>
        <div className="flex px-2 py-1 gap-4 bg-[#F6F6F6] rounded-lg">
          <div className="flex flex-col items-center">
            {/* DAYS */}
            <span className="font-bold">{formatTime(days)}</span>
            <span className="text-[#A3A3A3] text-xs">DAY</span>
          </div>
          <div className="flex flex-col items-center">
            {/* HOURS */}
            <span className="font-bold">{formatTime(hours)}</span>
            <span className="text-[#A3A3A3] text-xs">HRS</span>
          </div>
          <div className="flex flex-col items-center">
            {/* MINUTES */}
            <span className="font-bold">{formatTime(minutes)}</span>
            <span className="text-[#A3A3A3] text-xs">MIN</span>
          </div>
          <div className="flex flex-col items-center">
            {/* SECONDS */}
            <span className="font-bold">{formatTime(seconds)}</span>
            <span className="text-[#A3A3A3] text-xs">SEC</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Timeline;
