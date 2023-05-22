export function formatTime(time: number) {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(3);
  return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
}

export function formatMinute(time: number): number {
  const minute = Math.floor(time / 60000);

  return minute;
}

export function formatSecond(time: number): number {
  const second = +((time % 60000) / 1000).toFixed(2);

  return second;
}

export function getMillisecondValue(minute: number, second: number): number {
  const totalSeconds = minute * 60 + second;
  const millisecondValue = totalSeconds * 1000;
  return millisecondValue;
}
