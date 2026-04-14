import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const HeartRain = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-romantic-pink/10"
          initial={{ 
            top: -100,
            left: `${Math.random() * 100}%`,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.3,
            rotate: Math.random() * 360
          }}
          animate={{ 
            top: '110%',
            left: [`${Math.random() * 100}%`, `${Math.random() * 100 + (Math.random() * 20 - 10)}%`],
            opacity: [0, 0.4, 0.4, 0],
            rotate: Math.random() * 720
          }}
          transition={{ 
            duration: 15 + Math.random() * 25, 
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear"
          }}
        >
          {i % 5 === 0 ? (
            <Sparkles size={Math.random() * 20 + 10} />
          ) : (
            <Heart size={Math.random() * 30 + 10} fill={i % 2 === 0 ? "currentColor" : "none"} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default HeartRain;
