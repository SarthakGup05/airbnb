import React from 'react';
import { Home, Mountain, Waves, TreePine, Building, Castle } from 'lucide-react';

const categories = [
  { label: 'All', icon: Home },
  { label: 'Mountain', icon: Mountain },
  { label: 'Beach', icon: Waves },
  { label: 'Countryside', icon: TreePine },
  { label: 'City', icon: Building },
  { label: 'Castle', icon: Castle },
];

export function Categories() {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.label}
              className="flex flex-col items-center gap-2 min-w-fit hover:text-primary hover:border-b-2 hover:border-primary pb-2 transition"
            >
              <category.icon size={24} />
              <span className="text-sm">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}