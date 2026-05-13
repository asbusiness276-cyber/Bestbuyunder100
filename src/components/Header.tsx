import { useState, useEffect } from 'react';
import { Search, Menu, X, Tag } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Electronics', href: '#' },
    { label: 'Home Appliances', href: '#' },
    { label: 'Gaming', href: '#' },
    { label: 'Audio', href: '#' },
    { label: 'Deals', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              scrolled ? 'bg-emerald-600' : 'bg-emerald-500'
            }`}>
              <Tag className="w-4 h-4 text-white" />
            </div>
            <div className="leading-none">
              <span className={`font-bold text-base tracking-tight transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                BestBuy<span className={`transition-colors ${scrolled ? 'text-emerald-600' : 'text-emerald-300'}`}>Under100</span>
              </span>
              <span className={`block text-[10px] font-medium tracking-wider uppercase transition-colors ${
                scrolled ? 'text-gray-400' : 'text-emerald-200'
              }`}>.com</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  scrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-full transition-colors ${
                scrolled
                  ? 'text-gray-500 hover:bg-gray-100'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                scrolled
                  ? 'text-gray-500 hover:bg-gray-100'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search products under $100..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>
        )}

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block py-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}