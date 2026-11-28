// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Live address (used for SEO meta and link previews). Change it if you add a custom domain.
  site: 'https://fakhriummam.vercel.app',

  // The portfolio pages stay static (fast, cached). Only the admin panel at
  // /keystatic and its API run on demand, which is why the Vercel adapter is here.
  output: 'static',
  adapter: vercel(),
  integrations: [react(), keystatic()],

  // Trust Vercel's forwarded host header for this domain. Without it the server
  // sees itself as "localhost", so the Keystatic GitHub login sends GitHub a
  // wrong callback URL (https://localhost/...) and the login is refused.
  security: {
    allowedDomains: [{ hostname: 'fakhriummam.vercel.app', protocol: 'https' }],
  },

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
