import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import patakaSound from '../assets/music/pataka.mp3';

const Surprise = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleReveal = () => {
    // Play pataka sound
    const audio = new Audio(patakaSound);
    audio.loop = true; // Loop to ensure it lasts 16 seconds
    audio.play().catch(e => console.log("Audio play failed:", e));
    
    // Stop playing after 16 seconds
    setTimeout(() => {
      audio.pause();
    }, 16000);

    setShowSurprise(true);

    // Fancy Confetti burst
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // hearts and sparkles
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff4b5c', '#fad0c4', '#ffffff']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff4b5c', '#fad0c4', '#ffffff']
      });
    }, 250);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-t from-romantic-peach/20 to-romantic-soft flex flex-col items-center">
      {!showSurprise ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-serif text-gray-800 mb-8">Ready for the Final Surprise?</h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleReveal}
            className="w-40 h-40 rounded-full bg-romantic-pink text-white flex flex-col items-center justify-center shadow-2xl shadow-romantic-pink/50 group relative"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute inset-0 bg-romantic-pink rounded-full opacity-20"
            />
            <Gift size={48} className="mb-2 group-hover:animate-bounce relative z-10" />
            <span className="font-bold tracking-widest text-sm relative z-10">OPEN ME</span>
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl px-4"
        >
          <div className="mb-8 relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -inset-8 text-romantic-peach/30"
            >
              <Sparkles size={160} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              <Heart size={100} className="text-romantic-pink fill-romantic-pink relative z-10" />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif text-gray-800 mb-2">
            Happy Birthday, Monalisa!
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-romantic-pink mb-8 italic">
            শুভ জন্মদিন আমার ভালোবাসা
          </h3>

          <div className="text-2xl md:text-4xl text-romantic-pink font-light h-32 md:h-24 italic leading-relaxed">
            <Typewriter
              words={[
                "From the day I met you… everything changed ❤️",
                "Pampi, তুমি আমার সুখের ঠিকানা...",
                "With you, every moment feels special...",
                "মোনালিসা, তুমি আমার পুরো পৃথিবী...",
                "Pampi, তুমি আমার শান্তি, আমার হাসি...",
                "You are my happiness, my peace, my everything...",
                "তোমার সাথে সারা জীবন কাটাতে চাই...",
                "I will choose you… every single day ❤️",
                "Forever yours, Subham ❤️"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="glass-card p-8 mt-12 bg-white/60 text-lg text-gray-700 leading-relaxed italic"
          >
            <p>
              তোমার এই বিশেষ দিনে আমি তোমাকে বলতে চাই যে তুমি আমার জীবনের সবচেয়ে বড় পাওয়া।
              তোমার সাথে কাটানো প্রতিটা মুহূর্ত আমার কাছে এক অনন্য উপহার।
              আমাদের এই ভালোবাসা যেন সারা জীবন এভাবেই অমলিন থাকে।
              তুমি অনেক সুখে থাকো, এই কামনাই করি।
            </p>
            <p className="mt-4 text-romantic-pink font-bold">
              ভালোবাসি মোনালিসা (Pampi)! ❤️
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Love Burst Background Effect */}
      {showSurprise && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-romantic-pink/20 pointer-events-none"
          initial={{
            x: "50%",
            y: "50%",
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [0, 1, 0],
            scale: [0, Math.random() * 2 + 1, 0],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          <Heart size={40} fill="currentColor" />
        </motion.div>
      ))}
    </section>
  );
};

export default Surprise;
