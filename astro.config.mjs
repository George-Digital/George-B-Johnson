import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://georgebjohnson.com",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
