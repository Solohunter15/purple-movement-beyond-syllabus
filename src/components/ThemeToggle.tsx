import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { isDayMode, toggleTheme } = useTheme();


  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onClick={toggleTheme}
      aria-label={isDayMode ? 'Switch to Dark Theme' : 'Switch to Day Theme'}
      title={isDayMode ? 'Switch to Dark Theme' : 'Switch to Day Theme'}
      className={`relative inline-flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl transition-all duration-300 cursor-pointer border ${
        isDayMode
          ? 'bg-[#EDE9F6] hover:bg-[#E2DCF2] text-[#4A1584] border-[#D3CBE8] shadow-xs shadow-purple-900/5'
          : 'bg-[#181622] hover:bg-[#232032] text-[#E4E2ED] border-white/10 shadow-xs shadow-black/40'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDayMode ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#FF8A00]"
            >
              <Sun className="w-4 h-4 stroke-[2.2]" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#00F5A0]"
            >
              <Moon className="w-4 h-4 stroke-[2.2]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel ? (
        <span className="text-[11px] font-mono-tech uppercase font-bold tracking-wider">
          {isDayMode ? 'DAY MODE' : 'DARK MODE'}
        </span>
      ) : (
        <span className="hidden sm:inline-block text-[10px] font-mono-tech uppercase font-bold tracking-wider opacity-85">
          {isDayMode ? 'DAY' : 'DARK'}
        </span>
      )}
    </motion.button>
  );
};
