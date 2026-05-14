import StaticPageLayout from './StaticPageLayout';

export default function PrivacyPolicyPage() {
  return (
    <StaticPageLayout title="Privacy policy" subtitle="Last updated: May 2026">
      <p>
        This policy describes how BestBuyUnder100.com (“we”, “us”) collects, uses, and shares information when you use our
        website.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Information we collect</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Usage data:</strong> pages viewed, approximate location derived from IP, browser type, and timestamps — often
          via analytics tools configured by the site owner.
        </li>
        <li>
          <strong>Communications:</strong> if you email us, we retain your message and address as long as needed to respond.
        </li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Cookies</h2>
      <p>
        We and our partners may use cookies or similar technologies for analytics, advertising measurement, and site performance.
        You can control cookies through your browser settings.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Third-party services</h2>
      <p>
        We may use third-party vendors (for example hosting, analytics, or affiliate networks). Those services have their own
        privacy policies governing data they process on our behalf.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Your choices</h2>
      <p>
        Depending on your region, you may have rights to access, correct, or delete personal information. Contact{' '}
        <a href="mailto:bestbuyunder100@gmail.com" className="text-emerald-700 font-semibold hover:underline">
          bestbuyunder100@gmail.com
        </a>{' '}
        for privacy requests.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Children</h2>
      <p>Our site is directed to a general audience and is not intended for children under 13.</p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Changes</h2>
      <p>We may update this policy from time to time. Continued use of the site after changes means you accept the update.</p>
    </StaticPageLayout>
  );
}
