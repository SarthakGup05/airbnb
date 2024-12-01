import React from 'react';

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  return (
    <div className="grid grid-cols-4 gap-4 my-6">
      <div className="col-span-2 row-span-2">
        <img
          src={images[0]}
          alt="Main property view"
          className="h-full w-full object-cover rounded-l-xl"
        />
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-4">
        {images.slice(1, 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property view ${index + 2}`}
            className={`h-full w-full object-cover ${
              index === 1 ? 'rounded-tr-xl' : index === 3 ? 'rounded-br-xl' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}