import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventLoadingScreenProps {
  onComplete?: () => void;
}

export const EventLoadingScreen: React.FC<EventLoadingScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Cinematic Loading Sequence:
    // Phase 0 (0.0s - 1.2s): Learning...
    // Phase 1 (1.2s - 2.4s): Listening...
    // Phase 2 (2.4s - 3.6s): Building...
    // Phase 3 (3.6s - 5.0s): Quote ("Education should be a beginning, not a boundary.")
    const timer1 = setTimeout(() => setPhase(1), 1200);
    const timer2 = setTimeout(() => setPhase(2), 2400);
    const timer3 = setTimeout(() => setPhase(3), 3600);
    const timer4 = setTimeout(() => {
      setIsLoaded(true);
      if (onComplete) onComplete();
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07060A] text-[#F4F3F7] select-none"
        >
          {/* Ambient Glowing Orbs */}
          <div className="absolute w-[50rem] h-[50rem] rounded-full bg-[#8000FF]/15 blur-[180px] pointer-events-none animate-pulse-glow" />

          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[22rem]">
            {/* Phase 0 - 2: Text Sequence */}
            {phase < 3 && (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6 }}
                className="text-base sm:text-lg font-mono-tech uppercase tracking-[0.4em] text-[#8000FF] font-bold"
              >
                {phase === 0 && 'Learning...'}
                {phase === 1 && 'Listening...'}
                {phase === 2 && 'Building...'}
              </motion.div>
            )}

            {/* Phase 3: Quote Reveal */}
            {phase === 3 && (
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8 }}
                className="font-serif-editorial text-3xl sm:text-5xl text-[#F4F3F7] italic leading-snug tracking-tight max-w-xl"
              >
                "Education should be a beginning, not a boundary."
              </motion.blockquote>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
