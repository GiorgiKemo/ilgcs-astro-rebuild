import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.ASTRO_SITE ?? "https://ilgcs.com",
  base: process.env.ASTRO_BASE ?? "/",
  integrations: [sitemap()]
});
