import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ganti "osis-website" sesuai dengan nama repo GitHub
export default defineConfig({
  plugins: [react()],
  base: "/osis-website/", 
});