import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is the cheapest window air conditioner that actually works?',
    a: 'The ROVSUN 5000 BTU at $139 is the most affordable option on our list that delivers reliable cooling. It covers up to 150 sq ft with simple knob controls and energy-saving design — perfect for small bedrooms or offices.',
  },
  {
    q: 'How many BTU do I need for a small room?',
    a: 'For rooms up to 150 sq ft (like a standard bedroom), a 5,000 BTU window AC is sufficient. For rooms between 150–250 sq ft, choose a 6,000 BTU unit. Bigger spaces need 8,000–12,000 BTU.',
  },
  {
    q: 'Are cheap window ACs energy efficient?',
    a: 'Many budget window ACs have a CEER (Combined Energy Efficiency Ratio) of 11.0, which is the federal minimum standard. Units like the Midea and Senville 5000 BTU achieve this rating, keeping electricity bills reasonable.',
  },
  {
    q: 'What size window do I need for a window AC?',
    a: 'Most 5,000–6,000 BTU window ACs require a window 23"–36" wide and at least 13"–14.5" tall. Always check the product specifications before purchasing and measure your window opening.',
  },
  {
    q: 'Can I get a window AC with WiFi under $200?',
    a: 'Yes — the ACHAZEL 6000 BTU WiFi Window AC at $179 includes SmartLife app control, remote control, and covers up to 250 sq ft. It\'s the best smart budget window AC on our list.',
  },
  {
    q: 'Which cheap window AC is the quietest?',
    a: 'The Antarctic Star 5000 BTU operates at just 49dB — the quietest on our list. The LG 5000 BTU runs at 50dB, and the Frigidaire 5000 BTU at 52dB. All three are excellent for bedrooms.',
  },
  {
    q: 'Do window ACs include installation hardware?',
    a: 'Most models on this list include an installation kit with side accordion panels, foam insulation, and mounting hardware. No special tools are required beyond a standard screwdriver.',
  },
  {
    q: 'What is the difference between a window AC and an evaporative cooler?',
    a: 'A window AC uses a refrigerant-based compressor for true cooling and works in any climate. An evaporative cooler (like the MEPTY unit) uses water evaporation and is more effective in dry climates. It does not require window installation but is less powerful in humid conditions.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="text-sm text-gray-500 mt-1">Everything you need to know before buying a cheap window AC</p>
      </div>
      <div className="divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <div key={i} className="px-6">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex items-center justify-between w-full py-4 text-left gap-4 group"
            >
              <span className={`text-sm font-semibold transition-colors ${open === i ? 'text-emerald-700' : 'text-gray-800 group-hover:text-emerald-700'}`}>
                {faq.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform text-gray-400 ${open === i ? 'rotate-180 text-emerald-500' : ''}`}
              />
            </button>
            {open === i && (
              <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}