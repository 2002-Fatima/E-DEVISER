import { defineConfig } from 'astro/config';
import { env } from 'node:process';

export default defineConfig({
  // Set PUBLIC_SITE_URL in the deployment environment to enable canonical URLs.
  site: env.PUBLIC_SITE_URL || 'https://edeviser.vercel.app',
  redirects: {
    '/cuovo/': '/cuevo/',
  },
  server: {
    host: true,
    port: 4321,
  },
});
