import { Tag } from 'lucide-react';
import { articles } from '../data/articles';

export default function Footer() {
  const year = new Date().getFullYear();

  const companyLinks = [
    { label: 'About us', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Write for us', href: '/write-for-us/' },
    { label: 'Privacy policy', href: '/privacy-policy/' },
    { label: 'Terms & conditions', href: '/terms-and-conditions/' },
    { label: 'Affiliate disclosure', href: '/affiliate-disclosure/' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-lg">
            <h3 className="text-lg font-bold mb-1">Get the best deals in your inbox</h3>
            <p className="text-sm text-slate-400 mb-4">
              New buying guides and top deals under $100 — delivered when we publish (coming soon).
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="button"
                className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Tag className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-sm">
                  BestBuyUnder100<span className="text-emerald-400">.com</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Trusted product recommendations for smart shoppers. We research, compare, and review the best affordable picks
              so you can buy with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Buying guides</h4>
            <ul className="space-y-2">
              {articles.map((a) => (
                <li key={a.slug}>
                  <a href={`/${a.slug}/`} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {a.introHeading}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Company & legal</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Our promise</h4>
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
                Clear affiliate disclosure on every guide
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                No pay-to-play “editor’s picks”
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">&copy; {year} BestBuyUnder100.com — All rights reserved.</p>
          <p className="text-xs text-slate-600 text-center">
            As an Amazon Associate we earn from qualifying purchases. Prices and availability are subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
}
