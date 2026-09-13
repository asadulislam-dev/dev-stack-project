import React, { useState } from 'react';
// Import images directly from src/assets folder
import logoImg from './assets/logo-text.png';
import bannerImg from './assets/banner-stack.png';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ================= NAVBAR START ================= */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* 1. Brand Logo Image */}
            <div className="flex items-center">
              <a href="#home">
                <img 
                  src={logoImg} 
                  alt="DevStack Logo" 
                  className="h-9 w-auto object-contain"
                />
              </a>
            </div>

            {/* 2. Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
              <a href="#tech" className="hover:text-orange-500 transition-colors">Technologies</a>
              <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
              <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>

            {/* 3. Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 transition">
                Sign In
              </button>
              <button className="text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-95 shadow-md transition">
                Sign Up
              </button>
            </div>

            {/* 4. Hamburger Icon */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              >
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

        {/* 5. Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 text-sm font-semibold text-slate-700">
            <a href="#home" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">Home</a>
            <a href="#tech" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">Technologies</a>
            <a href="#projects" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">Projects</a>
            <a href="#about" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">About</a>
            <a href="#contact" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">Contact</a>
          </div>
        )}
      </nav>
      {/* ================= NAVBAR END ================= */}

      {/* ================= HERO SECTION START ================= */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & Buttons */}
          <div className="text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-slate-500 text-sm sm:text-base max-w-lg leading-relaxed font-medium">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#tech"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold text-sm shadow-md hover:opacity-95 transition"
              >
                Explore Technologies
              </a>
              <button className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition shadow-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: 3D Banner Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-slate-50/50 border border-slate-200/60 rounded-3xl p-6 flex items-center justify-center shadow-sm">
              <img 
                src={bannerImg} 
                alt="DevStack Illustration" 
                className="w-full max-w-xs sm:max-w-sm h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>
      {/* ================= HERO SECTION END ================= */}
    </div>
  );
}