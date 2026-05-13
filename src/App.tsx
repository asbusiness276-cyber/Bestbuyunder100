import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { products } from './data/products';
import { Filter, ArrowUpDown } from 'lucide-react';

type SortKey = 'price' | 'rating' | 'btu';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('rating');

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeFilter) {
      list = list.filter((p) => p.highlightFeature === activeFilter);
    }
    list.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'btu') return b.btu - a.btu;
      return b.rating - a.rating;
    });
    return list;
  }, [activeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <Hero onFilterChange={setActiveFilter} activeFilter={activeFilter} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Intro text */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Best Cheap Window Air Conditioners — 2026 Guide
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Summer heat doesn't have to break the bank. After analyzing 16 window air conditioner units across BTU ratings, energy efficiency, noise levels, and real buyer feedback, we've assembled the definitive guide to cheap window ACs that deliver genuine performance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're cooling a small bedroom, home office, or studio apartment, there's a reliable budget option here. Our top pick for overall value is the <strong className="text-gray-900">Midea 5000 BTU EasyCool</strong> — quiet, efficient, and backed by a global brand warranty. For the absolute lowest price, the <strong className="text-gray-900">ROVSUN 5000 BTU</strong> at $139 delivers solid performance without unnecessary extras.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="mb-8">
              <ComparisonTable products={products} />
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
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <option value="rating">Sort: Top Rated</option>
                  <option value="price">Sort: Lowest Price</option>
                  <option value="btu">Sort: Highest BTU</option>
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">How to Choose the Right Cheap Window AC</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Room Size Matters',
                    body: 'Match BTU to square footage. 5,000 BTU handles up to 150 sq ft. 6,000 BTU covers 250 sq ft. Oversizing wastes energy; undersizing leaves you sweating.',
                  },
                  {
                    title: 'Energy Efficiency Rating',
                    body: 'Look for CEER 11.0 or higher. All units on this list meet federal standards. Eco mode and programmable timers reduce electricity bills significantly.',
                  },
                  {
                    title: 'Noise Level (dBA)',
                    body: 'For bedrooms, aim for 50–52 dBA. The Antarctic Star (49dB) and LG (50dB) are the quietest options. Higher BTU units tend to run louder.',
                  },
                  {
                    title: 'Installation Requirements',
                    body: 'Measure your window width (23"–36" typically) and height (minimum 13"–14.5"). Most units include accordion side panels and mounting hardware.',
                  },
                  {
                    title: 'Smart Features Worth Having',
                    body: 'Remote control, programmable timers, and auto-restart after power outages add real convenience. WiFi control (like the ACHAZEL) enables remote operation from your phone.',
                  },
                  {
                    title: 'Filter Maintenance',
                    body: 'All units on this list have washable, reusable filters. Clean every 30 days during heavy summer use for peak efficiency and air quality.',
                  },
                ].map(({ title, body }) => (
                  <div key={title}>
                    <h3 className="font-semibold text-gray-900 mb-1.5">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <FAQ />

            {/* Affiliate Disclosure */}
            <div className="mt-8 bg-slate-50 rounded-xl border border-slate-200 px-5 py-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong className="text-slate-600">Affiliate Disclosure:</strong> BestBuyUnder100.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click our links and make a purchase, we may earn a small commission at no additional cost to you. Our editorial recommendations are independent and are not influenced by affiliate relationships.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Quick Picks */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Quick Picks</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Overall Best Value', id: 'midea-5000-mechanical', price: 159 },
                    { label: 'Cheapest Option', id: 'rovsun-5000-mechanical', price: 139 },
                    { label: 'Most Quiet', id: 'antarctic-star-5000', price: 159 },
                    { label: 'Best 6000 BTU', id: 'electactic-6000', price: 189 },
                    { label: 'Best with WiFi', id: 'achazel-6000-wifi', price: 179 },
                    { label: 'Trusted Brand Pick', id: 'frigidaire-5000', price: 169 },
                  ].map(({ label, id, price }) => {
                    const product = products.find((p) => p.id === id);
                    return (
                      <li key={id}>
                        <a
                          href={product?.affiliateUrl || '#'}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center gap-3 group"
                        >
                          {product && (
                            <img src={product.image} alt={label} className="w-10 h-10 object-contain rounded bg-gray-50 border border-gray-100" />
                          )}
                          <div className="min-w-0">
                            <div className="text-xs text-gray-500">{label}</div>
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors truncate">
                              {product?.shortTitle}
                            </div>
                            <div className="text-xs text-emerald-600 font-bold">${price}</div>
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
                  {[
                    'Check prices mid-week — Amazon often adjusts Tuesday–Thursday',
                    'Buy before peak summer for the lowest prices',
                    'A 5000 BTU unit at CEER 11.0 costs ~$40–60/summer to run',
                    '5000 BTU is sufficient for most bedrooms under 150 sq ft',
                    'All-white units stay cooler in direct sunlight',
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Related Guides</h3>
                <ul className="space-y-2">
                  {[
                    'Best Portable Air Conditioners Under $200',
                    'Cheap Electric Fans Under $50',
                    'Best Smart Thermostats Under $100',
                    'Window AC vs Portable AC: Which Is Better?',
                    'How to Insulate a Window AC Unit',
                  ].map((article) => (
                    <li key={article}>
                      <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors leading-tight block">
                        {article}
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
