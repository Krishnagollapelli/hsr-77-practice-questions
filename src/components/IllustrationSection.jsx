import React from 'react';
import PromoCard from './PromoCard';

const MedicalIllustrationSVG = () => (
  <svg
    viewBox="0 0 240 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="medical-illustration-svg"
  >
    <defs>
      {/* Gradients for Books */}
      <linearGradient id="bioGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="chemGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="phyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="ncertGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#be123c" />
      </linearGradient>
      <linearGradient id="stethGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      
      {/* Drop Shadows */}
      <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Table/Surface Shadow */}
    <ellipse cx="120" cy="195" rx="90" ry="12" fill="#e2e8f0" />

    {/* Book 1: Physics (Bottom Book) */}
    <g filter="url(#shadow)">
      <path d="M 35 160 L 195 160 C 200 160 205 165 205 172 C 205 179 200 184 195 184 L 35 184 C 30 184 25 179 25 172 C 25 165 30 160 35 160 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="25" y="160" width="180" height="7" rx="3" fill="url(#phyGrad)" />
      <rect x="25" y="177" width="180" height="7" rx="3" fill="url(#phyGrad)" />
      <text x="115" y="174" fill="#ffffff" fontSize="9" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">PHYSICS</text>
    </g>

    {/* Book 2: Chemistry (Second Book) */}
    <g filter="url(#shadow)">
      <path d="M 40 132 L 190 132 C 195 132 200 137 200 144 C 200 151 195 156 190 156 L 40 156 C 35 156 30 151 30 144 C 30 137 35 132 40 132 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="30" y="132" width="170" height="6" rx="3" fill="url(#chemGrad)" />
      <rect x="30" y="150" width="170" height="6" rx="3" fill="url(#chemGrad)" />
      <text x="115" y="146" fill="#ffffff" fontSize="8.5" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">CHEMISTRY</text>
    </g>

    {/* Book 3: Biology (Third Book) */}
    <g filter="url(#shadow)">
      <path d="M 45 104 L 185 104 C 190 104 195 109 195 116 C 195 123 190 128 185 128 L 45 128 C 40 128 35 123 35 116 C 35 109 40 104 45 104 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="35" y="104" width="160" height="6" rx="3" fill="url(#bioGrad)" />
      <rect x="35" y="122" width="160" height="6" rx="3" fill="url(#bioGrad)" />
      <text x="115" y="118" fill="#ffffff" fontSize="8.5" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">BIOLOGY</text>
    </g>

    {/* Book 4: NCERT (Top Open Book) */}
    <g filter="url(#shadow)">
      <path d="M 50 78 L 180 78 C 185 78 190 83 190 90 C 190 97 185 102 180 102 L 50 102 C 45 102 40 97 40 90 C 40 83 45 78 50 78 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="40" y="78" width="150" height="6" rx="3" fill="url(#ncertGrad)" />
      <rect x="40" y="96" width="150" height="6" rx="3" fill="url(#ncertGrad)" />
      <text x="115" y="92" fill="#ffffff" fontSize="8" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">NCERT XI & XII</text>
    </g>

    {/* Stethoscope Wrapping Around */}
    <g filter="url(#shadow)">
      {/* Ear Tubes */}
      <path d="M 75 25 C 75 12 105 10 115 25 L 115 50" stroke="url(#stethGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 155 25 C 155 12 125 10 115 25 L 115 50" stroke="url(#stethGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />
      
      {/* Ear Tips */}
      <circle cx="75" cy="25" r="4" fill="#0f172a" />
      <circle cx="155" cy="25" r="4" fill="#0f172a" />

      {/* Y-Connector */}
      <circle cx="115" cy="50" r="5" fill="#0f172a" />

      {/* Main Tubing curving around books */}
      <path
        d="M 115 55 C 115 75 60 70 55 110 C 50 150 70 180 105 182 C 140 184 175 160 165 130 C 160 110 145 115 145 125"
        stroke="url(#stethGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Chestpiece / Bell */}
      <circle cx="145" cy="130" r="14" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <circle cx="145" cy="130" r="9" fill="#059669" />
      <circle cx="145" cy="130" r="4" fill="#ffffff" opacity="0.6" />
    </g>

    {/* Decorative Sparkle Accents */}
    <path d="M 195 40 L 198 46 L 204 49 L 198 52 L 195 58 L 192 52 L 186 49 L 192 46 Z" fill="#059669" opacity="0.8" />
    <path d="M 35 45 L 37 50 L 42 52 L 37 54 L 35 59 L 33 54 L 28 52 L 33 50 Z" fill="#f59e0b" opacity="0.8" />
  </svg>
);

const IllustrationSection = () => {
  return (
    <aside className="right-visual-section">
      <PromoCard />

      <div className="illustration-container">
        <div className="illustration-graphic">
          <MedicalIllustrationSVG />
        </div>

        <div className="doctor-bottom-badge">
          <div className="dream-text">From Dream</div>
          <div className="doctor-text">To Doctor</div>
        </div>
      </div>
    </aside>
  );
};

export default IllustrationSection;
