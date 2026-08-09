import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { PurpleMovementLogo } from './PurpleMovementLogo';

export const EventNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#cta' }
  ];

  const handleJoinClick = () => {
    window.open(EVENT_CONFIG.REGISTRATION_URL, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? 'spatial-glass-pill text-[#1E1E1E]'
              : 'bg-transparent border-transparent text-[#1E1E1E]'
          }`}
        >
          {/* Authentic Logo Left */}
          <a href="#hero" className="flex items-center gap-3">
            <PurpleMovementLogo iconSize={46} textColor="dark" textSize="large" />
            <span className="hidden sm:inline-block text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#737373] border-l border-black/10 pl-3">
              BEYOND SYLLABUS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[#737373] hover:text-[#6F3FF5] transition-colors font-sans tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleJoinClick}
              className="px-5 py-2 rounded-full spatial-button-primary text-xs font-mono-tech uppercase tracking-wider font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <span>Join</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-black/10 text-[#1E1E1E]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="spatial-glass-card bg-white/95 rounded-2xl p-6 border border-black/10 space-y-4 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-[#1E1E1E] hover:text-[#6F3FF5] py-1"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleJoinClick();
                }}
                className="w-full py-3 rounded-full spatial-button-primary text-xs uppercase font-mono-tech font-semibold tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Movement</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
