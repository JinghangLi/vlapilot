// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
//
// Deployed to GitHub Pages at https://JinghangLi.github.io/vlapilot/.
// `base` is automatically prepended to internal links rendered by Astro.
// For static assets in `public/`, prefix paths with import.meta.env.BASE_URL
// (see src/lib/asset.ts).
export default defineConfig({
  site: "https://JinghangLi.github.io",
  base: "/vlapilot/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
