import type { APIRoute } from 'astro';

const publicPaths = [
  '/',
  '/what-we-build/',
  '/our-work/',
  '/company/',
  '/company/team/',
  '/company/careers-contact/',
  '/cuevo/',
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://edeviser.vercel.app');
  const entries = publicPaths
    .map((path) => `  <url><loc>${new URL(path, baseUrl).toString()}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
