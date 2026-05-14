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

  useEffect(() => {
    if (mode === 'solid') {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  const navArticles = [...articles].sort((a, b) => a.navLabel.localeCompare(b.navLabel));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                scrolled ? 'bg-emerald-600' : 'bg-emerald-500'
              }`}
            >
              <Tag className="w-4 h-4 text-white" />
            </div>
            <div className="leading-none hidden sm:block">
              <span
                className={`font-bold text-base tracking-tight transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                BestBuy<span className={`transition-colors ${scrolled ? 'text-emerald-600' : 'text-emerald-300'}`}>Under100</span>
              </span>
              <span
                className={`block text-[10px] font-medium tracking-wider uppercase transition-colors ${
                  scrolled ? 'text-gray-400' : 'text-emerald-200'
                }`}
              >
                .com
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 flex-1 justify-end min-w-0">
            <a
              href="/"
              className={`text-sm font-medium transition-colors hover:text-emerald-500 shrink-0 ${
                scrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              Home
            </a>
            {navArticles.map((a) => (
              <a
                key={a.slug}
                href={`/${a.slug}/`}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 truncate max-w-[10rem] xl:max-w-none ${
                  scrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {a.navLabel}
              </a>
            ))}
            <a
              href="/contact/"
              className={`text-sm font-medium transition-colors hover:text-emerald-500 shrink-0 ${
                scrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              Contact
            </a>
            <a
              href="/write-for-us/"
              className={`text-sm font-medium transition-colors hover:text-emerald-500 shrink-0 ${
                scrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              Write for us
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-white/80 hover:bg-white/10'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                scrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-white/80 hover:bg-white/10'
              }`}
              aria-label="Menu"
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

        {menuOpen && (
          <div
            className={`lg:hidden pb-4 border-t ${
              scrolled ? 'border-gray-100' : 'border-white/10'
            }`}
          >
            <a
              href="/"
              className={`block py-2 text-sm font-medium ${
                scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90'
              }`}
            >
              Home
            </a>
            {navArticles.map((a) => (
              <a
                key={a.slug}
                href={`/${a.slug}/`}
                className={`block py-2 text-sm font-medium ${
                  scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90'
                }`}
              >
                {a.navLabel}
              </a>
            ))}
            <a
              href="/contact/"
              className={`block py-2 text-sm font-medium ${
                scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90'
              }`}
            >
              Contact
            </a>
            <a
              href="/write-for-us/"
              className={`block py-2 text-sm font-medium ${
                scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90'
              }`}
            >
              Write for us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
