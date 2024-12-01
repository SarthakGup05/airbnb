import React from 'react';
import { Star, Calendar } from 'lucide-react';

interface PropertyBookingProps {
  price: number;
  rating: number;
  reviews: number;
}

export function PropertyBooking({ price, rating, reviews }: PropertyBookingProps) {
  return (
    <div className="border rounded-xl p-6 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xl font-semibold">${price}</span>
          <span className="text-gray-500"> / night</span>
        </div>
        <div className="flex items-center gap-1">
          <Star size={16} />
          <span>{rating}</span>
          <span className="text-gray-500">· {reviews} reviews</span>
        </div>
      </div>

      <div className="border rounded-lg mb-4">
        <div className="grid grid-cols-2 border-b">
          <div className="p-3 border-r">
            <div className="text-xs font-semibold">CHECK-IN</div>
            <div>Add date</div>
          </div>
          <div className="p-3">
            <div className="text-xs font-semibold">CHECKOUT</div>
            <div>Add date</div>
          </div>
        </div>
        <div className="p-3">
          <div className="text-xs font-semibold">GUESTS</div>
          <div>1 guest</div>
        </div>
      </div>

      <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
        Reserve
      </button>

      <div className="mt-4 space-y-4">
        <div className="flex justify-between">
          <span className="underline">${price} x 5 nights</span>
          <span>${price * 5}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>$85</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Service fee</span>
          <span>$100</span>
        </div>
        <div className="pt-4 border-t flex justify-between font-semibold">
          <span>Total</span>
          <span>${price * 5 + 185}</span>
        </div>
      </div>
    </div>
  );
}