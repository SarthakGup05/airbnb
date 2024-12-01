import React from 'react';
import { Share, Heart } from 'lucide-react';

interface PropertyHeaderProps {
  title: string;
  location: string;
}

export function PropertyHeader({ title, location }: PropertyHeaderProps) {
  return (
    <div className="border-b pb-6">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="underline font-medium">{location}</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg transition">
            <Share size={18} />
            <span className="underline font-medium">Share</span>
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg transition">
            <Heart size={18} />
            <span className="underline font-medium">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}