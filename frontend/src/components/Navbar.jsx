import React, { useState } from 'react';
import Button from './Button';

const CoffeeCup = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-5 h-5">
    <rect x="20" y="40" width="50" height="40" rx="8" fill="currentColor" />
    <rect x="68" y="45" width="14" height="20" rx="7" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M30 35 Q35 20 45 30 Q50 15 60 28" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const NAV_LINKS = ['Home', 'Explore', 'About'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-coffee-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-coffee-500">
          <CoffeeCup />
          <span className="font-display text-2xl font-semibold">SipAndChill</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-sm font-medium text-coffee-700 hover:text-coffee-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="outline" size="sm">Sign In</Button>
        </div>

        <button
          className="md:hidden text-coffee-700 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            {mobileOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-coffee-100 px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block font-body text-sm font-medium text-coffee-700 hover:text-coffee-500 transition-colors"
            >
              {link}
            </a>
          ))}
          <Button variant="outline" size="sm" className="w-full">Sign In</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
