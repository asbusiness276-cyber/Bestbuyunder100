import StaticPageLayout from './StaticPageLayout';

export default function WriteForUsPage() {
  return (
    <StaticPageLayout
      title="Write for us"
      subtitle="Contributor guidelines for guest posts and editorial pitches."
    >
      <p>
        BestBuyUnder100 accepts a limited number of high-quality guest contributions that help readers make better buying
        decisions on a budget. We prioritize original reporting, hands-on testing notes, and clear disclosure.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">What we publish</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Buying guides and comparisons aligned with our site focus: strong value under typical Amazon retail ceilings.</li>
        <li>Data-backed roundups (specs, pricing context, safety certifications where relevant).</li>
        <li>Evergreen FAQs that match real search intent.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Affiliate links in guest content</h2>
      <p>
        <strong>House rule:</strong> BestBuyUnder100 retains affiliate monetization on published pages. Contributors may{' '}
        <strong>not</strong> embed their own affiliate tags in the body of the article.
      </p>
      <p>
        If you need to reference a product you sell or represent, you may include <strong>one plain URL</strong> to your site
        or product page <strong>only</strong> in the introduction or conclusion — clearly labeled as your company or project —
        and only when it adds genuine reader value (for example, a manufacturer sizing chart or compatibility tool). We may
        remove or nofollow links at our discretion for reader trust and FTC alignment.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Editorial standards</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Original writing not published elsewhere; we run plagiarism checks.</li>
        <li>No undisclosed financial relationships with brands you cover.</li>
        <li>Accurate specs and prices at time of writing; cite sources where applicable.</li>
        <li>Respectful, inclusive language; no medical claims for non-medical products.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">How to pitch</h2>
      <p>
        Send 3–5 bullet outline, 2 sample clips, and your relevant expertise to{' '}
        <a href="mailto:bestbuyunder100@gmail.com" className="text-emerald-700 font-semibold hover:underline">
          bestbuyunder100@gmail.com
        </a>{' '}
        with subject line <strong>Write for us — [topic]</strong>. We reply only if there is a fit.
      </p>
    </StaticPageLayout>
  );
}
