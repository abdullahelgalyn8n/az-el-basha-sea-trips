import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  ArrowRight,
  Compass,
  ShieldCheck,
  Utensils,
  Sparkles,
} from 'lucide-react';
import { TourCategory, TourItem } from '../data/tours';
import { getMarineArtwork } from '../utils/marineArtwork';
import { TourCard } from '../components/TourCard';
import { CompanyPillarsSection } from '../components/CompanyPillarsSection';

interface HomePageProps {
  tours: TourItem[];
  wishlist: string[];
  onToggleWishlist: (tourId: string) => void;
  onNavigate: (path: string) => void;
  onSearchToTourList: (params: {
    destination: string;
    date: string;
    guests: number;
  }) => void;
  onQuickAdd: (tour: TourItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  tours,
  wishlist,
  onToggleWishlist,
  onNavigate,
  onSearchToTourList,
  onQuickAdd,
}) => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('2026-11-15');
  const [guests, setGuests] = useState(2);
  const [activeCategory, setActiveCategory] = useState<TourCategory>('all');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchToTourList({ destination, date, guests });
  };

  const displayedTours =
    activeCategory === 'all'
      ? tours.slice(0, 8)
      : tours.filter((t) => t.category === activeCategory).slice(0, 8);

  return (
    <div>
      {/* Hero Banner with Red Sea Yacht Artwork & Measured Contrast Scrim */}
      <section className="relative bg-[#022c3a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getMarineArtwork('hero-red-sea')}
            alt="Luxury yacht cruising turquoise waters of the Red Sea in Hurghada"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021E28] via-[#021E28]/65 to-[#021E28]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-sky-300 mb-3">
              Hurghada · Giftun Islands · Red Sea Marine Excursions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif-display leading-tight mb-5">
              Discover Weekly Red Sea Island &amp; Reef Adventures
            </h1>
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl mb-8">
              We are committed to providing a comfortable, safe, and enjoyable
              marine experience for every guest—from Orange Bay and Hula Hula
              Island to guided coral snorkeling and private yacht charters.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/tour-list')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-sm font-bold shadow-sm transition-colors whitespace-nowrap"
              >
                <span>Get Started — Explore All 12 Tours</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/about-us')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-xs border border-white/30 text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <span>Learn About Our Fleet</span>
              </button>
            </div>
          </div>

          {/* Search Bar Module (High Contrast Light Card matching Tour List bar) */}
          <form
            onSubmit={handleHeroSearch}
            className="bg-white text-slate-900 rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200 max-w-5xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Destinations */}
              <div className="md:col-span-5 md:border-r border-slate-200 md:pr-4">
                <label
                  htmlFor="hero-destination"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1"
                >
                  <MapPin className="w-4 h-4 text-[#E11D48]" />
                  <span>Destinations</span>
                </label>
                <select
                  id="hero-destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-sm text-slate-700 font-medium bg-transparent focus:outline-none py-1"
                >
                  <option value="">Where are you going? (All Red Sea)</option>
                  <option value="Orange Bay">Orange Bay - Giftun Island</option>
                  <option value="Hula Hula">Hula Hula Beach Island</option>
                  <option value="Magawish">Magawish Beach Island</option>
                  <option value="Mahmya">Mahmya Eco-Beach</option>
                  <option value="Hurghada">Hurghada Coral Reefs &amp; Marina</option>
                  <option value="Soma Bay">Soma Bay &amp; Utopia Island</option>
                </select>
              </div>

              {/* Dates */}
              <div className="md:col-span-3 md:border-r border-slate-200 md:pr-4">
                <label
                  htmlFor="hero-date"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1"
                >
                  <Calendar className="w-4 h-4 text-[#E11D48]" />
                  <span>Dates</span>
                </label>
                <input
                  id="hero-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-sm text-slate-700 font-medium bg-transparent focus:outline-none py-1 font-mono"
                />
              </div>

              {/* Guests */}
              <div className="md:col-span-2">
                <label
                  htmlFor="hero-guests"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1"
                >
                  <Users className="w-4 h-4 text-[#E11D48]" />
                  <span>Guests</span>
                </label>
                <select
                  id="hero-guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full text-sm text-slate-700 font-medium bg-transparent focus:outline-none py-1 tabular-nums"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Person' : 'Persons'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  aria-label="Search Red Sea Tours"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF385C] hover:bg-[#E11D48] text-white text-sm font-bold transition-colors shadow-xs"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Destinations & Expanded Tour Catalog Section */}
      <section
        aria-labelledby="popular-destinations-heading"
        className="py-20 bg-[#035E73]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              {/* Fixed contrast: warm amber/sky text instead of dark green on dark teal */}
              <p className="text-sm font-semibold italic text-amber-300 font-serif-display mb-1">
                3 Steps For The Perfect Trip
              </p>
              <h2
                id="popular-destinations-heading"
                className="text-3xl sm:text-4xl font-bold text-white font-serif-display"
              >
                Popular Destinations &amp; Sea Trips
              </h2>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter popular destinations by category"
              className="flex flex-wrap items-center gap-1.5 bg-[#024859] p-1.5 rounded-xl border border-sky-400/20"
            >
              {[
                { id: 'all', label: 'All Popular (8)' },
                { id: 'island', label: 'Islands' },
                { id: 'snorkeling', label: 'Snorkeling' },
                { id: 'diving', label: 'Diving' },
                { id: 'yacht', label: 'Private Yacht' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === tab.id}
                  onClick={() => setActiveCategory(tab.id as TourCategory)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                    activeCategory === tab.id
                      ? 'bg-white text-[#035E73] shadow-xs'
                      : 'text-sky-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4-Column Responsive Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                isWishlisted={wishlist.includes(tour.id)}
                onToggleWishlist={onToggleWishlist}
                onExplore={(slug) => onNavigate(`/tour/${slug}`)}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>

          {/* Bottom View All CTA */}
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => onNavigate('/tour-list')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#035E73] hover:bg-sky-50 text-sm font-bold shadow-sm transition-colors"
            >
              <span>Browse Complete Catalog ({tours.length} Red Sea Tours)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3 Steps For The Perfect Trip (Replaces the empty teal/black blocks in the screenshot) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#035E73] mb-2">
              How It Works
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-display">
              3 Simple Steps For The Perfect Red Sea Trip
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#035E73] bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                  01. SELECT TRIP
                </span>
                <Compass className="w-5 h-5 text-[#0284C7]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Choose Your Island or Reef
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Compare 12 verified Hurghada sea trips—from Orange Bay and Hula
                Hula Island to scuba diving, submarines, and private yachts.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#035E73] bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                  02. HOTEL PICKUP
                </span>
                <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Door-to-Door Resort Transfer
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enter your hotel name and room number at checkout. Our
                air-conditioned fleet picks you up directly from your resort
                gate.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#035E73] bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                  03. SAIL &amp; DINE
                </span>
                <Utensils className="w-5 h-5 text-[#0284C7]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                All-Inclusive Onboard Experience
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enjoy sanitized snorkeling gear, certified marine guides,
                freshly cooked open-buffet lunch, and unlimited soft drinks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values & Goals Section */}
      <CompanyPillarsSection />
    </div>
  );
};
