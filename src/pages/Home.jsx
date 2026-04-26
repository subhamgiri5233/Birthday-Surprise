import React, { useState, lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import { Lock } from 'lucide-react';

const Timeline = lazy(() => import('../components/Timeline'));
const Gallery = lazy(() => import('../components/Gallery'));
const Surprise = lazy(() => import('../components/Surprise'));
const MusicPlayer = lazy(() => import('../components/MusicPlayer'));
const FloatingHearts = lazy(() => import('../components/FloatingHearts'));
const FloatingHeader = lazy(() => import('../components/FloatingHeader'));

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
      <Suspense fallback={null}>
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </Suspense>

      {step === 'landing' && (
        <div>
          <Hero onStart={handleStart} />
        </div>
      )}

        {step === 'password' && (
          <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-romantic-peach/20 to-romantic-soft">
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
          </div>
        )}

        {step === 'story' && (
          <div className="flex flex-col relative">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-romantic-pink border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <FloatingHeader />
              <FloatingHearts />
              <Timeline />
              <Gallery />
              <Surprise />
            </Suspense>
            
            {/* Footer */}
            <footer className="py-12 bg-white/30 border-t border-white/50 text-center">
              <p className="text-romantic-pink font-serif italic text-lg">
                Made with ❤️ by Subham Giri
              </p>
              <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">
                Forever & Always
              </p>
            </footer>
          </div>
        )}
      </div>
  );
};

export default Home;
