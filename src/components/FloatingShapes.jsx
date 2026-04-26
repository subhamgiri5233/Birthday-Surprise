import React, { memo } from 'react';
import { Plus, Circle, Square, Triangle } from 'lucide-react';

const FloatingShapes = memo(() => {
  const shapes = Array.from({ length: 30 });

  const getShape = (index) => {
    const type = index % 4;
    switch (type) {
      case 0: return <Plus size={Math.random() * 20 + 20} />;
      case 1: return <Circle size={Math.random() * 15 + 15} />;
      case 2: return <Square size={Math.random() * 15 + 15} />;
      default: return <Triangle size={Math.random() * 15 + 15} />;
    }
  };

  const colors = [
    'text-romantic-yellow/20',
    'text-romantic-pink/20',
    'text-romantic-purple/20',
    'text-white/10'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const animationDuration = 20 + Math.random() * 30;
        const animationDelay = Math.random() * -30;
        const rotationSpeed = 10 + Math.random() * 20;

        return (
          <div
            key={i}
            className={`absolute animate-float-up ${randomColor}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
            }}
          >
            <div 
              className="animate-spin" 
              style={{ animationDuration: `${rotationSpeed}s` }}
            >
              {getShape(i)}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default FloatingShapes;
