import { defineConfig } from 'astro/config';

export default defineConfig({
  site: undefined,
  redirects: {
    '/cuovo/': '/cuevo/',
  },
  server: {
    host: true,
    port: 4321,
  },
});
