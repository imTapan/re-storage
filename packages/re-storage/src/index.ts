function createStorage(type: "localStorage" | "sessionStorage") {
  const storage = window[type];

  return function useStorage<T = any>(key: string, defaultValue?: T) {
    const get = (): T => {
      try {
        const item = storage.getItem(key);
        if (item !== null) return JSON.parse(item);
        if (defaultValue !== undefined) {
          storage.setItem(key, JSON.stringify(defaultValue));
          return defaultValue;
        }
        return null as any;
      } catch (e) {
        console.error(`[${type}] Get error`, e);
        return null as any;
      }
    };

    const set = (value: T) => {
      try {
        storage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error(`[${type}] Set error`, e);
      }
    };

    const remove = () => {
      storage.removeItem(key);
    };

    return {
      get,
      set,
      remove,
    };
  };
}

export const useLocalStorage = createStorage("localStorage");
export const useSessionStorage = createStorage("sessionStorage");
