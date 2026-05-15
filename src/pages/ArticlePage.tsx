import { useEffect, useMemo, useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ComparisonTable from '../components/ComparisonTable';
import FAQ from '../components/FAQ';
import AuthorBio from '../components/AuthorBio';
import { AFFILIATE_REL } from '../constants/affiliate';
import { articles, type Article } from '../data/articles';
import { Filter, ArrowUpDown } from 'lucide-react';

interface ArticlePageProps {
  article: Article;
}

export default function ArticlePage({ article }: ArticlePageProps) {
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
    <>
      <Hero article={article} onFilterChange={setActiveFilter} activeFilter={activeFilter} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
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
                        className={`text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full border transition-all ${
                          isActive
                            ? 'bg-emerald-500 text-white border-emerald-500'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                        }`}
                      >
                        {a.navLabel}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

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

            <AuthorBio />

            <div className="mb-8">
              <ComparisonTable
                products={article.products}
                columns={article.comparisonColumns}
                subtitle={article.comparisonSubtitle}
              />
            </div>

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

            <div className="space-y-4 mb-12">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} rank={i + 1} />
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-16 text-gray-400">
                  <p className="text-lg font-medium">No products match this filter.</p>
                  <button
                    type="button"
                    onClick={() => setActiveFilter('')}
                    className="mt-3 text-sm text-emerald-600 hover:underline"
                  >
                    Clear filter
                  </button>
                </div>
              )}
            </div>

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

            <FAQ
              faqs={article.faqs}
              subtitle={`Everything you need to know before buying ${article.keyword}`}
            />

            <div className="mt-8 bg-slate-50 rounded-xl border border-slate-200 px-5 py-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong className="text-slate-600">Affiliate Disclosure:</strong> BestBuyUnder100.com is a participant in the
                Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for
                sites to earn advertising fees by advertising and linking to Amazon.com. When you click our links and make a
                purchase, we may earn a small commission at no additional cost to you. Our editorial recommendations are
                independent and are not influenced by affiliate relationships.
              </p>
            </div>
          </div>

          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Quick Picks</h3>
                <ul className="space-y-3">
                  {article.quickPicks.map(({ label, productId }) => {
                    const product = article.products.find((p) => p.id === productId);
                    if (!product) return null;
                    return (
                      <li key={productId}>
                        <a
                          href={product.affiliateUrl}
                          target="_blank"
                          rel={AFFILIATE_REL}
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
                            <div className="text-xs text-emerald-600 font-bold">${product.price}</div>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

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

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Related Guides</h3>
                <ul className="space-y-2">
                  {article.relatedArticles.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-emerald-600 transition-colors leading-tight block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
