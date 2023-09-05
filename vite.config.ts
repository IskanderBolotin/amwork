import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    react(),
    svgr({ 
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
