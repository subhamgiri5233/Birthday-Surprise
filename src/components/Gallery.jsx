import React from 'react';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// Importing all 14 images
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';

const Gallery = () => {
  // 15 photos in a triangle (5-4-3-2-1) for desktop
  const desktopRows = [
    [img1, img2, img3, img4, img5],
    [img6, img7, img8, img9],
    [img10, img11, img12],
    [img13, img14],
    [img1] 
  ];

  const allPhotos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img1];

  return (
    <section className="py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decorative Sparkle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-romantic-pink/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-romantic-peach/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 tracking-tight premium-glow"
          >
            Memories Wrapped in Love
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-romantic-pink italic font-light text-lg md:text-xl"
          >
            Our beautiful journey together, Monalisa...
          </motion.p>
        </div>

        <PhotoProvider>
          {/* Desktop View: Triangle Formation */}
          <div className="hidden md:flex flex-col items-center gap-6">
            {desktopRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-6 w-full">
                {row.map((src, imgIndex) => (
                  <motion.div
                    key={`${rowIndex}-${imgIndex}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: rowIndex * 0.1 + imgIndex * 0.05 }}
                    className="relative group cursor-pointer w-36 h-36 lg:w-44 lg:h-44"
                  >
                    <PhotoView src={src}>
                      <div className="w-full h-full relative group transform transition-all duration-500 hover:rotate-3 hover:scale-105 active:scale-95 z-10 shadow-xl heart-clip">
                        <div className="w-full h-full bg-white/80 backdrop-blur-sm heart-clip p-1.5 shadow-inner">
                          <img
                            src={src}
                            alt={`Memory Row ${rowIndex + 1}`}
                            className="w-full h-full object-cover heart-clip transition-transform duration-1000 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </PhotoView>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile View: High Performance Scrollable Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden px-2">
            {allPhotos.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index % 4 * 0.05 }}
                className="relative group cursor-pointer aspect-square"
              >
                <PhotoView src={src}>
                  <div className="w-full h-full relative z-10 shadow-lg heart-clip">
                    <div className="w-full h-full bg-white/80 heart-clip p-1 shadow-inner">
                      <img
                        src={src}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover heart-clip"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 text-romantic-pink/60 italic font-serif px-4 text-xl md:text-2xl"
        >
          ভালোবাসার প্রতিটি স্পন্দন শুধু তোমার জন্য...
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
