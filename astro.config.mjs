import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://devene.io',
  output: 'static',
  integrations: [sitemap()],
});
