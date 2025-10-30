import React from 'react';
import { Globe, Map, Shield } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global coverage',
    desc: 'Real-time insights across cities and countries with smart recommendations tailored to your style.'
  },
  {
    icon: Map,
    title: 'Visual planning',
    desc: 'Drag-and-drop itinerary builder with maps, timelines, and instant booking shortcuts.'
  },
  {
    icon: Shield,
    title: 'Peace of mind',
    desc: 'Secure sync across devices with reliable offline mode when you are on the move.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white dark:bg-[#0B0D12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Everything you need to travel smarter
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            From planning to touchdown, our tools keep your journey organized and effortless.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-900/5 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 transition hover:shadow-xl hover:shadow-blue-600/10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-600/10 blur-2xl transition duration-500 group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
