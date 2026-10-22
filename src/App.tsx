/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TOURS_DATA, TourItem } from './data/tours';
import {
  parseRoute,
  PageRoute,
  TourFilterState,
  DEFAULT_TOUR_FILTERS,
  CartBookingItem,
  calculateCartSummary,
  calculateBookingLineTotal,
} from './utils/tourLogic';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TourListPage } from './pages/TourListPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import {
  CartDrawer,
  WishlistModal,
  AuthModal,
  InstallAppModal,
} from './components/Overlays';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    parseRoute(typeof window !== 'undefined' ? window.location.pathname : '/')
  );

  const [tourFilters, setTourFilters] = useState<TourFilterState>(
    DEFAULT_TOUR_FILTERS
  );

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('elbasha_wishlist');
      return saved ? JSON.parse(saved) : ['tour-orange-bay'];
    } catch {
      return ['tour-orange-bay'];
    }
  });

  const [cart, setCart] = useState<CartBookingItem[]>(() => {
    try {
      const saved = localStorage.getItem('elbasha_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<{
    open: boolean;
    mode: 'login' | 'signup';
  }>({ open: false, mode: 'login' });
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(parseRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('elbasha_wishlist', JSON.stringify(wishlist));
    } catch {
      // Ignore storage errors
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('elbasha_cart', JSON.stringify(cart));
    } catch {
      // Ignore storage errors
    }
  }, [cart]);

  // Update document title dynamically per page route
  useEffect(() => {
    switch (currentRoute.page) {
      case 'home':
        document.title = 'El Basha Sea Trips — Hurghada & Red Sea Marine Excursions';
        break;
      case 'about':
        document.title = 'About Us — El Basha Sea Trips | Hurghada Red Sea';
        break;
      case 'tours':
        document.title = 'Tour List (12 Red Sea Trips) — El Basha Sea Trips';
        break;
      case 'contact':
        document.title = 'Contact Us — El Basha Sea Trips | Hurghada Marina';
        break;
      case 'tour-detail': {
        const found = TOURS_DATA.find((t) => t.slug === currentRoute.slug);
        document.title = found
          ? `${found.title} — El Basha Sea Trips`
          : 'Tour Details — El Basha Sea Trips';
        break;
      }
    }
  }, [currentRoute]);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined' && window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentRoute(parseRoute(path));
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  const handleToggleWishlist = (tourId: string) => {
    setWishlist((prev) =>
      prev.includes(tourId)
        ? prev.filter((id) => id !== tourId)
        : [...prev, tourId]
    );
  };

  const handleQuickAdd = (tour: TourItem) => {
    const lineTotal = calculateBookingLineTotal(tour.price, 2, 0, false, false);
    const newItem: CartBookingItem = {
      cartItemId: `${tour.id}-${Date.now()}`,
      tourId: tour.id,
      slug: tour.slug,
      title: tour.title,
      location: tour.location,
      date: '2026-11-15',
      adults: 2,
      children: 0,
      unitPrice: tour.price,
      privateTransfer: false,
      underwaterPhotos: false,
      lineTotal,
    };
    setCart((prev) => [...prev, newItem]);
    setCartOpen(true);
  };

  const handleAddToCartFromDetail = (booking: {
    tour: TourItem;
    date: string;
    adults: number;
    children: number;
    privateTransfer: boolean;
    underwaterPhotos: boolean;
    lineTotal: number;
  }) => {
    const newItem: CartBookingItem = {
      cartItemId: `${booking.tour.id}-${Date.now()}`,
      tourId: booking.tour.id,
      slug: booking.tour.slug,
      title: booking.tour.title,
      location: booking.tour.location,
      date: booking.date,
      adults: booking.adults,
      children: booking.children,
      unitPrice: booking.tour.price,
      privateTransfer: booking.privateTransfer,
      underwaterPhotos: booking.underwaterPhotos,
      lineTotal: booking.lineTotal,
    };
    setCart((prev) => [...prev, newItem]);
    setCartOpen(true);
  };

  const handleSearchToTourList = (params: {
    destination: string;
    date: string;
    guests: number;
  }) => {
    setTourFilters({
      ...DEFAULT_TOUR_FILTERS,
      searchQuery: params.destination,
    });
    navigate('/tour-list');
  };

  const cartSummary = calculateCartSummary(cart);
  const wishlistedTours = TOURS_DATA.filter((t) => wishlist.includes(t.id));

  const activeTour =
    currentRoute.page === 'tour-detail'
      ? TOURS_DATA.find((t) => t.slug === currentRoute.slug) || TOURS_DATA[0]
      : TOURS_DATA[0];

  const relatedTours = TOURS_DATA.filter((t) => t.id !== activeTour.id);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        cartTotal={cartSummary.total}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenAuth={(mode) => setAuthModalState({ open: true, mode })}
        currentUser={currentUser}
      />

      <main className="flex-1">
        {currentRoute.page === 'home' && (
          <HomePage
            tours={TOURS_DATA}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onNavigate={navigate}
            onSearchToTourList={handleSearchToTourList}
            onQuickAdd={handleQuickAdd}
          />
        )}

        {currentRoute.page === 'tours' && (
          <TourListPage
            tours={TOURS_DATA}
            filters={tourFilters}
            onChangeFilters={setTourFilters}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onNavigate={navigate}
            onQuickAdd={handleQuickAdd}
          />
        )}

        {currentRoute.page === 'tour-detail' && (
          <TourDetailPage
            tour={activeTour}
            relatedTours={relatedTours}
            isWishlisted={wishlist.includes(activeTour.id)}
            onToggleWishlist={handleToggleWishlist}
            onNavigate={navigate}
            onAddToCart={handleAddToCartFromDetail}
          />
        )}

        {currentRoute.page === 'about' && (
          <AboutUsPage onNavigate={navigate} />
        )}

        {currentRoute.page === 'contact' && <ContactUsPage />}
      </main>

      <Footer
        currentRoute={currentRoute}
        onNavigate={navigate}
        onOpenInstallModal={() => setInstallModalOpen(true)}
      />

      {/* Interactive Modals & Slide-Over Drawers */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemoveItem={(cartItemId) =>
          setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId))
        }
        onClearCart={() => setCart([])}
        onNavigate={navigate}
      />

      <WishlistModal
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistedTours={wishlistedTours}
        onToggleWishlist={handleToggleWishlist}
        onExplore={(slug) => navigate(`/tour/${slug}`)}
      />

      <AuthModal
        isOpen={authModalState.open}
        initialMode={authModalState.mode}
        onClose={() => setAuthModalState({ ...authModalState, open: false })}
        onSuccessAuth={(user) => setCurrentUser(user)}
      />

      <InstallAppModal
        isOpen={installModalOpen}
        onClose={() => setInstallModalOpen(false)}
      />
    </div>
  );
}
