import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UnboxingModal from './components/UnboxingModal';
import BirthdayCakeSection from './components/BirthdayCakeSection';
import GreetingCardSection from './components/GreetingCardSection';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

export default function App() {
  // Page 1: Gift Box Unboxing Entrance
  // Page 2: Blow Candles Page
  // Page 3: Greeting Card & Photos Page
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleOpenGift = () => {
    setCurrentPage(2); // Move to Page 2: Blow Candles
    setIsPlayingMusic(true); // Auto start music
  };

  const handleNextToGreetingCard = () => {
    setCurrentPage(3); // Move to Page 3: Greeting Card & Photos
  };

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 text-slate-800 relative font-sans selection:bg-rose-500 selection:text-white overflow-hidden">
      {/* 🌟 Animated Floating Love Emojis & Graphics Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40 select-none">
        <div className="absolute top-[10%] left-[5%] text-rose-400 animate-float text-4xl">💖</div>
        <div className="absolute top-[25%] right-[8%] text-pink-400 animate-float text-3xl" style={{ animationDelay: '1.5s' }}>✨</div>
        <div className="absolute top-[50%] left-[12%] text-purple-400 animate-float text-4xl" style={{ animationDelay: '3s' }}>🌸</div>
        <div className="absolute bottom-[20%] right-[15%] text-rose-500 animate-float text-5xl" style={{ animationDelay: '4.5s' }}>💕</div>
        <div className="absolute top-[15%] right-[30%] text-amber-400 animate-float text-3xl" style={{ animationDelay: '2s' }}>👑</div>
        <div className="absolute bottom-[35%] left-[20%] text-pink-500 animate-float text-4xl" style={{ animationDelay: '3.5s' }}>💌</div>
        <div className="absolute top-[70%] left-[75%] text-rose-400 animate-float text-3xl" style={{ animationDelay: '0.8s' }}>💋</div>
        <div className="absolute top-[40%] right-[5%] text-purple-300 animate-float text-4xl" style={{ animationDelay: '2.8s' }}>🧸</div>
        <div className="absolute bottom-[10%] left-[45%] text-rose-400 animate-float text-4xl" style={{ animationDelay: '1.2s' }}>🎀</div>
        <div className="absolute top-[80%] right-[40%] text-amber-300 animate-float text-3xl" style={{ animationDelay: '4s' }}>🌟</div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          kissCount={0}
          isPlayingMusic={isPlayingMusic}
          toggleMusic={toggleMusic}
        />

        <main className="flex-grow w-full">
          {/* PAGE 1: Unboxing Entrance */}
          {currentPage === 1 && (
            <UnboxingModal onOpenGift={handleOpenGift} />
          )}

          {/* PAGE 2: Candle Blowing */}
          {currentPage === 2 && (
            <div className="animate-fade-in">
              <BirthdayCakeSection onNextPage={handleNextToGreetingCard} />
            </div>
          )}

          {/* PAGE 3: Greeting Card & Photos */}
          {currentPage === 3 && (
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
