type LocalStorageValue = string | number | boolean | object;

export const setLocalStorageItem = (
  key: string,
  value: LocalStorageValue
): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = <T extends LocalStorageValue>(
  key: string
): T | null => {
  const value = window.localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
};
