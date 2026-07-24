import React, { useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
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

      <div className="glass-card p-3 rounded-full flex items-center space-x-3 border-rose-500/40 shadow-2xl">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/40 transition-transform active:scale-95"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        <div className="hidden sm:block pr-2">
          <div className="text-[11px] font-bold text-rose-300 uppercase tracking-wider flex items-center space-x-1">
            <Music className="w-3 h-3 animate-bounce-soft" />
            <span>Romantic Music</span>
          </div>
          <div className="text-xs text-slate-300 truncate max-w-[140px]">
            {birthdayData.coupleData.songTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
