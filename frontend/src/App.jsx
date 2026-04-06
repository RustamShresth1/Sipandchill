import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-cream font-body flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="font-display text-5xl font-semibold text-coffee-500 tracking-wide">
          SipAndChill
        </h1>
        <p className="text-coffee-400 text-lg font-body">
          Your café discovery app — coming soon.
        </p>
        <span className="inline-block mt-4 px-6 py-2 rounded-full bg-coffee-200 text-coffee-700 text-sm font-medium shadow-soft">
          🚧 Under construction
        </span>
      </div>
    </div>
  );
};

export default App;
