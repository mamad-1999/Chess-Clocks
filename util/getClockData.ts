import fs from "fs";
import path from "path";
import { ClockType } from "../types/types";

export const getClockData = () => {
  const clocks = fs.readFileSync(
    path.join(process.cwd(), "data", "clock.json"),
    "utf-8"
  );

  const allClocks: ClockType[] = JSON.parse(clocks);

  return allClocks;
};
