import React, { useState } from 'react';
import { Ticket, CheckCircle, Heart, Utensils, Tv, Crown } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { playPopSound, triggerConfetti } from '../utils/effects';

const iconMap = {
  Utensils: Utensils,
  Heart: Heart,
  Tv: Tv,
  Crown: Crown
};

export default function LoveCouponsSection() {
  const coupons = birthdayData.loveCoupons;
  const [redeemed, setRedeemed] = useState({});

  const handleRedeem = (id) => {
    if (redeemed[id]) return;
    playPopSound();
    triggerConfetti();
    setRedeemed((prev) => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <section className="my-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Ticket className="w-4 h-4 text-amber-400" />
          <span>Claimable Rewards</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
          Romantic Love Coupons 🎟️
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          These coupons belong to you! Tap "Redeem" whenever you want to claim one of your rewards.
        </p>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coupons.map((item) => {
          const IconComp = iconMap[item.icon] || Ticket;
          const isClaimed = redeemed[item.id];

          return (
            <div
              key={item.id}
              className={`glass-card p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                isClaimed
                  ? 'border-emerald-500/40 bg-slate-900/90 opacity-90'
                  : 'border-rose-500/30 glass-card-hover'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl border ${item.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                    {item.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Redeem Action */}
              <div>
                {!isClaimed ? (
                  <button
                    onClick={() => handleRedeem(item.id)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xs shadow-md shadow-rose-500/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Redeem Coupon Now 🎟️</span>
                  </button>
                ) : (
                  <div className="w-full py-3 px-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>CLAIMED & ADDED TO WALLET 🎉</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
