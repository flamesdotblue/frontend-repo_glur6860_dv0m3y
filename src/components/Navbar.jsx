import React from 'react';
import { Plane } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/60 dark:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Plane className="h-4 w-4" />
            </span>
            <span>Navigo</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">Features</a>
            <a href="#destinations" className="hover:text-slate-900 dark:hover:text-white transition">Destinations</a>
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-white/5 transition">
              Sign in
            </button>
            <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition">
              Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
