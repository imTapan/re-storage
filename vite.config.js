// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false, // ✅ This is essential!
    lib: {
      entry: "src/index.ts",
      name: "ReStorage",
      fileName: (format) => `re-storage.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
