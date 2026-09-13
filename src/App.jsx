import React, { useState } from 'react';

export default function App() {
  // State to track mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ================= NAVBAR START ================= */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left Side: Brand Logo & Title */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white font-extrabold text-base shadow-md">
                DS
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight">
                Dev <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Stack</span>
              </span>
            </div>

            {/* Middle: Navigation Links (Desktop View) */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
              <a href="#tech" className="hover:text-orange-500 transition-colors">Technologies</a>
              <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
              <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>

            {/* Right Side: Auth Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 transition">
                Sign In
              </button>
              <button className="text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-95 shadow-md hover:shadow-lg transition">
                Sign Up
              </button>
            </div>

            {/* Mobile View: Hamburger Button (Right aligned) */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
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

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 text-sm font-semibold text-slate-700">
            <a href="#home" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">Home</a>
            <a href="#tech" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">Technologies</a>
            <a href="#projects" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">Projects</a>
            <a href="#about" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">About</a>
            <a href="#contact" className="block py-2 px-3 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">Contact</a>
            
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button className="w-full text-center text-sm font-semibold text-slate-700 py-2 rounded-lg hover:bg-slate-100 transition">
                Sign In
              </button>
              <button className="w-full text-center text-sm font-semibold text-white py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 shadow-md">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* ================= NAVBAR END ================= */}
    </div>
  );
}