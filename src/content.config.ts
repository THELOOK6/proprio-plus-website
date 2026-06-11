import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories } from '@data/categories';
// import { propertyCategoryNames } from '../data/propertyCategories';

// Extract category names for the enum
const categoryNames = categories.map((category) => category.name);

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            excerpt: z.string(),
            featuredImage: image().optional(),
            publishDate: z.string().transform((str) => new Date(str)),
            publish: z.boolean().optional(),
            categories: z.array(z.enum(categoryNames as [string, ...string[]])),
            seo: z
                .object({
                    title: z.string().optional(),
                    description: z.string().optional(),
                    image: z.string().optional(),
                })
                .optional(),
        }),
});

const team = defineCollection({
    loader: glob({ base: './src/content/team', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            headshot: image().optional(),
            jobTitle: z.string(),
            email: z.string().optional(),
            linkedin: z.string().url().optional(),
            linkedinUsername: z.string().optional(),
            xSocial: z.string().url().optional(),
            xSocialUsername: z.string().optional(),
            github: z.string().url().optional(),
            githubUsername: z.string().optional(),
            order: z.number().default(999),
            publish: z.boolean().default(true),
        }),
});

const legal = defineCollection({
    loader: glob({ base: './src/content/legal', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        lastUpdated: z.string().transform((str) => new Date(str)),
        seo: z
            .object({
                title: z.string().optional(),
                description: z.string().optional(),
            })
            .optional(),
    }),
});

const properties = defineCollection({
    loader: glob({ base: './src/content/properties', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
        title: z.string(),
        index: z.number(),
        rent: z.number(),
        sqft: z.number(),
        address: z.string(),
        propertyId: z.string(),
        bedrooms: z.number(),
        bathrooms: z.number(),
        rooms: z.number(),
        yearBuilt: z.number(),
        categories: z.array(z.enum(categoryNames as [string, ...string[]])).optional(),
        images: z.array(image()).optional(),
        // The slug is automatically generated from the filename
        agent: z
        .object({
            name: z.string().optional(),
            company: z.string().optional(),
            phone: z.string().optional(),
            image: image().optional(),
        })
        .optional(),
        seo: z
            .object({
                title: z.string().optional(),
                description: z.string().optional(),
            })
            .optional(),
    }),
});

// const properties = defineCollection({
//     type: 'content',
//     schema: z.object({
//       title: z.string(),
//       rent: z.number(),
//       sqft: z.number(),
//       address: z.string(),
//       propertyId: z.string(),
//       bedrooms: z.number(),
//       bathrooms: z.number(),
//       rooms: z.number(),
//       yearBuilt: z.number(),
//       categories: z.array(z.enum(propertyCategoryNames as [string, ...string[]])).optional(),
//       images: z.array(z.string()),
//       agent: z
//         .object({
//           name: z.string().optional(),
//           company: z.string().optional(),
//           phone: z.string().optional(),
//           image: z.string().optional(),
//         })
//         .optional(),
//       seo: z
//         .object({
//           title: z.string().optional(),
//           description: z.string().optional(),
//         })
//         .optional(),
//     }),
//   });

// Localized page content, edited via Decap CMS. One entry per locale, e.g.
// src/content/pages/fr/home.json and src/content/pages/en/home.json.
// Section fields are optional so the same collection can describe every page.
const pages = defineCollection({
    loader: glob({ base: './src/content/pages', pattern: '**/*.json' }),
    schema: z.object({
        title: z.string().optional(), // CMS identifier label only
        seo: z.object({
            title: z.string(),
            description: z.string(),
        }),
        hero: z
            .object({
                title: z.string(),
                description: z.string().optional(),
                buttons: z
                    .array(
                        z.object({
                            text: z.string(),
                            link: z.string(),
                            target: z.string().optional(),
                        })
                    )
                    .optional(),
            })
            .optional(),
        features: z
            .object({
                eyebrow: z.string().optional(),
                title: z.string().optional(),
                description: z.string().optional(),
                buttonText: z.string().optional(),
                buttonLink: z.string().optional(),
                items: z.array(
                    z.object({
                        icon: z.string(),
                        title: z.string(),
                        description: z.string(),
                    })
                ),
            })
            .optional(),
        splitPanel: z
            .object({
                eyebrow: z.string().optional(),
                headline: z.string(),
                description: z.string(),
                buttonText: z.string().optional(),
                buttonLink: z.string().optional(),
            })
            .optional(),
        occupancy: z
            .object({
                eyebrow: z.string().optional(),
                headline: z.string(),
                description: z.string(),
                statValue: z.number(),
                statLabel: z.string(),
                unitLabel: z.string(),
            })
            .optional(),
        faqs: z
            .object({
                eyebrow: z.string().optional(),
                title: z.string().optional(),
                description: z.string().optional(),
                items: z.array(z.object({ question: z.string(), answer: z.string() })),
            })
            .optional(),
        footerCta: z
            .object({
                eyebrow: z.string().optional(),
                title: z.string(),
                description: z.string(),
                buttonText: z.string(),
                buttonLink: z.string(),
            })
            .optional(),
        // About page sections
        intro: z
            .object({
                eyebrow: z.string().optional(),
                headline: z.string(),
                paragraphs: z.array(z.string()),
            })
            .optional(),
        whatWeDo: z
            .object({
                eyebrow: z.string().optional(),
                headline: z.string(),
                description: z.string(),
            })
            .optional(),
        vision: z
            .object({
                title: z.string(),
                items: z.array(
                    z.object({ icon: z.string(), title: z.string(), description: z.string() })
                ),
            })
            .optional(),
        more: z
            .object({
                eyebrow: z.string().optional(),
                headline: z.string(),
                description: z.string(), // may contain HTML, rendered with set:html
            })
            .optional(),
        // Services page section
        servicesSection: z
            .object({
                eyebrow: z.string().optional(),
                title: z.string(),
                description: z.string(),
                items: z.array(
                    z.object({ icon: z.string(), title: z.string(), description: z.string() })
                ),
            })
            .optional(),
    }),
});

// Shared UI strings (nav, footer, labels), edited via Decap CMS.
const ui = defineCollection({
    loader: glob({ base: './src/content/ui', pattern: '**/*.json' }),
    schema: z.object({
        title: z.string().optional(), // CMS identifier label only
        nav: z.object({
            home: z.string(),
            about: z.string(),
            services: z.string(),
            contact: z.string(),
        }),
        buttons: z.object({ contact: z.string() }).partial().optional(),
        footer: z.object({
            tagline: z.string(),
            quickLinks: z.string(),
            rights: z.string(),
        }),
        legal: z.object({ privacy: z.string(), terms: z.string() }),
        form: z.object({
            name: z.string(),
            email: z.string(),
            phone: z.string(),
            company: z.string(),
            message: z.string(),
            terms: z.string(),
            submit: z.string(),
        }),
        contact: z.object({
            getInTouch: z.string(),
            email: z.string(),
            phone: z.string(),
            address: z.string(),
        }),
        language: z.object({ label: z.string(), fr: z.string(), en: z.string() }),
        notFound: z.object({ title: z.string(), message: z.string(), back: z.string() }),
        lastUpdated: z.string(),
    }),
});

export const collections = { blog, team, legal, properties, pages, ui };
