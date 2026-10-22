import { TourCategory, TourItem } from '../data/tours';

export type PageRoute =
  | { page: 'home'; path: '/' }
  | { page: 'about'; path: '/about-us' }
  | { page: 'tours'; path: '/tour-list' }
  | { page: 'tour-detail'; path: string; slug: string }
  | { page: 'contact'; path: '/contact' };

export function parseRoute(pathname: string): PageRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/about-us' || clean === '/about') {
    return { page: 'about', path: '/about-us' };
  }
  if (clean === '/tour-list' || clean === '/tours') {
    return { page: 'tours', path: '/tour-list' };
  }
  if (clean.startsWith('/tour/')) {
    const slug = clean.slice('/tour/'.length).trim();
    if (slug) {
      return { page: 'tour-detail', path: `/tour/${slug}`, slug };
    }
    return { page: 'tours', path: '/tour-list' };
  }
  if (clean === '/contact' || clean === '/contact-us') {
    return { page: 'contact', path: '/contact' };
  }
  return { page: 'home', path: '/' };
}

export type SortOption =
  | 'featured'
  | 'price-asc'
  | 'price-desc'
  | 'rating-desc'
  | 'duration-asc';

export type DurationFilter = 'all' | 'short' | 'half-day' | 'full-day';

export interface TourFilterState {
  searchQuery: string;
  destination: string;
  category: TourCategory;
  durationFilter: DurationFilter;
  maxPrice: number;
  featuredOnly: boolean;
  sortBy: SortOption;
}

export const DEFAULT_TOUR_FILTERS: TourFilterState = {
  searchQuery: '',
  destination: '',
  category: 'all',
  durationFilter: 'all',
  maxPrice: 250,
  featuredOnly: false,
  sortBy: 'featured',
};

export function filterAndSortTours(
  tours: TourItem[],
  filters: TourFilterState
): TourItem[] {
  const query = filters.searchQuery.trim().toLowerCase();
  const dest = filters.destination.trim().toLowerCase();

  const filtered = tours.filter((tour) => {
    if (query) {
      const matchesQuery =
        tour.title.toLowerCase().includes(query) ||
        tour.location.toLowerCase().includes(query) ||
        tour.destinationZone.toLowerCase().includes(query) ||
        tour.categoryLabel.toLowerCase().includes(query) ||
        tour.shortSummary.toLowerCase().includes(query);
      if (!matchesQuery) return false;
    }

    if (dest && dest !== 'all') {
      const matchesDest =
        tour.destinationZone.toLowerCase().includes(dest) ||
        tour.location.toLowerCase().includes(dest) ||
        tour.title.toLowerCase().includes(dest);
      if (!matchesDest) return false;
    }

    if (filters.category !== 'all' && tour.category !== filters.category) {
      return false;
    }

    if (tour.price > filters.maxPrice) {
      return false;
    }

    if (filters.featuredOnly && !tour.featured) {
      return false;
    }

    if (filters.durationFilter === 'short' && tour.durationHours > 4) {
      return false;
    }
    if (
      filters.durationFilter === 'half-day' &&
      (tour.durationHours < 5 || tour.durationHours > 6)
    ) {
      return false;
    }
    if (filters.durationFilter === 'full-day' && tour.durationHours < 7) {
      return false;
    }

    return true;
  });

  const sorted = [...filtered];
  sorted.sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating-desc':
        return b.rating - a.rating || b.reviewsCount - a.reviewsCount;
      case 'duration-asc':
        return a.durationHours - b.durationHours;
      case 'featured':
      default:
        return 0;
    }
  });

  return sorted;
}

export interface CartBookingItem {
  cartItemId: string;
  tourId: string;
  slug: string;
  title: string;
  location: string;
  date: string;
  adults: number;
  children: number;
  unitPrice: number;
  privateTransfer: boolean;
  underwaterPhotos: boolean;
  lineTotal: number;
}

export function calculateBookingLineTotal(
  unitPrice: number,
  adults: number,
  children: number,
  privateTransfer: boolean,
  underwaterPhotos: boolean
): number {
  const safeAdults = Math.max(1, Math.floor(adults));
  const safeChildren = Math.max(0, Math.floor(children));
  // Children (ages 4-11) are 50% of adult fare
  const baseTotal =
    safeAdults * unitPrice + safeChildren * (unitPrice * 0.5);
  const transferAddon = privateTransfer ? 15 : 0;
  const photosAddon = underwaterPhotos ? 20 : 0;
  return Number((baseTotal + transferAddon + photosAddon).toFixed(2));
}

export function calculateCartSummary(items: CartBookingItem[]): {
  subtotal: number;
  marineParkFee: number;
  total: number;
  totalGuests: number;
} {
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const totalGuests = items.reduce(
    (sum, item) => sum + item.adults + item.children,
    0
  );
  const marineParkFee = totalGuests * 5;
  return {
    subtotal: Number(subtotal.toFixed(2)),
    marineParkFee: Number(marineParkFee.toFixed(2)),
    total: Number((subtotal + marineParkFee).toFixed(2)),
    totalGuests,
  };
}

export interface ContactFormInput {
  firstName: string;
  secondName: string;
  phone: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(input: ContactFormInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.firstName || input.firstName.trim().length < 2) {
    errors.firstName = 'Please enter your first name (at least 2 characters).';
  }
  if (!input.secondName || input.secondName.trim().length < 2) {
    errors.secondName = 'Please enter your second name.';
  }
  const cleanPhone = (input.phone || '').trim();
  if (!cleanPhone || cleanPhone.length < 7) {
    errors.phone = 'Please enter a valid phone or WhatsApp number.';
  }
  const cleanEmail = (input.email || '').trim();
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!input.message || input.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface CheckoutFormInput {
  fullName: string;
  email: string;
  whatsapp: string;
  hotelName: string;
  roomNumber: string;
}

export function validateCheckoutForm(
  input: CheckoutFormInput
): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.fullName || input.fullName.trim().length < 3) {
    errors.fullName = 'Please enter the lead passenger full name.';
  }
  if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    errors.email = 'Please provide a valid email for your e-ticket.';
  }
  if (!input.whatsapp || input.whatsapp.trim().length < 7) {
    errors.whatsapp = 'Please enter a WhatsApp number for pickup coordination.';
  }
  if (!input.hotelName || input.hotelName.trim().length < 2) {
    errors.hotelName = 'Please enter your Hurghada hotel or resort name.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
