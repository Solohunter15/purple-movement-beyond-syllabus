import React from 'react';

interface PurpleMovementLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only';
  iconSize?: number;
  textColor?: 'dark' | 'light' | 'auto';
}

export const PurpleMovementLogo: React.FC<PurpleMovementLogoProps> = ({
  className = '',
  variant = 'full',
  iconSize = 36,
  textColor = 'auto'
}) => {
  const isLightText = textColor === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {variant === 'icon-only' ? (
        <img
          src="/purple-movement-icon.png"
          alt="Purple Movement Icon"
          style={{ height: iconSize, width: iconSize }}
          className="object-contain mix-blend-screen drop-shadow-sm shrink-0"
        />
      ) : (
        <div className="flex items-center gap-3">
          {/* Authentic Icon Mark */}
          <img
            src="/purple-movement-icon.png"
            alt="Purple Movement Logo"
            style={{ height: iconSize, width: iconSize }}
            className="object-contain mix-blend-screen drop-shadow-sm shrink-0"
          />

          {/* Authentic Wordmark Typography */}
          <div className="flex flex-col justify-center leading-none">
            <div className="flex items-center relative">
              <span
                className={`font-sans font-black text-2xl tracking-tight transition-colors ${
                  isLightText ? 'text-white' : 'text-[#1E1E1E]'
                }`}
              >
                Purple
              </span>

              {/* Exact Teardrop Leaf Accent above 'e' */}
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 -mt-3.5 ml-0.5"
              >
                <path
                  d="M6 0 C9.5 5 12 9.5 12 12 C12 14.2 10.2 16 8 16 C4.5 16 0 12 0 7.5 C0 4 3 0 6 0 Z"
                  fill="url(#logo-leaf-grad)"
                />
                <defs>
                  <linearGradient id="logo-leaf-grad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#C084FC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* MOVEMENT Uppercase */}
            <span
              className={`font-sans font-black text-[9px] tracking-[0.3em] uppercase mt-0.5 transition-colors ${
                isLightText ? 'text-white/90' : 'text-[#1E1E1E]/90'
              }`}
            >
              MOVEMENT
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
