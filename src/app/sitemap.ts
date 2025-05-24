
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Replace this with your actual deployed domain name
  const baseUrl = 'https://www.example.com';

  const staticPages = [
    '/',
    '/ai-assistant',
    '/forgot-password',
    '/home',
    '/leagues',
    '/leagues/ayba',
    '/leagues/ayba/fieldstatus',
    '/leagues/ayba/rules',
    '/leagues/nfhs',
    '/leagues/nfhs/highschool',
    '/leagues/nfhs/middleschool',
    '/leagues/oceepark',
    '/leagues/oceepark/fieldstatus',
    '/leagues/oceepark/rules',
    '/leagues/perfectgame',
    '/leagues/traininglegends',
    '/leagues/traininglegends/allstar-rules',
    '/leagues/traininglegends/travel-rules',
    '/login',
    '/schedule',
    '/signup',
    '/toolbox',
    '/toolbox/cointoss',
    '/toolbox/officialroster',
    '/toolbox/officialroster/handbook',
    '/toolbox/officialroster/roster-doc',
    '/toolbox/umpireclassroom',
    '/toolbox/weather',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`, // Ensure base URL isn't duplicated for root
    lastModified: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
    changeFrequency: 'weekly',
    priority: path === '/' ? 1.0 : 0.8,
  }));

  return sitemapEntries;
}
