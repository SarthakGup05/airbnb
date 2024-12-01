import React from 'react';
import { ListingCard } from './ListingCard';

const listings = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    title: 'Luxury Villa with Ocean View',
    location: 'Malibu, California',
    price: 1200,
    rating: 4.9,
    dates: 'Mar 15-20',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
    title: 'Modern Downtown Loft',
    location: 'New York City',
    price: 300,
    rating: 4.8,
    dates: 'Mar 1-6',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    price: 450,
    rating: 4.95,
    dates: 'Mar 10-15',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    title: 'Beachfront Paradise',
    location: 'Miami Beach, Florida',
    price: 800,
    rating: 4.85,
    dates: 'Mar 5-10',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84',
    title: 'Historic Downtown Apartment',
    location: 'Boston, Massachusetts',
    price: 250,
    rating: 4.75,
    dates: 'Mar 8-13',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
    title: 'Lakeside Retreat',
    location: 'Lake Tahoe, Nevada',
    price: 600,
    rating: 4.9,
    dates: 'Mar 12-17',
  },
];

export function ListingsGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}