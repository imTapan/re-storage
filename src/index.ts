function createStorage(type: "localStorage" | "sessionStorage") {
  const storage = window[type];

  const get = <T = any>(key: string): T | null => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error(`[${type}] Get error`, e);
      return null;
    }
  };

  const set = (key: string, value: any) => {
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`[${type}] Set error`, e);
    }
  };

  const remove = (key: string) => {
    storage.removeItem(key);
  };

  const clear = () => {
    storage.clear();
  };

  return { get, set, remove, clear };
}

export const useLocalStorage = () => createStorage("localStorage");
export const useSessionStorage = () => createStorage("sessionStorage");
