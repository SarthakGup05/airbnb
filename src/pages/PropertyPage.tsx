import React from 'react';
import { useParams } from 'react-router-dom';
import { PropertyHeader } from '../components/property/PropertyHeader';
import { PropertyGallery } from '../components/property/PropertyGallery';
import { PropertyDetails } from '../components/property/PropertyDetails';
import { PropertyAmenities } from '../components/property/PropertyAmenities';
import { PropertyBooking } from '../components/property/PropertyBooking';
import { listings } from '../data/listings';

export function PropertyPage() {
  const { id } = useParams();
  const propertyData = listings.find(listing => listing.id === Number(id));

  if (!propertyData) {
    return <div className="text-center py-12">Property not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PropertyHeader title={propertyData.title} location={propertyData.location} />
      <PropertyGallery images={[propertyData.image, ...propertyData.additionalImages || []]} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <PropertyDetails
            host={propertyData.host || 'Sarah'}
            guests={propertyData.guests || 6}
            bedrooms={propertyData.bedrooms || 3}
            beds={propertyData.beds || 4}
            baths={propertyData.baths || 2}
            rating={propertyData.rating}
            reviews={propertyData.reviews || 128}
          />
          <PropertyAmenities />
        </div>
        
        <div>
          <PropertyBooking
            price={propertyData.price}
            rating={propertyData.rating}
            reviews={propertyData.reviews || 128}
          />
        </div>
      </div>
    </div>
  );
}