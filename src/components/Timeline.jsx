import React, { memo, useEffect, useRef, useState } from 'react';
import { Star, Heart, Camera, Coffee } from 'lucide-react';

const memories = [
  {
    date: "The Day We Met",
    title: "A Special Beginning ❤️",
    description: "That day didn’t feel special at first… but it became the moment that changed everything.\nMeeting you was the start of something I never want to end.",
    icon: <Star className="text-romantic-yellow" />,
    color: "bg-romantic-yellow/10"
  },
  {
    date: "Our First Date",
    title: "Butterflies & Smiles 🌸",
    description: "I was nervous, overthinking everything…\nBut the moment you smiled, all my worries disappeared.\nThat day, I knew you were someone truly special.",
    icon: <Coffee className="text-amber-400" />,
    color: "bg-amber-400/10"
  },
  {
    date: "Favorite Memory",
    title: "Unforgettable Moments 💫",
    description: "It’s hard to choose just one memory…\nBecause every moment with you feels perfect in its own way.\nYou make ordinary days feel magical.",
    icon: <Camera className="text-blue-400" />,
    color: "bg-blue-400/10"
  },
  {
    date: "The Future",
    title: "Lifetime of Love 💍",
    description: "This is just the beginning of our story…\nI dream of a future filled with your laughter, your love, and endless memories together.\nI want you in every chapter of my life.",
    icon: <Heart className="text-romantic-pink fill-romantic-pink" />,
    color: "bg-romantic-pink/10"
  }
];

const TimelineItem = ({ memory, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    const { current } = domRef;
    observer.observe(current);
    
    return () => observer.unobserve(current);
  }, []);

  return (
    <div 
      ref={domRef}
      className={`relative flex items-center justify-center mb-24 w-full justify-between transition-all duration-1000 transform ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      } ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
    >
      {/* Connector Line */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0 -z-10" />

      {/* Content */}
      <div className="w-[45%] px-6">
        <div className="glass-card p-8 md:p-10 border-l-4 border-romantic-pink/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/5 border-white/10 group">
          <div className="flex items-center gap-4 mb-4">
             <span className="text-[10px] font-bold text-romantic-pink tracking-[0.3em] uppercase block group-hover:tracking-[0.4em] transition-all">
                {memory.date}
              </span>
          </div>
          <h3 className="text-2xl font-serif text-white mb-3">{memory.title}</h3>
          <p className="text-slate-400 leading-relaxed font-light whitespace-pre-line text-sm md:text-base">{memory.description}</p>
        </div>
      </div>

      {/* Icon Node */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className={`w-14 h-14 rounded-2xl ${memory.color} border border-white/10 shadow-xl flex items-center justify-center backdrop-blur-md transition-transform duration-500 hover:rotate-12 hover:scale-110`}>
          {React.cloneElement(memory.icon, { size: 24 })}
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="w-[45%]" />
    </div>
  );
};

const Timeline = memo(() => {
  return (
    <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 premium-glow">Our Love Story</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-romantic-pink to-romantic-purple mx-auto rounded-full" />
      </div>

      <div className="relative">
        {memories.map((memory, index) => (
          <TimelineItem key={index} memory={memory} index={index} />
        ))}
      </div>
    </section>
  );
});

export default Timeline;
