import React from 'react';

interface PurpleMovementLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only';
  iconSize?: number;
  textColor?: 'dark' | 'light' | 'auto';
  textSize?: 'normal' | 'large' | 'xlarge';
}

export const PurpleMovementLogo: React.FC<PurpleMovementLogoProps> = ({
  className = '',
  variant = 'full',
  iconSize = 44,
  textColor = 'auto',
  textSize = 'normal'
}) => {
  const isLightText = textColor === 'light';

  // Exact Authentic Transparent PNGs extracted directly from official logo image
  const logoSrc = isLightText
    ? '/purple-movement-logo-transparent-dark.png'
    : '/purple-movement-logo-transparent-light.png';

  const iconSrc = '/purple-movement-icon-transparent.png';

  // Dynamic height scaling for pixel-perfect ratio (Logo image is ~ 3:1 width:height)
  const getLogoHeight = () => {
    if (textSize === 'xlarge') return 'h-20 sm:h-24';
    if (textSize === 'large') return 'h-11 sm:h-13';
    return 'h-9 sm:h-10';
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {variant === 'icon-only' ? (
        <img
          src={iconSrc}
          alt="Purple Movement Icon"
          style={{ height: iconSize }}
          className="w-auto object-contain drop-shadow-md shrink-0 transition-transform duration-300 hover:scale-105"
        />
      ) : (
        <img
          src={logoSrc}
          alt="Purple Movement Logo"
          className={`${getLogoHeight()} w-auto object-contain drop-shadow-md shrink-0 transition-transform duration-300 hover:scale-[1.02]`}
        />
      )}
    </div>
  );
};
