// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Change this to your real domain after deploying (used for SEO meta).
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
