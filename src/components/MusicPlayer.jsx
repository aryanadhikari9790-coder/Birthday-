import React, { useRef, useEffect } from 'react';
import { Music, Play, Pause } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function MusicPlayer({ isPlaying, togglePlay }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => console.log("Autoplay blocked or waiting user gesture", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <audio
        ref={audioRef}
        src={birthdayData.coupleData.backgroundMusicUrl}
        loop
        preload="auto"
      />

      <div className="glass-card p-3 rounded-full flex items-center space-x-3 border-rose-300 shadow-xl bg-white/90">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-500/30 transition-transform active:scale-95"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        <div className="hidden sm:block pr-2">
          <div className="text-[11px] font-bold text-rose-700 uppercase tracking-wider flex items-center space-x-1">
            <Music className="w-3 h-3 animate-bounce-soft" />
            <span>Romantic Music</span>
          </div>
          <div className="text-xs text-slate-600 truncate max-w-[140px] font-medium">
            {birthdayData.coupleData.songTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
