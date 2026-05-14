interface StaticPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function StaticPageLayout({ title, subtitle, children }: StaticPageLayoutProps) {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </header>
      <div className="text-gray-700 text-base leading-relaxed space-y-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-emerald-700 [&_a]:font-semibold [&_a]:hover:underline">
        {children}
      </div>
    </main>
  );
}
