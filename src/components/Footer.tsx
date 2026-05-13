import { Tag } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const categories = [
    'Electronics', 'Home Appliances', 'Audio & Headphones',
    'Gaming', 'Watches', 'Fashion', 'Furniture', 'Travel Gear',
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-lg">
            <h3 className="text-lg font-bold mb-1">Get the Best Deals in Your Inbox</h3>
            <p className="text-sm text-slate-400 mb-4">New buying guides and top deals under $100, delivered weekly.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Tag className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-sm">BestBuyUnder100<span className="text-emerald-400">.com</span></span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Trusted product recommendations for smart shoppers. We research, test, and review the best affordable products so you can buy with confidence.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((c) => (
                <li key={c}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms & Conditions', 'Affiliate Disclosure'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Our Promise</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                Independent editorial reviews
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                Verified Amazon ratings & user feedback
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                Updated monthly with fresh prices
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                No hidden fees or sponsored placement
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {year} BestBuyUnder100.com — All rights reserved.
          </p>
          <p className="text-xs text-slate-600 text-center">
            As an Amazon Associate we earn from qualifying purchases. Prices and availability are subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
}