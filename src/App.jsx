import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import images directly from src/assets folder
import logoImg from './assets/logo-text.png';
import bannerImg from './assets/banner-stack.png';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch JSON Data with Loading State
  useEffect(() => {
    fetch('/techData.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading data:', err);
        setLoading(false);
      });
  }, []);

  // Add to Stack Logic
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  // Remove single item
  const handleRemoveFromStack = (techId, techName) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== techId));
    toast.info(`Removed ${techName} from stack`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  // Remove All items
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error('Cleared all technologies from stack', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between">
      {/* Toast notifications rendering component */}
      <ToastContainer />

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

      {/* ================= TECHNOLOGIES SECTION START ================= */}
      <section id="tech" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Pick one technology per category to build your ideal stack.</p>
        </div>

        {/* LOADING STATE */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-pink-500 rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium text-sm">Loading Technologies...</p>
          </div>
        ) : (
          /* MAIN GRID: Tech Cards (3 cols) + Sidebar (1 col) */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Tech Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {technologies.map((tech) => {
                const isAdded = selectedStack.some((item) => item.id === tech.id);
                return (
                  <div
                    key={tech.id}
                    className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon & Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                        <span className="text-[11px] font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                          {tech.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-bold text-slate-900 text-base mb-1">{tech.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                        {tech.description}
                      </p>
                    </div>

                    <div>
                      {/* Meta Details */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 mb-4">
                        <span className="font-medium text-slate-600">{tech.category}</span>
                        <span>{tech.difficulty}</span>
                        <div className="flex items-center space-x-1 font-bold text-slate-700">
                          <span className="text-amber-400">★</span>
                          <span>{tech.rating}</span>
                        </div>
                      </div>

                      {/* Add Button */}
                      <button
                        onClick={() => handleAddToStack(tech)}
                        disabled={isAdded}
                        className={`w-full py-2.5 rounded-xl font-semibold text-xs transition ${
                          isAdded
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* YOUR STACK SIDEBAR */}
            <div className="lg:col-span-1 sticky top-24">
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                
                <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
                <p className="text-xs text-slate-400 mb-4 font-medium">
                  {selectedStack.length > 0
                    ? `${selectedStack.length} Technology Selected`
                    : 'No technologies selected yet.'}
                </p>

                {/* EMPTY STATE */}
                {selectedStack.length === 0 ? (
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center my-2">
                    <p className="text-xs text-slate-400 font-medium">Your stack is empty.</p>
                  </div>
                ) : (
                  /* SELECTED ITEMS */
                  <div className="space-y-3 mb-5">
                    {selectedStack.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50"
                      >
                        <div className="flex items-center space-x-3">
                          <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                          <div>
                            <h4 className="font-bold text-slate-900 text-xs">{item.name}</h4>
                            <span className="text-[10px] text-slate-400 font-medium">{item.category}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFromStack(item.id, item.name)}
                          className="text-slate-400 hover:text-slate-600 p-1 font-bold"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* REMOVE ALL BUTTON */}
                {selectedStack.length > 0 && (
                  <button
                    onClick={handleRemoveAll}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-rose-600 border border-rose-200 hover:bg-rose-50 transition"
                  >
                    Remove All
                  </button>
                )}

              </div>
            </div>

          </div>
        )}
      </section>
      {/* ================= TECHNOLOGIES SECTION END ================= */}

    </div>
  );
}