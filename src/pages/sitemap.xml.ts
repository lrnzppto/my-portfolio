import type { APIRoute } from 'astro';
import { getPublishedProjects } from '../lib/content';

export const GET: APIRoute = async ({ site }) => {
  const base = (site ? site.href : 'https://lorenzpepito.vercel.app/').replace(/\/$/, '');
  const projects = await getPublishedProjects();
  const paths = ['/', '/work/', '/services/', '/about/', '/contact/', '/privacy/', ...projects.map((p) => '/work/' + p.id + '/')];
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map((p) => '  <url><loc>' + base + p + '</loc></url>').join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
