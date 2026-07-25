import React from 'react';
import { Heart, Music } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function Navbar({ kissCount, isPlayingMusic, toggleMusic }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-rose-200/80 px-4 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Title / Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shadow-md shadow-rose-500/20 animate-pulse-slow">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <h1 className="font-handwriting text-2xl font-bold text-rose-800 tracking-wide">
              Happy Birthday, {birthdayData.birthdayGirl.nickname}!
            </h1>
          </div>
        </div>

        {/* Kiss Counter & Music Toggle */}
        <div className="flex items-center space-x-3">
          {/* Kiss Badge */}
          <div className="flex items-center space-x-1.5 bg-rose-500/10 border border-rose-300 px-3 py-1.5 rounded-full text-xs font-semibold text-rose-700 shadow-sm">
            <span className="text-base animate-bounce-soft">💋</span>
            <span>{kissCount} Kisses Collected</span>
          </div>

          {/* Music Toggle Button */}
          <button
            onClick={toggleMusic}
            className={`p-2 rounded-full border transition-all duration-300 ${
              isPlayingMusic
                ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/30 animate-pulse'
                : 'bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200'
            }`}
            title={isPlayingMusic ? "Pause Romantic Music" : "Play Romantic Music"}
          >
            <Music className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
