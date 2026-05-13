import { ExternalLink, Star } from 'lucide-react';
import { getSpec, type Product } from '../data/products';
import type { ComparisonColumn } from '../data/articles';

interface ComparisonTableProps {
  products: Product[];
  columns: ComparisonColumn[];
  title?: string;
  subtitle?: string;
}

function renderCell(col: ComparisonColumn, product: Product) {
  switch (col.source) {
    case 'price':
      return <span className="font-bold text-gray-900">${product.price}</span>;
    case 'rating':
      return (
        <div className="flex items-center justify-center gap-1">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-gray-800">{product.rating.toFixed(1)}</span>
        </div>
      );
    case 'badge':
      return product.badge ? (
        <span className="text-xs text-emerald-600 font-medium">{product.badge}</span>
      ) : (
        <span className="text-xs text-gray-400">—</span>
      );
    case 'highlight':
      return (
        <span className="text-xs bg-slate-100 text-slate-600 rounded-md px-2 py-0.5">
          {product.highlightFeature || 'General Use'}
        </span>
      );
    case 'spec':
      return (
        <span className="text-gray-600">
          {col.specLabel ? getSpec(product, col.specLabel) : '—'}
        </span>
      );
    default:
      return '—';
  }
}

export default function ComparisonTable({
  products,
  columns,
  title = 'Quick Comparison Table',
  subtitle = 'Side-by-side specs for the top picks',
}: ComparisonTableProps) {
  const top = products.slice(0, 8);

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <th className="px-4 py-3 text-left min-w-[200px]">Product</th>
              {columns.map((col) => (
                <th key={col.label} className="px-4 py-3 text-center">
                  {col.label}
                </th>
              ))}
              <th className="px-4 py-3 text-center"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {top.map((p, i) => (
              <tr
                key={p.id}
                className={`hover:bg-slate-50 transition-colors ${
                  i === 0 ? 'bg-emerald-50/40' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.shortTitle}
                      className="w-10 h-10 object-contain rounded bg-white border border-gray-100"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src =
                          'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=200';
                      }}
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm leading-tight">
                        {p.shortTitle}
                      </div>
                      {p.badge && (
                        <span className="text-xs text-emerald-600 font-medium">{p.badge}</span>
                      )}
                    </div>
                  </div>
                </td>
                {columns.map((col) => (
                  <td key={col.label} className="px-4 py-3 text-center">
                    {renderCell(col, p)}
                  </td>
                ))}
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
