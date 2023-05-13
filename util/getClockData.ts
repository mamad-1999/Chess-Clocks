import fs from "fs";
import path from "path";

export const getClockData = () => {
  const clocks = fs.readFileSync(
    path.join(process.cwd(), "data", "clock.json"),
    "utf-8"
  );

  return JSON.parse(clocks);
};
