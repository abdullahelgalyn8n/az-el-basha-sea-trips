/**
 * Bespoke high-contrast SVG marine & Red Sea scenic illustrations
 * encoded as data URIs for instant, 100% reliable rendering in <img> tags.
 */

function toSvgDataUri(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

export type MarineSceneId =
  | 'hero-red-sea'
  | 'orange-bay'
  | 'hula-hula'
  | 'snorkeling-reef'
  | 'magawish-island'
  | 'paradise-island'
  | 'mahmya-beach'
  | 'private-yacht-sunset'
  | 'scuba-diving'
  | 'sindbad-submarine'
  | 'sharm-el-naga'
  | 'parasailing-adventure'
  | 'utopia-island';

export function getMarineArtwork(sceneId: MarineSceneId): string {
  switch (sceneId) {
    case 'hero-red-sea':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#022c3a"/>
              <stop offset="45%" stop-color="#035e73"/>
              <stop offset="100%" stop-color="#0ea5e9"/>
            </linearGradient>
            <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="40%" stop-color="#06b6d4"/>
              <stop offset="80%" stop-color="#14b8a6"/>
              <stop offset="100%" stop-color="#034759"/>
            </linearGradient>
            <linearGradient id="sand" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef3c7"/>
              <stop offset="100%" stop-color="#fde68a"/>
            </linearGradient>
            <radialGradient id="sun" cx="0.78" cy="0.24" r="0.22">
              <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
              <stop offset="40%" stop-color="#38bdf8" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#035e73" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="1600" height="520" fill="url(#sky)"/>
          <circle cx="1250" cy="210" r="320" fill="url(#sun)"/>
          <circle cx="1250" cy="210" r="62" fill="#fef9c3" opacity="0.9"/>
          <!-- Distant Red Sea Mountains (Sinai / Hurghada horizon) -->
          <path d="M0 490 L180 410 L350 455 L560 390 L790 465 L1020 420 L1290 470 L1480 430 L1600 475 L1600 520 L0 520 Z" fill="#043f52" opacity="0.7"/>
          <path d="M240 495 L450 435 L680 480 L940 440 L1180 485 L1600 460 L1600 520 L0 520 Z" fill="#032f3e" opacity="0.85"/>
          <!-- Turquoise Red Sea Lagoon -->
          <rect y="490" width="1600" height="410" fill="url(#sea)"/>
          <!-- Shallow Turquoise Reef Sandbars -->
          <ellipse cx="340" cy="670" rx="420" ry="75" fill="#2dd4bf" opacity="0.45"/>
          <ellipse cx="1280" cy="620" rx="380" ry="60" fill="#67e8f9" opacity="0.4"/>
          <path d="M-40 740 Q 260 670 590 760 T 1280 790 L 1600 830 L 1600 900 L -40 900 Z" fill="url(#sand)" opacity="0.92"/>
          <!-- Giftun Island Wooden Swing in Shallow Lagoon -->
          <g transform="translate(260, 560)">
            <line x1="0" y1="0" x2="0" y2="130" stroke="#78350f" stroke-width="8" stroke-linecap="round"/>
            <line x1="90" y1="0" x2="90" y2="130" stroke="#78350f" stroke-width="8" stroke-linecap="round"/>
            <line x1="-12" y1="8" x2="102" y2="8" stroke="#92400e" stroke-width="10" stroke-linecap="round"/>
            <line x1="28" y1="8" x2="28" y2="78" stroke="#fef3c7" stroke-width="2.5"/>
            <line x1="62" y1="8" x2="62" y2="78" stroke="#fef3c7" stroke-width="2.5"/>
            <rect x="20" y="76" width="50" height="7" rx="3" fill="#b45309"/>
            <ellipse cx="45" cy="130" rx="65" ry="9" fill="#ffffff" opacity="0.45"/>
          </g>
          <!-- Luxury White Red Sea Motor Yacht -->
          <g transform="translate(820, 445)">
            <!-- Wake & reflection -->
            <path d="M-180 120 Q -40 135 280 120 Q 120 145 -220 138 Z" fill="#e0f2fe" opacity="0.65"/>
            <!-- Hull -->
            <path d="M0 80 L290 80 L345 45 L35 45 Z" fill="#ffffff"/>
            <path d="M12 80 L288 80 L275 96 L25 96 Z" fill="#035e73"/>
            <path d="M35 62 L315 62" stroke="#0284c7" stroke-width="4"/>
            <!-- Cabin Deck 1 -->
            <path d="M55 45 L265 45 L240 16 L80 16 Z" fill="#f8fafc"/>
            <path d="M88 23 L228 23 L242 40 L75 40 Z" fill="#0f172a" opacity="0.85"/>
            <!-- Flybridge -->
            <path d="M105 16 L205 16 L190 -4 L120 -4 Z" fill="#ffffff"/>
            <line x1="145" y1="-4" x2="135" y2="-28" stroke="#e2e8f0" stroke-width="3"/>
          </g>
          <!-- Shimmering water lines -->
          <g stroke="#ffffff" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round">
            <line x1="620" y1="590" x2="760" y2="590"/>
            <line x1="680" y1="615" x2="880" y2="615"/>
            <line x1="540" y1="650" x2="710" y2="650"/>
            <line x1="980" y1="640" x2="1190" y2="640"/>
          </g>
        </svg>
      `);

    case 'orange-bay':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <defs>
            <linearGradient id="ob-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#7dd3fc"/>
            </linearGradient>
            <linearGradient id="ob-sea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#06b6d4"/>
              <stop offset="55%" stop-color="#2dd4bf"/>
              <stop offset="100%" stop-color="#99f6e4"/>
            </linearGradient>
          </defs>
          <rect width="800" height="270" fill="url(#ob-sky)"/>
          <circle cx="650" cy="95" r="46" fill="#fef9c3"/>
          <rect y="250" width="800" height="350" fill="url(#ob-sea)"/>
          <!-- White Sandbar -->
          <path d="M0 470 Q 250 420 520 480 T 800 460 L 800 600 L 0 600 Z" fill="#fef3c7"/>
          <!-- Wooden Pier & Overwater Swings -->
          <g transform="translate(170, 215)">
            <line x1="0" y1="20" x2="0" y2="210" stroke="#78350f" stroke-width="12" stroke-linecap="round"/>
            <line x1="150" y1="20" x2="150" y2="210" stroke="#78350f" stroke-width="12" stroke-linecap="round"/>
            <line x1="-20" y1="32" x2="170" y2="32" stroke="#92400e" stroke-width="14" stroke-linecap="round"/>
            <line x1="48" y1="32" x2="48" y2="135" stroke="#fef3c7" stroke-width="3"/>
            <line x1="102" y1="32" x2="102" y2="135" stroke="#fef3c7" stroke-width="3"/>
            <rect x="36" y="132" width="78" height="10" rx="4" fill="#b45309"/>
            <ellipse cx="75" cy="210" rx="95" ry="12" fill="#ffffff" opacity="0.55"/>
          </g>
          <!-- Second Umbrella Cabana on Sandbar -->
          <g transform="translate(540, 340)">
            <line x1="60" y1="40" x2="60" y2="150" stroke="#78350f" stroke-width="8"/>
            <path d="M0 50 Q 60 -15 120 50 Z" fill="#d97706"/>
            <path d="M12 50 Q 60 0 108 50 Z" fill="#f59e0b"/>
            <rect x="18" y="135" width="42" height="12" rx="4" fill="#ffffff"/>
            <rect x="70" y="135" width="42" height="12" rx="4" fill="#ffffff"/>
          </g>
        </svg>
      `);

    case 'hula-hula':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <defs>
            <linearGradient id="hh-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0369a1"/>
              <stop offset="100%" stop-color="#bae6fd"/>
            </linearGradient>
            <linearGradient id="hh-sea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="60%" stop-color="#14b8a6"/>
              <stop offset="100%" stop-color="#5eead4"/>
            </linearGradient>
          </defs>
          <rect width="800" height="260" fill="url(#hh-sky)"/>
          <circle cx="160" cy="95" r="44" fill="#fef08a"/>
          <rect y="245" width="800" height="220" fill="url(#hh-sea)"/>
          <path d="M0 430 Q 400 375 800 445 L 800 600 L 0 600 Z" fill="#fde68a"/>
          <!-- Tropical Thatch Cabanas -->
          <g transform="translate(130, 300)">
            <line x1="70" y1="45" x2="70" y2="155" stroke="#78350f" stroke-width="9"/>
            <path d="M0 60 L70 0 L140 60 Z" fill="#b45309"/>
            <path d="M15 60 L70 12 L125 60 Z" fill="#f59e0b"/>
            <rect x="25" y="145" width="90" height="14" rx="6" fill="#035e73"/>
          </g>
          <g transform="translate(360, 285)">
            <line x1="80" y1="45" x2="80" y2="165" stroke="#78350f" stroke-width="10"/>
            <path d="M0 65 L80 0 L160 65 Z" fill="#92400e"/>
            <path d="M18 65 L80 14 L142 65 Z" fill="#d97706"/>
            <rect x="30" y="152" width="100" height="15" rx="6" fill="#0284c7"/>
          </g>
          <g transform="translate(580, 315)">
            <line x1="65" y1="45" x2="65" y2="150" stroke="#78350f" stroke-width="8"/>
            <path d="M0 55 L65 0 L130 55 Z" fill="#b45309"/>
            <rect x="22" y="140" width="85" height="13" rx="5" fill="#035e73"/>
          </g>
        </svg>
      `);

    case 'snorkeling-reef':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <defs>
            <linearGradient id="sr-water" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="35%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#032f3e"/>
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#sr-water)"/>
          <!-- Sun rays penetrating water -->
          <polygon points="120,0 260,0 420,600 40,600" fill="#ffffff" opacity="0.12"/>
          <polygon points="360,0 510,0 700,600 290,600" fill="#ffffff" opacity="0.1"/>
          <polygon points="580,0 690,0 800,500 560,600" fill="#ffffff" opacity="0.08"/>
          <!-- Coral Reef Silhouettes & Colorful Formations -->
          <path d="M0 470 Q 140 390 290 480 T 580 460 T 800 440 L 800 600 L 0 600 Z" fill="#042f3d"/>
          <circle cx="150" cy="490" r="65" fill="#fb7185" opacity="0.85"/>
          <circle cx="240" cy="520" r="55" fill="#f59e0b" opacity="0.85"/>
          <circle cx="580" cy="495" r="72" fill="#a855f7" opacity="0.75"/>
          <circle cx="670" cy="520" r="58" fill="#fb923c" opacity="0.85"/>
          <path d="M360 560 C 350 480 390 450 380 410 C 405 450 420 480 415 560 Z" fill="#2dd4bf"/>
          <path d="M410 565 C 420 490 455 460 465 425 C 475 465 455 510 450 565 Z" fill="#34d399"/>
          <!-- Sea Turtle Swimming -->
          <g transform="translate(330, 210) rotate(-12)">
            <ellipse cx="75" cy="45" rx="58" ry="38" fill="#0d9488"/>
            <ellipse cx="75" cy="45" rx="46" ry="28" fill="#f59e0b" opacity="0.8"/>
            <circle cx="145" cy="42" r="16" fill="#14b8a6"/>
            <path d="M85 12 Q 115 -35 135 -10 Q 115 18 95 22 Z" fill="#14b8a6"/>
            <path d="M85 78 Q 115 125 135 100 Q 115 72 95 68 Z" fill="#14b8a6"/>
            <path d="M22 25 Q -10 10 -5 32 Q 12 38 28 35 Z" fill="#0d9488"/>
            <path d="M22 65 Q -10 80 -5 58 Q 12 52 28 55 Z" fill="#0d9488"/>
          </g>
          <!-- Tropical Anthias Fish School -->
          <g fill="#fb923c">
            <ellipse cx="180" cy="180" rx="16" ry="8"/>
            <polygon points="164,180 152,172 152,188"/>
            <ellipse cx="220" cy="155" rx="14" ry="7"/>
            <polygon points="206,155 195,148 195,162"/>
            <ellipse cx="205" cy="210" rx="15" ry="7"/>
            <polygon points="190,210 179,203 179,217"/>
            <ellipse cx="590" cy="165" rx="16" ry="8" fill="#fde047"/>
            <polygon points="574,165 562,157 562,173" fill="#fde047"/>
            <ellipse cx="635" cy="195" rx="14" ry="7" fill="#fde047"/>
            <polygon points="621,195 610,188 610,202" fill="#fde047"/>
          </g>
        </svg>
      `);

    case 'magawish-island':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <defs>
            <linearGradient id="mg-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#075985"/>
              <stop offset="100%" stop-color="#7dd3fc"/>
            </linearGradient>
            <linearGradient id="mg-sea" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0369a1"/>
              <stop offset="50%" stop-color="#06b6d4"/>
              <stop offset="100%" stop-color="#2dd4bf"/>
            </linearGradient>
          </defs>
          <rect width="800" height="230" fill="url(#mg-sky)"/>
          <rect y="220" width="800" height="380" fill="url(#mg-sea)"/>
          <!-- Curved Magawish Sandbar Peninsula -->
          <path d="M-20 520 Q 320 390 540 440 Q 680 470 490 550 L 800 580 L 800 600 L -20 600 Z" fill="#fef3c7"/>
          <path d="M-20 500 Q 310 375 560 430" stroke="#99f6e4" stroke-width="24" fill="none" opacity="0.55"/>
          <!-- Excursion Speedboat & Yacht -->
          <g transform="translate(470, 290)">
            <path d="M0 45 L175 45 L205 22 L20 22 Z" fill="#ffffff"/>
            <path d="M40 22 L150 22 L135 4 L55 4 Z" fill="#e0f2fe"/>
            <path d="M8 45 L172 45 L162 55 L18 55 Z" fill="#035e73"/>
          </g>
        </svg>
      `);

    case 'paradise-island':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <rect width="800" height="250" fill="#0284c7"/>
          <circle cx="660" cy="95" r="52" fill="#fde047"/>
          <rect y="250" width="800" height="350" fill="#06b6d4"/>
          <ellipse cx="400" cy="430" rx="390" ry="90" fill="#2dd4bf" opacity="0.65"/>
          <path d="M0 450 Q 400 390 800 460 L 800 600 L 0 600 Z" fill="#fef3c7"/>
          <!-- Palm Trees & VIP Pergola -->
          <g transform="translate(180, 240)">
            <path d="M45 230 Q 35 130 60 60" stroke="#78350f" stroke-width="12" fill="none" stroke-linecap="round"/>
            <path d="M60 60 Q 10 35 -10 75" stroke="#15803d" stroke-width="10" fill="none" stroke-linecap="round"/>
            <path d="M60 60 Q 110 30 135 70" stroke="#16a34a" stroke-width="10" fill="none" stroke-linecap="round"/>
            <path d="M60 60 Q 25 10 -5 30" stroke="#22c55e" stroke-width="9" fill="none" stroke-linecap="round"/>
            <path d="M60 60 Q 95 10 125 35" stroke="#15803d" stroke-width="9" fill="none" stroke-linecap="round"/>
          </g>
          <g transform="translate(430, 320)">
            <rect x="0" y="30" width="160" height="110" fill="none" stroke="#92400e" stroke-width="8"/>
            <path d="M-15 30 L80 -15 L175 30 Z" fill="#d97706"/>
            <rect x="20" y="110" width="120" height="22" rx="6" fill="#ffffff"/>
          </g>
        </svg>
      `);

    case 'mahmya-beach':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <rect width="800" height="260" fill="#0369a1"/>
          <path d="M0 260 L220 175 L460 235 L690 165 L800 220 L800 260 Z" fill="#043f52" opacity="0.65"/>
          <rect y="260" width="800" height="340" fill="#0d9488"/>
          <ellipse cx="400" cy="380" rx="420" ry="70" fill="#2dd4bf" opacity="0.6"/>
          <path d="M0 420 Q 380 370 800 430 L 800 600 L 0 600 Z" fill="#fef9c3"/>
          <g transform="translate(260, 330)">
            <polygon points="0,70 140,0 280,70" fill="#b45309"/>
            <rect x="25" y="70" width="12" height="85" fill="#78350f"/>
            <rect x="243" y="70" width="12" height="85" fill="#78350f"/>
            <rect x="55" y="125" width="70" height="18" rx="5" fill="#035e73"/>
            <rect x="155" y="125" width="70" height="18" rx="5" fill="#035e73"/>
          </g>
        </svg>
      `);

    case 'private-yacht-sunset':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <defs>
            <linearGradient id="py-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1e1b4b"/>
              <stop offset="45%" stop-color="#9d174d"/>
              <stop offset="78%" stop-color="#ea580c"/>
              <stop offset="100%" stop-color="#facc15"/>
            </linearGradient>
            <linearGradient id="py-sea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#c2410c"/>
              <stop offset="45%" stop-color="#035e73"/>
              <stop offset="100%" stop-color="#021e28"/>
            </linearGradient>
          </defs>
          <rect width="800" height="330" fill="url(#py-sky)"/>
          <circle cx="400" cy="285" r="78" fill="#fef08a" opacity="0.92"/>
          <rect y="325" width="800" height="275" fill="url(#py-sea)"/>
          <!-- Golden Sunset Reflection on Water -->
          <ellipse cx="400" cy="360" rx="140" ry="12" fill="#fde047" opacity="0.7"/>
          <ellipse cx="400" cy="395" rx="110" ry="9" fill="#fde047" opacity="0.55"/>
          <ellipse cx="400" cy="430" rx="80" ry="7" fill="#fde047" opacity="0.4"/>
          <!-- Luxury Yacht Silhouette & Lit Cabins -->
          <g transform="translate(210, 260)">
            <path d="M0 75 L340 75 L395 36 L35 36 Z" fill="#0f172a"/>
            <path d="M60 36 L295 36 L265 6 L95 6 Z" fill="#1e293b"/>
            <rect x="105" y="14" width="140" height="12" rx="4" fill="#fde047" opacity="0.9"/>
            <rect x="75" y="45" width="195" height="10" rx="4" fill="#38bdf8" opacity="0.8"/>
          </g>
        </svg>
      `);

    case 'scuba-diving':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <defs>
            <linearGradient id="sd-sea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0ea5e9"/>
              <stop offset="50%" stop-color="#0369a1"/>
              <stop offset="100%" stop-color="#082f49"/>
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#sd-sea)"/>
          <circle cx="400" cy="-40" r="240" fill="#bae6fd" opacity="0.35"/>
          <!-- Reef Walls -->
          <path d="M0 240 Q 160 310 190 600 L 0 600 Z" fill="#042f3d"/>
          <path d="M800 200 Q 630 290 600 600 L 800 600 Z" fill="#042f3d"/>
          <circle cx="110" cy="440" r="55" fill="#f43f5e" opacity="0.8"/>
          <circle cx="690" cy="410" r="65" fill="#f59e0b" opacity="0.8"/>
          <!-- Scuba Diver & Air Bubbles -->
          <g transform="translate(310, 230) rotate(-18)">
            <rect x="45" y="12" width="52" height="16" rx="8" fill="#facc15"/>
            <ellipse cx="75" cy="36" rx="48" ry="18" fill="#0f172a"/>
            <circle cx="132" cy="34" r="16" fill="#0f172a"/>
            <circle cx="138" cy="34" r="9" fill="#38bdf8"/>
            <path d="M28 36 L-35 20 L-45 32 L25 44 Z" fill="#0284c7"/>
            <path d="M28 40 L-30 58 L-40 46 L25 36 Z" fill="#0284c7"/>
          </g>
          <circle cx="465" cy="180" r="8" fill="#e0f2fe" opacity="0.75"/>
          <circle cx="480" cy="145" r="12" fill="#e0f2fe" opacity="0.65"/>
          <circle cx="470" cy="105" r="16" fill="#e0f2fe" opacity="0.5"/>
        </svg>
      `);

    case 'sindbad-submarine':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <rect width="800" height="600" fill="#035e73"/>
          <rect y="0" width="800" height="150" fill="#0ea5e9" opacity="0.55"/>
          <path d="M0 490 Q 400 430 800 500 L 800 600 L 0 600 Z" fill="#022c3a"/>
          <!-- Yellow Tourist Submarine -->
          <g transform="translate(180, 210)">
            <rect x="0" y="40" width="420" height="130" rx="65" fill="#facc15"/>
            <rect x="130" y="0" width="140" height="50" rx="14" fill="#eab308"/>
            <path d="M350 45 A 60 60 0 0 1 420 105 A 60 60 0 0 1 350 165 Z" fill="#7dd3fc" opacity="0.85"/>
            <!-- Viewing Portholes -->
            <circle cx="95" cy="105" r="22" fill="#0f172a" stroke="#ca8a04" stroke-width="6"/>
            <circle cx="165" cy="105" r="22" fill="#0f172a" stroke="#ca8a04" stroke-width="6"/>
            <circle cx="235" cy="105" r="22" fill="#0f172a" stroke="#ca8a04" stroke-width="6"/>
            <circle cx="305" cy="105" r="22" fill="#0f172a" stroke="#ca8a04" stroke-width="6"/>
            <circle cx="95" cy="105" r="15" fill="#38bdf8"/>
            <circle cx="165" cy="105" r="15" fill="#38bdf8"/>
            <circle cx="235" cy="105" r="15" fill="#38bdf8"/>
            <circle cx="305" cy="105" r="15" fill="#38bdf8"/>
          </g>
        </svg>
      `);

    case 'sharm-el-naga':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <rect width="800" height="240" fill="#38bdf8"/>
          <rect y="240" width="800" height="360" fill="#0284c7"/>
          <ellipse cx="400" cy="400" rx="350" ry="110" fill="#14b8a6" opacity="0.75"/>
          <path d="M0 430 Q 260 490 800 410 L 800 600 L 0 600 Z" fill="#fde68a"/>
          <!-- House Reef Close to Shore -->
          <circle cx="240" cy="360" r="45" fill="#f43f5e" opacity="0.7"/>
          <circle cx="330" cy="380" r="38" fill="#f59e0b" opacity="0.75"/>
          <circle cx="490" cy="355" r="50" fill="#ec4899" opacity="0.65"/>
        </svg>
      `);

    case 'parasailing-adventure':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <rect width="800" height="410" fill="#0ea5e9"/>
          <rect y="410" width="800" height="190" fill="#0369a1"/>
          <!-- Parasail Canopy in Sky -->
          <g transform="translate(210, 75)">
            <path d="M0 110 Q 130 -30 260 110 Q 130 65 0 110 Z" fill="#f43f5e"/>
            <path d="M35 95 Q 130 0 225 95 Q 130 65 35 95 Z" fill="#facc15"/>
            <path d="M75 85 Q 130 25 185 85 Q 130 65 75 85 Z" fill="#14b8a6"/>
            <line x1="55" y1="95" x2="125" y2="195" stroke="#ffffff" stroke-width="2"/>
            <line x1="205" y1="95" x2="135" y2="195" stroke="#ffffff" stroke-width="2"/>
            <circle cx="130" cy="202" r="9" fill="#0f172a"/>
            <!-- Tow rope to speedboat -->
            <line x1="130" y1="210" x2="360" y2="365" stroke="#e2e8f0" stroke-width="2.5" stroke-dasharray="6 4"/>
          </g>
          <!-- Speedboat on Red Sea -->
          <g transform="translate(520, 420)">
            <path d="M0 30 L140 30 L170 10 L20 10 Z" fill="#ffffff"/>
            <path d="M-120 35 Q -30 42 5 30" stroke="#e0f2fe" stroke-width="8" fill="none"/>
          </g>
        </svg>
      `);

    case 'utopia-island':
      return toSvgDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <rect width="800" height="250" fill="#0284c7"/>
          <circle cx="180" cy="100" r="48" fill="#fef08a"/>
          <rect y="250" width="800" height="350" fill="#0d9488"/>
          <ellipse cx="400" cy="430" rx="340" ry="78" fill="#fef3c7"/>
          <ellipse cx="400" cy="430" rx="410" ry="105" fill="#5eead4" opacity="0.45"/>
          <!-- Glass Bottom Boat & Island Sandbar -->
          <g transform="translate(310, 315)">
            <path d="M0 40 L180 40 L205 18 L18 18 Z" fill="#ffffff"/>
            <rect x="45" y="0" width="95" height="18" rx="4" fill="#035e73"/>
          </g>
        </svg>
      `);
  }
}
