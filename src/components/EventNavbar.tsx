import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { PurpleMovementLogo } from './PurpleMovementLogo';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export const EventNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDayMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'JOURNEY', href: '#journey' },
    { label: 'STUDENTS', href: '#students' },
    { label: 'COMMONS', href: '#commons' },
    { label: 'PROTOTYPES', href: '#action-layer' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'OUTCOMES', href: '#outcomes' }
  ];

  const handleJoinClick = () => {
    window.open(EVENT_CONFIG.YOUTUBE_URL, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 py-3.5 sm:py-4 transition-all duration-300 backdrop-blur-md ${
        isDayMode
          ? scrolled
            ? 'bg-[#F7F6FB]/95 shadow-xs border-b border-[#E4DFF2]'
            : 'bg-[#F7F6FB]/85 border-b border-[#EDE8F7]'
          : scrolled
            ? 'bg-[#07060A]/95 shadow-sm border-b border-white/10'
            : 'bg-[#07060A]/85 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          {/* Authentic Logo Left */}
          <a href="#hero" className="flex items-center gap-3">
            <PurpleMovementLogo
              iconSize={40}
              textColor={isDayMode ? 'dark' : 'light'}
              textSize="large"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[11px] font-mono-tech uppercase font-bold transition-colors tracking-widest ${
                  isDayMode
                    ? 'text-[#241F33] hover:text-[#7500EB]'
                    : 'text-[#F4F3F7] hover:text-[#00F5A0]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions: Theme Toggle & Watch Live Pill Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Watch Live Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleJoinClick}
              className={`px-5 py-2 rounded-xl text-[11px] font-mono-tech uppercase font-bold tracking-widest flex items-center gap-2 cursor-pointer shadow-xs transition-all ${
                isDayMode
                  ? 'bg-[#181427] text-white hover:bg-[#7500EB]'
                  : 'bg-[#F4F3F7] text-[#07060A] hover:bg-[#8000FF] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span>WATCH LIVE</span>
            </motion.button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-colors ${
                isDayMode
                  ? 'bg-[#EDE9F6] border-[#D8D1EC] text-[#241F33]'
                  : 'bg-[#14121F] border-white/10 text-[#F4F3F7]'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
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
            <div
              className={`spatial-glass-card rounded-2xl p-6 space-y-4 shadow-xl border ${
                isDayMode
                  ? 'bg-[#FFFFFF]/98 border-[#E4DFF2]'
                  : 'bg-[#111019]/95 border-white/10'
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm font-medium py-1 transition-colors ${
                    isDayMode
                      ? 'text-[#241F33] hover:text-[#7500EB]'
                      : 'text-[#F4F3F7] hover:text-[#00F5A0]'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleJoinClick();
                  }}
                  className="w-full py-3 rounded-xl spatial-button-primary text-xs uppercase font-mono-tech font-semibold tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Watch Live Session</span>
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

