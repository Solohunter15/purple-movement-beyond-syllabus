import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Partners', href: '#partners' }
  ];

  const handleRegisterClick = () => {
    window.open(EVENT_CONFIG.REGISTRATION_URL, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl sm:rounded-full transition-all duration-500 ${
            scrolled
              ? 'skeuo-glass-card border border-purple-500/25 shadow-2xl shadow-purple-950/40'
              : 'bg-[#05050a]/40 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-purple-500 to-indigo-600 p-[1.5px] shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#070512] rounded-[10px] flex items-center justify-center skeuo-inset-container">
                <Sparkles className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
                {EVENT_CONFIG.EVENT_NAME}
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-purple-400 font-semibold">
                // BEYOND_SYLLABUS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 skeuo-inset-container px-3 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-all rounded-full hover:bg-purple-600/20 hover:shadow-inner"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleRegisterClick}
              className="px-5 py-2.5 rounded-full skeuo-button-primary text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-2 group"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl skeuo-button-secondary text-slate-300"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5 text-slate-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="skeuo-glass-card rounded-2xl p-6 border border-purple-500/20 space-y-4 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-bold text-slate-200 hover:text-purple-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleRegisterClick();
                  }}
                  className="w-full py-3 rounded-xl skeuo-button-primary text-white font-extrabold text-sm flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <span>Register for the Event</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

