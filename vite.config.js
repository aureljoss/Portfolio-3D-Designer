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
//   rollupOptions: {
//     input: {
//         index: "./index.html",
//         about: "./about.html",
//         vt: "./VT.html",
//         ksu: "./KSU.html",
//     },
//   },
});