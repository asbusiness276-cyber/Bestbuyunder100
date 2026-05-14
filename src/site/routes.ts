import type { Article } from '../data/articles';
import { resolveArticleFromPath } from '../data/articles';

export const staticPageSlugs = [
  'contact',
  'write-for-us',
  'privacy-policy',
  'terms-and-conditions',
  'affiliate-disclosure',
  'about',
] as const;

export type StaticPageSlug = (typeof staticPageSlugs)[number];

export type AppRoute =
  | { type: 'home' }
  | { type: 'article'; article: Article }
  | { type: 'static'; slug: StaticPageSlug };

const staticSet = new Set<string>(staticPageSlugs);

export function matchRoute(pathname: string): AppRoute {
  const cleaned = pathname.replace(/^\/+|\/+$/g, '');
  if (!cleaned) {
    return { type: 'home' };
  }
  if (staticSet.has(cleaned)) {
    return { type: 'static', slug: cleaned as StaticPageSlug };
  }
  const article = resolveArticleFromPath(pathname);
  if (article) {
    return { type: 'article', article };
  }
  return { type: 'home' };
}
