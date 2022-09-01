export function TimerOption({
  minutes = 0,
  seconds = 0,
  label,
  setSelectedMinutes,
  setSelectedSeconds,
}) {
  function handleClick() {
    setSelectedMinutes(minutes);
    setSelectedSeconds(seconds);
  }

  return (
    <div
      className="border rounded p-4 border-slate-500 w-full"
      onClick={handleClick}
    >
      {label && <p className="text-base">{label}</p>}
      <span className="text-3xl">{minutes.toString().padStart(2, "0")}</span>
      <span className="text-3xl">:</span>
      <span className="text-3xl">{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
}
