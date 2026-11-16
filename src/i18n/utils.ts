import fr from '../content/fr';
import en from '../content/en';
import type { Content } from '../content/fr';

export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';
export const locales = Object.keys(languages) as Lang[];

const dictionaries: Record<Lang, Content> = { fr, en };
export const getContent = (lang: Lang): Content => dictionaries[lang];

export const isLang = (v: string | undefined): v is Lang => !!v && v in languages;

/** '/about' + 'fr' -> '/fr/about'; '/' + 'en' -> '/en/' */
export function localizedPath(path: string, lang: Lang): string {
  let p = path.startsWith('/') ? path : `/${path}`;
  p = p.replace(/^\/(fr|en)(?=\/|$)/, '');
  if (p === '' || p === '/') return `/${lang}/`;
  return `/${lang}${p}`;
}

/** Same page in another locale (used by the language toggle + hreflang). */
export function alternatePath(pathname: string, lang: Lang): string {
  const parts = pathname.split('/');
  if (isLang(parts[1])) {
    parts[1] = lang;
    const joined = parts.join('/');
    return joined === `/${lang}` ? `/${lang}/` : joined;
  }
  return localizedPath(pathname, lang);
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Turns *word* into <em>word</em> (content is trusted, first-party strings only). */
export const rich = (s: string) => escapeHtml(s).replace(/\*(.+?)\*/g, '<em>$1</em>');
/** Same string without markup, for <title>/aria text. */
export const plain = (s: string) => s.replace(/\*/g, '');
