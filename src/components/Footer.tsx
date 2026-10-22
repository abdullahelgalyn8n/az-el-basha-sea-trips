import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  Smartphone,
  CheckCircle2,
  Compass,
  MapPin,
  ShieldCheck,
  Award,
  Headphones,
} from 'lucide-react';
import { PageRoute } from '../utils/tourLogic';

interface FooterProps {
  currentRoute: PageRoute;
  onNavigate: (path: string) => void;
  onOpenInstallModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentRoute,
  onNavigate,
  onOpenInstallModal,
}) => {
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = subscriberEmail.trim();
    if (!clean || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
      setSubscribeStatus('error');
      return;
    }
    setSubscribeStatus('success');
    setSubscriberEmail('');
  };

  return (
    <footer className="bg-[#021E28] text-slate-200">
      {/* Top Value Guarantee Strip (Matches 500+ Destinations / Best Price Guarantee / Top Notch Support) */}
      <div className="bg-[#035E73] border-b border-sky-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-sky-200" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                500+ Red Sea Departures
              </h3>
              <p className="text-xs text-sky-100">
                Daily verified island, reef & private yacht trips in Hurghada
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Best Price Guarantee
              </h3>
              <p className="text-xs text-sky-100">
                Direct marina operator rates with zero hidden booking markups
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Top Notch Support
              </h3>
              <p className="text-xs text-sky-100">
                24/7 multilingual guest assistance & hotel pickup coordination
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns (Fixed high-contrast white/sky headings on deep ocean background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Statement */}
          <div className="lg:col-span-1 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="inline-flex items-center gap-2 text-lg font-bold text-white font-serif-display"
            >
              <Compass className="w-5 h-5 text-sky-400" />
              <span>El Basha Sea Trips</span>
            </a>
            <p className="text-sm text-slate-300 leading-relaxed">
              Discover the beauty of the Red Sea with unforgettable sea trips,
              private tours, and luxury experiences designed for comfort,
              safety, and lasting memories.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-sky-300 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Licensed Red Sea Marine Operator</span>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-base font-bold text-white font-serif-display mb-4 tracking-wide">
              Useful Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home Page', path: '/' },
                { label: 'About Us', path: '/about-us' },
                { label: 'Tour List', path: '/tour-list' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => {
                const isActive = currentRoute.path === link.path;
                return (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(link.path);
                      }}
                      className={`inline-flex items-center gap-2 py-0.5 transition-colors ${
                        isActive
                          ? 'text-sky-400 font-bold underline underline-offset-4'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {link.path}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Social Media & Direct Contact */}
          <div>
            <h4 className="text-base font-bold text-white font-serif-display mb-4 tracking-wide">
              Social Media & Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/201002294580"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp Direct</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201002294580"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>+20 100 229 4580</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@elbashaseatrips.com"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>contact@elbashaseatrips.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300 text-xs pt-1">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Hurghada New Marina, Red Sea Governorate, Egypt</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Download the app now */}
          <div>
            <h4 className="text-base font-bold text-white font-serif-display mb-4 tracking-wide">
              Download the App Now
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Access your offline boarding passes, live marina pickup times, and
              instant WhatsApp crew chat on your phone.
            </p>
            <button
              type="button"
              onClick={onOpenInstallModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-400 bg-sky-500/15 hover:bg-sky-500/25 text-white text-xs font-bold transition-colors whitespace-nowrap"
            >
              <Smartphone className="w-4 h-4 text-sky-300" />
              <span>Install App</span>
            </button>
          </div>

          {/* Column 5: Subscribe Now */}
          <div>
            <h4 className="text-base font-bold text-white font-serif-display mb-4 tracking-wide">
              Subscribe Now
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Don&apos;t miss our future updates and seasonal Red Sea island
              offers! Get Subscribed Today!
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
              <div className="flex items-center bg-white rounded-full overflow-hidden p-1 border border-slate-300 focus-within:ring-2 focus-within:ring-sky-400">
                <label htmlFor="footer-subscribe-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="footer-subscribe-email"
                  type="email"
                  value={subscriberEmail}
                  onChange={(e) => {
                    setSubscriberEmail(e.target.value);
                    if (subscribeStatus !== 'idle') setSubscribeStatus('idle');
                  }}
                  placeholder="Your mail here"
                  className="w-full px-3.5 py-1.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="w-8 h-8 rounded-full bg-[#035E73] hover:bg-[#024859] text-white flex items-center justify-center shrink-0 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribeStatus === 'error' && (
                <p className="text-xs text-rose-400">
                  Please enter a valid email address.
                </p>
              )}
              {subscribeStatus === 'success' && (
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed! Welcome aboard El Basha Sea Trips.</span>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#035E73] py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white font-medium">
          <p>جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">A.Z Agency</a> 2026 ©</p>
          <p className="text-sky-100">
            Dedicated Page Routes: <span className="font-mono">/</span> ·{' '}
            <span className="font-mono">/about-us</span> ·{' '}
            <span className="font-mono">/tour-list</span> ·{' '}
            <span className="font-mono">/contact</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
