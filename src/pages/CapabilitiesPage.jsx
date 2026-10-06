import React, { useState } from 'react';
import { 
  Target, 
  Compass, 
  Activity, 
  Sliders, 
  Maximize, 
  ShieldCheck, 
  Wrench, 
  FileCheck2, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Cpu, 
  ArrowRight,
  Crosshair,
  Gauge,
  CornerDownRight
} from 'lucide-react';
import { CAPABILITIES } from '../data/metrologyData';
import Capabilities from '../components/Capabilities';
import ToleranceCalculator from '../components/ToleranceCalculator';

export default function CapabilitiesPage({ onOpenBooking }) {
  const [selectedStandard, setSelectedStandard] = useState('iso230-2');

  const standardsComparison = [
    {
      parameter: "Positional Deviation (A)",
      iso: "Calculates total systematic deviation A across full axis travel.",
      vdi: "Measured as Pa (Positional uncertainty) over multiple target runs.",
      asme: "Linear displacement accuracy benchmark."
    },
    {
      parameter: "Repeatability (R)",
      iso: "Unidirectional (R↑, R↓) and bidirectional repeatability (R).",
      vdi: "Ps (Positional spread) with 99.7% confidence interval.",
      asme: "Bidirectional repeatability envelope."
    },
    {
      parameter: "Reversal Error (B)",
      iso: "Direct quantification of mean reversal value B at each target point.",
      vdi: "Mean backlash parameter U.",
      asme: "Lost motion quantification."
    },
    {
      parameter: "Compensation Output",
      iso: "Direct linear pitch error compensation table for CNC controller.",
      vdi: "Linear error vector matrix.",
      asme: "Compensation table generation."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#07080c] min-h-screen text-slate-100">
      
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-precision-grid opacity-25 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#ff6b00]/10 blur-[130px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <Crosshair className="w-3.5 h-3.5" />
            <span>ENGINEERING SPECIFICATION & CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            PRECISION AT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8c33] to-amber-300">
              EVERY AXIS.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            CAL TECHNOLOGIES provides turnkey metrology, laser interferometry, guideway geometry inspection, dynamic servo tuning, and CNC controller pitch error compensation across 3-axis, 4-axis, and 5-axis machine tools.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>BOOK AXIS CALIBRATION</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>TRACEABILITY: NATIONAL & INTERNATIONAL PRIMARY STANDARDS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Oscilloscope & Core Modules */}
      <Capabilities onOpenBooking={onOpenBooking} />

      {/* Deep Technical Breakdown of All Capabilities */}
      <section className="py-20 bg-[#080a0f] border-t border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              EXHAUSTIVE METROLOGY TAXONOMY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              In-Depth Capabilities Architecture
            </h2>
            <p className="text-sm text-slate-300 font-light mt-2">
              Every CNC machine tool has unique mechanical and servo characteristics. We systematically measure, quantify, and correct each source of geometric and dynamic error.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map((cap, index) => (
              <div
                key={cap.id}
                className="p-6 rounded-2xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/40 transition-all space-y-4 flex flex-col justify-between shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech text-[#ff6b00]">
                      CAPABILITY 0{index + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-slate-400">
                      {cap.standard}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {cap.desc}
                  </p>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono-tech text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Certified Accuracy:</span>
                      <span className="text-emerald-400 font-bold">{cap.accuracy}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Primary Benefit:</span>
                      <span className="text-slate-200">{cap.benefit}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                  <span>METHOD: LASER INTERFEROMETRY</span>
                  <button
                    onClick={onOpenBooking}
                    className="text-[#ff6b00] hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <span>CALIBRATE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO 230-2 & Metrology Standards Matrix */}
      <section className="py-20 bg-[#07080c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              COMPLIANCE FRAMEWORKS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              International Metrology Standards
            </h2>
            <p className="text-sm text-slate-300 font-light mt-2">
              Our calibration procedures strictly conform to global ISO, VDI/DGQ, and ASME machine tool testing standards.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-[#0c0f16] border border-white/10 p-6 shadow-2xl">
            <table className="w-full text-left font-mono-tech text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-[#ff6b00]">
                  <th className="pb-4 font-bold uppercase">Parameter</th>
                  <th className="pb-4 font-bold uppercase">ISO 230-2 (Standard)</th>
                  <th className="pb-4 font-bold uppercase">VDI/DGQ 3441</th>
                  <th className="pb-4 font-bold uppercase">ASME B5.54</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {standardsComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 font-bold text-white whitespace-nowrap">{row.parameter}</td>
                    <td className="py-4 pr-4">{row.iso}</td>
                    <td className="py-4 pr-4">{row.vdi}</td>
                    <td className="py-4">{row.asme}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Precision Calculator */}
      <ToleranceCalculator onOpenBooking={onOpenBooking} />

    </div>
  );
}
