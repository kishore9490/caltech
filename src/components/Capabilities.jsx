import React, { useState } from 'react';
import { 
  Target, 
  Compass, 
  Activity, 
  Sliders, 
  Maximize, 
  ShieldCheck, 
  Wrench, 
  Code, 
  ChevronRight, 
  CheckCircle2, 
  Zap,
  Gauge,
  CornerDownRight,
  TrendingDown
} from 'lucide-react';
import { CAPABILITIES } from '../data/metrologyData';

export default function Capabilities({ onOpenBooking }) {
  const [selectedId, setSelectedId] = useState(CAPABILITIES[0].id);

  const currentCapability = CAPABILITIES.find((c) => c.id === selectedId) || CAPABILITIES[0];

  // Visual simulation configs for each capability
  const getSimData = (id) => {
    switch (id) {
      case 'static-pos':
        return {
          title: "Linear Positioning Deviation Profile (ISO 230-2)",
          xAxisLabel: "Axis Travel (0 to 1000 mm)",
          yAxisLabel: "Positional Error (µm)",
          rawError: "+16.8 µm Max Drift",
          compensatedError: "±0.4 µm Calibrated",
          points: [0, 4.2, 8.5, 12.1, 14.8, 16.8, 15.2, 11.0, 7.3, 3.1],
          compPoints: [0, 0.2, -0.3, 0.1, 0.4, -0.2, 0.3, -0.1, 0.2, 0.0],
          notes: "Renishaw XL-80 multi-pass target scan with automatic linear pitch compensation table upload."
        };
      case 'linear-disp':
        return {
          title: "Bidirectional Repeatability & Systematic Deviation",
          xAxisLabel: "Forward & Reverse Target Positions (mm)",
          yAxisLabel: "Repeatability Spread (µm)",
          rawError: "Spread: 8.2 µm",
          compensatedError: "Repeatability: 0.5 µm",
          points: [1.2, 3.5, 6.8, 8.2, 7.9, 6.1, 4.5, 2.1],
          compPoints: [0.1, 0.2, 0.4, 0.5, 0.3, 0.2, 0.1, 0.2],
          notes: "ISO 230-2 statistical calculation of unidirectional repeatability R↑ and bidirectional repeatability R."
        };
      case 'backlash-reversal':
        return {
          title: "Backlash & Lost Motion Reversal Spike Waveform",
          xAxisLabel: "Motion Reversal Phase (Time)",
          yAxisLabel: "Reversal Lag / Lost Motion (µm)",
          rawError: "Backlash: 14.5 µm (Spike)",
          compensatedError: "Backlash: 0.2 µm (Compensated)",
          points: [0, 14.5, 14.2, 12.0, 2.0, 14.5, 14.0, 1.0],
          compPoints: [0, 0.2, 0.1, 0.2, 0.0, 0.2, 0.1, 0.0],
          notes: "Quantifies mechanical ballscrew end-play and optimizes controller backlash acceleration parameter."
        };
      case 'straightness':
        return {
          title: "Horizontal & Vertical Slideway Straightness Vector",
          xAxisLabel: "Guideway Length (0 to 2000 mm)",
          yAxisLabel: "Pitch & Yaw Straightness (µm)",
          rawError: "Slideway Bow: 22.0 µm",
          compensatedError: "Geometric Alignment: 1.2 µm",
          points: [0, 5.0, 12.0, 19.5, 22.0, 18.0, 11.0, 4.0],
          compPoints: [0, 0.4, 0.8, 1.2, 1.0, 0.7, 0.3, 0.0],
          notes: "Direct measurement of guideway pitch, yaw, and lateral bow using Renishaw straightness optics."
        };
      case 'squareness':
        return {
          title: "Orthogonality & Squareness Error Analysis (X-Y / Y-Z)",
          xAxisLabel: "Perpendicular Arc Sweep (90° Reference)",
          yAxisLabel: "Angular Squareness Deviation (arcsec)",
          rawError: "Squareness Error: 18.5 arcsec",
          compensatedError: "Squareness: 0.8 arcsec",
          points: [0, 6.0, 12.5, 18.5, 15.0, 10.0, 4.0],
          compPoints: [0, 0.2, 0.5, 0.8, 0.6, 0.3, 0.1],
          notes: "Renishaw optical square & QC20-W ballbar orthogonality testing to guarantee true 90.000° machining."
        };
      default:
        return {
          title: "Machine Tool Dynamic Contouring & Health Score",
          xAxisLabel: "Diagnostic Vector Cycle",
          yAxisLabel: "Kinematic Health Index (%)",
          rawError: "Performance: 72% (Degraded)",
          compensatedError: "Performance: 99.4% (Certified)",
          points: [50, 65, 72, 70, 68, 72, 60],
          compPoints: [98, 99, 99.4, 99.2, 99.5, 99.4, 99.0],
          notes: "Full kinematic audit, controller pitch matrix generation, and ISO 9001 compliance certification."
        };
    }
  };

  const sim = getSimData(selectedId);

  return (
    <section id="capabilities" className="py-24 bg-[#07080c] relative overflow-hidden">
      {/* Precision Grid Lines */}
      <div className="absolute inset-0 bg-precision-grid opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
            <span>COMPREHENSIVE METROLOGY CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            PRECISION AT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              EVERY AXIS.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Select any metrology capability to inspect our live measurement methodology, ISO standard adherence, and laser error compensation algorithm.
          </p>
        </div>

        {/* Interactive Dual-Panel Metrology Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Capability Selector Modules (List) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400 pb-2 border-b border-white/10">
              <span>METROLOGY MODULES (7)</span>
              <span>SELECT TO SIMULATE</span>
            </div>

            <div className="space-y-2">
              {CAPABILITIES.map((item) => {
                const isSelected = item.id === selectedId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#171c28] to-[#121622] border-[#ff6b00] shadow-lg shadow-[#ff6b00]/10 text-white'
                        : 'bg-[#0c0f16]/80 hover:bg-[#121622] border-white/5 hover:border-white/15 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 pr-2">
                      <div className={`p-2 rounded-lg transition-colors ${
                        isSelected ? 'bg-[#ff6b00] text-black' : 'bg-white/5 text-slate-400'
                      }`}>
                        {item.id === 'static-pos' && <Target className="w-4 h-4" />}
                        {item.id === 'linear-disp' && <Compass className="w-4 h-4" />}
                        {item.id === 'backlash-reversal' && <Activity className="w-4 h-4" />}
                        {item.id === 'straightness' && <Sliders className="w-4 h-4" />}
                        {item.id === 'squareness' && <Maximize className="w-4 h-4" />}
                        {item.id === 'performance-acceptance' && <ShieldCheck className="w-4 h-4" />}
                        {item.id === 'preventive-maintenance' && <Wrench className="w-4 h-4" />}
                      </div>

                      <div>
                        <h3 className={`text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-mono-tech text-slate-400 block mt-0.5">
                          {item.standard}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isSelected ? (
                        <div className="flex items-center gap-1 text-[11px] font-mono-tech text-[#ff6b00]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-ping"></span>
                          <span>ACTIVE</span>
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Real-time Metrology Oscilloscope & Visualization HUD */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0b0e15] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black relative overflow-hidden">
              
              {/* HUD Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff6b00]"></span>
                    <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider">
                      LIVE METROLOGY OSCILLOSCOPE
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {currentCapability.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono-tech text-slate-300">
                    TARGET: {currentCapability.accuracy}
                  </div>
                </div>
              </div>

              {/* Graphic Oscilloscope Canvas Simulation */}
              <div className="rounded-xl bg-[#06070a] border border-white/10 p-5 relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 mb-3">
                  <span>{sim.title}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-0.5 bg-red-400"></span>
                      <span className="text-red-400">RAW ERROR</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-0.5 bg-[#ff6b00]"></span>
                      <span className="text-[#ff6b00]">CALIBRATED</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Chart Graph View */}
                <div className="relative h-44 w-full flex items-end justify-between px-2 pt-6 pb-2 border-b border-l border-white/15 bg-precision-grid-dense">
                  
                  {/* Zero-line */}
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20 border-dashed"></div>
                  
                  {/* Before Compensation Bars (Red drift) */}
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    {sim.points.map((val, idx) => (
                      <div key={idx} className="flex flex-col items-center group">
                        <div 
                          className="w-1.5 bg-red-500/60 rounded-t-sm transition-all duration-500" 
                          style={{ height: `${Math.min(val * 4 + 10, 110)}px` }}
                        ></div>
                        <span className="text-[8px] font-mono-tech text-slate-500 mt-1">{idx * 100}</span>
                      </div>
                    ))}
                  </div>

                  {/* After Compensation Overlay Line (Golden Laser Precision Line) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none p-4 overflow-visible">
                    <polyline
                      fill="none"
                      stroke="#ff6b00"
                      strokeWidth="2.5"
                      strokeDasharray="1000"
                      strokeDashoffset="0"
                      className="drop-shadow-[0_0_8px_#ff6b00]"
                      points={sim.compPoints.map((v, i) => `${(i / (sim.compPoints.length - 1)) * 92 + 4}%, ${50 - v * 15}%`).join(' ')}
                    />
                    {sim.compPoints.map((v, i) => (
                      <circle
                        key={i}
                        cx={`${(i / (sim.compPoints.length - 1)) * 92 + 4}%`}
                        cy={`${50 - v * 15}%`}
                        r="3.5"
                        fill="#ffffff"
                        stroke="#ff6b00"
                        strokeWidth="1.5"
                      />
                    ))}
                  </svg>
                </div>

                {/* Graph Axis Info */}
                <div className="flex items-center justify-between text-[9px] font-mono-tech text-slate-500 mt-2">
                  <span>{sim.xAxisLabel}</span>
                  <span>{sim.yAxisLabel}</span>
                </div>
              </div>

              {/* Error Deviation Comparison Cards */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/20">
                  <span className="text-[10px] font-mono-tech text-red-400 block uppercase">Uncompensated Error</span>
                  <span className="text-base font-bold font-mono-tech text-red-300 mt-0.5 block">{sim.rawError}</span>
                  <span className="text-[10px] text-slate-400">Causes part scrap & dimensional drift</span>
                </div>

                <div className="p-3 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/30">
                  <span className="text-[10px] font-mono-tech text-[#ff6b00] block uppercase">CAL Laser Compensated</span>
                  <span className="text-base font-bold font-mono-tech text-emerald-400 mt-0.5 block">{sim.compensatedError}</span>
                  <span className="text-[10px] text-slate-300">Restored to OEM theoretical precision</span>
                </div>
              </div>

              {/* Technical Description & Benefits */}
              <div className="mt-5 space-y-3 pt-4 border-t border-white/10 text-left">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentCapability.desc}
                </p>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 font-medium">
                    <strong className="text-white">Direct Production Benefit:</strong> {currentCapability.benefit}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono-tech text-slate-400">
                  STANDARDS: {currentCapability.standard}
                </span>

                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2 rounded-xl bg-[#ff6b00] hover:bg-[#e65100] text-black font-mono-tech text-xs font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>CALIBRATE THIS AXIS</span>
                  <CornerDownRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
