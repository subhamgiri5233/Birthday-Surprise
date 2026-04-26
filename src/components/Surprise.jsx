import React, { useState, memo, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import patakaSound from '../assets/music/pataka.mp3';

const Surprise = memo(() => {
  const [showSurprise, setShowSurprise] = useState(false);
  const audioRef = useRef(null);

  const handleReveal = () => {
    // Play pataka sound
    if (!audioRef.current) {
      audioRef.current = new Audio(patakaSound);
      audioRef.current.loop = true;
    }
    audioRef.current.play().catch(e => console.log("Audio play failed:", e));

    // Stop playing after 16 seconds
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
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
        colors: ['#ff4d94', '#a349eb', '#ffffff', '#facc15']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff4d94', '#a349eb', '#ffffff', '#facc15']
      });
    }, 250);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center">
      {!showSurprise ? (
        <div className="text-center">
          <h2 className="text-4xl font-serif text-white mb-8">Ready for the Final Surprise?</h2>
          <button
            onClick={handleReveal}
            className="w-40 h-40 rounded-full bg-gradient-to-br from-romantic-pink to-romantic-purple text-white flex flex-col items-center justify-center shadow-2xl shadow-romantic-pink/30 group relative hover:scale-110 active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-romantic-pink rounded-full opacity-20 animate-pulse" />
            <Gift size={48} className="mb-2 group-hover:animate-bounce relative z-10" />
            <span className="font-bold tracking-widest text-sm relative z-10">OPEN ME</span>
          </button>
        </div>
      ) : (
        <div className="text-center max-w-2xl px-4">
          <div className="mb-8 relative inline-block">
            <div className="absolute -inset-8 text-romantic-yellow/20">
              <Sparkles size={160} className="animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-romantic-pink to-romantic-purple rounded-3xl flex items-center justify-center shadow-2xl shadow-romantic-pink/20">
              <Heart size={48} className="text-white fill-white" />
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif text-white mb-2 premium-glow">
            Happy Birthday, Monalisa!
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif text-romantic-pink mb-12 italic opacity-90">
            শুভ জন্মদিন আমার ভালোবাসা
          </h3>

          <div className="text-xl md:text-3xl text-slate-300 font-light h-32 md:h-24 italic leading-relaxed">
            <Typewriter
              words={[
                "From the moment I met you… my world completely changed ❤️",
                "তুমি আমার জীবনের সবচেয়ে সুন্দর ঠিকানা…",
                "With you, every moment feels like a dream…",
                "মোনালিসা, তুমি শুধু আমার পৃথিবী নও—তুমি আমার সবকিছু…",
                "Pampi, তুমি আমার শান্তি, আমার হাসি, আমার সব সুখ…",
                "You are not just my happiness… you are my everything…",
                "আমি চাই আমার পুরো জীবনটা তোমার সাথেই কাটুক…",
                "No matter what happens, I will choose you—every single day ❤️",
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

          <div className="glass-card p-10 mt-16 bg-white/5 border-white/10 text-lg text-slate-400 leading-relaxed italic relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-romantic-yellow rounded-lg flex items-center justify-center -rotate-12 shadow-lg">
              <Heart size={20} className="text-romantic-dark fill-romantic-dark" />
            </div>
            <p>
              তোমার এই বিশেষ দিনে তোমাকে বলতে চাই—
              তুমি আমার জীবনের সবচেয়ে বড় পাওয়া।
              তোমার সঙ্গে কাটানো প্রতিটি মুহূর্ত আমার কাছে এক অনন্য উপহার।
              আমাদের এই ভালোবাসা যেন সারা জীবন এভাবেই অমলিন থাকে।
              তুমি সবসময় সুখে থাকো—এই আমার একান্ত কামনা। 💫
            </p>
            <p className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-romantic-pink to-romantic-purple font-bold text-2xl not-italic">
              শুভ জন্মদিন মোনালিসা ! ❤️
            </p>
          </div>
        </div>
      )}
    </section>
  );
});

export default Surprise;
