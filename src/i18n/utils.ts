// Central i18n helpers. French is the default locale; English is the translation.
// Every URL is locale-prefixed (/fr/... or /en/...).

export const languages = {
    fr: 'Français',
    en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';
export const locales = Object.keys(languages) as Lang[];

export function isLang(value: string): value is Lang {
    return value in languages;
}

/** Read the active locale from the first path segment, falling back to default. */
export function getLangFromUrl(url: URL): Lang {
    const seg = url.pathname.split('/')[1] ?? '';
    return isLang(seg) ? seg : defaultLang;
}

export const otherLang = (lang: Lang): Lang => (lang === 'fr' ? 'en' : 'fr');

/**
 * Prefix an internal path with the given locale.
 * localizedPath('/about', 'fr') -> '/fr/about'
 * localizedPath('/', 'en')      -> '/en/'
 * Already-prefixed paths are normalized to the requested locale.
 */
export function localizedPath(path: string, lang: Lang): string {
    let p = path.startsWith('/') ? path : `/${path}`;
    p = p.replace(/^\/(fr|en)(?=\/|$)/, ''); // strip any existing locale prefix
    if (p === '' || p === '/') return `/${lang}/`;
    return `/${lang}${p}`;
}

/** The current page's URL in the other locale (used by the navbar toggle). */
export function getAlternatePath(url: URL, lang: Lang): string {
    const parts = url.pathname.split('/');
    if (isLang(parts[1])) {
        parts[1] = lang;
        const joined = parts.join('/');
        return joined === `/${lang}` ? `/${lang}/` : joined;
    }
    return localizedPath(url.pathname, lang);
}
