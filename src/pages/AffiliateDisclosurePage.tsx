import StaticPageLayout from './StaticPageLayout';

export default function AffiliateDisclosurePage() {
  return (
    <StaticPageLayout title="Affiliate disclosure" subtitle="FTC-compliant transparency for readers.">
      <p>
        BestBuyUnder100.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program
        designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and
        affiliated sites.
      </p>
      <p>
        Some pages include links to other retailers or services; those relationships will be disclosed on the page when
        relevant. You do not pay extra when you use our links — commissions are paid by merchants as part of their marketing
        budgets.
      </p>
      <p>
        Editorial picks are based on research, specs, pricing, certifications, and community feedback — not on who pays the
        highest commission.
      </p>
    </StaticPageLayout>
  );
}
