import React from 'react';
import { Waves, Target, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { COMPANY_PILLARS } from '../data/tours';

export const CompanyPillarsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="py-20 bg-white border-y border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* High-contrast section header replacing the low-contrast cyan cursive text */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-[#035E73] mb-2">
            Goals · Values · Mission · Vision
          </p>
          <h2
            id="pillars-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif-display mb-4"
          >
            Our Commitment to Red Sea Excellence
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every cruise, island landing, and coral reef excursion is guided by
            strict marine safety standards and authentic Egyptian hospitality.
          </p>
        </div>

        {/* 2x2 Balanced Architectural Grid (Fixes the orphan 4th card on a second row in the original screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: OUR VISION */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#035E73]/10 text-[#035E73] flex items-center justify-center mb-5">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">
                {COMPANY_PILLARS.vision.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {COMPANY_PILLARS.vision.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Hurghada & Red Sea Region</span>
              <span> Est. Red Sea Fleet</span>
            </div>
          </div>

          {/* Card 2: OUR MISSION */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">
                {COMPANY_PILLARS.mission.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {COMPANY_PILLARS.mission.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Certified Marine Crew</span>
              <span>100% Guest Satisfaction Focus</span>
            </div>
          </div>

          {/* Card 3: OUR VALUES */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-4 tracking-tight">
              {COMPANY_PILLARS.values.title}
            </h3>
            <ul className="space-y-3">
              {COMPANY_PILLARS.values.items.map((item) => (
                <li key={item.title} className="text-sm text-slate-700 leading-relaxed">
                  <strong className="font-bold text-[#035E73]">
                    • {item.title}:
                  </strong>{' '}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: OUR GOALS */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-sky-500/15 text-[#0284C7] flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-4 tracking-tight">
              {COMPANY_PILLARS.goals.title}
            </h3>
            <ul className="space-y-3">
              {COMPANY_PILLARS.goals.items.map((goal) => (
                <li
                  key={goal}
                  className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#035E73] shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
