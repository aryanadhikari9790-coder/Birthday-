import React, { useState } from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { triggerConfetti, playPopSound } from '../utils/effects';

export default function UnboxingModal({ onOpenGift }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    playPopSound();
    triggerConfetti();

    setTimeout(() => {
      onOpenGift();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-950/35 backdrop-blur-xl transition-all duration-700">
      {/* Background Floating Glow */}
      <div className="absolute w-96 h-96 bg-rose-300/40 rounded-full filter blur-3xl animate-pulse" />

      <div className={`relative max-w-md w-full glass-card p-8 rounded-3xl text-center border-rose-300 shadow-2xl transform transition-all duration-700 ${
        isOpening ? 'scale-110 opacity-0 -translate-y-12' : 'scale-100 opacity-100'
      }`}>
        {/* Animated Badge */}
        <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-300 px-4 py-1.5 rounded-full text-rose-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>A Special Digital Gift For You</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-rose-950 mb-2">
          Happy Birthday, <br />
          <span className="font-handwriting text-4xl md:text-5xl text-rose-600 text-glow">
            {birthdayData.birthdayGirl.name}! 💖
          </span>
        </h2>

        <p className="text-slate-600 text-sm mb-8 font-medium">
          I created a special interactive gift filled with memories, wishes, and love just for you! Tap below to open your present.
        </p>

        {/* 3D Gift Box Visual */}
        <div className="relative my-8 flex justify-center">
          <div className="relative group cursor-pointer" onClick={handleOpen}>
            {/* Box Body */}
            <div className="w-36 h-36 bg-gradient-to-tr from-rose-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center border-2 border-rose-300 group-hover:scale-105 transition-transform duration-300 shadow-rose-500/30">
              <Gift className="w-16 h-16 text-white animate-bounce-soft" />
            </div>

            {/* Satin Ribbon Ribbons overlay */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-amber-400/95 shadow-md border-y border-amber-300 pointer-events-none" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-amber-400/95 shadow-md border-x border-amber-300 pointer-events-none" />

            {/* Glowing Bow */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-300 text-amber-950 font-bold px-3 py-1 rounded-full text-xs shadow-lg border border-amber-200">
              🎀 UNWRAP ME
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleOpen}
          disabled={isOpening}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-lg shadow-xl shadow-rose-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Heart className="w-5 h-5 fill-white" />
          <span>{isOpening ? "Unwrapping Gift..." : "Open My Birthday Gift"}</span>
        </button>
      </div>
    </div>
  );
}
