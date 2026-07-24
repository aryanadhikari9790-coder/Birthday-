import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function Footer() {
  return (
    <footer className="border-t border-rose-500/20 py-12 px-4 text-center bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 text-rose-400">
          <Heart className="w-5 h-5 fill-rose-500 animate-pulse" />
          <span className="font-handwriting text-2xl font-bold">
            Created with endless love for {birthdayData.birthdayGirl.name}
          </span>
          <Heart className="w-5 h-5 fill-rose-500 animate-pulse" />
        </div>

        <p className="text-slate-400 text-xs max-w-md mx-auto">
          Happy Birthday, my love! You deserve all the happiness, laughter, and magical moments in the universe. 💖✨
        </p>

        <div className="text-[11px] text-slate-600 font-mono pt-4">
          © {new Date().getFullYear()} • Special Digital Gift Card & Memory Web App
        </div>
      </div>
    </footer>
  );
}
