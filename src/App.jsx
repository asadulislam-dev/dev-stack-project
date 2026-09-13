import React, { useState } from 'react';

export default function App() {
  // State to track mobile navigation menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ================= NAVBAR START ================= */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* 1. Brand Logo & Title */}
            <div className="flex items-center space-x-3">
              {/* Logo Icon Box */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                DS
              </div>
              {/* Text Logo */}
              <span className="text-xl font-black text-slate-900 tracking-tight">
                Dev <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Stack</span>
              </span>
            </div>

            {/* 2. Desktop Navigation Links (Hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a href="#home" className="hover:text-slate-900 transition">Home</a>
              <a href="#tech" className="hover:text-slate-900 transition">Technologies</a>
              <a href="#projects" className="hover:text-slate-900 transition">Projects</a>
              <a href="#about" className="hover:text-slate-900 transition">About</a>
              <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
            </div>

            {/* 3. Action Buttons (Sign In / Sign Up) */}
            <div className="hidden sm:flex items-center space-x-3">
              <button className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition">
                Sign In
              </button>
              <button className="text-xs sm:text-sm font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 shadow-sm transition">
                Sign Up
              </button>
            </div>

            {/* 4. Mobile Hamburger Menu Button (Hidden on desktop) */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              >
                {/* Toggle Icon: 'X' when open, 'Hamburger' when closed */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* 5. Mobile Dropdown Menu (Renders conditionally based on state) */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2 text-sm font-medium text-slate-700">
            <a href="#home" className="block py-2 hover:bg-slate-50 rounded px-2">Home</a>
            <a href="#tech" className="block py-2 hover:bg-slate-50 rounded px-2">Technologies</a>
            <a href="#projects" className="block py-2 hover:bg-slate-50 rounded px-2">Projects</a>
            <a href="#about" className="block py-2 hover:bg-slate-50 rounded px-2">About</a>
            <a href="#contact" className="block py-2 hover:bg-slate-50 rounded px-2">Contact</a>
          </div>
        )}
      </nav>
      {/* ================= NAVBAR END ================= */}
    </div>
  );
}