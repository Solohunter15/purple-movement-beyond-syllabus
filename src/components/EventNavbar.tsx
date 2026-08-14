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
    { label: 'JOURNEY', href: '#journey' },
    { label: 'VOICES', href: '#speakers' },
    { label: 'COMMONS', href: '#commons' },
    { label: 'PROTOTYPES', href: '#outcomes' },
    { label: 'OUTCOMES', href: '#outcomes' }
  ];

  const handleJoinClick = () => {
    window.open(EVENT_CONFIG.REGISTRATION_URL, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 py-4 transition-all duration-300 ${scrolled ? 'bg-[#07060A]/95 shadow-sm border-b border-white/10' : 'bg-[#07060A]/85 border-b border-white/5'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          {/* Authentic Logo Left */}
          <a href="#hero" className="flex items-center gap-3">
            <PurpleMovementLogo iconSize={40} textColor="light" textSize="large" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-mono-tech uppercase font-bold text-[#F4F3F7] hover:text-[#00F5A0] transition-colors tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA: Watch Live Pill Button */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleJoinClick}
              className="px-5 py-2 rounded-lg bg-[#F4F3F7] text-[#07060A] text-[11px] font-mono-tech uppercase font-bold tracking-widest flex items-center gap-2 cursor-pointer shadow-sm hover:bg-[#8000FF] hover:text-white transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span>WATCH LIVE</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-[#F4F3F7]"
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
            <div className="spatial-glass-card bg-[#111019]/95 rounded-2xl p-6 border border-white/10 space-y-4 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-[#F4F3F7] hover:text-[#00F5A0] py-1"
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
