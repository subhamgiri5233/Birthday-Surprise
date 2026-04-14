import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import Surprise from '../components/Surprise';
import MusicPlayer from '../components/MusicPlayer';
import HeartRain from '../components/HeartRain';
import { Lock } from 'lucide-react';

const Home = () => {
  const [step, setStep] = useState('landing'); // 'landing', 'password', 'story'
  const [isPlaying, setIsPlaying] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    setStep('password');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === '29042005') {
      setStep('story');
      setIsPlaying(true);
    } else {
      setError('Incorrect code. Hint: Your Birthday (DDMMYYYY)');
      setPassword('');
    }
  };

  return (
    <div className="relative font-sans text-gray-800 bg-romantic-soft min-h-screen">
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      <AnimatePresence mode="wait">
        {step === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <Hero onStart={handleStart} />
          </motion.div>
        )}

        {step === 'password' && (
          <motion.div
            key="password"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-romantic-peach/20 to-romantic-soft"
          >
            <div className="glass-card p-10 max-w-md w-full text-center">
              <div className="w-16 h-16 bg-romantic-pink/10 text-romantic-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock size={32} />
              </div>
              <h2 className="text-3xl font-serif mb-2">Exclusive Access</h2>
              <p className="text-gray-600 mb-8 font-light">Please enter the secret code to continue.</p>
              
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Code"
                    className="w-full px-6 py-4 rounded-2xl border-none ring-2 ring-romantic-peach/30 focus:ring-romantic-pink transition-all text-center text-xl tracking-widest placeholder:tracking-normal outline-none"
                    autoFocus
                  />
                  {error && <p className="text-red-500 text-sm mt-3 animate-pulse">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full btn-romantic"
                >
                  Unlock Memories
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {step === 'story' && (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <HeartRain />
            <Timeline />
            <Gallery />
            <Surprise />
            
            {/* Footer */}
            <footer className="py-12 bg-white/30 border-t border-white/50 text-center">
              <p className="text-romantic-pink font-serif italic text-lg">
                Made with ❤️ by Subham Giri
              </p>
              <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">
                Forever & Always
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
