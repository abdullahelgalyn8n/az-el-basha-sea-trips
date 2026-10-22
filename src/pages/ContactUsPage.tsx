import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  Clock,
  MessageCircle,
  Navigation,
} from 'lucide-react';
import { validateContactForm } from '../utils/tourLogic';

export const ContactUsPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{
    firstName: string;
    secondName: string;
    email: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm({
      firstName,
      secondName,
      phone,
      email,
      message,
    });
    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmittedData(null);
      return;
    }

    setErrors({});
    setSubmittedData({
      firstName: firstName.trim(),
      secondName: secondName.trim(),
      email: email.trim(),
    });
    setFirstName('');
    setSecondName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-slate-50 pb-20">
      {/* Interactive Hurghada Marina Map Header (Replaces the broken blank gray map iframe from the screenshot) */}
      <div className="relative h-80 sm:h-96 bg-[#042f3d] overflow-hidden border-b border-slate-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 450"
          className="w-full h-full object-cover"
          aria-label="Interactive Hurghada New Marina Red Sea Coastline Map"
        >
          {/* Landmass (Hurghada Coast) & Red Sea Waters */}
          <rect width="1600" height="450" fill="#035e73" />
          <path
            d="M0 0 L760 0 L820 110 L780 220 L860 320 L830 450 L0 450 Z"
            fill="#f1f5f9"
          />
          {/* Coastal Roads & Marina Grid */}
          <g stroke="#cbd5e1" strokeWidth="4" fill="none">
            <path d="M120 0 L480 450" />
            <path d="M520 0 L720 450" />
            <path d="M0 160 L800 180" />
            <path d="M0 310 L840 290" />
          </g>
          <g stroke="#94a3b8" strokeWidth="8" fill="none">
            <path d="M650 0 L750 220 L800 450" />
          </g>
          {/* Giftun Islands in the Red Sea */}
          <path
            d="M1120 95 Q 1230 70 1290 155 Q 1320 240 1220 275 Q 1140 240 1120 95 Z"
            fill="#fde68a"
            opacity="0.9"
          />
          <ellipse
            cx="1210"
            cy="185"
            rx="135"
            ry="115"
            fill="#2dd4bf"
            opacity="0.3"
          />
          <text
            x="1165"
            y="190"
            fill="#0f172a"
            fontSize="15"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Giftun &amp; Orange Bay
          </text>
          {/* Sea Route Dashed Line from Marina to Orange Bay */}
          <path
            d="M785 220 Q 980 180 1150 185"
            stroke="#38bdf8"
            strokeWidth="3.5"
            strokeDasharray="8 6"
            fill="none"
          />
          {/* Hurghada New Marina Pin */}
          <circle
            cx="785"
            cy="220"
            r="28"
            fill="#e11d48"
            opacity="0.25"
          />
          <circle
            cx="785"
            cy="220"
            r="10"
            fill="#e11d48"
            stroke="#ffffff"
            strokeWidth="3"
          />
        </svg>

        {/* Floating Marina Map Info Badge */}
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-md border border-slate-200 max-w-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-[#035E73] mb-1">
            <Navigation className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Hurghada New Marina Berth B4</span>
          </div>
          <p className="text-xs text-slate-600 mb-2.5">
            Sakala Square, Hurghada, Red Sea Governorate, Egypt (27.2225° N,
            33.8414° E)
          </p>
          <a
            href="https://maps.app.goo.gl/iPUVtcf8JcnjE5rS"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#035E73]"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Contact Card (Matches the exact structure of the Contact Us screenshot with enhanced contrast) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-sm font-bold text-[#035E73] font-serif-display mb-1">
              Contact Us
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
              Get In Touch
            </h1>
            <p className="text-sm text-slate-600 font-medium">
              We are at your disposal 7 days a week!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Store Location, Phone Number, Email Us */}
            <div className="lg:col-span-5 space-y-6 lg:border-r border-slate-200 lg:pr-8">
              {/* Store Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200/80 text-[#035E73] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-bold text-[#035E73] mb-1">
                    Store Location
                  </h2>
                  <p className="text-xs text-slate-700 font-medium mb-1">
                    Hurghada New Marina, Red Sea, Egypt
                  </p>
                  <a
                    href="https://maps.app.goo.gl/iPUVtcf8JcnjE5rS"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#0284C7] hover:underline break-all"
                  >
                    maps.app.goo.gl/iPUVtcf8JcnjE5rS
                  </a>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200/80 text-[#035E73] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#035E73] mb-1">
                    Phone Number &amp; WhatsApp
                  </h2>
                  <p className="text-sm font-mono font-bold text-slate-800 tabular-nums">
                    +20 100 229 4580
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Extension (229) · Marina Dispatch Desk
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200/80 text-[#035E73] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#035E73] mb-1">
                    Email us
                  </h2>
                  <a
                    href="mailto:contact@elbashaseatrips.com"
                    className="text-sm font-medium text-slate-800 hover:text-[#035E73]"
                  >
                    contact@elbashaseatrips.com
                  </a>
                </div>
              </div>

              {/* Operating Hours Info Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Clock className="w-4 h-4 text-[#035E73]" />
                  <span>Marina Desk &amp; Support Hours</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Daily from <strong>07:00 AM to 11:00 PM</strong> (Egypt Time).
                  Instant WhatsApp booking support available 24/7.
                </p>
                <a
                  href="https://wa.me/201002294580"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:underline pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Leave A Reply Form */}
            <div className="lg:col-span-7">
              <h2 className="text-xl font-bold text-[#035E73] font-serif-display mb-1">
                Leave A Reply
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                We are always ready to assist you and help you plan your perfect
                sea trip.
              </p>

              {submittedData && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">
                      Thank you, {submittedData.firstName}{' '}
                      {submittedData.secondName}! Your inquiry has been sent.
                    </p>
                    <p className="text-emerald-800 mt-0.5">
                      Our Hurghada Marina desk has received your message and
                      will reply to <strong>{submittedData.email}</strong>{' '}
                      shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-first-name"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="contact-first-name"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#035E73]"
                    />
                    {errors.firstName && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-second-name"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      Second Name
                    </label>
                    <input
                      id="contact-second-name"
                      type="text"
                      value={secondName}
                      onChange={(e) => setSecondName(e.target.value)}
                      placeholder="Second name"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#035E73]"
                    />
                    {errors.secondName && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">
                        {errors.secondName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone or WhatsApp number"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#035E73]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#035E73]"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-800 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us which Red Sea trip, date, or hotel pickup you need help with..."
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#035E73]"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-600 mt-1 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-lg bg-[#035E73] hover:bg-[#024859] text-white text-sm font-bold font-serif-display transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
