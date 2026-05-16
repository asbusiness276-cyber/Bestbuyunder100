import { useState, useEffect } from 'react';
import { Search, Menu, X, Tag } from 'lucide-react';
import { articles } from '../data/articles';

interface HeaderProps {
  mode?: 'transparent' | 'solid';
}

export default function Header({ mode = 'transparent' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(mode === 'solid');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navArticles = [...articles].sort((a, b) => a.navLabel.localeCompare(b.navLabel));

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
            {navArticles.map((a) => (
              <a
                key={a.slug}
                href={`/${a.slug}/`}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 truncate max-w-[10rem] xl:max-w-none ${navLinkClass}`}
              >
                {a.navLabel}
              </a>
            ))}
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
                if (!searchOpen) setMenuOpen(false);
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
                if (!menuOpen) setSearchOpen(false);
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
            {navArticles.map((a) => (
              <a
                key={a.slug}
                href={`/${a.slug}/`}
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                {a.navLabel}
              </a>
            ))}
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
