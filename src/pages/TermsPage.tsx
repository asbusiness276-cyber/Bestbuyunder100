import StaticPageLayout from './StaticPageLayout';

export default function TermsPage() {
  return (
    <StaticPageLayout title="Terms & conditions" subtitle="Last updated: May 2026">
      <p>
        By accessing BestBuyUnder100.com, you agree to these terms. If you do not agree, please do not use the site.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Not professional advice</h2>
      <p>
        Content is for general information only. We are not lawyers, doctors, or licensed home inspectors. Always verify
        product specs, compatibility, and safety requirements with the manufacturer before purchasing or installing
        equipment.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Affiliate relationships</h2>
      <p>
        Pages may include affiliate links. Purchases may generate commissions as described in our{' '}
        <a href="/affiliate-disclosure/" className="text-emerald-700 font-semibold hover:underline">
          Affiliate disclosure
        </a>
        .
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Accuracy of information</h2>
      <p>
        Prices, availability, and specifications change frequently. We strive to keep guides current but do not guarantee
        accuracy. Confirm details on the retailer’s product page before checkout.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, BestBuyUnder100.com and its operators disclaim liability for any damages
        arising from your use of the site, reliance on content, or products purchased through third-party links.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Contact</h2>
      <p>
        Questions about these terms:{' '}
        <a href="mailto:bestbuyunder100@gmail.com" className="text-emerald-700 font-semibold hover:underline">
          bestbuyunder100@gmail.com
        </a>
      </p>
    </StaticPageLayout>
  );
}
