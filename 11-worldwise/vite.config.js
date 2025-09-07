import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allows connections from 'my-custom-domain.com' and its subdomains
    allowedHosts: true,
    // Or, to allow specific IP addresses:
    // allowedHosts: ['192.168.1.100'],
    // Or, to allow any host (use with caution):
    // allowedHosts: true,
  },
});
