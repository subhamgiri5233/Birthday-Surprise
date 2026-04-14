import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Heart, Camera, Coffee } from 'lucide-react';

const memories = [
  {
    date: "The Day We Met",
    title: "A Special Beginning ❤️",
    description: "That day didn’t feel special at first… but it became the moment that changed everything.\nMeeting you was the start of something I never want to end.",
    icon: <Star className="text-yellow-400" />,
    color: "bg-blue-100"
  },
  {
    date: "Our First Date",
    title: "Butterflies & Smiles 🌸",
    description: "I was nervous, overthinking everything…\nBut the moment you smiled, all my worries disappeared.\nThat day, I knew you were someone truly special.",
    icon: <Coffee className="text-amber-600" />,
    color: "bg-orange-100"
  },
  {
    date: "Favorite Memory",
    title: "Unforgettable Moments 💫",
    description: "It’s hard to choose just one memory…\nBecause every moment with you feels perfect in its own way.\nYou make ordinary days feel magical.",
    icon: <Camera className="text-blue-500" />,
    color: "bg-indigo-100"
  },
  {
    date: "The Future",
    title: "Lifetime of Love 💍",
    description: "This is just the beginning of our story…\nI dream of a future filled with your laughter, your love, and endless memories together.\nI want you in every chapter of my life.",
    icon: <Heart className="text-romantic-pink fill-romantic-pink" />,
    color: "bg-pink-100"
  }
];

const TimelineItem = ({ memory, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-center justify-center mb-16 w-full md:justify-between ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col`}
    >
      {/* Connector Line - Hidden on Mobile, shown on MD+ */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-romantic-peach/30 -z-10" />

      {/* Content */}
      <div className="w-full md:w-[45%] px-6">
        <div className="glass-card p-8 md:p-10 border-l-8 border-romantic-pink/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-4">
             <div className={`md:hidden w-10 h-10 rounded-full ${memory.color} flex items-center justify-center shadow-inner`}>
                {React.cloneElement(memory.icon, { size: 20 })}
             </div>
             <span className="text-xs font-bold text-romantic-pink tracking-[0.2em] uppercase block">
                {memory.date}
              </span>
          </div>
          <h3 className="text-2xl font-serif text-gray-800 mb-3">{memory.title}</h3>
          <p className="text-gray-600 leading-relaxed font-light whitespace-pre-line text-sm md:text-base">{memory.description}</p>
        </div>
      </div>

      {/* Icon Node - Desktop Only */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
        <motion.div
          animate={inView ? { scale: [0, 1.2, 1] } : {}}
          className={`w-12 h-12 rounded-full ${memory.color} border-4 border-white shadow-xl flex items-center justify-center`}
        >
          {memory.icon}
        </motion.div>
      </div>

      {/* Spacer for the other side - Desktop Only */}
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Our Love Story</h2>
        <div className="w-24 h-1 bg-romantic-pink mx-auto rounded-full" />
      </div>

      <div className="relative">
        {memories.map((memory, index) => (
          <TimelineItem key={index} memory={memory} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
