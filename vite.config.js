import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/BTLMS": {
        target: "http://121.130.28.118:8080",
        changeOrigin: true,
      },
    },
  },
});
