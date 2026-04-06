import React from 'react';

const CoffeeCup = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-10 h-10">
    <rect x="20" y="40" width="50" height="40" rx="8" fill="currentColor" />
    <rect x="68" y="45" width="14" height="20" rx="7" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M30 35 Q35 20 45 30 Q50 15 60 28" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CafeCard = ({ cafe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 ease-smooth overflow-hidden cursor-pointer group hover:-translate-y-1">
      <div className="aspect-[4/3] bg-gradient-to-br from-coffee-100 to-coffee-200 rounded-t-2xl overflow-hidden flex items-center justify-center">
        <span className="text-coffee-300">
          <CoffeeCup />
        </span>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="font-display text-xl font-semibold text-coffee-800 group-hover:text-coffee-500 transition-colors">
          {cafe.name}
        </h3>

        <div className="flex items-center gap-1 text-sm text-coffee-400 font-body">
          <MapPin />
          <span>{cafe.location}</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <Star />
            <span className="text-sm font-medium text-coffee-600">{cafe.rating}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {cafe.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-medium bg-coffee-50 text-coffee-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeCard;
