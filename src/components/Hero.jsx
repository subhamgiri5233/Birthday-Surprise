import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { Heart, Calendar, Sparkles } from 'lucide-react';

const Hero = ({ onStart }) => {
  // Birthday is 29 April 2026 (for the countdown)
  const timeLeft = useCountdown('2026-04-29T00:00:00');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-romantic-soft to-romantic-peach/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-8 inline-block"
        >
          <Heart size={64} className="text-romantic-pink fill-romantic-pink" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-4">
          Hey <span className="text-romantic-pink italic">Monalisa</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-romantic-pink mb-4 font-serif italic">
          মোনালিসা (Pampi), তুমি আমার জীবনের আলো
        </p>

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

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="btn-romantic flex items-center gap-2 mx-auto shadow-romantic-pink/40"
        >
          <Sparkles size={20} />
          <span>Enter Our Story</span>
        </motion.button>
      </motion.div>

      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-romantic-peach/40"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity,
              delay: Math.random() * 20 
            }}
          >
            <Heart size={Math.random() * 20 + 10} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
