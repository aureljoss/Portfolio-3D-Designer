import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "About.html"),
        archVue3d: resolve(__dirname, "ArchVue3D.html"),
        jhu: resolve(__dirname, "JHU.html"),
        ksu: resolve(__dirname, "KSU.html"),
        parametricWaves: resolve(__dirname, "Parametric Waves.html"),
        renderings: resolve(__dirname, "Renderings.html"),
        summerNightWander: resolve(__dirname, "Summer Night Wander.html"),
        vt: resolve(__dirname, "VT.html"),
      },
    },
  },
});
