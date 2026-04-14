import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const TouchBurst = () => {
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    const handleTouch = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      
      const newEffects = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i,
        x,
        y,
        angle: (i * 60 * Math.PI) / 180,
        type: Math.random() > 0.5 ? 'heart' : 'star',
        size: Math.random() * 20 + 10,
        color: Math.random() > 0.5 ? '#ff4b5c' : '#fad0c4'
      }));

      setEffects((prev) => [...prev, ...newEffects].slice(-30));
    };

    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('mousedown', handleTouch);

    return () => {
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('mousedown', handleTouch);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {effects.map((effect) => (
          <motion.div
            key={effect.id}
            initial={{ 
              x: effect.x - effect.size / 2, 
              y: effect.y - effect.size / 2, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: effect.x + Math.cos(effect.angle) * 100 - effect.size / 2,
              y: effect.y + 200, // Falling down
              opacity: 0,
              scale: 1,
              rotate: 360
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute"
            style={{ color: effect.color }}
          >
            {effect.type === 'heart' ? (
              <Heart size={effect.size} fill="currentColor" />
            ) : (
              <Star size={effect.size} fill="currentColor" />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TouchBurst;
