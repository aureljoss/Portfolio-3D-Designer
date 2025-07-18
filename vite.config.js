import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
  rollupOptions: {
    input: {
      index: "index.html",
      about: "/About.html",
      vt: "/VT.html",
      ksu: '/KSU.html',
      jhu: "/JHU.html",
      renderings: "/Renderings.html",
    },
  },
  // rollupOptions: {
  //   output: {
  //     entryFileNames: `assets/[name].js`,
  //     chunkFileNames: `assets/[name].js`,
  //     assetFileNames: `assets/[name].[ext]`},
  //   },
});