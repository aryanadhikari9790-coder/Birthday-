import React from 'react';
import { Heart, Feather, Sparkles } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function WishLetterSection() {
  const letter = birthdayData.mainWishLetter;

  return (
    <section className="my-16 px-4 max-w-4xl mx-auto">
      <div className="glass-card p-8 md:p-12 rounded-3xl border-rose-500/40 relative overflow-hidden shadow-2xl">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Feather className="w-4 h-4 text-rose-400" />
            <span>From My Heart To Yours</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
            My Birthday Letter To You 📜
          </h2>
        </div>

        {/* Parchment Body */}
        <div className="bg-slate-900/80 border border-slate-800/80 p-6 md:p-10 rounded-2xl relative shadow-inner">
          <h3 className="font-handwriting text-3xl md:text-4xl font-bold text-rose-300 mb-6 text-glow">
            {letter.salutation}
          </h3>

          <div className="space-y-4 text-slate-200 text-base md:text-lg leading-relaxed font-sans font-normal">
            {letter.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col items-end">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
              {letter.signature}
            </span>
            <span className="font-handwriting text-3xl text-rose-400 text-glow">
              {letter.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
