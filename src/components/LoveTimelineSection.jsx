import React from 'react';
import { Calendar, Sparkles, Heart, Compass, Gift } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Compass: Compass,
  Gift: Gift
};

export default function LoveTimelineSection() {
  const events = birthdayData.timelineEvents;

  return (
    <section className="my-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Calendar className="w-4 h-4 text-rose-400" />
          <span>Our Journey Together</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
          How Our Story Unfolded 📖
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Every single milestone with you has been a priceless chapter in my life.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative border-l-2 border-rose-500/30 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
        {events.map((evt, idx) => {
          const IconComp = iconMap[evt.icon] || Heart;

          return (
            <div key={evt.id} className="relative group">
              {/* Timeline Dot Icon */}
              <div className="absolute -left-[35px] md:-left-[51px] top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-rose-500 flex items-center justify-center text-rose-400 shadow-lg shadow-rose-500/30 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                <IconComp className="w-5 h-5" />
              </div>

              {/* Event Card */}
              <div className="glass-card glass-card-hover p-6 md:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Content side */}
                <div className="md:col-span-7">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {evt.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {evt.date}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {evt.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                {/* Image side */}
                <div className="md:col-span-5 overflow-hidden rounded-2xl border border-slate-700/50 shadow-md">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
