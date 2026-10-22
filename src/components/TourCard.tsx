import React from 'react';
import { Heart, Clock, MapPin, Star, ArrowUpRight, Plus } from 'lucide-react';
import { TourItem } from '../data/tours';
import { getMarineArtwork } from '../utils/marineArtwork';

interface TourCardProps {
  tour: TourItem;
  viewMode?: 'grid' | 'list';
  isWishlisted: boolean;
  onToggleWishlist: (tourId: string) => void;
  onExplore: (slug: string) => void;
  onQuickAdd: (tour: TourItem) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  viewMode = 'grid',
  isWishlisted,
  onToggleWishlist,
  onExplore,
  onQuickAdd,
}) => {
  const artworkUrl = getMarineArtwork(tour.sceneId);

  if (viewMode === 'list') {
    return (
      <article className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col md:flex-row">
        {/* Left Image Container */}
        <div className="relative md:w-80 lg:w-96 shrink-0 bg-slate-100 overflow-hidden aspect-4/3 md:aspect-auto">
          <img
            src={artworkUrl}
            alt={tour.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-x-0 top-0 p-3.5 flex items-center justify-between bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-transparent">
            {tour.featured ? (
              <span className="text-xs font-bold tracking-wide text-white bg-[#E11D48] px-2.5 py-1 rounded">
                Featured
              </span>
            ) : (
              <span className="text-xs font-semibold text-white/95">
                {tour.categoryLabel}
              </span>
            )}
            <button
              type="button"
              onClick={() => onToggleWishlist(tour.id)}
              aria-label={
                isWishlisted
                  ? `Remove ${tour.title} from wishlist`
                  : `Add ${tour.title} to wishlist`
              }
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                isWishlisted
                  ? 'bg-rose-600 text-white'
                  : 'bg-white/95 text-slate-800 hover:bg-white'
              }`}
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  isWishlisted ? 'fill-white text-white' : 'text-rose-600'
                }`}
              />
              <span>{isWishlisted ? 'Saved' : 'Add to wishlist'}</span>
            </button>
          </div>
        </div>

        {/* Right Details Container */}
        <div className="flex-1 p-6 flex flex-col justify-between gap-4">
          <div>
            {/* Clean Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600 mb-2">
              <span className="inline-flex items-center gap-1 text-[#035E73] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                {tour.duration}
              </span>
              <span aria-hidden="true">·</span>
              <span>{tour.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-amber-600 font-semibold tabular-nums">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                {tour.rating.toFixed(1)} ({tour.reviewsCount} reviews)
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#035E73] transition-colors mb-1.5">
              <a
                href={`/tour/${tour.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onExplore(tour.slug);
                }}
              >
                {tour.title}
              </a>
            </h3>

            <p className="text-xs font-medium text-slate-600 flex items-center gap-1.5 mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
              <span>{tour.location}</span>
            </p>

            <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
              {tour.shortSummary}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <div className="flex items-baseline gap-2 tabular-nums">
              <span className="text-xs text-slate-500 font-medium">From</span>
              <span className="text-xl font-bold text-slate-900 font-mono">
                ${tour.price.toFixed(2)}
              </span>
              {tour.originalPrice && (
                <span className="text-sm text-slate-400 line-through font-mono">
                  ${tour.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-xs text-slate-500">/ person</span>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => onQuickAdd(tour)}
                aria-label={`Quick book ${tour.title}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 hover:border-[#035E73] text-slate-800 hover:text-[#035E73] text-xs font-semibold transition-colors whitespace-nowrap"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Quick Book</span>
              </button>
              <a
                href={`/tour/${tour.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onExplore(tour.slug);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold transition-colors whitespace-nowrap"
              >
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col h-full">
      {/* Top Bar inside Card (Unboxed single-line metadata kicker + functional wishlist button) */}
      <div className="px-4 h-11 flex items-center justify-between gap-2 border-b border-slate-100 bg-white">
        <div className="flex items-center gap-1.5 text-xs font-bold tracking-tight whitespace-nowrap truncate">
          {tour.featured ? (
            <span className="text-[#E11D48]">Featured · {tour.destinationZone}</span>
          ) : (
            <span className="text-[#035E73] font-semibold">
              {tour.categoryLabel}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => onToggleWishlist(tour.id)}
          aria-label={
            isWishlisted
              ? `Remove ${tour.title} from wishlist`
              : `Add ${tour.title} to wishlist`
          }
          className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors whitespace-nowrap ${
            isWishlisted
              ? 'text-rose-600'
              : 'text-slate-600 hover:text-rose-600'
          }`}
        >
          <Heart
            className={`w-3.5 h-3.5 ${
              isWishlisted ? 'fill-rose-600 text-rose-600' : 'text-slate-500'
            }`}
          />
          <span>{isWishlisted ? 'Wishlisted' : 'Add to wishlist'}</span>
        </button>
      </div>

      {/* Scenic Marine Artwork Image (Replaces broken placeholder icon from screenshot) */}
      <a
        href={`/tour/${tour.slug}`}
        onClick={(e) => {
          e.preventDefault();
          onExplore(tour.slug);
        }}
        className="relative block aspect-4/3 bg-slate-100 overflow-hidden"
      >
        <img
          src={artworkUrl}
          alt={tour.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
        <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-semibold">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-sky-300" />
            <span>{tour.duration}</span>
          </span>
          <span className="inline-flex items-center gap-1 tabular-nums">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{tour.rating.toFixed(1)}</span>
          </span>
        </div>
      </a>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#035E73] transition-colors line-clamp-1 mb-1">
            <a
              href={`/tour/${tour.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onExplore(tour.slug);
              }}
            >
              {tour.title}
            </a>
          </h3>

          <p className="text-xs font-medium text-slate-600 flex items-center gap-1 mb-2.5 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
            <span className="truncate">{tour.location}</span>
          </p>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
            {tour.shortSummary}
          </p>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5 tabular-nums">
            <span className="text-base font-bold text-slate-900 font-mono">
              ${tour.price.toFixed(2)}
            </span>
            {tour.originalPrice && (
              <span className="text-xs text-slate-400 line-through font-mono">
                ${tour.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => onQuickAdd(tour)}
              aria-label={`Quick book ${tour.title}`}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-[#035E73] text-slate-700 hover:text-[#035E73] text-xs font-semibold transition-colors whitespace-nowrap"
            >
              + Book
            </button>
            <a
              href={`/tour/${tour.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onExplore(tour.slug);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold transition-colors whitespace-nowrap"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
