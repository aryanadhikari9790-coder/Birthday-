import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, Heart, Sparkles, Key, AlertCircle, ArrowRight } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { triggerConfetti, playKissSound, playPopSound } from '../utils/effects';

export default function MemoryQuizSection({ onQuizComplete, addKiss }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputAnswer, setInputAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [skipNotice, setSkipNotice] = useState('');
  const [flyingKisses, setFlyingKisses] = useState([]);

  const questions = birthdayData.triviaQuiz;
  const currentQ = questions[currentStep];

  // Helper to trigger flying kiss animation particles
  const spawnFlyingKisses = () => {
    const newKisses = Array.from({ length: 6 }).map((_, index) => ({
      id: Date.now() + index,
      left: Math.random() * 80 + 10,
      translateX: (Math.random() - 0.5) * 120,
    }));
    setFlyingKisses((prev) => [...prev, ...newKisses]);

    // Remove flying kisses after animation completes
    setTimeout(() => {
      setFlyingKisses((prev) => prev.filter((k) => !newKisses.find((nk) => nk.id === k.id)));
    }, 2000);
  };

  const handleCheckAnswer = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSkipNotice('');

    const cleanInput = inputAnswer.trim().toLowerCase();
    if (!cleanInput) {
      setErrorMsg('Please type an answer or blow a kiss to skip! 😉');
      return;
    }

    const isCorrect = currentQ.answers.some((ans) => cleanInput.includes(ans.toLowerCase()));

    if (isCorrect) {
      playPopSound();
      triggerConfetti();
      advanceToNext();
    } else {
      setErrorMsg("Aww, close guess! Try again or blow a kiss to skip! 💋");
    }
  };

  const handleKissToSkip = () => {
    setErrorMsg('');
    playKissSound();
    spawnFlyingKisses();
    addKiss(1);

    setSkipNotice(currentQ.skipMessage);

    setTimeout(() => {
      advanceToNext();
    }, 1200);
  };

  const advanceToNext = () => {
    setInputAnswer('');
    setErrorMsg('');
    setSkipNotice('');

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Completed all questions!
      triggerConfetti();
      onQuizComplete();
    }
  };

  return (
    <section className="relative my-12 px-4 max-w-3xl mx-auto">
      {/* Floating Kisses Container overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
        {flyingKisses.map((kiss) => (
          <span
            key={kiss.id}
            className="absolute bottom-10 text-3xl animate-flying-kiss select-none"
            style={{
              left: `${kiss.left}%`,
              '--tw-translate-x': `${kiss.translateX}px`,
            }}
          >
            💋
          </span>
        ))}
      </div>

      <div className="glass-card p-6 md:p-8 rounded-3xl border-rose-500/40 relative overflow-hidden shadow-2xl">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Key className="w-5 h-5 text-rose-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-rose-300">
              Memory Challenge • Step {currentStep + 1} of {questions.length}
            </span>
          </div>
          {/* Progress dots */}
          <div className="flex space-x-1.5">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentStep
                    ? 'w-6 bg-rose-500'
                    : i < currentStep
                    ? 'w-2 bg-rose-400/50'
                    : 'w-2 bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {currentQ.question}
        </h3>
        <p className="text-slate-400 text-xs md:text-sm mb-6 flex items-center space-x-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span>Hint: {currentQ.hint}</span>
        </p>

        {/* Input Form */}
        <form onSubmit={handleCheckAnswer} className="space-y-4">
          <div>
            <input
              type="text"
              value={inputAnswer}
              onChange={(e) => setInputAnswer(e.target.value)}
              placeholder="Type your memory answer here..."
              className="w-full bg-slate-900/80 border border-slate-700 focus:border-rose-500 rounded-2xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500/30 transition-all text-sm"
            />
          </div>

          {errorMsg && (
            <div className="flex items-center space-x-2 text-rose-400 text-xs bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {skipNotice && (
            <div className="flex items-center space-x-2 text-pink-300 text-xs bg-pink-500/20 p-3 rounded-xl border border-pink-500/30 animate-pulse">
              <span className="text-base">😘</span>
              <span>{skipNotice}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {/* Submit Answer */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm shadow-lg shadow-rose-500/30 transition-all flex items-center justify-center space-x-2"
            >
              <span>Unlock Memory</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Blow Kiss to Skip Button */}
            <button
              type="button"
              onClick={handleKissToSkip}
              className="w-full py-3.5 px-4 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 text-pink-300 hover:text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2 group"
            >
              <span className="text-lg group-hover:scale-125 transition-transform duration-200">💋</span>
              <span>Blow a Kiss to Skip (+1 Kiss)</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
