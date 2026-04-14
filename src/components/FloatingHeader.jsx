import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingHeader = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [100, 300], [0, 1]);
  const y = useTransform(scrollY, [100, 300], [-20, 0]);

  return (
    <motion.header
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 h-16 glass-card rounded-none border-t-0 p-4 z-[90] flex items-center justify-between px-6 md:px-12"
    >
      <div className="font-serif text-xl text-gray-800">
        For <span className="text-romantic-pink font-bold">Monalisa</span>
      </div>
      <div className="text-sm tracking-widest text-gray-500 uppercase font-light">
        Our Special Day
      </div>
    </motion.header>
  );
};

export default FloatingHeader;
