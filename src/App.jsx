import { useState } from "react";
import { Timer, TimerOption } from "./components";

const timerOptions = [
  { label: "Warmup 1 and 2", minutes: 0, seconds: 50 },
  { label: "Warmup 3", minutes: 2, seconds: 0 },
  { label: "Press", minutes: 2, seconds: 45 },
  { label: "Squat", minutes: 3, seconds: 0 },
  { label: "Chest-Supported Row", minutes: 2, seconds: 0 },
  { label: "Lateral Raise", minutes: 0, seconds: 50 },
  { label: "Single-Leg Calf Raise", minutes: 1, seconds: 15 },
  { label: "Dumbbell Press", minutes: 2, seconds: 45 },
  { label: "Deadlift", minutes: 3, seconds: 0 },
  { label: "Overhead Press & Lateral Pulldown", minutes: 2, seconds: 45 },
  { label: "Face Pull", minutes: 1, seconds: 45 },
];

function App() {
  const [selectedMinutes, setSelectedMinutes] = useState(5);
  const [selectedSeconds, setSelectedSeconds] = useState(0);

  return (
    <div className="items-center flex flex-col w-screen min-h-screen">
      <div className="sticky bg-white w-full p-8 shadow-lg top-0">
        <Timer minutes={selectedMinutes} seconds={selectedSeconds} />
      </div>
      <div className="flex flex-col gap-3 w-full bg-red p-4">
        {timerOptions.map((options, key) => (
          <TimerOption
            {...options}
            {...{ key, setSelectedMinutes, setSelectedSeconds }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
