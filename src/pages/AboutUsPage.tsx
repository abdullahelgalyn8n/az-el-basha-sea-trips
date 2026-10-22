import React from 'react';
import {
  Anchor,
  ShieldCheck,
  Award,
  Users,
  ArrowRight,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { getMarineArtwork } from '../utils/marineArtwork';
import { CompanyPillarsSection } from '../components/CompanyPillarsSection';

interface AboutUsPageProps {
  onNavigate: (path: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50">
      {/* High-Contrast Hero Section (Replaces the empty white/black/teal rectangles in the About Us screenshot) */}
      <section className="relative bg-[#022c3a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getMarineArtwork('private-yacht-sunset')}
            alt="El Basha Sea Trips luxury fleet in Hurghada Red Sea"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021E28]/95 via-[#021E28]/80 to-[#021E28]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-3">
              About El Basha Sea Trips · Hurghada, Red Sea
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-display text-white leading-tight mb-5">
              Crafting Unforgettable Red Sea Journeys Since Day One
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
              Based at Hurghada New Marina, El Basha Sea Trips operates a modern
              fleet of excursion yachts, speedboats, and diving vessels—connecting
              international travelers with the untouched islands and coral reefs
              of the Red Sea.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/tour-list')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-sm font-bold transition-colors"
              >
                <span>Explore Our 12 Sea Trips</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white text-sm font-semibold transition-colors"
              >
                <span>Contact Our Marina Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quantified Proof & Fleet Standards Strip */}
      <section className="py-14 bg-[#035E73] text-white border-b border-sky-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 tabular-nums">
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15">
              <Anchor className="w-6 h-6 text-sky-300 mb-3" />
              <div className="text-3xl font-bold font-mono text-white mb-1">
                12+
              </div>
              <p className="text-xs text-sky-100 font-medium">
                Curated Daily Island, Reef &amp; Yacht Routes
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15">
              <Users className="w-6 h-6 text-amber-300 mb-3" />
              <div className="text-3xl font-bold font-mono text-white mb-1">
                18,500+
              </div>
              <p className="text-xs text-sky-100 font-medium">
                International Guests Hosted Across 28 Countries
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15">
              <ShieldCheck className="w-6 h-6 text-emerald-300 mb-3" />
              <div className="text-3xl font-bold font-mono text-white mb-1">
                100%
              </div>
              <p className="text-xs text-sky-100 font-medium">
                Coast Guard Inspected Vessels &amp; PADI Guides
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15">
              <Award className="w-6 h-6 text-rose-300 mb-3" />
              <div className="text-3xl font-bold font-mono text-white mb-1">
                4.9 / 5
              </div>
              <p className="text-xs text-sky-100 font-medium">
                Verified Guest Satisfaction Rating in Hurghada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Vision, Mission, Values & Goals Section (Preserves every word from the About Us screenshot) */}
      <CompanyPillarsSection />

      {/* Why Guests Choose El Basha Sea Trips */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 bg-slate-100">
                <img
                  src={getMarineArtwork('orange-bay')}
                  alt="Orange Bay Island lagoon excursion"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#035E73]">
                <Compass className="w-4 h-4" />
                <span>Marine Hospitality Standard</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-display">
                Designed for Comfort, Safety, and Lasting Memories
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you are stepping onto the powdery white sands of Orange
                Bay, snorkeling alongside sea turtles at Shaab El Erg, or
                celebrating sunset aboard a private motor yacht, our team
                handles every logistical detail from hotel gate to marina berth.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  'Daily sanitized silicone masks, snorkels, fins & life jackets in all sizes',
                  'Freshly prepared onboard open-buffet lunches cooked by marine chefs',
                  'Multilingual guides fluent in Arabic, English, German, Russian, French & Italian',
                  'Transparent pricing with instant online booking and WhatsApp pickup coordination',
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#035E73] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
