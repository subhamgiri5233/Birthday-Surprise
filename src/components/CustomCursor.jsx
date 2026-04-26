import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`
        }}
      >
        <div className="w-full h-full bg-romantic-pink/20 rounded-full blur-sm" />
      </div>
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-romantic-pink rounded-full pointer-events-none z-[9999] hidden md:block transition-transform duration-0"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`
        }}
      />
    </>
  );
};

export default CustomCursor;
