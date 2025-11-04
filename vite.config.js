import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL(".", import.meta.url)));
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || "/FastrackSolutions/",
  };
});
