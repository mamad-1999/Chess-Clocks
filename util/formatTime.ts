export function formatTime(time: number) {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(2);
  return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
}
export function formatMinute(time: number) {
  const minute = Math.floor(time / 60000)
    .toString()
    .padStart(2, "0");

  return minute;
}

export function formatSecond(time: number) {
  const second = Math.floor(+((time % 60000) / 1000))
    .toString()
    .padStart(2, "0");

  return second;
}

export function getMillisecondValue(minute: number, second: number): number {
  const totalSeconds = minute * 60 + second;
  const millisecondValue = totalSeconds * 1000;
  return millisecondValue;
}
