// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

// Define your supported languages
const supportedLanguages = ['en', 'fr'];
const defaultLanguage = 'en';

export const onRequest = defineMiddleware(({ request, redirect, url }) => {
  const pathname = url.pathname;

  // Skip for API routes, assets, etc.
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/assets/') ||
    pathname.match(/\.(jpg|png|gif|svg|ico|css|js)$/)
  ) {
    return;
  }

  // Check if URL already has a language prefix
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // Check if the first segment is a language code
  const hasLanguagePrefix = supportedLanguages.includes(firstSegment);

  // If there's no language prefix, redirect to the default language
  if (!hasLanguagePrefix && pathname !== '/') {
    return redirect(`/${defaultLanguage}${pathname}`);
  }

  // For the root path, redirect to the default language home page
  if (pathname === '/') {
    return redirect(`/${defaultLanguage}/`);
  }
});
