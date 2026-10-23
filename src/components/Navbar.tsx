import React, { useState } from 'react';
import {
  ShoppingBag,
  Heart,
  Link2,
  Check,
  Compass,
  Menu,
  X,
  User,
} from 'lucide-react';
import { PageRoute } from '../utils/tourLogic';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (path: string) => void;
  cartTotal: number;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  currentUser: { name: string; email: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  cartTotal,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAuth,
  currentUser,
}) => {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home Page', path: '/', active: currentRoute.page === 'home' },
    { label: 'About Us', path: '/about-us', active: currentRoute.page === 'about' },
    {
      label: 'Tour List',
      path: '/tour-list',
      active:
        currentRoute.page === 'tours' || currentRoute.page === 'tour-detail',
    },
    { label: 'Contact Us', path: '/contact', active: currentRoute.page === 'contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const fullShareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${currentRoute.path}`
      : `https://elbashaseatrips.com${currentRoute.path}`;

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(fullShareUrl).catch(() => {});
    }
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        {/* Main 3-Zone Top Navigation Bar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center gap-2 text-base sm:text-xl font-bold tracking-tight text-[#035E73] hover:text-[#024859] transition-colors whitespace-nowrap shrink-0 font-serif-display"
          >
            <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#0284C7] shrink-0" />
            <span>El Basha Sea Trips</span>
          </a>

          {/* Zone 2: 4 Single-Line Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-semibold"
          >
            {navLinks.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`py-5 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                  item.active
                    ? 'border-[#0284C7] text-[#035E73]'
                    : 'border-transparent text-slate-700 hover:text-[#035E73] hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Wishlist, Cart Total, Login / Sign Up) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenWishlist}
              aria-label={`View Wishlist (${wishlistCount} saved tours)`}
              className="relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50/50 transition-colors shrink-0"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`Open Booking Cart ($${cartTotal.toFixed(2)}, ${cartCount} items)`}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg border border-[#0284C7] bg-sky-50/70 hover:bg-sky-100/80 text-slate-900 text-xs font-bold transition-colors whitespace-nowrap shrink-0 tabular-nums"
            >
              <span>${cartTotal.toFixed(2)}</span>
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#035E73]" />
              <span className="text-[#035E73] font-mono">({cartCount})</span>
            </button>

            {currentUser ? (
              <button
                type="button"
                onClick={() => onOpenAuth('login')}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <User className="w-3.5 h-3.5 text-[#035E73]" />
                <span>{currentUser.name}</span>
              </button>
            ) : (
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenAuth('login')}
                  className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => onOpenAuth('signup')}
                  className="px-3.5 py-2 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 shrink-0"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-4 space-y-2 shadow-lg">
          {navLinks.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                item.active
                  ? 'bg-sky-50 text-[#035E73]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
              <span className="ml-2 text-xs font-mono text-slate-400">
                ({item.path})
              </span>
            </a>
          ))}
          {!currentUser && (
            <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="flex-1 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
                className="flex-1 py-2.5 rounded-lg bg-[#0284C7] text-white text-xs font-semibold"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
