// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

const site = process.env.SITE_URL || 'https://stefano-blando.github.io';
const base = process.env.BASE_PATH || '/compass-website';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [vue()]
});