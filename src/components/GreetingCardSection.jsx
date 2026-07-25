import React from 'react';
import { birthdayData } from '../config/birthdayData';

export default function GreetingCardSection() {
  const letter = birthdayData.mainWishLetter;
  const photos = birthdayData.polaroids;

  // Split photos around the letter (4 top, 4 bottom)
  const topPhotos = photos.slice(0, 4);
  const bottomPhotos = photos.slice(4);

  return (
    <div className="min-h-screen py-10 px-4 max-w-6xl mx-auto space-y-12 animate-fade-in relative z-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-6xl font-bold text-rose-950 mb-2">
          Happy Birthday, My Love! 💖
        </h2>
      </div>

      {/* TOP PHOTOS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topPhotos.map((item) => (
          <div
            key={item.id}
            className="bg-white p-3 rounded-2xl shadow-lg border border-rose-200 space-y-2 transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-full h-48 overflow-hidden rounded-xl bg-rose-50 border border-rose-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-1 py-1">
              <h4 className="font-handwriting text-2xl font-bold text-slate-800">
                {item.title}
              </h4>
              <p className="text-xs text-rose-700 font-medium leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CENTER GREETING LETTER CARD */}
      <div className="glass-card p-8 md:p-12 rounded-3xl border-rose-300 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="bg-white/95 border border-rose-200 p-6 md:p-10 rounded-2xl relative shadow-inner">
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

      {/* BOTTOM PHOTOS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bottomPhotos.map((item) => (
          <div
            key={item.id}
            className="bg-white p-3 rounded-2xl shadow-lg border border-rose-200 space-y-2 transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-full h-48 overflow-hidden rounded-xl bg-rose-50 border border-rose-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-1 py-1">
              <h4 className="font-handwriting text-2xl font-bold text-slate-800">
                {item.title}
              </h4>
              <p className="text-xs text-rose-700 font-medium leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
