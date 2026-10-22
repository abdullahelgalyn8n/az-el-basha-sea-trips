import { MarineSceneId } from '../utils/marineArtwork';

export type TourCategory =
  | 'all'
  | 'island'
  | 'snorkeling'
  | 'diving'
  | 'yacht'
  | 'submarine'
  | 'watersports';

export interface TourItineraryStep {
  time: string;
  title: string;
  description: string;
}

export interface TourReview {
  id: string;
  author: string;
  country: string;
  date: string;
  rating: number;
  comment: string;
}

export interface TourItem {
  id: string;
  slug: string;
  title: string;
  category: Exclude<TourCategory, 'all'>;
  categoryLabel: string;
  location: string;
  destinationZone: string;
  duration: string;
  durationHours: number;
  price: number;
  originalPrice?: number;
  featured: boolean;
  rating: number;
  reviewsCount: number;
  maxGuests: number;
  departureTime: string;
  sceneId: MarineSceneId;
  shortSummary: string;
  description: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: TourItineraryStep[];
  reviews: TourReview[];
}

export const TOURS_DATA: TourItem[] = [
  {
    id: 'tour-orange-bay',
    slug: 'orange-bay-island-hurghada',
    title: 'Orange Bay Island – Hurghada',
    category: 'island',
    categoryLabel: 'Island Excursion',
    location: 'Orange Bay - Giftun Island Location',
    destinationZone: 'Giftun Island',
    duration: '6 hours',
    durationHours: 6,
    price: 25.0,
    featured: true,
    rating: 5.0,
    reviewsCount: 148,
    maxGuests: 35,
    departureTime: '08:30 AM',
    sceneId: 'orange-bay',
    shortSummary:
      'Relax on powdery white sandbars and iconic overwater wooden swings in the shallow turquoise lagoon of Giftun Island National Park.',
    description:
      'Experience the Maldives of Egypt on our signature full-day yacht cruise to Orange Bay Island in Hurghada. Spend two full hours on the pristine sandy beach with bean-bag lounges and wooden swings over crystal-clear shallow water, combined with two guided snorkeling stops at vibrant Red Sea coral gardens.',
    highlights: [
      '2 hours relaxation on Orange Bay Island white sandy lagoon',
      '2 guided snorkeling stops at Giftun National Park coral reefs',
      'Open-buffet seafood & BBQ lunch prepared freshly onboard',
      'Complimentary banana boat & sofa water-sport ride',
      'Round-trip air-conditioned hotel pickup & drop-off in Hurghada',
    ],
    included: [
      'Hotel pickup and drop-off in air-conditioned vehicle',
      '2-hour stay on Orange Bay Island beach',
      'Snorkeling equipment (mask, snorkel, fins & life vest)',
      'Freshly cooked open-buffet lunch & soft drinks onboard',
      'Professional multilingual marine & snorkeling guide',
    ],
    excluded: [
      'National Park marine conservation fee ($5 per person)',
      'Professional underwater photography package (optional)',
      'Private transfer from El Gouna, Makadi, or Safaga ($10 supplement)',
    ],
    itinerary: [
      {
        time: '08:00 AM',
        title: 'Hotel Pickup & Marina Boarding',
        description:
          'Morning pickup from your Hurghada hotel resort and welcome briefing aboard our double-deck motor yacht at Hurghada New Marina.',
      },
      {
        time: '09:30 AM',
        title: 'Orange Bay Island Beach Stay (2 Hours)',
        description:
          'Disembark onto the famous wooden pier of Orange Bay. Enjoy shallow turquoise waters, overwater swings, and shaded beach cabanas.',
      },
      {
        time: '12:00 PM',
        title: 'First Coral Reef Snorkeling & Buffet Lunch',
        description:
          'Guided snorkeling session over Giftun coral gardens teeming with clownfish and parrotfish, followed by a freshly prepared onboard buffet lunch.',
      },
      {
        time: '02:00 PM',
        title: 'Second Snorkeling Stop & Water Sports',
        description:
          'Explore a second reef lagoon and enjoy complimentary banana boat and sofa rides before cruising back to the marina by 03:30 PM.',
      },
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'charlotte M.',
        country: 'United Kingdom',
        date: 'October 2026',
        rating: 5,
        comment:
          'The water at Orange Bay is unreal! Super organized crew, spotless yacht, and the lunch onboard was delicious.',
      },
      {
        id: 'rev-2',
        author: 'Ahmed K.',
        country: 'Egypt',
        date: 'September 2026',
        rating: 5,
        comment:
          'رحلة ممتازة جداً والتنظيم راقي من أول الاستلام من الفندق لحد الرجوع. جزيرة أورانج باي تحفة.',
      },
    ],
  },
  {
    id: 'tour-hula-hula',
    slug: 'hula-hula-island-hurghada',
    title: 'Hula Hula Island – Hurghada',
    category: 'island',
    categoryLabel: 'Island Excursion',
    location: 'Hula Hula Beach Island',
    destinationZone: 'Giftun Island',
    duration: '6 hours',
    durationHours: 6,
    price: 24.0,
    originalPrice: 25.0,
    featured: true,
    rating: 4.9,
    reviewsCount: 112,
    maxGuests: 35,
    departureTime: '08:30 AM',
    sceneId: 'hula-hula',
    shortSummary:
      'Tropical Hawaiian-inspired beach vibes in the heart of the Red Sea with thatch cabanas, coral snorkeling stops, and onboard BBQ lunch.',
    description:
      'Set sail to Hula Hula Beach Island, Hurghada’s premier tropical island sanctuary. Featuring Polynesian-style thatch umbrellas, panoramic turquoise lagoons, and calm shallow shores ideal for couples and families.',
    highlights: [
      '2 hours on Hula Hula Beach Island with shaded thatch loungers',
      'Two guided snorkeling stops at pristine Red Sea coral walls',
      'Fresh onboard lunch buffet with seasonal fruit platter',
      'Exciting banana boat & tube water-sports stop included',
      'Door-to-door Hurghada hotel transfers included',
    ],
    included: [
      'Round-trip hotel transfer in Hurghada',
      'Hula Hula Island beach entrance & sunbed access',
      'Full snorkeling gear & safety vests',
      'Open-buffet onboard lunch, coffee, tea, water & sodas',
      'Certified PADI/Red Sea snorkeling guide',
    ],
    excluded: [
      'Red Sea Marine Park tax ($5 per person)',
      'Personal expenses and island beach bar specialty cocktails',
    ],
    itinerary: [
      {
        time: '08:15 AM',
        title: 'Resort Pickup & Yacht Departure',
        description:
          'Comfortable transfer from your hotel to the marina and departure across the sapphire waters of the Red Sea.',
      },
      {
        time: '10:00 AM',
        title: 'Hula Hula Island Tropical Retreat',
        description:
          'Relax under woven straw umbrellas, swim in crystal-clear lagoons, and capture memorable island photos.',
      },
      {
        time: '12:30 PM',
        title: 'Snorkeling & Onboard Dining',
        description:
          'Guided coral reef exploration and freshly prepared Egyptian & international buffet lunch on the shaded deck.',
      },
      {
        time: '02:30 PM',
        title: 'Water Sports & Marina Return',
        description:
          'Fun banana boat ride in a calm bay before returning to Hurghada Marina and transferring back to your hotel.',
      },
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Lukas W.',
        country: 'Germany',
        date: 'October 2026',
        rating: 5,
        comment:
          'Hula Hula Island was less crowded and had such a chill tropical atmosphere. Crew took great care of beginners during snorkeling.',
      },
    ],
  },
  {
    id: 'tour-snorkeling-trip',
    slug: 'snorkeling-trip-hurghada',
    title: 'Snorkeling Trip',
    category: 'snorkeling',
    categoryLabel: 'Snorkeling & Reefs',
    location: 'Hurghada Coral Gardens & Dolphin Bay',
    destinationZone: 'Hurghada',
    duration: '1 day',
    durationHours: 8,
    price: 20.0,
    originalPrice: 25.0,
    featured: false,
    rating: 4.9,
    reviewsCount: 194,
    maxGuests: 30,
    departureTime: '08:00 AM',
    sceneId: 'snorkeling-reef',
    shortSummary:
      'Full-day Red Sea coral reef & dolphin lagoon expedition visiting three world-famous snorkeling sites with open-buffet lunch.',
    description:
      'Immerse yourself in the underwater kaleidoscopes of the Red Sea. This full-day snorkeling safari takes you to three distinct coral reef ecosystems around Hurghada and Shaab El Erg where wild spinner dolphins, green sea turtles, and thousands of tropical reef fish thrive.',
    highlights: [
      '3 distinct coral reef stops including Dolphin House lagoon (Shaab El Erg)',
      'High probability of spotting wild Red Sea dolphins in their natural habitat',
      'Full snorkeling gear, fins, masks & flotation vests sanitized daily',
      'Chef-prepared hot buffet lunch & unlimited soft drinks onboard',
      'Guided in-water assistance for families and first-time snorkelers',
    ],
    included: [
      'Hotel pickup and drop-off across Hurghada',
      '3 guided snorkeling sessions at premier coral reefs',
      'Snorkeling mask, snorkel, fins, and life jacket',
      'Hot buffet lunch + unlimited water, tea, coffee & soft drinks',
      'Banana boat water-sports activity',
    ],
    excluded: [
      'Marine park conservation fee ($5 per person)',
      'Underwater GoPro photo session (optional onboard)',
    ],
    itinerary: [
      {
        time: '08:00 AM',
        title: 'Morning Pickup & Safety Briefing',
        description:
          'Transfer to Hurghada Marina, equipment fitting, and reef route briefing by our marine captain.',
      },
      {
        time: '09:45 AM',
        title: 'First Stop: Dolphin Lagoon (Shaab El Erg)',
        description:
          'Snorkel along the horseshoe-shaped turquoise reef frequented by pods of wild Red Sea dolphins.',
      },
      {
        time: '12:15 PM',
        title: 'Open-Buffet Lunch & Second Coral Wall',
        description:
          'Savor grilled chicken, kofta, rice, salads, and pasta onboard, followed by a drift snorkel along vibrant table corals.',
      },
      {
        time: '02:15 PM',
        title: 'Third Shallow Reef Garden & Return Cruise',
        description:
          'Final afternoon swim among giant clams and angelfish before returning to the marina at 04:00 PM.',
      },
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Elena R.',
        country: 'Italy',
        date: 'October 2026',
        rating: 5,
        comment:
          'We swam right next to a sea turtle and saw a pod of 8 dolphins! Best value trip in Hurghada by far.',
      },
    ],
  },
  {
    id: 'tour-magawish-island',
    slug: 'magawish-beach-island',
    title: 'Magawish Beach Island',
    category: 'island',
    categoryLabel: 'Island Excursion',
    location: 'Magawish Beach Island',
    destinationZone: 'Magawish Island',
    duration: '6 hours',
    durationHours: 6,
    price: 22.0,
    originalPrice: 25.0,
    featured: false,
    rating: 4.8,
    reviewsCount: 89,
    maxGuests: 30,
    departureTime: '08:30 AM',
    sceneId: 'magawish-island',
    shortSummary:
      'Escape to the tranquil sandbars of Little Magawish Island—crystal-clear shallow waters, unspoiled reefs, and serene beach lounging.',
    description:
      'Known locally as the secret gem of Hurghada, Magawish Beach Island offers uncrowded powdery sandbars surrounded by gradations of emerald and turquoise water. Ideal for guests seeking peaceful island relaxation paired with vibrant reef snorkeling.',
    highlights: [
      '2 hours on the unspoiled sandbar peninsula of Magawish Island',
      'Calm, crystal-clear knee-deep lagoons ideal for swimming & photography',
      'Guided snorkeling stop at Magawish coral pinnacles',
      'Freshly cooked onboard lunch buffet & seasonal fruits',
      'Complimentary hotel transfers & water-sport tube ride',
    ],
    included: [
      'Round-trip hotel transfer in Hurghada',
      'Magawish Island entrance & beach umbrellas',
      'Snorkeling gear & professional reef guide',
      'Onboard buffet lunch & complimentary soft drinks',
    ],
    excluded: [
      'National park fee ($5 per guest)',
      'Out-of-zone transfer supplement (Sahl Hasheesh / Makadi Bay $10)',
    ],
    itinerary: [
      {
        time: '08:30 AM',
        title: 'Departure from Hurghada Marina',
        description:
          'Board our spacious excursion yacht and cruise south toward the turquoise Magawish archipelago.',
      },
      {
        time: '09:45 AM',
        title: 'Magawish Sandbar Beach Time',
        description:
          'Two relaxing hours walking the natural sandbar and swimming in warm emerald lagoons.',
      },
      {
        time: '12:15 PM',
        title: 'Coral Reef Snorkeling & Lunch',
        description:
          'Snorkel over vibrant brain corals and enjoy a freshly prepared onboard lunch.',
      },
      {
        time: '02:30 PM',
        title: 'Return Sail to Hurghada',
        description:
          'Afternoon fruit service on the sundeck as we cruise back to the marina.',
      },
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Sophie D.',
        country: 'France',
        date: 'September 2026',
        rating: 5,
        comment:
          'Magawish is so peaceful and authentic. The sandbar looks like a postcard!',
      },
    ],
  },
  {
    id: 'tour-paradise-island',
    slug: 'paradise-island-vip-cruise',
    title: 'Paradise Island Full-Day VIP Cruise',
    category: 'island',
    categoryLabel: 'Island Excursion',
    location: 'Paradise Beach - Giftun Island',
    destinationZone: 'Giftun Island',
    duration: '7 hours',
    durationHours: 7,
    price: 30.0,
    originalPrice: 35.0,
    featured: true,
    rating: 4.9,
    reviewsCount: 136,
    maxGuests: 32,
    departureTime: '08:30 AM',
    sceneId: 'paradise-island',
    shortSummary:
      'Spend a full tropical day on Paradise Island with beach restaurant dining, folklore show, and two Red Sea snorkeling stops.',
    description:
      'Combine luxury yacht cruising with an extended stay on Paradise Island on Big Giftun. Enjoy reserved beach pergolas, crystal-clear swimming coves, two guided coral reef snorkeling stops, and a festive beachside atmosphere.',
    highlights: [
      'Extended beach stay at Paradise Island with reserved sun loungers',
      'Two guided snorkeling stops at Giftun Marine Reserve',
      'Full buffet lunch + afternoon fresh fruit & folklore entertainment',
      'Banana & quattro sofa water-sports session included',
    ],
    included: [
      'Hurghada hotel pickup & drop-off',
      'Paradise Island entrance ticket & shaded sunbed',
      'Snorkeling equipment & life jackets',
      'Open-buffet lunch & all-day soft drinks',
    ],
    excluded: [
      'Marine park fee ($5 per person)',
      'Personal island bar purchases',
    ],
    itinerary: [
      {
        time: '08:30 AM',
        title: 'Marina Boarding & Welcome Coffee',
        description: 'Meet the crew and set sail toward Giftun National Park.',
      },
      {
        time: '10:00 AM',
        title: 'Coral Reef Snorkeling Session',
        description: 'Explore shallow coral walls bursting with Red Sea marine life.',
      },
      {
        time: '11:30 AM',
        title: 'Paradise Island Beach & Lunch',
        description: 'Relax on powdery white sand and enjoy full buffet dining.',
      },
      {
        time: '03:00 PM',
        title: 'Sunset Return Cruise',
        description: 'Cruise back to Hurghada Marina with music and fresh fruit platters.',
      },
    ],
    reviews: [],
  },
  {
    id: 'tour-mahmya-beach',
    slug: 'mahmya-island-eco-beach-escape',
    title: 'Mahmya Island Eco-Beach Escape',
    category: 'island',
    categoryLabel: 'Island Excursion',
    location: 'Mahmya Eco-Resort - South Giftun',
    destinationZone: 'Giftun Island',
    duration: '1 day',
    durationHours: 8,
    price: 45.0,
    originalPrice: 55.0,
    featured: true,
    rating: 5.0,
    reviewsCount: 97,
    maxGuests: 25,
    departureTime: '08:45 AM',
    sceneId: 'mahmya-beach',
    shortSummary:
      'Boutique eco-tourism paradise on South Giftun featuring pristine offshore coral gardens, gourmet beach buffet, and tranquil turquoise waters.',
    description:
      'Mahmya is the crown jewel of eco-luxury on the Red Sea. Strict conservation rules preserve its untouched white sand beach and offshore coral drop-off. Sail aboard our dedicated Mahmya boat, dine at the beachfront palapa restaurant, and snorkel directly over giant brain corals.',
    highlights: [
      'Exclusive entry to Mahmya Eco-Beach on South Giftun Island',
      'Direct offshore boat snorkeling at untouched conservation reefs',
      'Upscale beachfront open-buffet lunch & chilled beverages',
      'Quiet, music-free eco-sanctuary atmosphere with plush beach mats',
    ],
    included: [
      'Round-trip transfer from Hurghada hotels',
      'Mahmya shuttle yacht & eco-beach access',
      'Beachfront open-buffet lunch & 1 soft drink',
      'Premium silicone snorkeling mask, snorkel & fins',
    ],
    excluded: [
      'National park conservation tax ($5 per person)',
      'Specialty espresso & fresh juices at the beach bar',
    ],
    itinerary: [
      {
        time: '08:45 AM',
        title: 'Private Marina Departure',
        description: 'Board our Mahmya eco-cruiser and sail 45 minutes to South Giftun.',
      },
      {
        time: '10:00 AM',
        title: 'Beachfront Relaxation & Reef Swim',
        description: 'Swim directly from the white sandy shore into turquoise waters.',
      },
      {
        time: '01:00 PM',
        title: 'Palapa Restaurant Buffet & Boat Snorkel',
        description: 'Savor Mediterranean & Egyptian specialties followed by an offshore reef trip.',
      },
      {
        time: '04:00 PM',
        title: 'Return to Hurghada',
        description: 'Sail back across the calm afternoon sea to your resort.',
      },
    ],
    reviews: [],
  },
  {
    id: 'tour-private-yacht',
    slug: 'private-luxury-yacht-charter-hurghada',
    title: 'Private Luxury Yacht Charter – Red Sea',
    category: 'yacht',
    categoryLabel: 'Private Yacht',
    location: 'Hurghada New Marina VIP Berth',
    destinationZone: 'Hurghada Marina',
    duration: '4 hours',
    durationHours: 4,
    price: 180.0,
    originalPrice: 220.0,
    featured: true,
    rating: 5.0,
    reviewsCount: 64,
    maxGuests: 12,
    departureTime: '01:30 PM',
    sceneId: 'private-yacht-sunset',
    shortSummary:
      'Charter your own private motor yacht with captain, private chef, custom island route, and golden Red Sea sunset views.',
    description:
      'Celebrate a special occasion or enjoy total privacy with your family and friends aboard our 65-foot luxury motor yacht. Customize your itinerary with secluded coral lagoons, island sandbars, fresh grilled seafood, and a breathtaking Red Sea sunset cruise.',
    highlights: [
      '100% private 65ft twin-deck motor yacht with dedicated captain & crew',
      'Customizable route: Orange Bay, Magawish sandbar, or secluded reefs',
      'Freshly grilled seafood & BBQ menu prepared by your onboard chef',
      'Bluetooth sound system, air-conditioned saloon & spacious sun deck',
    ],
    included: [
      'Private VIP minivan pickup & drop-off from your hotel',
      '4-hour private yacht charter with fuel & marina fees',
      'Freshly prepared BBQ & seafood meal + soft drinks & fruit platter',
      'All snorkeling & fishing gear onboard',
    ],
    excluded: [
      'Island docking ticket if choosing private island landing ($10/guest)',
      'Gratuities for crew (optional)',
    ],
    itinerary: [
      {
        time: '01:30 PM',
        title: 'VIP Welcome at Hurghada New Marina',
        description: 'Welcome cold towels and fresh juice as your captain reviews your custom route.',
      },
      {
        time: '02:15 PM',
        title: 'Secluded Lagoon Anchoring & Snorkeling',
        description: 'Drop anchor at an uncrowded coral reef for private swimming and snorkeling.',
      },
      {
        time: '04:00 PM',
        title: 'Sunset Dining on the Flybridge',
        description: 'Enjoy grilled seafood and panoramic views as the sun dips below the Red Sea mountains.',
      },
    ],
    reviews: [],
  },
  {
    id: 'tour-scuba-diving',
    slug: 'scuba-diving-discovery-hurghada',
    title: 'Scuba Diving Discovery – Two Reef Dives',
    category: 'diving',
    categoryLabel: 'Scuba Diving',
    location: 'Careless Reef & Giftun North',
    destinationZone: 'Hurghada',
    duration: '7 hours',
    durationHours: 7,
    price: 35.0,
    originalPrice: 42.0,
    featured: false,
    rating: 4.9,
    reviewsCount: 158,
    maxGuests: 20,
    departureTime: '08:15 AM',
    sceneId: 'scuba-diving',
    shortSummary:
      'Two 1-on-1 PADI instructor-guided scuba dives at Hurghada’s premier coral walls—no prior diving license required.',
    description:
      'Discover weightless underwater exploration in the crystal-clear Red Sea. Whether you are a complete beginner or a certified diver, our PADI instructors guide you hand-in-hand through two distinct coral dive sites teeming with moray eels, lionfish, rays, and vibrant soft corals.',
    highlights: [
      '2 guided scuba dives (20–25 minutes each) at two different coral sites',
      'Personal 1-on-1 PADI instructor supervision for beginners',
      'Full Scubapro diving equipment, wetsuit, tank & weights included',
      'Hot onboard buffet lunch & unlimited soft drinks between dives',
    ],
    included: [
      'Round-trip Hurghada hotel transfers',
      'Full scuba diving equipment & 2 oxygen tanks',
      'Certified PADI diving instructor briefing & supervision',
      'Onboard buffet lunch, coffee, tea & soft drinks',
    ],
    excluded: [
      'Marine park conservation fee ($5 per person)',
      'Underwater dive photos & video package (optional)',
    ],
    itinerary: [
      {
        time: '08:15 AM',
        title: 'Pickup & Dive Boat Briefing',
        description: 'Board our custom dive yacht and learn hand signals and breathing basics.',
      },
      {
        time: '10:00 AM',
        title: 'First Dive: Shallow Coral Garden',
        description: 'Gentle entry into a calm 6–8 meter coral lagoon with your instructor.',
      },
      {
        time: '12:30 PM',
        title: 'Surface Interval & Hot Buffet Lunch',
        description: 'Relax on the sundeck and enjoy a freshly cooked onboard meal.',
      },
      {
        time: '02:00 PM',
        title: 'Second Dive: Coral Pinnacles',
        description: 'Explore a second vibrant reef site before cruising back to the marina.',
      },
    ],
    reviews: [],
  },
  {
    id: 'tour-sindbad-submarine',
    slug: 'sindbad-submarine-underwater-tour',
    title: 'Sindbad Submarine & Coral Observatory',
    category: 'submarine',
    categoryLabel: 'Submarine & Glass Boat',
    location: 'Hurghada Marine Coast',
    destinationZone: 'Hurghada Marina',
    duration: '3 hours',
    durationHours: 3,
    price: 38.0,
    originalPrice: 45.0,
    featured: false,
    rating: 4.8,
    reviewsCount: 105,
    maxGuests: 40,
    departureTime: '10:00 AM',
    sceneId: 'sindbad-submarine',
    shortSummary:
      'Descend 22 meters below the Red Sea surface in the Middle East’s only real recreational passenger submarine—staying completely dry!',
    description:
      'Ideal for families with young children, seniors, and non-swimmers! Step aboard the real Sindbad recreational submarine and descend 22 meters (72 feet) beneath the Red Sea in air-conditioned comfort, viewing 500 meters of living coral reef through oversized panoramic portholes.',
    highlights: [
      'Real dive to 22 meters depth inside a pressurized air-conditioned cabin',
      'Individual ergonomic seats beside oversized panoramic viewing windows',
      'Live underwater diver feeding show outside the submarine portholes',
      'Official Submarine Dive Certificate for every guest',
    ],
    included: [
      'Hotel pickup & drop-off in Hurghada',
      'Shuttle boat transfer to the offshore submarine platform',
      '50-minute underwater submarine dive to 22m depth',
      'Welcome drink & commemorative dive certificate',
    ],
    excluded: ['Souvenir framed photo at the pier (optional)'],
    itinerary: [
      {
        time: '10:00 AM',
        title: 'Hotel Pickup & Pier Arrival',
        description: 'Short transfer to the Sindbad Marine Pier and welcome refreshment.',
      },
      {
        time: '10:45 AM',
        title: 'Submarine Boarding & 22m Descent',
        description: 'Descend along the coral wall and watch scuba divers and reef fish outside your window.',
      },
      {
        time: '12:15 PM',
        title: 'Certificate Presentation & Return',
        description: 'Receive your dive certificate and transfer back to your hotel.',
      },
    ],
    reviews: [],
  },
  {
    id: 'tour-sharm-el-naga',
    slug: 'sharm-el-naga-bay-coral-sanctuary',
    title: 'Sharm El Naga Bay Coral Sanctuary',
    category: 'snorkeling',
    categoryLabel: 'Snorkeling & Reefs',
    location: 'Sharm El Naga - Soma Bay South',
    destinationZone: 'Soma Bay',
    duration: '1 day',
    durationHours: 7,
    price: 28.0,
    originalPrice: 32.0,
    featured: false,
    rating: 4.8,
    reviewsCount: 76,
    maxGuests: 28,
    departureTime: '08:30 AM',
    sceneId: 'sharm-el-naga',
    shortSummary:
      'Walk straight from a sandy beach into a protected house reef reserve—ideal for guests who prefer shore snorkeling without boat waves.',
    description:
      'Located 40km south of Hurghada in a sheltered natural bay, Sharm El Naga is a protected marine reserve where pristine coral reefs begin just 4 meters from the sandy shore. Enjoy a relaxing day with shaded beach beds, a freshwater pool, and beachfront restaurant lunch.',
    highlights: [
      'Step directly from the sandy beach into a living coral reef sanctuary',
      'Zero boat motion—perfect for guests prone to seasickness',
      'Reserved beach sunbed, umbrella & freshwater swimming pool access',
      'Full buffet lunch at the beachfront gazebo restaurant',
    ],
    included: [
      'Round-trip air-conditioned coach transfer from Hurghada',
      'Sharm El Naga Nature Reserve entrance ticket',
      'Snorkeling gear (mask, fins & life vest)',
      'Buffet lunch & soft drink at the beach restaurant',
    ],
    excluded: ['Personal bar orders and extra beach towels'],
    itinerary: [
      {
        time: '08:30 AM',
        title: 'Scenic Coastal Drive South',
        description: '40-minute drive along the Red Sea coast to Sharm El Naga Bay.',
      },
      {
        time: '09:30 AM',
        title: 'Morning House Reef Snorkeling',
        description: 'Guided shore snorkel over giant brain corals, octopuses, and vibrant reef fish.',
      },
      {
        time: '01:00 PM',
        title: 'Beachfront Lunch & Pool Relaxation',
        description: 'Lunch overlooking the bay followed by afternoon swimming before returning at 04:00 PM.',
      },
    ],
    reviews: [],
  },
  {
    id: 'tour-parasailing-adventure',
    slug: 'parasailing-water-sports-combo-hurghada',
    title: 'Parasailing & Water Sports Combo Adventure',
    category: 'watersports',
    categoryLabel: 'Water Sports',
    location: 'Hurghada Marina Bay',
    destinationZone: 'Hurghada Marina',
    duration: '3 hours',
    durationHours: 3,
    price: 26.0,
    originalPrice: 30.0,
    featured: false,
    rating: 4.8,
    reviewsCount: 83,
    maxGuests: 16,
    departureTime: '10:30 AM',
    sceneId: 'parasailing-adventure',
    shortSummary:
      'Soar 50 meters above the turquoise Red Sea coastline on a parachute flight followed by high-speed banana and sofa boat rides.',
    description:
      'Take in breathtaking aerial views of Hurghada’s coral reefs, islands, and desert mountains as you glide smoothly 50 meters above the sea. Available as a solo or tandem flight, taking off and landing directly on the flight deck of our specialized winch speedboat.',
    highlights: [
      '10–12 minute panoramic parasailing flight at 50 meters altitude',
      'Smooth hydraulic winch take-off and landing directly on the boat deck',
      'Includes thrilling banana boat & high-speed sofa tube ride',
      'Full safety harness, life vests & professional flight crew',
    ],
    included: [
      'Hotel pickup & drop-off in Hurghada',
      'Speedboat transfer & parasailing flight (solo or double)',
      'Banana boat and tube ride',
      'All safety gear and life jackets',
    ],
    excluded: ['Drone / GoPro aerial video recording ($15 optional)'],
    itinerary: [
      {
        time: '10:30 AM',
        title: 'Hotel Pickup & Speedboat Boarding',
        description: 'Transfer to the marina and harness safety check.',
      },
      {
        time: '11:15 AM',
        title: 'Red Sea Parasailing Flight',
        description: 'Ascend gently into the sky for panoramic views of Giftun Island and Hurghada.',
      },
      {
        time: '12:15 PM',
        title: 'Banana & Sofa Rides + Return',
        description: 'Enjoy adrenaline water sports before heading back to your resort.',
      },
    ],
    reviews: [],
  },
  {
    id: 'tour-utopia-island',
    slug: 'utopia-island-soma-bay-safari',
    title: 'Utopia Island & Glass-Bottom Reef Safari',
    category: 'island',
    categoryLabel: 'Island Excursion',
    location: 'Utopia Island - Soma Bay & Safaga',
    destinationZone: 'Soma Bay',
    duration: '6 hours',
    durationHours: 6,
    price: 27.0,
    originalPrice: 32.0,
    featured: false,
    rating: 4.9,
    reviewsCount: 71,
    maxGuests: 30,
    departureTime: '08:00 AM',
    sceneId: 'utopia-island',
    shortSummary:
      'Discover the untouched shifting sandbars of Utopia Island combined with a glass-bottom boat coral tour and two snorkeling stops.',
    description:
      'Sail from Soma Bay to the natural shifting sandbars of Utopia Island. Experience pristine southern Red Sea coral reefs with both guided snorkeling and a panoramic glass-bottom boat ride over shallow coral gardens.',
    highlights: [
      'Relax on the natural white sandbar of Utopia Island',
      '30-minute panoramic glass-bottom boat coral reef tour',
      'Two guided snorkeling sessions in untouched Soma Bay reefs',
      'Freshly cooked seafood & Oriental buffet lunch onboard',
    ],
    included: [
      'Round-trip transfer from Hurghada, Makadi, or Soma Bay',
      'Utopia Island landing & glass-bottom boat tour',
      'Snorkeling gear & guide',
      'Open-buffet onboard lunch & soft drinks',
    ],
    excluded: ['Marine reserve fee ($5 per guest)'],
    itinerary: [
      {
        time: '08:00 AM',
        title: 'Transfer to Soma Bay Marina',
        description: 'Morning pickup and boarding of our southern reef cruiser.',
      },
      {
        time: '09:45 AM',
        title: 'Utopia Island Sandbar & Glass Boat',
        description: 'Enjoy the natural sandbar and view reefs through the glass-bottom boat.',
      },
      {
        time: '12:30 PM',
        title: 'Two Snorkeling Stops & Buffet Lunch',
        description: 'Snorkel over untouched southern coral formations and dine onboard.',
      },
    ],
    reviews: [],
  },
];

