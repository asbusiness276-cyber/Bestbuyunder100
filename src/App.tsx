import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import WriteForUsPage from './pages/WriteForUsPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import AffiliateDisclosurePage from './pages/AffiliateDisclosurePage';
import { articleSlugRedirects } from './data/articles';
import { siteAuthor, sitePublisher } from './data/author';
import { matchRoute, type AppRoute } from './site/routes';

const SITE = 'https://bestbuyunder100.com';
const ARTICLE_DATE_PUBLISHED = '2026-05-01';
const ARTICLE_DATE_MODIFIED = '2026-05-15';

function stripSlashes(path: string) {
  return path.replace(/^\/+|\/+$/g, '');
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function injectJsonLd(objects: object[]) {
  objects.forEach((obj) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-bbu100-jsonld', 'true');
    script.text = JSON.stringify(obj);
    document.head.appendChild(script);
  });
}

function clearJsonLd() {
  document.head.querySelectorAll('script[data-bbu100-jsonld]').forEach((s) => s.remove());
}

export default function App() {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePop = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  useEffect(() => {
    const cleaned = stripSlashes(pathname);
    const target = articleSlugRedirects[cleaned];
    if (target) {
      const next = `/${target}/`;
      window.history.replaceState({}, '', next);
      setPathname(next);
    }
  }, [pathname]);

  const route = useMemo<AppRoute>(() => matchRoute(pathname), [pathname]);

  useEffect(() => {
    setMeta(
      'name',
      'robots',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    clearJsonLd();

    if (route.type === 'article') {
      const { article } = route;
      const pageUrl = `${SITE}/${article.slug}/`;

      document.title = article.metaTitle;
      setMeta('name', 'description', article.metaDescription);
      setMeta('property', 'og:title', article.metaTitle);
      setMeta('property', 'og:description', article.metaDescription);
      setMeta('property', 'og:image', article.heroImage);
      setMeta('property', 'og:url', pageUrl);
      setMeta('property', 'og:type', 'article');
      setMeta('property', 'article:author', siteAuthor.name);
      setMeta('name', 'twitter:card', 'summary_large_image');
      setMeta('name', 'twitter:title', article.metaTitle);
      setMeta('name', 'twitter:description', article.metaDescription);
      canonical.setAttribute('href', pageUrl);

      const personSchema = {
        '@type': 'Person',
        name: siteAuthor.name,
        url: siteAuthor.linkedin,
        sameAs: [siteAuthor.linkedin, siteAuthor.instagram],
      };

      const itemList = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: article.introHeading,
        itemListElement: article.products.slice(0, 10).map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            name: p.title,
            description: p.shortTitle,
            image: p.image,
            ...(p.asin ? { sku: p.asin } : {}),
            offers: {
              '@type': 'Offer',
              price: p.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: p.affiliateUrl,
            },
          },
        })),
      };

      const articleSchema = {
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
      };

      const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      };

      const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: article.breadcrumb.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.label,
          item: b.href.startsWith('http') ? b.href : `${SITE}${b.href}`,
        })),
      };

      injectJsonLd([articleSchema, itemList, faqPage, breadcrumb]);
      return;
    }

    if (route.type === 'home') {
      document.title = 'BestBuyUnder100 — Best Affordable Products & Buying Guides';
      const desc =
        'Honest buying guides by Navjeet Kamboj for affordable products — twin mattresses under $100, queen box springs, sim racing cockpits, window ACs, and electric bikes.';
      setMeta('name', 'description', desc);
      setMeta('property', 'og:title', document.title);
      setMeta('property', 'og:description', desc);
      setMeta('property', 'og:image', 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg');
      setMeta('property', 'og:url', `${SITE}/`);
      setMeta('property', 'og:type', 'website');
      setMeta('name', 'twitter:card', 'summary_large_image');
      setMeta('name', 'twitter:title', document.title);
      setMeta('name', 'twitter:description', desc);
      canonical.setAttribute('href', `${SITE}/`);

      injectJsonLd([
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: sitePublisher.name,
          url: sitePublisher.url,
          description: desc,
          publisher: {
            '@type': 'Organization',
            name: sitePublisher.name,
            url: sitePublisher.url,
          },
        },
      ]);
      return;
    }

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

    const m = staticMeta[route.slug];
    document.title = m.title;
    setMeta('name', 'description', m.description);
    setMeta('property', 'og:title', m.title);
    setMeta('property', 'og:description', m.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', `${SITE}/${route.slug}/`);
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', m.title);
    setMeta('name', 'twitter:description', m.description);
    canonical.setAttribute('href', `${SITE}/${route.slug}/`);
  }, [route]);

  const headerMode = route.type === 'article' ? 'transparent' : 'solid';

  return (
    <div className="min-h-screen bg-slate-50">
      <Header mode={headerMode} />

      {route.type === 'home' && <HomePage />}

      {route.type === 'article' && <ArticlePage article={route.article} />}

      {route.type === 'static' && route.slug === 'contact' && <ContactPage />}
      {route.type === 'static' && route.slug === 'write-for-us' && <WriteForUsPage />}
      {route.type === 'static' && route.slug === 'about' && <AboutPage />}
      {route.type === 'static' && route.slug === 'privacy-policy' && <PrivacyPolicyPage />}
      {route.type === 'static' && route.slug === 'terms-and-conditions' && <TermsPage />}
      {route.type === 'static' && route.slug === 'affiliate-disclosure' && <AffiliateDisclosurePage />}

      <Footer />
    </div>
  );
}
