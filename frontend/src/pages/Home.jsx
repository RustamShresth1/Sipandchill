import React from 'react';
import Button from '../components/Button';
import CafeCard from '../components/CafeCard';
import CAFES from '../data/cafes';

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-coffee-300 flex-shrink-0">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const STATS = [
  { value: '500+', label: 'Cafés' },
  { value: '4.8', label: 'Avg Rating' },
  { value: '50+', label: 'Cities' },
];

const Home = () => {
  return (
    <>
      <section className="relative bg-hero py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-coffee-800 leading-tight tracking-tight">
            Find the perfect café
            <br className="hidden sm:block" />
            {' '}to study & chill
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-coffee-400 font-body max-w-2xl mx-auto leading-relaxed">
            Discover cozy spots with great coffee, free WiFi,
            and the perfect ambiance for work and relaxation.
          </p>

          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-2xl shadow-card px-5 py-4 gap-3 border border-coffee-100 focus-within:shadow-hover focus-within:border-coffee-200 transition-all duration-300">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search cafés by name or location..."
                className="flex-1 bg-transparent outline-none text-coffee-700 placeholder-coffee-300 font-body text-base"
              />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-display font-semibold text-coffee-700">{stat.value}</div>
                <div className="text-sm text-coffee-400 font-body mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl font-semibold text-coffee-800 text-center">
            Featured Cafés
          </h2>
          <p className="mt-3 text-coffee-400 font-body text-center text-lg">
            Hand-picked spots loved by our community
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAFES.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary">Explore All Cafés</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
