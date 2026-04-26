import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';

const Hero = ({ onStart }) => {
  // Birthday is 29 April 2026 (for the countdown)
  const timeLeft = useCountdown('2026-04-29T00:00:00');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="max-w-2xl relative">
        {/* Accent Icon Box from Image */}
        <div className="absolute -top-16 right-0 md:-right-8 w-12 h-12 bg-romantic-yellow rounded-xl flex items-center justify-center rotate-12 shadow-lg shadow-romantic-yellow/20 hidden md:flex">
          <PartyPopper size={24} className="text-romantic-dark" />
        </div>

        <div className="mb-8 inline-block animate-float">
          <div className="w-24 h-24 bg-gradient-to-br from-romantic-pink to-romantic-purple rounded-[2rem] flex items-center justify-center shadow-2xl shadow-romantic-pink/30">
            <Heart size={48} className="text-white fill-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 premium-glow">
          Hey <span className="text-romantic-pink italic">Monalisa</span>
        </h1>

        <p className="text-lg text-slate-400 mb-12 font-light">
          Something special is waiting for you...
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 mb-12 max-w-md mx-auto">
          {Object.entries(timeLeft).slice(0, 4).map(([unit, value]) => (
            <div key={unit} className="glass-card p-4 flex flex-col items-center border-white/5 bg-white/5">
              <span className="text-2xl font-bold text-white">{value}</span>
              <span className="text-[10px] uppercase text-slate-500 tracking-[0.2em] mt-1">{unit}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="btn-romantic flex items-center gap-2 mx-auto shadow-romantic-pink/30 hover:scale-105 active:scale-95 transition-transform px-10 py-4"
        >
          <Sparkles size={20} />
          <span className="tracking-wide">ENTER OUR STORY</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
