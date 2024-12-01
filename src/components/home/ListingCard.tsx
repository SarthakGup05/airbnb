import React from 'react';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ListingCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  dates: string;
}

export function ListingCard({ id, image, title, location, price, rating, dates }: ListingCardProps) {
  const navigate = useNavigate();

  return (
    <div className="group cursor-pointer" onClick={() => navigate(`/property/${id}`)}>
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
        <button 
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10"
          onClick={(e) => {
            e.stopPropagation();
            // Handle wishlist functionality
          }}
        >
          <Heart className="h-6 w-6 text-white" />
        </button>
      </div>
      
      <div className="mt-2">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{title}</h3>
          <div className="flex items-center gap-1">
            <Star size={14} />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-500">{location}</p>
        <p className="text-gray-500">{dates}</p>
        <p className="mt-2">
          <span className="font-semibold">${price}</span> night
        </p>
      </div>
    </div>
  );
}