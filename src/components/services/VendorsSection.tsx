import React from 'react';

const vendorLogos = [
  { id: 1, name: 'Ramco Cement', logo: '/ramco.jpeg' },
  { id: 2, name: 'Kajaria', logo: 'kajaria.jpeg' },
  { id: 3, name: 'Asian Paints', logo: '/Asian.jpeg' },
  { id: 5, name: 'ARS CRS 550D', logo: '/ARS 550D.jpeg' },
  { id: 4, name: 'Parryware tiles', logo: '/parryware.png' }
];

const VendorsSection = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-2xl sm:text-3xl font-bold">Our Trusted Vendors</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {vendorLogos.map((vendor) => (
            <div 
              key={vendor.id} 
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <img 
                src={vendor.logo} 
                alt={vendor.name}
                className="h-16 w-auto object-contain mb-2" 
              />
              <p className="text-sm text-gray-700">{vendor.name}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 px-4">
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            We partner with industry-leading vendors to ensure the highest quality materials
            and services for all our construction projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VendorsSection;
