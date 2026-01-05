import { useEffect, useState } from "react";

const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(THREE_DAYS);

  useEffect(() => {
    const getEndTime = () => {
      const savedEndTime = localStorage.getItem("offerEndTime");

      if (savedEndTime && Number(savedEndTime) > Date.now()) {
        return Number(savedEndTime);
      }

      const newEndTime = Date.now() + THREE_DAYS;
      localStorage.setItem("offerEndTime", newEndTime);
      return newEndTime;
    };

    let endTime = getEndTime();

    const interval = setInterval(() => {
      const diff = endTime - Date.now();

      if (diff <= 0) {
        // Restart timer
        endTime = Date.now() + THREE_DAYS;
        localStorage.setItem("offerEndTime", endTime);
        setTimeLeft(THREE_DAYS);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 6600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex gap-4 bg-black text-white p-4 rounded-lg justify-center">
      <TimeBox label="Days" value={days} />
      <TimeBox label="Hours" value={hours} />
      <TimeBox label="Min" value={minutes} />
      <TimeBox label="Sec" value={seconds} />
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-gray-800 px-4 py-2 rounded">
      <span className="text-2xl font-bold">{String(value).padStart(2, "0")}</span>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}
