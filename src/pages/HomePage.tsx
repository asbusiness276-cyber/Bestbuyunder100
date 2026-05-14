import { articles } from '../data/articles';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-3">BestBuyUnder100.com</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-4">
            Best affordable products — researched, compared, and priced honestly
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mb-10">
            We publish keyword-focused buying guides with comparison tables, pros and cons, and FAQs. Start with one of our
            featured guides below.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a) => (
              <a
                key={a.slug}
                href={`/${a.slug}/`}
                className="group bg-white/10 hover:bg-white/15 backdrop-blur border border-white/15 rounded-2xl p-6 transition-all"
              >
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wide mb-2">
                  <BookOpen className="w-4 h-4" />
                  {a.category}
                </div>
                <h2 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-emerald-200 transition-colors">
                  {a.introHeading}
                </h2>
                <p className="text-sm text-white/60 line-clamp-3 mb-4">{a.heroSubtitle}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-300 group-hover:gap-2 transition-all">
                  Read guide
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
