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
      <div className="flex flex-col gap-1">
        <p className="text-sm">Call for Films</p>
        <p className="text-xs text-gray-600">Submit for your school</p>
      </div>
      <div className="flex flex-col flex-1 gap-2 text-sm">
        <div className="flex">
          <p className="flex flex-1 ">Submissions</p>
          <p className="flex flex-1 justify-center text-gray-400">Processing</p>
          <p className="flex flex-1 justify-center text-gray-400">Lineup Drop</p>
          <p className="flex flex-1 justify-end text-gray-400">Showtime</p>
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
      <div className="flex gap-3 items-center">
        <p className="text-gray-600 text-sm text-right">
          Submissions <br /> close in
        </p>
        <div className="flex px-2 py-1 gap-4 bg-[#F6F6F6] rounded-lg">
          <div className="flex flex-col items-center">
            {/* DAYS */}
            <p className="font-bold">{formatTime(days)}</p>
            <p className="text-[#A3A3A3] text-xs">DAY</p>
          </div>
          <div className="flex flex-col items-center">
            {/* HOURS */}
            <p className="font-bold">{formatTime(hours)}</p>
            <p className="text-[#A3A3A3] text-xs">HRS</p>
          </div>
          <div className="flex flex-col items-center">
            {/* MINUTES */}
            <p className="font-bold">{formatTime(minutes)}</p>
            <p className="text-[#A3A3A3] text-xs">MIN</p>
          </div>
          <div className="flex flex-col items-center">
            {/* SECONDS */}
            <p className="font-bold">{formatTime(seconds)}</p>
            <p className="text-[#A3A3A3] text-xs">SEC</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Timeline;
