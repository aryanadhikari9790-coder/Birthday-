import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UnboxingModal from './components/UnboxingModal';
import BirthdayCakeSection from './components/BirthdayCakeSection';
import GreetingCardSection from './components/GreetingCardSection';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import { birthdayData } from './config/birthdayData';
import { Sparkles } from 'lucide-react';

export default function App() {
  // Step 1: Unboxing Modal
  // Step 2: Candle Blowing
  // Step 3: Greeting Card & Photos
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleOpenGift = () => {
    setCurrentStep(2); // Advance to Candle Blowing
    setIsPlayingMusic(true); // Auto start music
  };

  const handleCandlesBlownComplete = () => {
    setCurrentStep(3); // Advance to Greeting Card & Photos
  };

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 text-slate-800 relative font-sans selection:bg-rose-500 selection:text-white">
      {/* Subtle Floating Ambient Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
        <div className="absolute top-1/4 left-10 text-rose-400 animate-float text-4xl">💖</div>
        <div className="absolute top-2/3 right-12 text-pink-400 animate-float text-3xl" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute bottom-1/4 left-1/3 text-rose-500 animate-float text-5xl" style={{ animationDelay: '4s' }}>💕</div>
        <div className="absolute top-1/3 right-1/4 text-purple-400 animate-float text-3xl" style={{ animationDelay: '1s' }}>🌸</div>
      </div>

      {/* Part 1: Unboxing Entrance Modal */}
      {currentStep === 1 && (
        <UnboxingModal onOpenGift={handleOpenGift} />
      )}

      {/* Main Experience */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          kissCount={0}
          isPlayingMusic={isPlayingMusic}
          toggleMusic={toggleMusic}
        />

        <main className="flex-grow max-w-5xl mx-auto w-full px-4 pt-6 pb-20 space-y-12">
          {/* Header */}
          <section className="text-center py-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rose-300 px-4 py-1.5 rounded-full text-rose-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm animate-bounce-soft">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Digital Birthday Gift</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-rose-950 tracking-tight mb-2">
              Happy Birthday, <br />
              <span className="font-handwriting text-5xl sm:text-7xl text-rose-600 text-glow">
                {birthdayData.birthdayGirl.name}! 👑
              </span>
            </h1>
          </section>

          {/* Part 2: Virtual Birthday Cake & Blow Candles */}
          {currentStep >= 2 && (
            <div className="animate-fade-in">
              <BirthdayCakeSection onComplete={handleCandlesBlownComplete} />
            </div>
          )}

          {/* Part 3: Birthday Greeting Card with Photos & Messages */}
          {currentStep >= 3 && (
            <div className="animate-fade-in">
              <GreetingCardSection />
            </div>
          )}
        </main>

        <Footer />
        <MusicPlayer isPlaying={isPlayingMusic} togglePlay={toggleMusic} />
      </div>
    </div>
  );
}
