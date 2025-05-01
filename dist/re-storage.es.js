function s(o) {
  const t = window[o];
  return { get: (r) => {
    try {
      const e = t.getItem(r);
      return e ? JSON.parse(e) : null;
    } catch (e) {
      return console.error(`[${o}] Get error`, e), null;
    }
  }, set: (r, e) => {
    try {
      t.setItem(r, JSON.stringify(e));
    } catch (c) {
      console.error(`[${o}] Set error`, c);
    }
  }, remove: (r) => {
    t.removeItem(r);
  }, clear: () => {
    t.clear();
  } };
}
const S = () => s("localStorage"), u = () => s("sessionStorage");
export {
  S as useLocalStorage,
  u as useSessionStorage
};
