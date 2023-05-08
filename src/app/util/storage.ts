type LocalStorageValue = string;

export const setLocalStorageItem = (
  key: string,
  value: LocalStorageValue
): void => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = <T extends LocalStorageValue>(
  key: string
): T | null => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value) as T;
  }
  return null;
};
