import StaticPageLayout from './StaticPageLayout';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <StaticPageLayout
      title="Contact us"
      subtitle="Questions about a guide, a correction, or a partnership? Reach the editorial team."
    >
      <p>
        Email us at{' '}
        <a href="mailto:bestbuyunder100@gmail.com" className="text-emerald-700 font-semibold hover:underline">
          bestbuyunder100@gmail.com
        </a>
        . We read every message; please allow 2–5 business days for a reply.
      </p>
      <p className="flex items-center gap-2 text-gray-800 font-medium not-prose">
        <Mail className="w-5 h-5 text-emerald-600" />
        bestbuyunder100@gmail.com
      </p>
      <p>
        We do not provide phone support. For order or shipping issues, contact the retailer (for example Amazon) directly
        using your order confirmation.
      </p>
    </StaticPageLayout>
  );
}
