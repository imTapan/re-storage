export declare const useLocalStorage: () => {
    get: <T = any>(key: string) => T | null;
    set: (key: string, value: any) => void;
    remove: (key: string) => void;
    clear: () => void;
};
export declare const useSessionStorage: () => {
    get: <T = any>(key: string) => T | null;
    set: (key: string, value: any) => void;
    remove: (key: string) => void;
    clear: () => void;
};
