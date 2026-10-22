import test from 'node:test';
import assert from 'node:assert/strict';
import { TOURS_DATA } from '../data/tours';
import {
  parseRoute,
  filterAndSortTours,
  DEFAULT_TOUR_FILTERS,
  calculateBookingLineTotal,
  calculateCartSummary,
  validateContactForm,
  validateCheckoutForm,
} from './tourLogic';

test('parseRoute resolves dedicated URLs for every page', () => {
  assert.deepEqual(parseRoute('/'), { page: 'home', path: '/' });
  assert.deepEqual(parseRoute('/about-us'), { page: 'about', path: '/about-us' });
  assert.deepEqual(parseRoute('/tour-list'), { page: 'tours', path: '/tour-list' });
  assert.deepEqual(parseRoute('/contact'), { page: 'contact', path: '/contact' });
  assert.deepEqual(parseRoute('/tour/orange-bay-island-hurghada'), {
    page: 'tour-detail',
    path: '/tour/orange-bay-island-hurghada',
    slug: 'orange-bay-island-hurghada',
  });
});

test('filterAndSortTours returns all 12 tours by default and filters accurately', () => {
  const allTours = filterAndSortTours(TOURS_DATA, DEFAULT_TOUR_FILTERS);
  assert.equal(allTours.length, 12);

  // Filter by searchQuery "Orange Bay"
  const orangeBayOnly = filterAndSortTours(TOURS_DATA, {
    ...DEFAULT_TOUR_FILTERS,
    searchQuery: 'Orange Bay',
  });
  assert.equal(orangeBayOnly.length, 1);
  assert.equal(orangeBayOnly[0].slug, 'orange-bay-island-hurghada');

  // Filter by category "island"
  const islands = filterAndSortTours(TOURS_DATA, {
    ...DEFAULT_TOUR_FILTERS,
    category: 'island',
  });
  assert.equal(islands.length, 6);

  // Sort by price ascending
  const sortedByPrice = filterAndSortTours(TOURS_DATA, {
    ...DEFAULT_TOUR_FILTERS,
    sortBy: 'price-asc',
  });
  assert.equal(sortedByPrice[0].price, 20.0);
  assert.equal(sortedByPrice[sortedByPrice.length - 1].price, 180.0);
});

test('calculateBookingLineTotal and calculateCartSummary compute exact pricing', () => {
  // 2 adults ($25 each) + 2 children ($12.50 each) = $75.00
  const line1 = calculateBookingLineTotal(25, 2, 2, false, false);
  assert.equal(line1, 75);

  // With private transfer (+$15) and underwater photos (+$20) = $110.00
  const line2 = calculateBookingLineTotal(25, 2, 2, true, true);
  assert.equal(line2, 110);

  const summary = calculateCartSummary([
    {
      cartItemId: '1',
      tourId: 'tour-orange-bay',
      slug: 'orange-bay-island-hurghada',
      title: 'Orange Bay Island – Hurghada',
      location: 'Orange Bay',
      date: '2026-11-05',
      adults: 2,
      children: 1,
      unitPrice: 25,
      privateTransfer: false,
      underwaterPhotos: false,
      lineTotal: 62.5,
    },
  ]);
  assert.equal(summary.subtotal, 62.5);
  assert.equal(summary.totalGuests, 3);
  assert.equal(summary.marineParkFee, 15);
  assert.equal(summary.total, 77.5);
});

test('validateContactForm and validateCheckoutForm enforce required fields', () => {
  const emptyContact = validateContactForm({
    firstName: '',
    secondName: '',
    phone: '',
    email: 'invalid-email',
    message: 'short',
  });
  assert.equal(emptyContact.valid, false);
  assert.ok(emptyContact.errors.firstName);
  assert.ok(emptyContact.errors.email);
  assert.ok(emptyContact.errors.message);

  const validContact = validateContactForm({
    firstName: 'Mohamed',
    secondName: 'Hassan',
    phone: '+201002294580',
    email: 'guest@example.com',
    message: 'We would like to book a private trip to Orange Bay for 4 guests.',
  });
  assert.equal(validContact.valid, true);

  const validCheckout = validateCheckoutForm({
    fullName: 'Sarah Jenkins',
    email: 'sarah@example.co.uk',
    whatsapp: '+447700900077',
    hotelName: 'Steigenberger Aldau Beach Hotel',
    roomNumber: '412',
  });
  assert.equal(validCheckout.valid, true);
});
