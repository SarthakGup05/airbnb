import React from 'react';
import { Home } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-primary">
      <Home size={32} className="text-primary" />
      <span className="font-bold text-xl">airbnb</span>
    </div>
  );
}