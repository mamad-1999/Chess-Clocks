export function formatTime(time: number) {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(3);
  return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
}

export function formatMinute(time: number) {
  const minute = Math.floor(time / 60000);

  return minute;
}

export function formatSecond(time: number) {
  const second = ((time % 60000) / 1000).toFixed(3);

  return second;
}
