import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onNavigateToForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onNavigateToForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Us', href: '#why-beyond' },
    { label: 'Experience', href: '#features' },
    { label: 'Journey', href: '#journey' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Partners', href: '#partners' },
    { label: 'Paths', href: '#learning-paths' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-opacity-80 backdrop-blur-xl border-b border-purple-500/10 bg-[#090710]/80 light:bg-slate-900/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 p-0.5 shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090710] dark:bg-[#090710] light:bg-white rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight gradient-text-purple">
                Beyond Syllabus
              </span>
              <span className="text-[10px] tracking-widest uppercase text-purple-400/80 font-medium">
                The Purple Movement
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-purple-400 transition-colors rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full glass-panel text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            <button
              onClick={onNavigateToForm}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-xs tracking-wide shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Join Movement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg glass-panel text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg glass-panel text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-6 mt-3 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-purple-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToForm();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm flex items-center justify-center gap-2"
          >
            <span>Join Beyond Syllabus</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
