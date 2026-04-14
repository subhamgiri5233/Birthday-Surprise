import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <div className="w-full h-full bg-romantic-pink/20 rounded-full blur-sm" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-romantic-pink rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
