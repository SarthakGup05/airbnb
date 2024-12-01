import React from 'react';
import { Wifi, Car, Tv, Utensils, Wind, Waves } from 'lucide-react';

const amenities = [
  { icon: Wifi, label: 'High-speed WiFi' },
  { icon: Car, label: 'Free parking' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Utensils, label: 'Full kitchen' },
  { icon: Wind, label: 'Air conditioning' },
  { icon: Waves, label: 'Swimming pool' },
];

export function PropertyAmenities() {
  return (
    <div className="border-b pb-6">
      <h2 className="text-xl font-semibold mb-6">What this place offers</h2>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-4">
            <Icon size={24} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}