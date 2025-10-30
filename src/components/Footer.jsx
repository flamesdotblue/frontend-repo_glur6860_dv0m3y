import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-900/10 dark:border-white/10 bg-white dark:bg-[#0B0D12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300">
          <p>© {year} Navigo Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
