import React, { memo } from 'react';
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

const Gallery = memo(() => {
  // Photos organized to form a heart shape
  const heartRows = [
    { items: [img1, img2], hasGap: true, itemsAfter: [img3, img4] },
    { items: [img5, img6, img7, img8, img9] },
    { items: [img10, img11, img12, img13] },
    { items: [img14, img1] },
    { items: [img2] }
  ];

  return (
    <section className="py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-romantic-purple/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-romantic-pink/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 px-4">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight premium-glow">
            Memories Wrapped in Love
          </h2>
          <p className="text-romantic-pink italic font-light text-lg md:text-xl">
            Our beautiful journey together, Monalisa...
          </p>
        </div>

        <PhotoProvider>
          <div className="relative p-8 md:p-16">
            {/* LARGE Heart Pen Animation Overlay */}
            <div className="absolute inset-0 z-30 pointer-events-none p-4 md:p-8">
              <svg 
                className="w-full h-full overflow-visible" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <path
                  d="M50,95 C30,75 0,55 0,35 C0,15 15,0 35,0 C45,0 50,10 50,20 C50,10 55,0 65,0 C85,0 100,15 100,35 C100,55 70,75 50,95"
                  fill="none"
                  stroke="#ff4d94"
                  strokeWidth="0.3"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                  className="animate-[drawPath_5s_ease-in-out_infinite_alternate]"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(255, 77, 148, 0.6))' }}
                />
              </svg>
            </div>

            {/* Photo Grid */}
            <div className="flex flex-col items-center gap-4 md:gap-6 relative z-10">
              {heartRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center items-center gap-4 md:gap-6 w-full">
                  {row.items.map((src, idx) => (
                    <PhotoItem key={`row-${rowIndex}-pre-${idx}`} src={src} />
                  ))}
                  
                  {row.hasGap && (
                    <div className="w-12 md:w-24 h-12 md:w-24 invisible" />
                  )}
                  
                  {row.itemsAfter && row.itemsAfter.map((src, idx) => (
                    <PhotoItem key={`row-${rowIndex}-post-${idx}`} src={src} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </PhotoProvider>
        
        <div className="text-center mt-20 text-slate-500 italic font-serif px-4 text-xl md:text-2xl">
          ভালোবাসার প্রতিটি স্পন্দন শুধু তোমার জন্য...
        </div>
      </div>
    </section>
  );
});

// Helper component for photo items to keep Gallery clean
const PhotoItem = ({ src }) => (
  <div className="relative group cursor-pointer w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 shrink-0 transition-transform duration-500 hover:scale-110 active:scale-95">
    <PhotoView src={src}>
      <div className="w-full h-full relative z-10 shadow-2xl heart-clip">
        <div className="w-full h-full bg-white/10 backdrop-blur-sm heart-clip p-1 md:p-1.5 border border-white/20">
          <img
            src={src}
            alt="Memory"
            className="w-full h-full object-cover heart-clip transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
    </PhotoView>
  </div>
);

export default Gallery;
