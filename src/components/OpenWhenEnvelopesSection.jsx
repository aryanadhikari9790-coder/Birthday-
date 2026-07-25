import React, { useState } from 'react';
import { Mail, MailOpen, X } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { playPopSound, triggerConfetti } from '../utils/effects';

export default function OpenWhenEnvelopesSection() {
  const letters = birthdayData.openWhenLetters;
  const [activeLetter, setActiveLetter] = useState(null);

  const handleOpenLetter = (item) => {
    playPopSound();
    triggerConfetti();
    setActiveLetter(item);
  };

  const handleClose = () => {
    setActiveLetter(null);
  };

  return (
    <section className="my-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-300 px-4 py-1.5 rounded-full text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
          <Mail className="w-4 h-4 text-purple-500" />
          <span>Digital Envelopes</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-rose-950 mb-3">
          "Open When..." Letters 💌
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-medium">
          Tap any sealed envelope whenever you need a boost of love, a smile, or a warm reminder.
        </p>
      </div>

      {/* Grid of Envelopes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {letters.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenLetter(item)}
            className="glass-card glass-card-hover p-6 rounded-3xl cursor-pointer group flex items-center space-x-4 border-rose-200 relative overflow-hidden"
          >
            {/* Envelope Icon */}
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
              <Mail className="w-7 h-7" />
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-[11px] uppercase tracking-wider font-bold text-rose-600">
                Sealed Letter
              </span>
              <h4 className="text-lg font-bold text-rose-950 group-hover:text-rose-600 transition-colors truncate">
                {item.trigger}
              </h4>
              <p className="text-slate-500 text-xs mt-0.5 font-medium">
                Tap to unseal and read →
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View for Letter */}
      {activeLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-950/35 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-lg w-full glass-card p-6 md:p-8 rounded-3xl border-rose-300 shadow-2xl animate-scale-up">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-6 pr-8">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${activeLetter.color} flex items-center justify-center text-white`}>
                <MailOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                  Unsealed Note
                </span>
                <h3 className="text-xl font-bold text-rose-950">
                  {activeLetter.trigger}
                </h3>
              </div>
            </div>

            {/* Letter Content */}
            <div className="bg-white/90 border border-rose-200 p-6 rounded-2xl text-slate-800 text-sm md:text-base leading-relaxed whitespace-pre-line font-sans font-medium max-h-96 overflow-y-auto shadow-inner">
              {activeLetter.letter}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex justify-between items-center pt-2">
              <span className="text-rose-600 font-handwriting text-2xl font-bold">
                Always here for you ❤️
              </span>
              <button
                onClick={handleClose}
                className="px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs shadow-md transition-colors"
              >
                Close Letter
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
