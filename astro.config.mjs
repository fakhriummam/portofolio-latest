// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Change this to your real domain after deploying (used for SEO meta).
  site: 'https://example.com',

  // The portfolio pages stay static (fast, cached). Only the admin panel at
  // /keystatic and its API run on demand, which is why the Vercel adapter is here.
  output: 'static',
  adapter: vercel(),
  integrations: [react(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
    // @keystatic/astro imports Astro's virtual "astro:env/server" module, which
    // Vite's dependency pre-bundler cannot resolve. Without this the /keystatic
    // page stays blank in `npm run dev`.
    optimizeDeps: {
      exclude: ['@keystatic/astro'],
    },
  },
});
