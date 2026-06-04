import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// Get the site URL from environment variable or use a default for local development
const site = process.env.PUBLIC_SITE_URL || 'https://proprioalliance.ca';

export default defineConfig({
    site,
    // NOTE: we intentionally do NOT use Astro's built-in `i18n` config. It reserves
    // locale routing and forbids a `[lang]` dynamic route, which would force a
    // duplicated page file per locale. Instead we localize via a single `[lang]`
    // route + helpers in src/i18n/. Sitemap hreflang is configured below and works
    // independently. hreflang <link> tags are emitted in Layout.astro.
    vite: {
        plugins: [tailwindcss()],
        css: {
            preprocessorOptions: {
                css: {
                    additionalData: `@import "aos/dist/aos.css";`
                }
            }
        },
        optimizeDeps: {
            include: ['aos']
        }
    },
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true,
            langs: [],
            transformers: [],
            showLineNumbers: false,
            lineNumbersPrefix: ''
        }
    },
    integrations: [
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
            filter: (page) => !page.includes('/404'), // Only exclude 404 page
            entryLimit: 10000, // Increase entry limit if you have many pages
            i18n: {
                defaultLocale: 'fr',
                locales: { fr: 'fr-CA', en: 'en-CA' }, // emits hreflang alternates
            },
        }),
    ],
    image: {
        // Allow all remote patterns (https and http)
        remotePatterns: [
            {
                protocol: "https"
            },
            {
                protocol: "http"
            }
        ]
    }
});
