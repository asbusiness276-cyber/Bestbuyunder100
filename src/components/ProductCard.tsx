import { useState } from 'react';
import { Star, Check, X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  rank: number;
}

const badgeColors: Record<string, string> = {
  'Best Value': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Cheapest Pick': 'bg-sky-100 text-sky-700 border-sky-200',
  "Editor's Choice": 'bg-amber-100 text-amber-700 border-amber-200',
  'Top Rated': 'bg-rose-100 text-rose-700 border-rose-200',
  'Best Battery': 'bg-violet-100 text-violet-700 border-violet-200',
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.round(rating)
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-0.5">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ProductCard({ product, rank }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      id={`product-${product.id}`}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-5">
          {/* Rank + Image */}
          <div className="flex flex-col items-center gap-3 shrink-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              rank === 1 ? 'bg-amber-400 text-white' :
              rank === 2 ? 'bg-gray-300 text-gray-700' :
              rank === 3 ? 'bg-amber-600/70 text-white' :
              'bg-gray-100 text-gray-500'
            }`}>
              #{rank}
            </div>
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <img
                src={product.image}
                alt={product.shortTitle}
                className="w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {product.badge && (
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badgeColors[product.badge] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                  {product.badge}
                </span>
              )}
              {product.btu > 0 && (
                <span className="text-xs text-gray-400 font-medium">{product.btu.toLocaleString()} BTU</span>
              )}
              {product.coverage > 0 && (
                <span className="text-xs text-gray-400">Up to {product.coverage} sq ft</span>
              )}
            </div>

            <h2 className="text-base font-bold text-gray-900 leading-snug mb-2 line-clamp-2">
              {product.title}
            </h2>

            <StarRating rating={product.rating} />

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {product.features.slice(0, 4).map((f) => (
                <span key={f} className="text-xs bg-slate-50 text-slate-600 border border-slate-200 rounded-md px-2 py-0.5">
                  {f}
                </span>
              ))}
            </div>

            {/* Price + CTA */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <div>
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <span className="text-xs text-gray-400 ml-1">on Amazon</span>
              </div>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm ${
                  hovered
                    ? 'bg-emerald-500 text-white shadow-emerald-200'
                    : 'bg-slate-900 text-white hover:bg-emerald-500 hover:shadow-emerald-200'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                {hovered ? 'View Best Deal' : 'Check Price'}
              </a>
            </div>
          </div>
        </div>

        {/* Expand Pros/Cons */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 mt-4 text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors"
        >
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          {expanded ? 'Hide details' : 'Show pros & cons'}
        </button>

        {expanded && (
          <div className="mt-4 grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 animate-fade-in">
            <div>
              <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Pros</h3>
              <ul className="space-y-1.5">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Cons</h3>
              <ul className="space-y-1.5">
                {product.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                    <X className="w-3.5 h-3.5 text-rose-400 mt-0.5 shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}