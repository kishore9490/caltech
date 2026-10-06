import React from 'react';

/**
 * Official Brand Logo Component for CAL TECHNOLOGIES
 * Uses the exact official logo provided by the user with high-resolution presentation.
 */
export default function CalLogo({ className = "h-11", showText = true, textClassName = "" }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
      {/* Exact Official Logo Image Badge */}
      <div className="relative flex items-center justify-center h-full aspect-square rounded-xl bg-white p-1 overflow-hidden border border-white/30 shadow-lg shadow-black/40 group-hover:border-[#ff6b00] transition-all shrink-0">
        <img 
          src="/assets/cal-official-logo.jpg" 
          alt="CAL TECHNOLOGIES Official Logo" 
          className="h-full w-full object-contain"
        />
      </div>

      {/* Typography: Official CAL TECHNOLOGIES Wordmark */}
      {showText && (
        <div className={`flex flex-col text-left justify-center ${textClassName}`}>
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFA000] via-[#FF6B00] to-[#FF8C00] font-sans">
              CAL
            </span>
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.24em] text-white ml-1.5 uppercase font-sans">
              TECHNOLOGIES
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] font-mono-tech tracking-wider text-slate-400 uppercase -mt-0.5 whitespace-nowrap">
            Laser Calibration & Metrology
          </span>
        </div>
      )}
    </div>
  );
}
