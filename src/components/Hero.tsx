import { useState } from 'react';
import {
  Wind,
  Zap,
  Volume2,
  Home,
  ChevronDown,
  Gauge,
  Battery,
  Maximize2,
  ShieldCheck,
  Boxes,
  Droplets,
  Layers,
  Baby,
  type LucideIcon,
} from 'lucide-react';
import type { Article } from '../data/articles';

interface HeroProps {
  article: Article;
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

const iconMap: Record<string, LucideIcon> = {
  Home,
  Wind,
  Zap,
  Volume2,
  Gauge,
  Battery,
  Maximize2,
  ShieldCheck,
  Boxes,
  Droplets,
  Layers,
  Baby,
};

export default function Hero({ article, onFilterChange, activeFilter }: HeroProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative min-h-[520px] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={article.heroImage}
          alt={article.heroTitleLine1}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 mb-5">
          {article.breadcrumb.map((crumb, i) => {
            const isLast = i === article.breadcrumb.length - 1;
            return (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {isLast ? (
                  <span className="text-white/70">{crumb.label}</span>
                ) : (
                  <>
                    <a href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </a>
                    <span>/</span>
                  </>
                )}
              </span>
            );
          })}
        </nav>

        {/* Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-xs font-semibold tracking-wide uppercase">
              {article.heroBadge}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-4">
            {article.heroTitleLine1}
            <br />
            <span className="text-emerald-400">{article.heroTitleLine2}</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-2">
            {article.heroSubtitle}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-sm text-emerald-300 hover:text-emerald-200 transition-colors mt-1"
          >
            <span>{expanded ? 'Show less' : 'Why trust our picks?'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
          {expanded && (
            <p className="text-sm text-white/60 mt-2 max-w-lg leading-relaxed">
              {article.heroTrustNote}
            </p>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          {article.filters.map(({ id, label, icon }) => {
            const Icon = iconMap[icon] ?? Home;
            const isActive =
              (id === 'all' && !activeFilter) || activeFilter === id;
            return (
              <button
                key={id}
                onClick={() => onFilterChange(id === 'all' ? '' : id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
