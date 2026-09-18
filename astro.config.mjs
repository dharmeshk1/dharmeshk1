import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dharmeshk1.github.io/dharmeshk1',
  base: '/dharmeshk1/',
  integrations: [sitemap()]
});