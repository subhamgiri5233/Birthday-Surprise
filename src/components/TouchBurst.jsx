import React, { useState, useEffect, memo } from 'react';
import { Heart, Star, Plus, Circle } from 'lucide-react';

const TouchBurst = memo(() => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const x = e.clientX || (e.touches && e.touches[0].clientX);
      const y = e.clientY || (e.touches && e.touches[0].clientY);
      
      if (x === undefined || y === undefined) return;

      const colors = ['#ff4d94', '#a349eb', '#facc15', '#ffffff'];
      const shapes = ['heart', 'star', 'plus', 'circle'];

      const newParticles = Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180 + (Math.random() * 0.5);
        const velocity = 80 + Math.random() * 100;
        return {
          id: Date.now() + i,
          x,
          y,
          tx: Math.cos(angle) * velocity,
          ty: Math.sin(angle) * velocity,
          type: shapes[Math.floor(Math.random() * shapes.length)],
          size: 8 + Math.random() * 12,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360
        };
      });

      setParticles((prev) => [...prev, ...newParticles].slice(-60));
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
    }, 1200);
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
            transform: `rotate(${p.rotation}deg)`,
            '--tw-translate-x': `${p.tx}px`,
            '--tw-translate-y': `${p.ty}px`
          }}
        >
          {p.type === 'heart' && <Heart size={p.size} fill="currentColor" />}
          {p.type === 'star' && <Star size={p.size} fill="currentColor" />}
          {p.type === 'plus' && <Plus size={p.size} />}
          {p.type === 'circle' && <Circle size={p.size} fill="currentColor" />}
        </div>
      ))}
    </div>
  );
});

export default TouchBurst;
