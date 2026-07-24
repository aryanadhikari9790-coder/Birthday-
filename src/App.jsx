import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UnboxingModal from './components/UnboxingModal';
import MemoryQuizSection from './components/MemoryQuizSection';
import BirthdayCakeSection from './components/BirthdayCakeSection';
import LoveTimelineSection from './components/LoveTimelineSection';
import PolaroidScrapbookSection from './components/PolaroidScrapbookSection';
import OpenWhenEnvelopesSection from './components/OpenWhenEnvelopesSection';
import LoveCouponsSection from './components/LoveCouponsSection';
import WishLetterSection from './components/WishLetterSection';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import { birthdayData } from './config/birthdayData';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [hasOpenedGift, setHasOpenedGift] = useState(false);
  const [isQuizUnlocked, setIsQuizUnlocked] = useState(false);
  const [kissCount, setKissCount] = useState(0);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const addKiss = (amount = 1) => {
    setKissCount((prev) => prev + amount);
  };

  const handleOpenGift = () => {
    setHasOpenedGift(true);
    setIsPlayingMusic(true); // Auto start romantic music on unboxing
  };

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative font-sans selection:bg-rose-500 selection:text-white">
      {/* Subtle Floating Ambient Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/4 left-10 text-rose-500 animate-float text-4xl">💖</div>
        <div className="absolute top-2/3 right-12 text-pink-500 animate-float text-3xl" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute bottom-1/4 left-1/3 text-rose-400 animate-float text-5xl" style={{ animationDelay: '4s' }}>💕</div>
        <div className="absolute top-1/3 right-1/4 text-purple-400 animate-float text-3xl" style={{ animationDelay: '1s' }}>🌟</div>
      </div>

      {/* Unboxing Entrance Modal */}
      {!hasOpenedGift && (
        <UnboxingModal onOpenGift={handleOpenGift} />
      )}

      {/* Main Website Experience */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          kissCount={kissCount}
          isPlayingMusic={isPlayingMusic}
          toggleMusic={toggleMusic}
        />

        <main className="flex-grow max-w-7xl mx-auto w-full px-4 pt-6 pb-20 space-y-12">
          {/* Hero Banner Header */}
          <section className="text-center py-10 md:py-16">
            <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full text-rose-300 text-xs font-semibold uppercase tracking-wider mb-4 animate-bounce-soft">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Celebrating My Queen's Birthday</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
              Happy Birthday, <br />
              <span className="font-handwriting text-5xl sm:text-7xl md:text-8xl text-rose-400 text-glow">
                {birthdayData.birthdayGirl.name}! 👑
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Welcome to your special birthday website experience! Filled with our favorite memories, romantic interactive gifts, and endless love.
            </p>
          </section>

          {/* Gate 1: Memory Quiz Challenge */}
          {!isQuizUnlocked ? (
            <MemoryQuizSection
              onQuizComplete={() => setIsQuizUnlocked(true)}
              addKiss={addKiss}
            />
          ) : (
            <div className="space-y-16 animate-fade-in">
              {/* Unlocked Badge Banner */}
              <div className="max-w-xl mx-auto text-center bg-rose-500/15 border border-rose-500/40 p-4 rounded-2xl">
                <p className="text-xs uppercase tracking-widest text-rose-300 font-bold flex items-center justify-center space-x-1">
                  <span>🎉 MEMORY CHALLENGE PASSED! ALL SECTIONS UNLOCKED! 🎉</span>
                </p>
              </div>

              {/* Section 2: Virtual Birthday Cake & Blow Candles */}
              <BirthdayCakeSection />

              {/* Section 3: Our Story Relationship Timeline */}
              <LoveTimelineSection />

              {/* Section 4: 3D Polaroid Scrapbook Photo Album */}
              <PolaroidScrapbookSection />

              {/* Section 5: Open When Digital Envelopes */}
              <OpenWhenEnvelopesSection />

              {/* Section 6: Claimable Romantic Love Coupons */}
              <LoveCouponsSection />

              {/* Section 7: Main Birthday Wish Letter */}
              <WishLetterSection />
            </div>
          )}
        </main>

        <Footer />
        <MusicPlayer isPlaying={isPlayingMusic} togglePlay={toggleMusic} />
      </div>
    </div>
  );
}
