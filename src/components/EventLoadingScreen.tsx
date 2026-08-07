import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PurpleMovementLogo } from './PurpleMovementLogo';

interface EventLoadingScreenProps {
  onComplete?: () => void;
}

export const EventLoadingScreen: React.FC<EventLoadingScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Extended Cinematic Loading Sequence (+5s longer, total ~8.8 seconds)
    // Phase 0 (0.0s - 1.8s): Learning...
    // Phase 1 (1.8s - 3.6s): Listening...
    // Phase 2 (3.6s - 5.4s): Building...
    // Phase 3 (5.4s - 7.4s): Quote ("Education should be a beginning, not a boundary.")
    // Phase 4 (7.4s - 8.8s): Authentic Purple Movement Logo & "BEYOND SYLLABUS" reveal
    const timer1 = setTimeout(() => setPhase(1), 1800);
    const timer2 = setTimeout(() => setPhase(2), 3600);
    const timer3 = setTimeout(() => setPhase(3), 5400);
    const timer4 = setTimeout(() => setPhase(4), 7400);
    const timer5 = setTimeout(() => {
      setIsLoaded(true);
      if (onComplete) onComplete();
    }, 8800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAF8] text-[#1E1E1E] select-none"
        >
          {/* Subtle Ambient Light Orb */}
          <div className="absolute w-[45rem] h-[45rem] rounded-full bg-purple-500/5 blur-[180px] pointer-events-none" />

          <div className="relative z-10 max-w-lg mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[16rem]">
            {/* Phase 0 - 2: Tiny Animated Text Sequence */}
            {phase < 3 && (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-sm font-mono-tech uppercase tracking-[0.35em] text-[#737373] font-semibold"
              >
                {phase === 0 && 'Learning...'}
                {phase === 1 && 'Listening...'}
                {phase === 2 && 'Building...'}
              </motion.div>
            )}

            {/* Phase 3: Quote Reveal */}
            {phase === 3 && (
              <motion.blockquote
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.8 }}
                className="font-serif-editorial text-3xl sm:text-4xl text-[#1E1E1E] italic leading-snug tracking-tight max-w-lg"
              >
                "Education should be a beginning, not a boundary."
              </motion.blockquote>
            )}

            {/* Phase 4: Full Authentic Logo Reveal */}
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-3"
              >
                <PurpleMovementLogo iconSize={52} variant="full" textColor="dark" />
                <span className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#737373] mt-3 font-semibold">
                  BEYOND SYLLABUS
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
