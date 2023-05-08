import { getLocalStorageItem } from "./storage";

export const clearTime = () => {
  if (getLocalStorageItem("interval") !== null) {
    clearInterval(Number(getLocalStorageItem("interval")));
  }
};
