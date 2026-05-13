import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../data/articles';

interface FAQProps {
  faqs: FAQItem[];
  subtitle?: string;
}

export default function FAQ({
  faqs,
  subtitle = 'Everything you need to know before buying',
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>
      <div className="divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <div key={i} className="px-6">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex items-center justify-between w-full py-4 text-left gap-4 group"
            >
              <span
                className={`text-sm font-semibold transition-colors ${
                  open === i ? 'text-emerald-700' : 'text-gray-800 group-hover:text-emerald-700'
                }`}
              >
                {faq.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform text-gray-400 ${
                  open === i ? 'rotate-180 text-emerald-500' : ''
                }`}
              />
            </button>
            {open === i && (
              <div className="pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
