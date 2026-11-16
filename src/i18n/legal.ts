import type { Lang } from './utils';

type MdModule = {
  Content: any;
  frontmatter: { title: string; lastUpdated: string; seo?: { title?: string; description?: string } };
};

const modules = import.meta.glob<MdModule>('../content/legal/*/*.md', { eager: true });

export function legalPages(lang: Lang) {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/legal/${lang}/`))
    .map(([path, m]) => ({
      slug: path.split('/').pop()!.replace(/\.md$/, ''),
      title: m.frontmatter.title,
      updated: new Date(m.frontmatter.lastUpdated),
      seoTitle: m.frontmatter.seo?.title ?? m.frontmatter.title,
      seoDescription: m.frontmatter.seo?.description ?? '',
      Content: m.Content,
    }))
    .sort((a, b) => a.title.localeCompare(b.title, lang));
}