export const COMPANY_PILLARS = {
  vision: {
    title: 'OUR VISION',
    description:
      'To become one of the leading sea tourism providers in Hurghada and the Red Sea region by delivering exceptional marine experiences, maintaining the highest service standards, and building lasting relationships with our guests.',
  },
  mission: {
    title: 'OUR MISSION',
    description:
      'Our mission is to provide safe, enjoyable, and professionally organized sea trips that exceed customer expectations. We aim to create unforgettable moments through quality service, expert planning, and attention to every detail.',
  },
  values: {
    title: 'OUR VALUES',
    items: [
      {
        title: 'Safety First',
        text: 'We prioritize the safety and well-being of every guest.',
      },
      {
        title: 'Professional Service',
        text: 'We deliver organized, reliable, and high-quality services.',
      },
      {
        title: 'Customer Satisfaction',
        text: 'We create exceptional experiences that exceed expectations.',
      },
      {
        title: 'Integrity and Trust',
        text: 'We build relationships based on honesty and transparency.',
      },
      {
        title: 'Excellence',
        text: 'We continuously improve to provide the best experience.',
      },
    ],
  },
  goals: {
    title: 'OUR GOALS',
    items: [
      'Provide world-class sea tourism experiences',
      'Ensure maximum customer satisfaction',
      'Expand our tourism services and destinations',
      'Maintain high standards of safety and quality',
      'Build long-term relationships with international clients',
    ],
  },
};
