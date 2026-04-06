import React from 'react';

const CoffeeCup = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-5 h-5">
    <rect x="20" y="40" width="50" height="40" rx="8" fill="currentColor" />
    <rect x="68" y="45" width="14" height="20" rx="7" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M30 35 Q35 20 45 30 Q50 15 60 28" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const FOOTER_LINKS = ['About', 'Contact', 'Privacy'];

const Footer = () => {
  return (
    <footer className="bg-parchment border-t border-coffee-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <a href="#" className="flex items-center gap-2 text-coffee-500">
              <CoffeeCup />
              <span className="font-display text-2xl font-semibold">SipAndChill</span>
            </a>
            <p className="text-sm text-coffee-400 font-body mt-1">Find your perfect café.</p>
          </div>

          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-coffee-500 hover:text-coffee-700 font-body transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-coffee-100 mt-8 pt-6">
          <p className="text-xs text-coffee-300 font-body text-center">
            © 2025 SipAndChill. Made with ☕ and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
