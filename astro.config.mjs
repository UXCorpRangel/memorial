import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), icon({
    iconDir: 'src/icons'
  }
  )],
  output: "server",
  adapter: cloudflare(),
  /* experimental: {
    serverIslands: true,
  }, */
});