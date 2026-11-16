import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://proprioalliance.ca';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  // Locale routing is done with a single `src/pages/[lang]` route + helpers in src/i18n.
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci') && !page.includes('/thanks') && !page.includes('/404'),
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-CA', en: 'en-CA' } },
    }),
  ],
});
