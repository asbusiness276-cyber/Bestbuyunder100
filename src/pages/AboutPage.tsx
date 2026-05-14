import StaticPageLayout from './StaticPageLayout';

export default function AboutPage() {
  return (
    <StaticPageLayout
      title="About us"
      subtitle="How BestBuyUnder100 researches and publishes buying guides."
    >
      <p>
        BestBuyUnder100 is an editorial affiliate site focused on honest, budget-minded product picks. We combine Amazon
        listing data, verified customer reviews, certification labels (where applicable), and practical buying context so you
        can choose faster — without overspending.
      </p>
      <p>
        When you purchase through our links, we may earn a commission from qualifying sales. That support helps us keep guides
        updated, but it never changes which products we recommend. See our{' '}
        <a href="/affiliate-disclosure/" className="text-emerald-700 font-semibold hover:underline">
          Affiliate disclosure
        </a>{' '}
        for details.
      </p>
    </StaticPageLayout>
  );
}
