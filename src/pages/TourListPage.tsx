import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  List,
  RotateCcw,
} from 'lucide-react';
import { TourCategory, TourItem } from '../data/tours';
import {
  TourFilterState,
  DEFAULT_TOUR_FILTERS,
  filterAndSortTours,
  SortOption,
  DurationFilter,
} from '../utils/tourLogic';
import { TourCard } from '../components/TourCard';

interface TourListPageProps {
  tours: TourItem[];
  filters: TourFilterState;
  onChangeFilters: (next: TourFilterState) => void;
  wishlist: string[];
  onToggleWishlist: (tourId: string) => void;
  onNavigate: (path: string) => void;
  onQuickAdd: (tour: TourItem) => void;
}

export const TourListPage: React.FC<TourListPageProps> = ({
  tours,
  filters,
  onChangeFilters,
  wishlist,
  onToggleWishlist,
  onNavigate,
  onQuickAdd,
}) => {
  const [date, setDate] = useState('2026-11-15');
  const [guests, setGuests] = useState(2);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredTours = filterAndSortTours(tours, filters);

  const handleClearFilters = () => {
    onChangeFilters(DEFAULT_TOUR_FILTERS);
  };

  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.destination !== '' ||
    filters.category !== 'all' ||
    filters.durationFilter !== 'all' ||
    filters.maxPrice < 250 ||
    filters.featuredOnly;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Top Search & Filter Header Area (Matches Tour List Screenshot with High Contrast) */}
      <div className="bg-gradient-to-b from-white to-slate-50 pt-8 pb-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-display">
              Red Sea &amp; Hurghada Tour List
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Browse all {tours.length} verified island excursions, coral
              snorkeling trips, diving packages, and private yacht charters.
            </p>
          </div>

          {/* Primary Search Card (Destinations / Dates / Guests / Search Button) */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Destinations */}
              <div className="md:col-span-4 md:border-r border-slate-200 md:pr-4">
                <label
                  htmlFor="tourlist-destination"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1"
                >
                  <MapPin className="w-4 h-4 text-[#FF385C]" />
                  <span>Destinations</span>
                </label>
                <input
                  id="tourlist-destination"
                  type="text"
                  value={filters.searchQuery}
                  onChange={(e) =>
                    onChangeFilters({
                      ...filters,
                      searchQuery: e.target.value,
                    })
                  }
                  placeholder="Where are you going? (e.g. Orange Bay)"
                  className="w-full text-sm text-slate-800 placeholder:text-slate-400 font-medium bg-transparent focus:outline-none py-1"
                />
              </div>

              {/* Dates */}
              <div className="md:col-span-3 md:border-r border-slate-200 md:pr-4">
                <label
                  htmlFor="tourlist-date"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1"
                >
                  <Calendar className="w-4 h-4 text-[#FF385C]" />
                  <span>Dates</span>
                </label>
                <input
                  id="tourlist-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-sm text-slate-800 font-medium bg-transparent focus:outline-none py-1 font-mono"
                />
              </div>

              {/* Guests */}
              <div className="md:col-span-3">
                <label
                  htmlFor="tourlist-guests"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1"
                >
                  <Users className="w-4 h-4 text-[#FF385C]" />
                  <span>Guests</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="tourlist-guests"
                    type="number"
                    min={1}
                    max={35}
                    value={guests}
                    onChange={(e) =>
                      setGuests(Math.max(1, Number(e.target.value)))
                    }
                    className="w-16 text-sm font-bold text-slate-900 border border-slate-200 rounded-md px-2 py-1 tabular-nums"
                  />
                  <span className="text-sm text-slate-600 font-medium">
                    Persons
                  </span>
                </div>
              </div>

              {/* Coral Search Button */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={() =>
                    onChangeFilters({
                      ...filters,
                      searchQuery: filters.searchQuery.trim(),
                    })
                  }
                  aria-label="Filter tours"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF385C] hover:bg-[#E11D48] text-white text-sm font-bold transition-colors shadow-xs"
                >
                  <Search className="w-4 h-4" />
                  <span className="md:hidden">Search Tours</span>
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Search Toggle Row */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            {/* Quick Category Segmented Bar */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'All Trips (12)' },
                { id: 'island', label: 'Islands (6)' },
                { id: 'snorkeling', label: 'Snorkeling (2)' },
                { id: 'diving', label: 'Scuba Diving (1)' },
                { id: 'yacht', label: 'Private Yacht (1)' },
                { id: 'submarine', label: 'Submarine (1)' },
                { id: 'watersports', label: 'Water Sports (1)' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() =>
                    onChangeFilters({
                      ...filters,
                      category: cat.id as TourCategory,
                    })
                  }
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                    filters.category === cat.id
                      ? 'bg-[#035E73] text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setAdvancedOpen(!advancedOpen)}
              aria-expanded={advancedOpen}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#035E73] bg-white px-3.5 py-2 rounded-lg border border-slate-200 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF385C]" />
              <span>Advanced Search</span>
              {advancedOpen ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Expandable Advanced Search Drawer */}
          {advancedOpen && (
            <div className="mt-4 bg-white rounded-xl border border-slate-200 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 shadow-xs">
              {/* Destination Zone Filter */}
              <div>
                <label
                  htmlFor="adv-zone"
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  Departure / Island Zone
                </label>
                <select
                  id="adv-zone"
                  value={filters.destination}
                  onChange={(e) =>
                    onChangeFilters({
                      ...filters,
                      destination: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-800 bg-white"
                >
                  <option value="">All Red Sea Zones</option>
                  <option value="Giftun Island">Giftun Island National Park</option>
                  <option value="Magawish Island">Magawish Archipelago</option>
                  <option value="Hurghada">Hurghada Coral Reefs</option>
                  <option value="Hurghada Marina">Hurghada New Marina</option>
                  <option value="Soma Bay">Soma Bay &amp; Safaga South</option>
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label
                  htmlFor="adv-duration"
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  Trip Duration
                </label>
                <select
                  id="adv-duration"
                  value={filters.durationFilter}
                  onChange={(e) =>
                    onChangeFilters({
                      ...filters,
                      durationFilter: e.target.value as DurationFilter,
                    })
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-800 bg-white"
                >
                  <option value="all">Any Duration</option>
                  <option value="short">Short Trips (3–4 hours)</option>
                  <option value="half-day">Standard Island Cruise (6 hours)</option>
                  <option value="full-day">Full-Day Safari (7–8 hours)</option>
                </select>
              </div>

              {/* Max Price Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5">
                  <label htmlFor="adv-price">Max Price per Person</label>
                  <span className="font-mono text-[#035E73]">
                    ${filters.maxPrice}
                  </span>
                </div>
                <input
                  id="adv-price"
                  type="range"
                  min={20}
                  max={250}
                  step={5}
                  value={filters.maxPrice}
                  onChange={(e) =>
                    onChangeFilters({
                      ...filters,
                      maxPrice: Number(e.target.value),
                    })
                  }
                  className="w-full accent-[#035E73]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>$20</span>
                  <span>$100</span>
                  <span>$250</span>
                </div>
              </div>

              {/* Featured Only Checkbox */}
              <div className="flex flex-col justify-center">
                <label className="inline-flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={filters.featuredOnly}
                    onChange={(e) =>
                      onChangeFilters({
                        ...filters,
                        featuredOnly: e.target.checked,
                      })
                    }
                    className="w-4 h-4 rounded text-[#035E73] focus:ring-[#035E73]"
                  />
                  <span>Show Featured Trips Only</span>
                </label>
                <p className="text-[11px] text-slate-500 mt-1">
                  Displays our top-rated signature island &amp; VIP yacht
                  experiences.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Toolbar & Tours Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Toolbar matching screenshot: "X Tours found Clear Filter" on left, "Sort by" + View Mode buttons on right */}
        <div className="pb-4 mb-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
              {filteredTours.length}{' '}
              {filteredTours.length === 1 ? 'Tour' : 'Tours'} found
            </h2>
            <button
              type="button"
              onClick={handleClearFilters}
              className={`inline-flex items-center gap-1 text-xs font-bold transition-colors ${
                hasActiveFilters
                  ? 'text-[#0284C7] hover:text-[#035E73] underline underline-offset-4'
                  : 'text-[#0284C7] hover:text-[#035E73]'
              }`}
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear Filter</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort-tours-select"
                className="text-xs font-bold text-slate-700 whitespace-nowrap"
              >
                Sort by
              </label>
              <select
                id="sort-tours-select"
                value={filters.sortBy}
                onChange={(e) =>
                  onChangeFilters({
                    ...filters,
                    sortBy: e.target.value as SortOption,
                  })
                }
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#035E73]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Highest Guest Rating</option>
                <option value="duration-asc">Duration: Shortest First</option>
              </select>
            </div>

            {/* List / Grid View Switcher */}
            <div
              role="group"
              aria-label="Tour layout view mode"
              className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200"
            >
              <button
                type="button"
                onClick={() => setViewMode('list')}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'list'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Empty State vs Populated Catalog */}
        {filteredTours.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-8">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              No matching Red Sea tours found
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Try adjusting your destination search, category filter, or maximum
              price slider to see all 12 available Hurghada sea trips.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-5 py-2.5 rounded-xl bg-[#035E73] hover:bg-[#024859] text-white text-xs font-bold transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                viewMode="grid"
                isWishlisted={wishlist.includes(tour.id)}
                onToggleWishlist={onToggleWishlist}
                onExplore={(slug) => onNavigate(`/tour/${slug}`)}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                viewMode="list"
                isWishlisted={wishlist.includes(tour.id)}
                onToggleWishlist={onToggleWishlist}
                onExplore={(slug) => onNavigate(`/tour/${slug}`)}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
