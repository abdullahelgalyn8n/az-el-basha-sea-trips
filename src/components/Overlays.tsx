import React, { useState } from 'react';
import {
  X,
  Trash2,
  CheckCircle2,
  ShoppingBag,
  Heart,
  Smartphone,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { TourItem } from '../data/tours';
import {
  CartBookingItem,
  calculateCartSummary,
  validateCheckoutForm,
} from '../utils/tourLogic';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartBookingItem[];
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onNavigate: (path: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart,
  onNavigate,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedOrder, setConfirmedOrder] = useState<{
    bookingRef: string;
    guestName: string;
    hotelName: string;
    total: number;
  } | null>(null);

  if (!isOpen) return null;

  const summary = calculateCartSummary(items);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateCheckoutForm({
      fullName,
      email,
      whatsapp,
      hotelName,
      roomNumber,
    });
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setConfirmedOrder({
      bookingRef: `EB-${Math.floor(100000 + Math.random() * 900000)}`,
      guestName: fullName.trim(),
      hotelName: hotelName.trim(),
      total: summary.total,
    });
    onClearCart();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs"
    >
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#035E73]" />
            <h2
              id="cart-drawer-title"
              className="text-lg font-bold text-slate-900 font-serif-display"
            >
              Your Sea Trip Booking Cart
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setConfirmedOrder(null);
              onClose();
            }}
            aria-label="Close booking cart"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex-1 space-y-6">
          {confirmedOrder ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif-display">
                Booking Confirmed!
              </h3>
              <p className="text-xs font-mono font-bold text-emerald-800 bg-white py-1.5 px-3 rounded border border-emerald-200 inline-block">
                Booking Ref: {confirmedOrder.bookingRef}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Thank you, <strong>{confirmedOrder.guestName}</strong>! Your
                pickup from <strong>{confirmedOrder.hotelName}</strong> is
                scheduled. Total confirmed:{' '}
                <strong className="font-mono">
                  ${confirmedOrder.total.toFixed(2)}
                </strong>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setConfirmedOrder(null);
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-[#035E73] text-white text-xs font-bold"
              >
                Done
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-900">
                Your booking cart is empty
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our 12 Hurghada island and coral reef excursions to add
                a trip to your reservation.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigate('/tour-list');
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#035E73] text-white text-xs font-bold"
              >
                <span>Browse All 12 Tours</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Itemized List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 font-mono">
                        Date: {item.date} · {item.adults} Adult(s)
                        {item.children > 0 ? `, ${item.children} Child(ren)` : ''}
                      </p>
                      {(item.privateTransfer || item.underwaterPhotos) && (
                        <p className="text-[11px] text-[#035E73] font-semibold mt-1">
                          Upgrades:{' '}
                          {[
                            item.privateTransfer ? 'Private Transfer' : '',
                            item.underwaterPhotos ? 'Underwater Photos' : '',
                          ]
                            .filter(Boolean)
                            .join(' + ')}
                        </p>
                      )}
                      <p className="text-sm font-bold font-mono text-slate-900 mt-2">
                        ${item.lineTotal.toFixed(2)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.cartItemId)}
                      aria-label={`Remove ${item.title} from cart`}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200/80 space-y-1.5 text-xs tabular-nums">
                <div className="flex justify-between text-slate-700">
                  <span>Excursion Subtotal</span>
                  <span className="font-mono">
                    ${summary.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>
                    Red Sea Marine Park Fee ({summary.totalGuests} guests × $5)
                  </span>
                  <span className="font-mono">
                    ${summary.marineParkFee.toFixed(2)}
                  </span>
                </div>
                <div className="pt-2 border-t border-sky-200 flex justify-between text-sm font-bold text-slate-900">
                  <span>Total Amount</span>
                  <span className="font-mono text-base text-[#035E73]">
                    ${summary.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Hotel Pickup & Guest Verification Form */}
              <form onSubmit={handleCheckout} className="space-y-3 pt-2" noValidate>
                <h3 className="text-sm font-bold text-slate-900">
                  Passenger &amp; Hotel Pickup Details
                </h3>

                <div>
                  <label
                    htmlFor="checkout-name"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Lead Passenger Full Name
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-600 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="checkout-email"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="checkout-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="checkout-whatsapp"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      WhatsApp Number
                    </label>
                    <input
                      id="checkout-whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+20 100..."
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900"
                    />
                    {errors.whatsapp && (
                      <p className="text-xs text-rose-600 mt-1">
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label
                      htmlFor="checkout-hotel"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Hurghada Hotel / Resort Name
                    </label>
                    <input
                      id="checkout-hotel"
                      type="text"
                      value={hotelName}
                      onChange={(e) => setHotelName(e.target.value)}
                      placeholder="e.g. Steigenberger Aldau"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900"
                    />
                    {errors.hotelName && (
                      <p className="text-xs text-rose-600 mt-1">
                        {errors.hotelName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="checkout-room"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Room #
                    </label>
                    <input
                      id="checkout-room"
                      type="text"
                      value={roomNumber}
                      onChange={(e) => setRoomNumber(e.target.value)}
                      placeholder="412"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 font-mono"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Confirm Reservation (${summary.total.toFixed(2)})
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedTours: TourItem[];
  onToggleWishlist: (tourId: string) => void;
  onExplore: (slug: string) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistedTours,
  onToggleWishlist,
  onExplore,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
    >
      <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            <h2
              id="wishlist-modal-title"
              className="text-lg font-bold text-slate-900 font-serif-display"
            >
              Saved Wishlist ({wishlistedTours.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close wishlist"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {wishlistedTours.length === 0 ? (
          <p className="text-sm text-slate-600 py-8 text-center">
            No tours saved yet. Click &ldquo;Add to wishlist&rdquo; on any Red
            Sea trip card to bookmark it here.
          </p>
        ) : (
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {wishlistedTours.map((tour) => (
              <div
                key={tour.id}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-mono">
                    {tour.duration} · ${tour.price.toFixed(2)} / person
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onExplore(tour.slug);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white text-xs font-bold"
                  >
                    Explore
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(tour.id)}
                    aria-label={`Remove ${tour.title} from wishlist`}
                    className="p-1.5 text-slate-400 hover:text-rose-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signup';
  onClose: () => void;
  onSuccessAuth: (user: { name: string; email: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onSuccessAuth,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 4) {
      setError('Please enter your password (at least 4 characters).');
      return;
    }
    const displayName =
      mode === 'signup' && name.trim()
        ? name.trim()
        : email.split('@')[0];
    onSuccessAuth({ name: displayName, email: email.trim() });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
    >
      <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
          <h2
            id="auth-modal-title"
            className="text-lg font-bold text-slate-900 font-serif-display"
          >
            {mode === 'login'
              ? 'Guest Login — El Basha Sea Trips'
              : 'Create Guest Account'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close authentication modal"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {mode === 'signup' && (
            <div>
              <label
                htmlFor="auth-name"
                className="block text-xs font-bold text-slate-800 mb-1"
              >
                Full Name
              </label>
              <input
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="auth-email"
              className="block text-xs font-bold text-slate-800 mb-1"
            >
              Email Address
            </label>
            <input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="guest@example.com"
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900"
            />
          </div>

          <div>
            <label
              htmlFor="auth-password"
              className="block text-xs font-bold text-slate-800 mb-1"
            >
              Password
            </label>
            <input
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900"
            />
          </div>

          {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#035E73] hover:bg-[#024859] text-white text-xs font-bold transition-colors"
          >
            {mode === 'login' ? 'Login to Account' : 'Create Account'}
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
          {mode === 'login' ? (
            <>
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="font-bold text-[#0284C7] hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className="font-bold text-[#0284C7] hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="install-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
    >
      <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-[#035E73]" />
            <h2
              id="install-modal-title"
              className="text-lg font-bold text-slate-900 font-serif-display"
            >
              El Basha Sea Trips Mobile Companion
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close install app dialog"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Save El Basha Sea Trips to your home screen for offline access to your
          Hurghada hotel pickup schedule, marina boarding pass, and 1-tap
          WhatsApp crew support.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700 mb-5">
          <div className="flex items-center gap-2 font-bold text-[#035E73]">
            <ShieldCheck className="w-4 h-4" />
            <span>Instant Web App Features</span>
          </div>
          <p>• Live hotel pickup vehicle tracking in Hurghada &amp; El Gouna</p>
          <p>• Offline digital boarding ticket for Giftun &amp; Orange Bay</p>
          <p>• Direct WhatsApp line to Marina Berth B4 dispatcher</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#035E73] hover:bg-[#024859] text-white text-xs font-bold"
        >
          Got It
        </button>
      </div>
    </div>
  );
};
