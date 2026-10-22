import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Star,
  Heart,
  CheckCircle2,
  XCircle,
  Calendar,
  Users,
  ShieldCheck,
  ArrowLeft,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { TourItem } from '../data/tours';
import { getMarineArtwork } from '../utils/marineArtwork';
import { calculateBookingLineTotal } from '../utils/tourLogic';

interface TourDetailPageProps {
  tour: TourItem;
  relatedTours: TourItem[];
  isWishlisted: boolean;
  onToggleWishlist: (tourId: string) => void;
  onNavigate: (path: string) => void;
  onAddToCart: (booking: {
    tour: TourItem;
    date: string;
    adults: number;
    children: number;
    privateTransfer: boolean;
    underwaterPhotos: boolean;
    lineTotal: number;
  }) => void;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({
  tour,
  relatedTours,
  isWishlisted,
  onToggleWishlist,
  onNavigate,
  onAddToCart,
}) => {
  const [date, setDate] = useState('2026-11-15');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [privateTransfer, setPrivateTransfer] = useState(false);
  const [underwaterPhotos, setUnderwaterPhotos] = useState(false);

  const lineTotal = calculateBookingLineTotal(
    tour.price,
    adults,
    children,
    privateTransfer,
    underwaterPhotos
  );

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddToCart({
      tour,
      date,
      adults,
      children,
      privateTransfer,
      underwaterPhotos,
      lineTotal,
    });
  };

