import type { Lang } from './utils';

type MdModule = {
  Content: any;
  frontmatter: { title: string; description: string; updated: string };
};

const modules = import.meta.glob<MdModule>('../content/guides/*/*.md', { eager: true });

// Same file name in each language folder = same slug, so the FR/EN toggle maps guide to guide.
export function guides(lang: Lang) {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/guides/${lang}/`))
    .map(([path, m]) => ({
      slug: path.split('/').pop()!.replace(/\.md$/, ''),
      title: m.frontmatter.title,
      description: m.frontmatter.description,
      updated: new Date(m.frontmatter.updated),
      Content: m.Content,
    }))
    .sort((a, b) => b.updated.getTime() - a.updated.getTime() || a.title.localeCompare(b.title, lang));
}

export const guideLabels = {
  fr: {
    nav: 'Guides',
    eyebrow: 'Guides',
    title: 'Guides pour *propriétaires*',
    description: 'Des réponses claires aux questions que se posent les propriétaires, les investisseurs et les conseils de copropriété au Québec.',
    seoTitle: 'Guides pour propriétaires | Gestion Proprio Alliance',
    read: 'Lire le guide',
    cta: { title: 'Une question sur *votre immeuble*?', description: 'Écrivez-nous ou appelez-nous. Nous répondons en moins d’un jour ouvrable.', button: 'Nous joindre' },
  },
  en: {
    nav: 'Guides',
    eyebrow: 'Guides',
    title: 'Guides for *owners*',
    description: 'Clear answers to the questions owners, investors and condo boards in Quebec ask most often.',
    seoTitle: 'Guides for Property Owners | Gestion Proprio Alliance',
    read: 'Read the guide',
    cta: { title: 'A question about *your building*?', description: 'Write or call us. We reply within one business day.', button: 'Contact us' },
  },
} satisfies Record<Lang, unknown>;
