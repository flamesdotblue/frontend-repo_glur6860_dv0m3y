import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live trip planner for modern teams
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Navigate the world with a clean, modern travel platform
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-200">
            Plan routes, book stays, and coordinate itineraries in one streamlined workspace. Built for speed, clarity, and collaboration.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition">
              Start exploring
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/20 transition">
              Watch demo
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm">Loved by 10,000+ travelers and teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}
