import React from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function GreetingCardSection() {
  const letter = birthdayData.mainWishLetter;
  const polaroids = birthdayData.polaroids;

  return (
    <section className="my-8 px-4 max-w-4xl mx-auto animate-fade-in space-y-12">
      {/* Celebration Header */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-300 px-4 py-1.5 rounded-full text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Your Birthday Greeting Card</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-rose-950 mb-3">
          With All My Love 💖
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-medium">
          A special letter and photo memories created just for you on your special day.
        </p>
      </div>

      {/* Main Greeting Card Container */}
      <div className="glass-card p-8 md:p-12 rounded-3xl border-rose-300 relative overflow-hidden shadow-2xl space-y-10">
        {/* Glow corner background */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" />

        {/* Letter Section */}
        <div className="bg-white/95 border border-rose-200 p-6 md:p-10 rounded-2xl relative shadow-inner">
          <div className="flex items-center space-x-2 text-rose-700 mb-6">
            <Feather className="w-5 h-5 text-rose-500" />
            <span className="text-xs uppercase tracking-widest font-bold">Personal Message</span>
          </div>

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

        {/* Photos Memory Section */}
        <div>
          <div className="flex items-center justify-center space-x-2 text-rose-800 mb-6">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h4 className="font-serif text-2xl font-bold">Our Favorite Photo Memories 📸</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {polaroids.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-2xl shadow-lg border-2 border-rose-100 space-y-3 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-full h-60 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center pt-1">
                  <h5 className="font-handwriting text-2xl font-bold text-slate-800">
                    {item.title}
                  </h5>
                  <p className="text-slate-600 text-xs mt-1 italic font-medium">
                    "{item.secretNote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
