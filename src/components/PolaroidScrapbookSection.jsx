import React, { useState } from 'react';
import { Camera, RotateCw, Heart } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { playPopSound } from '../utils/effects';

export default function PolaroidScrapbookSection() {
  const polaroids = birthdayData.polaroids;
  const [flippedMap, setFlippedMap] = useState({});

  const toggleFlip = (id) => {
    playPopSound();
    setFlippedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="my-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-300 px-4 py-1.5 rounded-full text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
          <Camera className="w-4 h-4 text-pink-500" />
          <span>Interactive Scrapbook</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-rose-950 mb-3">
          Memory Scrapbook 📸
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-medium">
          Tap any Polaroid photo to flip it over and read the secret love note written on the back!
        </p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {polaroids.map((item, idx) => {
          const isFlipped = flippedMap[item.id];
          const rotations = ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1'];
          const rotClass = rotations[idx % rotations.length];

          return (
            <div
              key={item.id}
              onClick={() => toggleFlip(item.id)}
              className={`relative h-96 cursor-pointer perspective-1000 group ${rotClass} hover:rotate-0 transition-transform duration-300`}
            >
              <div
                className={`w-full h-full transform-style-3d transition-transform duration-700 relative rounded-2xl ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE (Polaroid Photo) */}
                <div className="absolute inset-0 backface-hidden bg-white p-4 rounded-2xl shadow-xl flex flex-col justify-between border-4 border-white">
                  <div className="w-full h-64 overflow-hidden rounded-lg bg-slate-100 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-slate-900/60 text-white p-1.5 rounded-full backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity">
                      <RotateCw className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <h4 className="font-handwriting text-2xl font-bold text-slate-800">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-rose-500 uppercase tracking-widest font-semibold">
                      {item.date} • Tap to Flip 🔄
                    </p>
                  </div>
                </div>

                {/* BACK FACE (Secret Handwritten Note) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 p-6 rounded-2xl shadow-xl border-2 border-rose-300 flex flex-col justify-between text-center">
                  <div className="flex justify-center pt-2">
                    <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-600">
                      <Heart className="w-4 h-4 fill-rose-500" />
                    </div>
                  </div>

                  <div className="my-auto px-2">
                    <p className="font-handwriting text-2xl text-rose-900 leading-relaxed text-glow">
                      "{item.secretNote}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-rose-300 text-xs text-rose-700 font-semibold uppercase tracking-wider">
                    Secret Note • {item.title}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
