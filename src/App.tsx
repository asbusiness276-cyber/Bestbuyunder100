import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { articles, resolveArticleFromPath } from './data/articles';
import { Filter, ArrowUpDown } from 'lucide-react';

export default function App() {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  // Keep article in sync with browser history (back/forward + pushState)
  useEffect(() => {
    const handlePop = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const article = useMemo(() => resolveArticleFromPath(pathname), [pathname]);

  // Per-article SEO: update <title>, meta description, canonical, JSON-LD
  useEffect(() => {
    document.title = article.metaTitle;

    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('name', 'description', article.metaDescription);
    setMeta('property', 'og:title', article.metaTitle);
    setMeta('property', 'og:description', article.metaDescription);
    setMeta('property', 'og:image', article.heroImage);
    setMeta('property', 'og:type', 'article');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', article.metaTitle);
    setMeta('name', 'twitter:description', article.metaDescription);
    setMeta(
      'name',
      'robots',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const canonicalUrl = `https://bestbuyunder100.com/${article.slug}/`;
    canonical.setAttribute('href', canonicalUrl);

    // JSON-LD: ItemList + FAQPage + BreadcrumbList
    const jsonLdScripts = Array.from(
      document.head.querySelectorAll('script[data-bbu100-jsonld]')
    );
    jsonLdScripts.forEach((s) => s.remove());

    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: article.products.slice(0, 10).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.title,
          image: p.image,
          sku: p.asin,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: p.rating,
            reviewCount: 50,
          },
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
        item: `https://bestbuyunder100.com${b.href}`,
      })),
    };

    [itemList, faqPage, breadcrumb].forEach((obj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-bbu100-jsonld', 'true');
      script.text = JSON.stringify(obj);
      document.head.appendChild(script);
    });
  }, [article]);

  // Filter + sort state, scoped to the active article
  const [activeFilter, setActiveFilter] = useState('');
  const [sortBy, setSortBy] = useState<string>(article.defaultSort);

  useEffect(() => {
    setActiveFilter('');
    setSortBy(article.defaultSort);
  }, [article]);

  const filtered = useMemo(() => {
    let list = [...article.products];
    if (activeFilter) {
      list = list.filter((p) => p.highlightFeature === activeFilter);
    }
    list.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      return b.rating - a.rating;
    });
    return list;
  }, [article, activeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <Hero article={article} onFilterChange={setActiveFilter} activeFilter={activeFilter} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Article switcher (visible only when there is more than one article) */}
            {articles.length > 1 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Browse our buying guides
                </div>
                <div className="flex flex-wrap gap-2">
                  {articles.map((a) => {
                    const isActive = a.slug === article.slug;
                    return (
                      <a
                        key={a.slug}
                        href={`/${a.slug}/`}
                        onClick={(e) => {
                          e.preventDefault();
                          const newPath = `/${a.slug}/`;
                          window.history.pushState({}, '', newPath);
                          setPathname(newPath);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full border transition-all ${
                          isActive
                            ? 'bg-emerald-500 text-white border-emerald-500'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                        }`}
                      >
                        {a.category}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Intro text */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.introHeading}</h2>
              {article.introParagraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-gray-600 leading-relaxed ${
                    i < article.introParagraphs.length - 1 ? 'mb-4' : ''
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="mb-8">
              <ComparisonTable
                products={article.products}
                columns={article.comparisonColumns}
                subtitle={article.comparisonSubtitle}
              />
            </div>

            {/* Sort + Filter bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Filter className="w-4 h-4" />
                <span>
                  {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                  {activeFilter ? ` matching "${activeFilter}"` : ''}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  {article.sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Cards */}
            <div className="space-y-4 mb-12">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} rank={i + 1} />
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-16 text-gray-400">
                  <p className="text-lg font-medium">No products match this filter.</p>
                  <button
                    onClick={() => setActiveFilter('')}
                    className="mt-3 text-sm text-emerald-600 hover:underline"
                  >
                    Clear filter
                  </button>
                </div>
              )}
            </div>

            {/* Buying Guide */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{article.buyingGuideHeading}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {article.buyingGuide.map(({ title, body }) => (
                  <div key={title}>
                    <h3 className="font-semibold text-gray-900 mb-1.5">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <FAQ
              faqs={article.faqs}
              subtitle={`Everything you need to know before buying ${article.keyword}`}
            />

            {/* Affiliate Disclosure */}
            <div className="mt-8 bg-slate-50 rounded-xl border border-slate-200 px-5 py-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong className="text-slate-600">Affiliate Disclosure:</strong> BestBuyUnder100.com is a
                participant in the Amazon Services LLC Associates Program, an affiliate advertising program
                designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com. When you click our links and make a purchase, we may earn a small commission at no
                additional cost to you. Our editorial recommendations are independent and are not influenced by
                affiliate relationships.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Quick Picks */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                  Quick Picks
                </h3>
                <ul className="space-y-3">
                  {article.quickPicks.map(({ label, productId }) => {
                    const product = article.products.find((p) => p.id === productId);
                    if (!product) return null;
                    return (
                      <li key={productId}>
                        <a
                          href={product.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center gap-3 group"
                        >
                          <img
                            src={product.image}
                            alt={label}
                            className="w-10 h-10 object-contain rounded bg-gray-50 border border-gray-100"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.onerror = null;
                              target.src =
                                'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=200';
                            }}
                          />
                          <div className="min-w-0">
                            <div className="text-xs text-gray-500">{label}</div>
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors truncate">
                              {product.shortTitle}
                            </div>
                            <div className="text-xs text-emerald-600 font-bold">
                              ${product.price}
                            </div>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Budget Tips Box */}
              <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-5">
                <h3 className="font-bold text-emerald-900 mb-3 text-sm">Budget Shopping Tips</h3>
                <ul className="space-y-2 text-xs text-emerald-800">
                  {article.budgetTips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                  Related Guides
                </h3>
                <ul className="space-y-2">
                  {article.relatedArticles.map((title) => (
                    <li key={title}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-emerald-600 transition-colors leading-tight block"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
