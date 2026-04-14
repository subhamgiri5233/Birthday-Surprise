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
  // For mobile, we will use a simpler grid
  const desktopRows = [
    [img1, img2, img3, img4, img5],
    [img6, img7, img8, img9],
    [img10, img11, img12],
    [img13, img14],
    [img1] 
  ];

  const allPhotos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img1];

  return (
    <section className="py-24 px-4 md:px-6 bg-white/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 tracking-tight uppercase">Love Triangle of Memories</h2>
          <p className="text-romantic-pink italic font-light">আমাদের ভালোবাসার প্রতিটি মুহূর্ত (Pampi)...</p>
        </div>

        <PhotoProvider>
          {/* Desktop View: Triangle Formation */}
          <div className="hidden md:flex flex-col items-center gap-4">
            {desktopRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-4 w-full">
                {row.map((src, imgIndex) => (
                  <motion.div
                    key={`${rowIndex}-${imgIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: imgIndex * 0.05 }}
                    className="relative group cursor-pointer md:w-32 md:h-32 lg:w-40 lg:h-40 p-1"
                  >
                    <PhotoView src={src}>
                      <div className="w-full h-full relative group transform transition-all duration-300 hover:scale-110 active:scale-95 z-10 shadow-lg heart-clip">
                        <div className="w-full h-full bg-white heart-clip p-1">
                          <img
                            src={src}
                            alt={`Memory Row ${rowIndex + 1}`}
                            className="w-full h-full object-cover heart-clip transition-transform duration-700 group-hover:scale-125"
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

          {/* Mobile View: Balanced Grid for Visibility & Performance */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:hidden px-2">
            {allPhotos.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer aspect-square p-1"
              >
                <PhotoView src={src}>
                  <div className="w-full h-full relative group z-10 shadow-md heart-clip">
                    <div className="w-full h-full bg-white heart-clip p-1">
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
          className="text-center mt-12 text-gray-400 italic font-serif px-4"
        >
          ভালোবাসার প্রতিটি স্পন্দন তোমার জন্য...
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
