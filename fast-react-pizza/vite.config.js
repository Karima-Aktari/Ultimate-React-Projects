import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin:
      "https://5173-karimaaktar-ultimaterea-mo17k0kvuxt.ws-us121.gitpod.io/",
  },
});
