import React from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function GreetingCardSection() {
  const letter = birthdayData.mainWishLetter;
  const polaroids = birthdayData.polaroids;

  return (
    <div className="min-h-screen py-10 px-4 max-w-6xl mx-auto space-y-12 animate-fade-in relative z-10">
      {/* Top Header */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-white/80 border border-rose-300 px-4 py-1.5 rounded-full text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Page 3 • Your Greeting Card & Photos</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-6xl font-bold text-rose-950 mb-3">
          With All My Love 💖
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-medium">
          Surrounded by our favorite moments, photos, and a handwritten letter written just for you.
        </p>
      </div>

      {/* Top Photo Gallery Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {polaroids.map((item, idx) => (
          <div key={item.id} className="bg-white p-3 rounded-2xl shadow-md border border-rose-100 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full h-44 overflow-hidden rounded-xl bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center pt-2">
              <h5 className="font-handwriting text-xl font-bold text-slate-800">
                {item.title}
              </h5>
              <p className="text-[11px] text-rose-600 font-semibold truncate">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Center Greeting Letter */}
      <div className="glass-card p-8 md:p-12 rounded-3xl border-rose-300 relative overflow-hidden shadow-2xl space-y-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="bg-white/95 border border-rose-200 p-6 md:p-10 rounded-2xl relative shadow-inner">
          <div className="flex items-center space-x-2 text-rose-700 mb-6">
            <Feather className="w-5 h-5 text-rose-500" />
            <span className="text-xs uppercase tracking-widest font-bold">Personal Letter</span>
          </div>

          <h3 className="font-handwriting text-3xl md:text-5xl font-bold text-rose-700 mb-6 text-glow">
            {letter.salutation}
          </h3>

          <div className="space-y-4 text-slate-800 text-base md:text-lg leading-relaxed font-sans font-medium">
            {letter.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-rose-200 flex flex-col items-end">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
              {letter.signature}
            </span>
            <span className="font-handwriting text-3xl text-rose-600 font-bold">
              {letter.author}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Memory Cards with Secret Notes */}
      <div className="space-y-6">
        <div className="flex items-center justify-center space-x-2 text-rose-800">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <h4 className="font-serif text-2xl font-bold">Special Notes Behind Our Memories 📸</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {polaroids.map((item) => (
            <div key={item.id} className="glass-card p-5 rounded-2xl border border-rose-200 flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 rounded-xl object-cover border border-rose-200 flex-shrink-0"
              />
              <div>
                <h5 className="font-bold text-rose-950 text-base">{item.title}</h5>
                <p className="text-rose-700 font-handwriting text-xl mt-1">"{item.secretNote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
