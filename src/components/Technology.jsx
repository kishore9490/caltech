import React, { useState } from 'react';
import { 
  Cpu, 
  RotateCw, 
  Maximize2, 
  Layers, 
  Activity, 
  CheckCircle2, 
  Crosshair, 
  Zap, 
  Compass, 
  ChevronRight,
  ShieldAlert,
  Sliders
} from 'lucide-react';
import { TECHNOLOGIES } from '../data/metrologyData';

export default function Technology({ onOpenBooking }) {
  const [selectedTech, setSelectedTech] = useState(0);
  const [ballbarDefect, setBallbarDefect] = useState('squareness');
  const [rotaryAngle, setRotaryAngle] = useState(90);

  const currentTech = TECHNOLOGIES[selectedTech];

  return (
    <section id="technology" className="py-24 bg-[#07080c] relative overflow-hidden">
      {/* Precision Grid & Tech Accents */}
      <div className="absolute inset-0 bg-precision-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#ff6b00]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
            <span>FLAGSHIP METROLOGY INSTRUMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            MEASUREMENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              WITHOUT COMPROMISE.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            We deploy globally recognized Renishaw laser interferometers, circular ballbar systems, and rotary calibrators to guarantee uncompromising metrology accuracy.
          </p>
        </div>

        {/* 3 Tech Tabs Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {TECHNOLOGIES.map((tech, idx) => {
            const isSelected = selectedTech === idx;
            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#191e2b] to-[#0e121a] border-[#ff6b00] shadow-xl shadow-[#ff6b00]/15'
                    : 'bg-[#0a0d14]/80 border-white/10 hover:border-white/20 hover:bg-[#121622]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono-tech text-[#ff6b00] font-semibold">
                    0{idx + 1} // INSTRUMENT
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping"></span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {tech.name}
                </h3>

                <p className="text-xs font-mono-tech text-slate-400">
                  {tech.category}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Technology Interactive Showcase Card */}
        <div className="rounded-2xl bg-[#0b0e15] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Description & Specifications */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-md bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-xs font-mono-tech text-[#ff6b00] font-bold">
                  {currentTech.badge}
                </span>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight pt-2">
                  {currentTech.name}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-slate-300">
                  {currentTech.headline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {currentTech.desc}
              </p>

              {/* Capabilities Bullet List */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                  SYSTEM CAPABILITIES:
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {currentTech.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Technical Specs Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                {Object.entries(currentTech.specs).map(([key, val]) => (
                  <div key={key} className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono-tech">
                    <span className="text-[10px] text-slate-500 uppercase block">{key}</span>
                    <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">{val}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>CALIBRATE WITH {currentTech.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right: Dedicated Interactive Metrology Visualizer per Instrument */}
            <div className="lg:col-span-6">
              
              {/* 01: Renishaw XL-80 Interactive Laser Raypath Visualizer */}
              {selectedTech === 0 && (
                <div className="rounded-xl bg-[#06080d] border border-white/10 p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400 pb-3 border-b border-white/10">
                    <span className="text-white font-bold">XL-80 LASER INTERFEROMETRY RAYPATH</span>
                    <span className="text-[#ff6b00]">633nm HeNe OPTICS</span>
                  </div>

                  {/* Laser Diagram Graphic */}
                  <div className="relative h-56 rounded-lg bg-black border border-white/10 overflow-hidden flex items-center justify-center p-4 bg-precision-grid-dense">
                    
                    {/* Laser Head Unit (XL-80) on Left */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-20 h-16 rounded bg-[#1f2533] border border-white/20 flex flex-col items-center justify-center text-center shadow-lg">
                      <span className="text-[9px] font-mono-tech text-white font-bold">XL-80</span>
                      <span className="text-[7px] font-mono-tech text-[#ff6b00]">LASER HEAD</span>
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ff0000]"></div>
                    </div>

                    {/* Laser Optical Beam */}
                    <div className="absolute left-24 right-20 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-red-500 via-[#ff6b00] to-red-500 laser-beam-horizontal">
                      <span className="absolute -top-3 left-1/3 text-[8px] font-mono-tech text-[#ff6b00]">LINEAR REFLECTOR BEAM</span>
                    </div>

                    {/* Angular / Linear Reflector on Right */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded bg-[#151922] border border-[#ff6b00]/60 flex flex-col items-center justify-center text-center shadow-lg">
                      <span className="text-[8px] font-mono-tech text-slate-200">OPTIC</span>
                      <span className="text-[7px] font-mono-tech text-emerald-400">RETRO-REFLECTOR</span>
                    </div>

                    {/* Dynamic Distance Counter */}
                    <div className="absolute bottom-3 left-4 text-[10px] font-mono-tech text-slate-400 bg-black/80 px-2 py-1 rounded border border-white/10">
                      DISTANCE: 0.000 to 80.000 m | STABILITY: ±0.05 ppm
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-tech">
                    <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 text-slate-300">
                      <span className="text-slate-500 block">OPTICS CONFIG</span>
                      <span>Linear, Angular Pitch/Yaw, Straightness</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 text-slate-300">
                      <span className="text-slate-500 block">SENSOR SYNC</span>
                      <span>XC-80 Environmental Sensor (Temp/Press)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 02: Renishaw QC20-W Ballbar Circular Interpolation Simulator */}
              {selectedTech === 1 && (
                <div className="rounded-xl bg-[#06080d] border border-white/10 p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400 pb-3 border-b border-white/10">
                    <span className="text-white font-bold">CIRCULARITY INTERPOLATION POLAR PLOT</span>
                    <span className="text-[#ff6b00]">RADIUS: 50mm MIN</span>
                  </div>

                  {/* Interactive Polar Circularity Canvas / Diagram */}
                  <div className="relative h-60 rounded-lg bg-black border border-white/10 flex items-center justify-center p-4">
                    {/* Polar Coordinate Rings */}
                    <div className="w-48 h-48 rounded-full border border-white/15 flex items-center justify-center relative">
                      <div className="w-36 h-36 rounded-full border border-white/10 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        </div>
                      </div>

                      {/* Crosshair Axes */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-white/15"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-[1px] bg-white/15"></div>
                      </div>

                      {/* Ideal Circle (White dashed) */}
                      <div className="absolute w-36 h-36 rounded-full border border-dashed border-white/30"></div>

                      {/* Distorted Ballbar Trace based on defect */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                        {ballbarDefect === 'squareness' && (
                          <ellipse cx="100" cy="100" rx="72" ry="58" transform="rotate(-45 100 100)" fill="none" stroke="#ff6b00" strokeWidth="2.5" className="drop-shadow-[0_0_8px_#ff6b00]" />
                        )}
                        {ballbarDefect === 'backlash' && (
                          <path d="M 100 35 A 65 65 0 0 1 165 100 L 160 102 A 65 65 0 0 1 100 165 L 98 160 A 65 65 0 0 1 35 100 L 40 98 A 65 65 0 0 1 100 35" fill="none" stroke="#ff6b00" strokeWidth="2.5" className="drop-shadow-[0_0_8px_#ff6b00]" />
                        )}
                        {ballbarDefect === 'calibrated' && (
                          <circle cx="100" cy="100" r="65" fill="none" stroke="#10b981" strokeWidth="2.5" className="drop-shadow-[0_0_8px_#10b981]" />
                        )}
                      </svg>
                    </div>

                    <div className="absolute top-3 left-3 text-[9px] font-mono-tech text-slate-400 bg-black/80 px-2 py-1 rounded border border-white/10">
                      VMC & TURNING CENTRE TESTING
                    </div>
                  </div>

                  {/* Defect Diagnostics Switcher */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => setBallbarDefect('squareness')}
                      className={`flex-1 py-1.5 rounded text-[10px] font-mono-tech border cursor-pointer ${
                        ballbarDefect === 'squareness' ? 'bg-[#ff6b00] text-black font-bold' : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      Squareness Error
                    </button>
                    <button
                      onClick={() => setBallbarDefect('backlash')}
                      className={`flex-1 py-1.5 rounded text-[10px] font-mono-tech border cursor-pointer ${
                        ballbarDefect === 'backlash' ? 'bg-[#ff6b00] text-black font-bold' : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      Backlash Spike
                    </button>
                    <button
                      onClick={() => setBallbarDefect('calibrated')}
                      className={`flex-1 py-1.5 rounded text-[10px] font-mono-tech border cursor-pointer ${
                        ballbarDefect === 'calibrated' ? 'bg-emerald-500 text-black font-bold' : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      Calibrated True Arc
                    </button>
                  </div>
                </div>
              )}

              {/* 03: Renishaw XR20-W Rotary Axis Calibrator Simulator */}
              {selectedTech === 2 && (
                <div className="rounded-xl bg-[#06080d] border border-white/10 p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400 pb-3 border-b border-white/10">
                    <span className="text-white font-bold">XR20-W ROTARY AXIS CALIBRATOR</span>
                    <span className="text-[#ff6b00]">±1 ARCSECOND PRECISION</span>
                  </div>

                  {/* Rotary Axis Angular Visualizer */}
                  <div className="relative h-60 rounded-lg bg-black border border-white/10 flex items-center justify-center p-4">
                    
                    {/* Rotary Table Representation */}
                    <div className="relative w-44 h-44 rounded-full border-2 border-[#ff6b00] flex items-center justify-center bg-gradient-to-br from-[#1b2230] to-[#090b10] shadow-[0_0_25px_rgba(255,107,0,0.2)]">
                      
                      {/* Angular Tick Marks */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
                        <div
                          key={ang}
                          className="absolute w-full h-[1px] bg-white/20"
                          style={{ transform: `rotate(${ang}deg)` }}
                        ></div>
                      ))}

                      {/* Motorized Indexing Indicator */}
                      <div 
                        className="absolute w-28 h-28 rounded-full border border-dashed border-amber-400 flex items-center justify-center transition-transform duration-700"
                        style={{ transform: `rotate(${rotaryAngle}deg)` }}
                      >
                        <div className="w-3 h-3 rounded-full bg-[#ff6b00] -translate-y-14 shadow-[0_0_10px_#ff6b00]"></div>
                      </div>

                      {/* Center XR20-W Core */}
                      <div className="w-16 h-16 rounded-full bg-[#0d1017] border border-white/30 flex flex-col items-center justify-center text-center z-10">
                        <span className="text-[8px] font-mono-tech text-[#ff6b00] font-bold">XR20-W</span>
                        <span className="text-[7px] font-mono-tech text-slate-300">{rotaryAngle}°</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 text-[9px] font-mono-tech text-slate-400 bg-black/80 px-2 py-1 rounded border border-white/10">
                      VERTICAL & HORIZONTAL MOUNTING
                    </div>
                  </div>

                  {/* Rotary Angle Buttons */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    {[0, 45, 90, 180, 270, 360].map((deg) => (
                      <button
                        key={deg}
                        onClick={() => setRotaryAngle(deg)}
                        className={`flex-1 py-1.5 rounded text-[10px] font-mono-tech border cursor-pointer ${
                          rotaryAngle === deg ? 'bg-[#ff6b00] text-black font-bold' : 'bg-white/5 border-white/10 text-slate-400'
                        }`}
                      >
                        {deg}°
                      </button>
                    ))}
                  </div>

                  <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 text-[11px] font-mono-tech text-slate-300">
                    <span className="text-[#ff6b00] font-bold">AUTO-CALIBRATION:</span> Pre-measurement calibration cycle automatically compensates for angular alignment errors.
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
