import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import birthdayMusic from '../assets/music/birthday.mp3';

const MusicPlayer = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const musicUrl = birthdayMusic;

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Autoplay blocked:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Waveform Animation (Visualizer) */}
      {isPlaying && (
        <div className="flex items-end gap-1 h-8 px-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-1 bg-romantic-pink rounded-full animate-bounce"
              style={{
                height: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>
      )}

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-romantic-pink to-romantic-purple shadow-xl shadow-romantic-pink/20 flex items-center justify-center text-white hover:scale-110 transition-transform border border-white/10"
      >
        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
      </button>

      <button
        onClick={toggleMute}
        className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md shadow-md flex items-center justify-center text-slate-400 hover:scale-110 transition-transform border border-white/10"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      <audio
        ref={audioRef}
        src={musicUrl}
        loop
      />
    </div>
  );
};

export default MusicPlayer;
