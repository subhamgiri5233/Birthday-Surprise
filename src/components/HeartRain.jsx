import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartRain = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-romantic-pink/15"
          initial={{ 
            top: -50,
            left: `${Math.random() * 100}%`,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 360
          }}
          animate={{ 
            top: '110%',
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 720
          }}
          transition={{ 
            duration: 10 + Math.random() * 15, 
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear"
          }}
        >
          <Heart size={Math.random() * 30 + 10} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default HeartRain;
