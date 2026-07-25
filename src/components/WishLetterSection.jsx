import React from 'react';
import { Feather } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function WishLetterSection() {
  const letter = birthdayData.mainWishLetter;

  return (
    <section className="my-16 px-4 max-w-4xl mx-auto">
      <div className="glass-card p-8 md:p-12 rounded-3xl border-rose-300 relative overflow-hidden shadow-xl">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-200/50 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-300 px-4 py-1.5 rounded-full text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <Feather className="w-4 h-4 text-rose-500" />
            <span>From My Heart To Yours</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-rose-950">
            My Birthday Letter To You 📜
          </h2>
        </div>

        {/* Parchment Body */}
        <div className="bg-white/95 border border-rose-200 p-6 md:p-10 rounded-2xl relative shadow-inner">
          <h3 className="font-handwriting text-3xl md:text-4xl font-bold text-rose-700 mb-6 text-glow">
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
    </section>
  );
}
