import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { ArrowPathIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

export function Timer({ minutes = 0, seconds = 0 }) {
  const totalSeconds = minutes * 60 + seconds;

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + totalSeconds);

  const {
    minutes: currentMinutes,
    seconds: currentSeconds,
    isRunning,
    resume,
    pause,
    restart,
  } = useTimer({
    expiryTimestamp,
  });

  useEffect(() => pause(), []);

  function handleRestart() {
    restart(expiryTimestamp);
    pause();
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <span className="text-7xl">
          {currentMinutes.toString().padStart(2, "0")}
        </span>
        <span className="text-7xl">:</span>
        <span className="text-7xl">
          {currentSeconds.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="flex gap-4">
        <button onClick={handleRestart} className="w-16">
          <ArrowPathIcon />
        </button>
        {isRunning ? (
          <button onClick={pause} className="w-16">
            <PauseIcon />
          </button>
        ) : (
          <button onClick={resume} className="w-16">
            <PlayIcon />
          </button>
        )}
      </div>
    </div>
  );
}
