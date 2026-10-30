import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envPrefix: "VITE_",
  optimizeDeps: {
    include: ["face-api.js", "@vladmandic/face-api", "@tensorflow/tfjs"],
  },
});
