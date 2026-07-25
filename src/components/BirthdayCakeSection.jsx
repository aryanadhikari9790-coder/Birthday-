import React, { useState, useEffect, useRef } from 'react';
import { Flame, Mic, AlertCircle } from 'lucide-react';
import { triggerFireworks, playPopSound } from '../utils/effects';

export default function BirthdayCakeSection({ onNextPage }) {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [blowLevel, setBlowLevel] = useState(0); // 0 to 100 volume meter
  const [micError, setMicError] = useState('');

  const audioCtxRef = useRef(null);
  const streamRef = useRef(null);
  const animFrameRef = useRef(null);

  // Clean up audio stream when unmounting or candles blown
  const stopMicrophone = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.close();
    }
    setIsListening(false);
  };

  useEffect(() => {
    return () => {
      stopMicrophone();
    };
  }, []);

  const extinguishCandles = () => {
    stopMicrophone();
    setCandlesBlown(true);
    playPopSound();
    triggerFireworks();

    // Automatically transition to Page 3 (Greeting Card & Photos) after 1.5s delay!
    setTimeout(() => {
      if (onNextPage) {
        onNextPage();
      }
    }, 1600);
  };

  // Start Web Audio API Microphone Volume/Blow Detection
  const startBlowDetection = async () => {
    setMicError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();
      audioCtxRef.current = audioCtx;

      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      setIsListening(true);

      // Loop analyzing audio volume
      const detectBlow = () => {
        analyser.getByteFrequencyData(dataArray);

        // Calculate average energy level
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;

        // Convert to percentage (0 - 100)
        const normalized = Math.min(100, Math.round((average / 128) * 100));
        setBlowLevel(normalized);

        // Threshold for detecting blowing air (blowing creates high turbulence volume around 35+)
        if (normalized > 35) {
          extinguishCandles();
          return;
        }

        animFrameRef.current = requestAnimationFrame(detectBlow);
      };

      detectBlow();
    } catch (err) {
      console.error("Microphone error:", err);
      setMicError("Microphone access denied or not supported. No worries, tap the candles to blow them out!");
      setIsListening(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="glass-card p-8 md:p-12 rounded-3xl border-rose-300 relative overflow-hidden shadow-2xl max-w-2xl w-full text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

        <h2 className="font-serif text-3xl md:text-5xl font-bold text-rose-950 mb-6">
          Blow Out Your Birthday Candles! 🌬️🎂
        </h2>

        {/* Real Microphone Status Bar */}
        {!candlesBlown && isListening && (
          <div className="max-w-xs mx-auto mb-6 bg-white/90 border border-rose-300 p-4 rounded-2xl animate-pulse shadow-sm">
            <div className="flex items-center justify-between text-xs text-rose-700 font-semibold mb-2">
              <span className="flex items-center space-x-1.5">
                <Mic className="w-4 h-4 text-rose-500 animate-ping" />
                <span>Microphone Active • Blow Air Now!</span>
              </span>
              <span>{blowLevel}%</span>
            </div>
            {/* Visual Volume Meter */}
            <div className="w-full bg-rose-100 h-3 rounded-full overflow-hidden border border-rose-200">
              <div
                className="bg-gradient-to-r from-pink-400 via-rose-500 to-amber-400 h-full transition-all duration-100"
                style={{ width: `${blowLevel}%` }}
              />
            </div>
          </div>
        )}

        {/* Cake Container */}
        <div
          onClick={candlesBlown ? null : extinguishCandles}
          className="relative max-w-xs mx-auto my-8 flex flex-col items-center justify-center cursor-pointer group"
          title="Click to blow candles manually if mic is off"
        >
          {/* Candle Flames */}
          <div className="flex space-x-6 mb-1 z-10">
            {[1, 2, 3].map((id) => (
              <div key={id} className="relative flex flex-col items-center">
                {/* Flame */}
                {!candlesBlown ? (
                  <div className={`w-5 h-8 bg-gradient-to-t from-amber-500 via-yellow-400 to-amber-200 rounded-full animate-flame shadow-lg shadow-amber-500/80 flex items-center justify-center transition-transform ${
                    isListening && blowLevel > 15 ? 'scale-125 -translate-y-1' : ''
                  }`}>
                    <Flame className="w-3 h-3 text-red-600 animate-pulse" />
                  </div>
                ) : (
                  <div className="w-2 h-4 bg-slate-400/40 rounded-full animate-ping opacity-50" />
                )}
                {/* Candle Stick */}
                <div className="w-3 h-10 bg-gradient-to-b from-pink-300 to-rose-400 rounded-t-sm shadow-md border-x border-pink-200" />
              </div>
            ))}
          </div>

          {/* Cake Layer 1 (Top) */}
          <div className="w-44 h-14 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 rounded-t-2xl shadow-md border-t-4 border-white flex items-center justify-center relative">
            <span className="text-xs font-bold text-rose-900 uppercase tracking-widest">
              {candlesBlown ? "🎂 WISH GRANTED!" : "BLOW AIR 🌬️"}
            </span>
          </div>

          {/* Cake Layer 2 (Middle) */}
          <div className="w-56 h-14 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 rounded-t-xl shadow-lg border-t-4 border-pink-200 flex items-center justify-center">
            <div className="flex space-x-3 text-pink-100 text-sm">
              <span>💖</span><span>✨</span><span>🍓</span><span>✨</span><span>💖</span>
            </div>
          </div>

          {/* Cake Plate */}
          <div className="w-68 h-4 bg-slate-200 rounded-full shadow-md border-b-2 border-slate-300" />
        </div>

        {/* Action Controls */}
        {!candlesBlown ? (
          <div className="space-y-3">
            {!isListening ? (
              <button
                onClick={startBlowDetection}
                className="py-4 px-8 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-base shadow-lg shadow-rose-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center space-x-2"
              >
                <Mic className="w-5 h-5 text-amber-200 animate-pulse" />
                <span>Turn On Mic & Blow Air 🌬️</span>
              </button>
            ) : (
              <p className="text-rose-600 font-bold animate-bounce text-sm">
                🌬️ NOW BLOW AIR INTO YOUR PHONE / MIC!
              </p>
            )}

            {/* Fallback button/hint */}
            <div>
              <button
                onClick={extinguishCandles}
                className="text-xs text-slate-500 hover:text-rose-600 underline transition-colors font-medium"
              >
                (Or tap candles directly to blow them out)
              </button>
            </div>

            {micError && (
              <div className="flex items-center justify-center space-x-2 text-amber-800 text-xs bg-amber-100 p-3 rounded-xl border border-amber-300 max-w-md mx-auto">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{micError}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-rose-500/10 border border-rose-300 p-6 rounded-2xl max-w-lg mx-auto animate-fade-in shadow-sm space-y-3">
            <p className="font-handwriting text-3xl text-rose-700 text-glow">
              "Wish Granted! Opening your Birthday Card... 💖"
            </p>
            <p className="text-slate-600 text-xs uppercase tracking-wider font-semibold animate-pulse">
              ✨ Fireworks Celebration Unlocked! ✨
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
