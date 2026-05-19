import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { articles } from '../src/data/articles';
import { siteAuthor, sitePublisher } from '../src/data/author';
import { staticPageSlugs } from '../src/site/routes';

const SITE = 'https://bestbuyunder100.com';
const ARTICLE_DATE_PUBLISHED = '2026-05-01';
const ARTICLE_DATE_MODIFIED = '2026-05-15';

const staticMeta: Record<string, { title: string; description: string }> = {
  contact: {
    title: 'Contact us — BestBuyUnder100',
    description: 'Contact BestBuyUnder100 editorial at bestbuyunder100@gmail.com.',
  },
  'write-for-us': {
    title: 'Write for us — BestBuyUnder100',
    description: 'Contributor guidelines for BestBuyUnder100 guest posts and pitches.',
  },
  about: {
    title: 'About us — BestBuyUnder100',
    description: 'How BestBuyUnder100 researches and publishes budget buying guides.',
  },
  'privacy-policy': {
    title: 'Privacy policy — BestBuyUnder100',
    description: 'Privacy policy for BestBuyUnder100.com visitors and email contacts.',
  },
  'terms-and-conditions': {
    title: 'Terms & conditions — BestBuyUnder100',
    description: 'Terms and conditions for using BestBuyUnder100.com.',
  },
  'affiliate-disclosure': {
    title: 'Affiliate disclosure — BestBuyUnder100',
    description: 'FTC affiliate disclosure for BestBuyUnder100.com.',
  },
};

export type SeoPageExport = {
  route: string;
  type: 'home' | 'article' | 'static';
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  h1: string;
  introHeading?: string;
  introParagraphs?: string[];
  products?: { title: string; price: number; url: string }[];
  faqs?: { q: string; a: string }[];
  jsonLd?: object[];
};

const homeDesc =
  'Honest buying guides by Navjeet Kamboj for affordable products — sideplate locks, gold rings, twin mattresses, queen box springs, sim racing cockpits, portable AC units, window ACs, and electric bikes.';

const homePage: SeoPageExport = {
  route: '/',
  type: 'home',
  title: 'BestBuyUnder100 — Best Affordable Products & Buying Guides',
  description: homeDesc,
  canonical: `${SITE}/`,
  ogImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  ogType: 'website',
  h1: 'Best affordable products — researched, compared, and priced honestly',
  introParagraphs: [
    'Budget buying guides with comparison tables, pros and cons, and FAQs.',
    `Written by ${siteAuthor.name}.`,
  ],
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: sitePublisher.name,
      url: sitePublisher.url,
      description: homeDesc,
    },
  ],
};

const articlePages: SeoPageExport[] = articles.map((article) => {
  const pageUrl = `${SITE}/${article.slug}/`;
  const personSchema = {
    '@type': 'Person',
    name: siteAuthor.name,
    url: siteAuthor.linkedin,
    sameAs: [siteAuthor.linkedin, siteAuthor.instagram],
  };

  return {
    route: `/${article.slug}/`,
    type: 'article',
    title: article.metaTitle,
    description: article.metaDescription,
    canonical: pageUrl,
    ogImage: article.heroImage,
    ogType: 'article',
    h1: `${article.heroTitleLine1} ${article.heroTitleLine2}`.trim(),
    introHeading: article.introHeading,
    introParagraphs: article.introParagraphs,
    products: article.products.map((p) => ({
      title: p.shortTitle,
      price: p.price,
      url: p.affiliateUrl,
    })),
    faqs: article.faqs,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.introHeading,
        description: article.metaDescription,
        image: article.heroImage,
        author: personSchema,
        publisher: {
          '@type': 'Organization',
          name: sitePublisher.name,
          url: sitePublisher.url,
        },
        datePublished: ARTICLE_DATE_PUBLISHED,
        dateModified: ARTICLE_DATE_MODIFIED,
        mainEntityOfPage: pageUrl,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: article.breadcrumb.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.label,
          item: b.href.startsWith('http') ? b.href : `${SITE}${b.href}`,
        })),
      },
    ],
  };
});

const staticPages: SeoPageExport[] = staticPageSlugs.map((slug) => {
  const m = staticMeta[slug];
  return {
    route: `/${slug}/`,
    type: 'static',
    title: m.title,
    description: m.description,
    canonical: `${SITE}/${slug}/`,
    ogImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    ogType: 'website',
    h1: m.title.replace(' — BestBuyUnder100', ''),
    introParagraphs: [m.description],
  };
});

const allPages = [homePage, ...articlePages, ...staticPages];
const outPath = join(dirname(fileURLToPath(import.meta.url)), '.seo-pages.json');
writeFileSync(outPath, JSON.stringify(allPages, null, 2), 'utf8');
console.log(`Exported ${allPages.length} SEO pages to ${outPath}`);
