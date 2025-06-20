import React from "react";

export default defineConfig({
  plugins: [React()],
  build: {
    outDir: "dist",
  },
  server: {
    port: 5173,
  },
  base: "/",
});