  return (
    <div className="bg-slate-50 pb-20">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <button
              type="button"
              onClick={() => onNavigate('/tour-list')}
              className="inline-flex items-center gap-1.5 text-[#035E73] hover:text-[#024859] font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Tour List</span>
            </button>
            <span aria-hidden="true">/</span>
            <span>{tour.categoryLabel}</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-900 font-semibold truncate max-w-xs">
              {tour.title}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onToggleWishlist(tour.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
              isWishlisted
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-white border-slate-200 text-slate-700 hover:border-rose-200 hover:text-rose-600'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted ? 'fill-rose-600 text-rose-600' : ''
              }`}
            />
            <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Split: Left Story & Itinerary / Right Sticky Contiguous Purchase Module */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Hero Image & Header Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="relative aspect-16/9 bg-slate-100">
                <img
                  src={getMarineArtwork(tour.sceneId)}
                  alt={tour.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-1">
                      {tour.categoryLabel} · Departure {tour.departureTime}
                    </p>
                    <h1 className="text-2xl sm:text-4xl font-bold font-serif-display text-white">
                      {tour.title}
                    </h1>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15 text-right tabular-nums">
                    <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>{tour.rating.toFixed(1)}</span>
                      <span className="text-xs text-slate-300 font-normal">
                        ({tour.reviewsCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Key Facts Bar */}
              <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-slate-100 bg-slate-50/60 text-xs">
                <div>
                  <span className="text-slate-500 block mb-0.5">Location</span>
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    {tour.destinationZone}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">Duration</span>
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#035E73] shrink-0" />
                    {tour.duration}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">Departure</span>
                  <span className="font-bold text-slate-900 font-mono">
                    {tour.departureTime}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">Transfer</span>
                  <span className="font-bold text-emerald-700">
                    Hotel Pickup Included
                  </span>
                </div>
              </div>

              {/* Overview & Highlights */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 font-serif-display mb-3">
                    Trip Overview
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {tour.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#035E73]" />
                    <span>Trip Highlights</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tour.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#035E73] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Schedule / Itinerary */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              <h2 className="text-xl font-bold text-slate-900 font-serif-display mb-6">
                Hour-by-Hour Sea Trip Schedule
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((step, idx) => (
                  <div
                    key={step.time}
                    className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0"
                  >
                    <div className="w-24 shrink-0 pt-0.5">
                      <span className="font-mono text-xs font-bold text-[#035E73]">
                        {step.time}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        0{idx + 1}. {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>What&apos;s Included</span>
                </h3>
                <ul className="space-y-2.5">
                  {tour.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>Not Included / Optional</span>
                </h3>
                <ul className="space-y-2.5">
                  {tour.excluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Contiguous Purchase Module (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6">
              <div className="pb-4 mb-5 border-b border-slate-200 flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">
                    Direct Operator Rate
                  </span>
                  <div className="flex items-baseline gap-2 tabular-nums">
                    <span className="text-3xl font-bold text-slate-900 font-mono">
                      ${tour.price.toFixed(2)}
                    </span>
                    {tour.originalPrice && (
                      <span className="text-sm text-slate-400 line-through font-mono">
                        ${tour.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-700">
                  Instant Confirmation
                </span>
              </div>

              <form onSubmit={handleBookSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5"
                  >
                    <Calendar className="w-4 h-4 text-[#035E73]" />
                    <span>Select Trip Date</span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-mono text-slate-900 focus:outline-none focus:border-[#035E73]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="booking-adults"
                      className="flex items-center gap-1 text-xs font-bold text-slate-800 mb-1.5"
                    >
                      <Users className="w-3.5 h-3.5 text-[#035E73]" />
                      <span>Adults (12+)</span>
                    </label>
                    <select
                      id="booking-adults"
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm font-bold text-slate-900 tabular-nums bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Adult' : 'Adults'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-children"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Children (50% Off)
                    </label>
                    <select
                      id="booking-children"
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm font-bold text-slate-900 tabular-nums bg-white"
                    >
                      {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Child' : 'Children'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Upgrades */}
                <div className="pt-2 space-y-2.5 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-700">
                    Optional Trip Upgrades
                  </p>
                  <label className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2 font-medium text-slate-800">
                      <input
                        type="checkbox"
                        checked={privateTransfer}
                        onChange={(e) => setPrivateTransfer(e.target.checked)}
                        className="rounded text-[#035E73]"
                      />
                      <span>Private Hotel Limousine Transfer</span>
                    </span>
                    <span className="font-mono font-bold text-slate-900">
                      +$15.00
                    </span>
                  </label>

                  <label className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2 font-medium text-slate-800">
                      <input
                        type="checkbox"
                        checked={underwaterPhotos}
                        onChange={(e) => setUnderwaterPhotos(e.target.checked)}
                        className="rounded text-[#035E73]"
                      />
                      <span>Pro Underwater GoPro Photo Pack</span>
                    </span>
                    <span className="font-mono font-bold text-slate-900">
                      +$20.00
                    </span>
                  </label>
                </div>

                {/* Live Total Box */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-1.5 text-xs tabular-nums">
                  <div className="flex justify-between text-slate-600">
                    <span>
                      {adults} Adult(s) × ${tour.price.toFixed(2)}
                    </span>
                    <span className="font-mono">
                      ${(adults * tour.price).toFixed(2)}
                    </span>
                  </div>
                  {children > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>
                        {children} Child(ren) × ${(tour.price * 0.5).toFixed(2)}
                      </span>
                      <span className="font-mono">
                        ${(children * tour.price * 0.5).toFixed(2)}
                      </span>
                    </div>
                  )}
                  {(privateTransfer || underwaterPhotos) && (
                    <div className="flex justify-between text-slate-600">
                      <span>Selected Upgrades</span>
                      <span className="font-mono">
                        +$
                        {(
                          (privateTransfer ? 15 : 0) +
                          (underwaterPhotos ? 20 : 0)
                        ).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-sm font-bold text-slate-900">
                    <span>Total Booking</span>
                    <span className="text-lg font-mono text-[#035E73]">
                      ${lineTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Book Now — Add to Cart (${lineTotal.toFixed(2)})</span>
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#035E73] shrink-0" />
                <span>
                  Free cancellation up to 24 hours before departure. Pay online
                  or cash at pickup.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tours */}
        {relatedTours.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 font-serif-display mb-6">
              More Red Sea Trips You May Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTours.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col justify-between gap-3"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#035E73] mb-1">
                      {item.categoryLabel} · {item.duration}
                    </p>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {item.shortSummary}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-slate-900">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate(`/tour/${item.slug}`)}
                      className="text-xs font-bold text-[#E11D48] hover:underline"
                    >
                      View Trip →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
