/** Public routes for sitemap + prerender (keep in sync with src/data/articles.ts). */
export const SITE = 'https://bestbuyunder100.com';

export const ARTICLE_SLUGS = [
  'sim-racing-cockpit-under-100',
  'queen-box-spring-under-100',
  'twin-mattress-under-100',
  'electric-bikes-under-200-for-adults',
  '14k-gold-rings-under-100-for-her',
  'portable-ac-units-under-100',
  'cheap-window-air-conditioners-under-200',
];

export const STATIC_SLUGS = [
  'about',
  'contact',
  'write-for-us',
  'privacy-policy',
  'terms-and-conditions',
  'affiliate-disclosure',
];

export const PRERENDER_ROUTES = [
  '/',
  ...ARTICLE_SLUGS.map((s) => `/${s}/`),
  ...STATIC_SLUGS.map((s) => `/${s}/`),
];

export const GUIDE_LABELS = {
  'sim-racing-cockpit-under-100': 'Best sim racing cockpit under $100',
  'queen-box-spring-under-100': 'Best queen box spring under $100',
  'twin-mattress-under-100': 'Best twin mattress under $100',
  'electric-bikes-under-200-for-adults': 'Best electric bikes under $200 for adults',
  '14k-gold-rings-under-100-for-her': 'Best 14K gold rings under $100 for her',
  'portable-ac-units-under-100': 'Best portable AC units under $100',
  'cheap-window-air-conditioners-under-200': 'Best cheap window air conditioners under $200',
};
