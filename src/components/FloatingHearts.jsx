import React, { memo } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = memo(() => {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {hearts.map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-up text-romantic-pink/10"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 20}s`,
            fontSize: `${10 + Math.random() * 30}px`,
          }}
        >
          <Heart fill="currentColor" size={24 + Math.random() * 20} />
        </div>
      ))}
    </div>
  );
});

export default FloatingHearts;
