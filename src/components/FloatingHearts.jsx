import React, { memo } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = memo(() => {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {hearts.map((_, i) => {
        const colors = ['text-romantic-pink/10', 'text-romantic-purple/10', 'text-white/5', 'text-romantic-yellow/5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <div
            key={i}
            className={`absolute animate-float-up ${randomColor}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          >
            <Heart fill="currentColor" size={15 + Math.random() * 30} />
          </div>
        );
      })}
    </div>
  );
});

export default FloatingHearts;
