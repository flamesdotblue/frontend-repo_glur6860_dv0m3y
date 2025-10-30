import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0D12]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Showcase destinations placeholder anchor for nav smoothness */}
        <section id="destinations" className="bg-gradient-to-b from-white to-slate-50 dark:from-[#0B0D12] dark:to-[#0D1117]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Curated destinations</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">Handpicked city guides with local favorites and seamless booking links.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Tokyo", "Lisbon", "New York"].map((city) => (
                <div key={city} className="overflow-hidden rounded-2xl border border-slate-900/5 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6">
                  <div className="h-40 w-full rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{city}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Explore highlights, food spots, and hidden gems.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
