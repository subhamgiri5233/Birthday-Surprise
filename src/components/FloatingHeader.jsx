import React from 'react';

const FloatingHeader = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 h-16 glass-card rounded-none border-t-0 p-4 z-[90] flex items-center justify-between px-6 md:px-12 bg-black/40 backdrop-blur-lg border-white/5"
    >
      <div className="font-serif text-xl text-white">
        For <span className="text-romantic-pink font-bold">Monalisa</span>
      </div>
      <div className="text-[10px] md:text-sm tracking-[0.3em] text-slate-400 uppercase font-light">
        OUR STORY
      </div>
    </header>
  );
};

export default FloatingHeader;
