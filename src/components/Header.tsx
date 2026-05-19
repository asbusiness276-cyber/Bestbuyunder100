import { useState, useEffect } from 'react';
import { ChevronDown, Search, Menu, X, Tag } from 'lucide-react';
import { articles, type Article } from '../data/articles';

interface HeaderProps {
  mode?: 'transparent' | 'solid';
}

const guideGroupDefinitions = [
  {
    label: 'Home & Living',
    categories: ['Home Appliances', 'Mattresses & Bedroom', 'Tools & Home Improvement'],
  },
  {
    label: 'Fashion',
    categories: ['Jewelry & Fashion'],
  },
  {
    label: 'Tech & Outdoors',
    categories: ['Gaming & Tech', 'Electric Bikes'],
  },
];

export default function Header({ mode = 'transparent' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(mode === 'solid');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGuideGroup, setOpenGuideGroup] = useState<string | null>(null);

  const solidHeader = scrolled || mode === 'solid';

  useEffect(() => {
    if (mode === 'solid') {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen && !openGuideGroup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setOpenGuideGroup(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, openGuideGroup]);

  const closeMenu = () => setMenuOpen(false);

  const navArticles = [...articles].sort((a, b) => a.navLabel.localeCompare(b.navLabel));
  const guideGroups = guideGroupDefinitions
    .map((group) => ({
      ...group,
      articles: navArticles.filter((a: Article) => group.categories.includes(a.category)),
    }))
    .filter((group) => group.articles.length > 0);

  const headerBarClass = solidHeader
    ? 'bg-white shadow-md'
    : 'bg-transparent max-lg:bg-white/95 max-lg:backdrop-blur-md max-lg:shadow-sm';

  const logoIconClass = solidHeader
    ? 'bg-emerald-600'
    : 'bg-emerald-500 max-lg:bg-emerald-600';

  const logoTextClass = solidHeader ? 'text-gray-900' : 'text-white max-lg:text-gray-900';

  const logoAccentClass = solidHeader ? 'text-emerald-600' : 'text-emerald-300 max-lg:text-emerald-600';

  const logoSubClass = solidHeader ? 'text-gray-400' : 'text-emerald-200 max-lg:text-gray-400';

  const navLinkClass = solidHeader ? 'text-gray-600' : 'text-white/90';

  const iconBtnClass = solidHeader
    ? 'text-gray-500 hover:bg-gray-100'
    : 'text-white/80 hover:bg-white/10 max-lg:text-gray-500 max-lg:hover:bg-gray-100';

  const mobileLinkClass =
    'block py-3 px-1 text-base font-medium text-gray-800 hover:text-emerald-600 border-b border-gray-100 last:border-0';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBarClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${logoIconClass}`}
            >
              <Tag className="w-4 h-4 text-white" />
            </div>
            <div className="leading-none hidden sm:block">
              <span className={`font-bold text-base tracking-tight transition-colors ${logoTextClass}`}>
                BestBuy<span className={`transition-colors ${logoAccentClass}`}>Under100</span>
              </span>
              <span
                className={`block text-[10px] font-medium tracking-wider uppercase transition-colors ${logoSubClass}`}
              >
                .com
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 flex-1 justify-end min-w-0">
            <a
              href="/"
              className={`text-sm font-medium transition-colors hover:text-emerald-500 shrink-0 ${navLinkClass}`}
            >
              Home
            </a>
            {guideGroups.map((group) => {
              const isOpen = openGuideGroup === group.label;
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenGuideGroup(group.label)}
                  onMouseLeave={() => setOpenGuideGroup(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenGuideGroup(isOpen ? null : group.label)}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-emerald-500 ${navLinkClass}`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {group.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                      <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl">
                        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                          {group.label} guides
                        </p>
                        <div className="max-h-[70vh] overflow-y-auto">
                          {group.articles.map((a) => (
                            <a
                              key={a.slug}
                              href={`/${a.slug}/`}
                              onClick={() => setOpenGuideGroup(null)}
                              className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-emerald-50"
                            >
                              <span className="block text-sm font-semibold text-gray-900">{a.navLabel}</span>
                              <span className="block text-xs text-gray-500">{a.category}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <a
              href="/about/"
              className={`text-sm font-medium transition-colors hover:text-emerald-500 shrink-0 ${navLinkClass}`}
            >
              About
            </a>
            <a
              href="/contact/"
              className={`text-sm font-medium transition-colors hover:text-emerald-500 shrink-0 ${navLinkClass}`}
            >
              Contact
            </a>
            <a
              href="/write-for-us/"
              className={`text-sm font-medium transition-colors hover:text-emerald-500 shrink-0 ${navLinkClass}`}
            >
              Write for us
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                setSearchOpen(!searchOpen);
                if (!searchOpen) {
                  setMenuOpen(false);
                  setOpenGuideGroup(null);
                }
              }}
              className={`p-2 rounded-full transition-colors ${iconBtnClass}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(!menuOpen);
                if (!menuOpen) {
                  setSearchOpen(false);
                  setOpenGuideGroup(null);
                }
              }}
              className={`lg:hidden p-2 rounded-full transition-colors ${iconBtnClass}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search guides and categories…"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>
        )}
      </div>

      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 z-40 bg-white/98 backdrop-blur-sm overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            <a href="/" className={mobileLinkClass} onClick={closeMenu}>
              Home
            </a>
            {guideGroups.map((group) => (
              <div key={group.label}>
                <div className="pt-4 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {group.label}
                </div>
                {group.articles.map((a) => (
                  <a
                    key={a.slug}
                    href={`/${a.slug}/`}
                    className="block py-3 px-1 text-base font-medium text-gray-800 hover:text-emerald-600 border-b border-gray-100"
                    onClick={closeMenu}
                  >
                    <span className="block">{a.navLabel}</span>
                    <span className="block text-xs font-normal text-gray-500">{a.category}</span>
                  </a>
                ))}
              </div>
            ))}
            <a href="/about/" className={mobileLinkClass} onClick={closeMenu}>
              About
            </a>
            <a href="/contact/" className={mobileLinkClass} onClick={closeMenu}>
              Contact
            </a>
            <a href="/write-for-us/" className={mobileLinkClass} onClick={closeMenu}>
              Write for us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
