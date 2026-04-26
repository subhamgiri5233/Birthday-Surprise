import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { Heart, Sparkles } from 'lucide-react';

const Hero = ({ onStart }) => {
  // Birthday is 29 April 2026 (for the countdown)
  const timeLeft = useCountdown('2026-04-29T00:00:00');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-romantic-soft to-romantic-peach/30">
      <div className="max-w-2xl">
        <div className="mb-8 inline-block animate-pulse">
          <Heart size={64} className="text-romantic-pink fill-romantic-pink" />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-4">
          Hey <span className="text-romantic-pink italic">Monalisa</span>
        </h1>

        <p className="text-lg text-gray-600 mb-12 font-light">
          Something special is waiting for you...
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 mb-12 max-w-md mx-auto">
          {Object.entries(timeLeft).slice(0, 4).map(([unit, value]) => (
            <div key={unit} className="glass-card p-3 flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-800">{value}</span>
              <span className="text-xs uppercase text-gray-500 tracking-widest">{unit}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="btn-romantic flex items-center gap-2 mx-auto shadow-romantic-pink/40 hover:scale-105 active:scale-95 transition-transform"
        >
          <Sparkles size={20} />
          <span>Enter Our Story</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
