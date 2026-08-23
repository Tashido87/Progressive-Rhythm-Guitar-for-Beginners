import React from 'react';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo: React.FC<AppLogoProps> = ({ className = '', size = 36 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
    >
      <defs>
        <linearGradient id="appLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#090d16" />
        </linearGradient>

        <linearGradient id="appLogoPick" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>

        <linearGradient id="appLogoGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>

        <filter id="appLogoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#ea580c" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Rounded Squircle Base */}
      <rect width="512" height="512" rx="128" fill="url(#appLogoBg)" />
      <rect x="16" y="16" width="480" height="480" rx="112" stroke="#334155" strokeWidth="4" opacity="0.5" />

      {/* Acoustic Wave Concentric Circles */}
      <circle cx="256" cy="270" r="160" stroke="#f97316" strokeWidth="2" opacity="0.15" />
      <circle cx="256" cy="270" r="120" stroke="#f97316" strokeWidth="2.5" opacity="0.25" />

      {/* Aesthetic Plectrum / Guitar Pick */}
      <path
        d="M 256 96 C 365 96 410 165 390 270 C 370 375 295 435 256 452 C 217 435 142 375 122 270 C 102 165 147 96 256 96 Z"
        fill="url(#appLogoPick)"
        filter="url(#appLogoGlow)"
      />

      {/* Dark Wood Soundhole */}
      <circle cx="256" cy="260" r="76" fill="#0f172a" />
      <circle cx="256" cy="260" r="82" stroke="#fed7aa" strokeWidth="4" opacity="0.85" />
      <circle cx="256" cy="260" r="90" stroke="#ea580c" strokeWidth="2" opacity="0.5" />

      {/* 6 Golden Guitar Strings */}
      <g stroke="url(#appLogoGold)" strokeLinecap="round">
        <line x1="210" y1="130" x2="210" y2="390" strokeWidth="5" opacity="0.95" />
        <line x1="228" y1="120" x2="228" y2="400" strokeWidth="4.2" opacity="0.95" />
        <line x1="246" y1="115" x2="246" y2="405" strokeWidth="3.5" opacity="0.95" />
        <line x1="266" y1="115" x2="266" y2="405" strokeWidth="3" opacity="0.95" />
        <line x1="284" y1="120" x2="284" y2="400" strokeWidth="2.6" opacity="0.95" />
        <line x1="302" y1="130" x2="302" y2="390" strokeWidth="2.2" opacity="0.95" />
      </g>

      {/* Harmonic Rhythm Wave Strum Line */}
      <path
        d="M 175 260 Q 215 220, 256 260 T 337 260"
        stroke="#ffffff"
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Strum Node */}
      <circle cx="256" cy="260" r="5" fill="#ffffff" />
    </svg>
  );
};
