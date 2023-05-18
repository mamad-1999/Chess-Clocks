import fs from "fs";
import path from "path";
import { ClockType } from "../types/types";

const clockDataPath = path.join(process.cwd(), "data", "clock.json");

export const getClockData = () => {
  const clocks = fs.readFileSync(clockDataPath, "utf-8");
  return JSON.parse(clocks) as ClockType[];
};
