import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

const pages = {
  resume: resolve(__dirname, "src/pages/resume.html"),
};

export default {
  root: "src",
  build: {
    outDir: "../.",
    rollupOptions: {
      input: pages,
    },
  },
};
