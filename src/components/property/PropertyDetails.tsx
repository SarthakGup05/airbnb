import React from 'react';
import { Users, Medal, Star, Calendar } from 'lucide-react';

interface PropertyDetailsProps {
  host: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  rating: number;
  reviews: number;
}

export function PropertyDetails({
  host,
  guests,
  bedrooms,
  beds,
  baths,
  rating,
  reviews,
}: PropertyDetailsProps) {
  return (
    <div className="border-b pb-6">
      <div className="flex items-center justify-between py-6">
        <div>
          <h2 className="text-xl font-semibold">
            Entire place hosted by {host}
          </h2>
          <div className="text-gray-500 mt-1">
            {guests} guests · {bedrooms} bedrooms · {beds} beds · {baths} baths
          </div>
        </div>
        <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center">
          <Users size={24} />
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4 py-4">
          <Medal size={24} />
          <div>
            <h3 className="font-medium">{host} is a Superhost</h3>
            <p className="text-gray-500">
              Superhosts are experienced, highly rated hosts.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 py-4">
          <Calendar size={24} />
          <div>
            <h3 className="font-medium">Free cancellation before check-in</h3>
            <p className="text-gray-500">
              Check the cancellation policy for details
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 py-4">
          <Star size={24} />
          <div>
            <h3 className="font-medium">
              {rating} · {reviews} reviews
            </h3>
            <p className="text-gray-500">
              Highly rated by recent guests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}