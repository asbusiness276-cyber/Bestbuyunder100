import { ExternalLink, Star } from 'lucide-react';
import type { Product } from '../data/products';

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  const top = products.slice(0, 8);

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Quick Comparison Table</h2>
        <p className="text-sm text-gray-500 mt-1">Side-by-side specs for the top picks</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <th className="px-4 py-3 text-left min-w-[200px]">Product</th>
              <th className="px-4 py-3 text-center">Price</th>
              <th className="px-4 py-3 text-center">BTU</th>
              <th className="px-4 py-3 text-center">Coverage</th>
              <th className="px-4 py-3 text-center">Rating</th>
              <th className="px-4 py-3 text-center">Best For</th>
              <th className="px-4 py-3 text-center"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {top.map((p, i) => (
              <tr
                key={p.id}
                className={`hover:bg-slate-50 transition-colors ${i === 0 ? 'bg-emerald-50/40' : ''}`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt={p.shortTitle} className="w-10 h-10 object-contain rounded bg-white border border-gray-100" loading="lazy" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm leading-tight">{p.shortTitle}</div>
                      {p.badge && (
                        <span className="text-xs text-emerald-600 font-medium">{p.badge}</span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-center font-bold text-gray-900">${p.price}</td>
                <td className="px-4 py-3 text-center text-gray-600">
                  {p.btu > 0 ? `${p.btu.toLocaleString()}` : 'N/A'}
                </td>
                <td className="px-4 py-3 text-center text-gray-600">{p.coverage} sq ft</td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-gray-800">{p.rating}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="text-xs bg-slate-100 text-slate-600 rounded-md px-2 py-0.5">
                    {p.highlightFeature || 'General Use'}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-white bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 hover:border-emerald-500 rounded-lg px-3 py-1.5 transition-all duration-200"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Buy
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}