import React, { useState, useEffect, memo } from 'react';
import { Heart, Star } from 'lucide-react';

const TouchBurst = memo(() => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const x = e.clientX || (e.touches && e.touches[0].clientX);
      const y = e.clientY || (e.touches && e.touches[0].clientY);
      
      if (x === undefined || y === undefined) return;

      const newParticles = Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const velocity = 100 + Math.random() * 50;
        return {
          id: Date.now() + i,
          x,
          y,
          tx: Math.cos(angle) * velocity,
          ty: Math.sin(angle) * velocity,
          type: Math.random() > 0.5 ? 'heart' : 'star',
          size: 10 + Math.random() * 15,
          color: Math.random() > 0.5 ? '#ff4b5c' : '#fad0c4'
        };
      });

      setParticles((prev) => [...prev, ...newParticles].slice(-40));
    };

    window.addEventListener('mousedown', handleClick);
    window.addEventListener('touchstart', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('touchstart', handleClick);
    };
  }, []);

  // Clean up particles after animation finishes
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles([]);
    }, 1000);
    return () => clearTimeout(timer);
  }, [particles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-particle"
          style={{
            left: p.x,
            top: p.y,
            color: p.color,
            '--tw-translate-x': `${p.tx}px`,
            '--tw-translate-y': `${p.ty}px`
          }}
        >
          {p.type === 'heart' ? (
            <Heart size={p.size} fill="currentColor" />
          ) : (
            <Star size={p.size} fill="currentColor" />
          )}
        </div>
      ))}
    </div>
  );
});

export default TouchBurst;
