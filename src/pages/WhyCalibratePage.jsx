import React from 'react';
import { 
  Factory, 
  Wrench, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight,
  ArrowRight,
  Crosshair,
  FileCheck2
} from 'lucide-react';
import { WORKFLOW_STEPS, PRODUCTION_BENEFITS, MAINTENANCE_BENEFITS } from '../data/metrologyData';
import WhyCalibrate from '../components/WhyCalibrate';
import ToleranceCalculator from '../components/ToleranceCalculator';

export default function WhyCalibratePage({ onOpenBooking }) {
  const problemSolutionMatrix = [
    {
      problem: "Expensive trial-and-error part cutting tests to verify machine tolerances before production runs.",
      solution: "Rapid laser interferometry and ballbar circularity diagnostic providing instant dimensional truth without destroying workpiece material.",
      impact: "Eliminates scrap material and saves thousands of machine setup hours."
    },
    {
      problem: "Unidentified mechanical ballscrew backlash causing dimensional step-marks during contouring reversals.",
      solution: "Accurate quantification of reversal lag and direct controller backlash compensation table injection.",
      impact: "Restores smooth circular interpolation and eliminates surface step imperfections."
    },
    {
      problem: "Cumulative linear pitch drift across long axis travel causing rejected out-of-tolerance aerospace/automotive parts.",
      solution: "Multi-point linear pitch error compensation table written directly to Fanuc, Siemens, Heidenhain, or Mitsubishi controllers.",
      impact: "Restores linear accuracy to ±0.001 mm across full axis stroke."
    },
    {
      problem: "Unplanned spindle breakdown and guideway wear leading to catastrophic machine downtime during critical delivery schedules.",
      solution: "Regular scheduled laser calibration and preventive maintenance benchmarking against ISO 230 standards.",
      impact: "Reduces machine downtime from days to minutes through proactive early-stage diagnosis."
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
            <TrendingUp className="w-3.5 h-3.5" />
            <span>BUSINESS & TECHNICAL RATIONALE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            WHY CALIBRATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8c33] to-amber-300">
              YOUR MACHINES?
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            CNC machine tools lose dimensional accuracy over time due to mechanical wear, foundation settling, and thermal expansion. Laser calibration restores OEM baseline precision and protects production throughput.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>REQUEST PREVENTIVE AUDIT</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <FileCheck2 className="w-4 h-4 text-emerald-400" />
              <span>ISO 9001 QUALITY CERTIFICATION READY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Why Calibrate Component Flow */}
      <WhyCalibrate onOpenBooking={onOpenBooking} />

      {/* Problem vs Solution Real-World Matrix */}
      <section className="py-20 bg-[#080a0f] border-t border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              ROOT CAUSE & INTERVENTION ANALYSIS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Real-World Machining Challenges Solved
            </h2>
          </div>

          <div className="space-y-4">
            {problemSolutionMatrix.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/30 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-lg"
              >
                <div className="lg:col-span-4 space-y-2">
                  <span className="text-[10px] font-mono-tech text-red-400 uppercase flex items-center gap-1.5 font-bold">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>UNCHECKED PROBLEM</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-2 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
                  <span className="text-[10px] font-mono-tech text-[#ff6b00] uppercase flex items-center gap-1.5 font-bold">
                    <Crosshair className="w-3.5 h-3.5" />
                    <span>CAL TECHNOLOGIES SOLUTION</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                <div className="lg:col-span-3 p-4 rounded-xl bg-black/40 border border-white/5 font-mono-tech space-y-1">
                  <span className="text-[9px] text-emerald-400 uppercase font-bold block">MEASURABLE IMPACT:</span>
                  <p className="text-xs text-white font-semibold">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tolerance & ROI Simulator */}
      <ToleranceCalculator onOpenBooking={onOpenBooking} />

    </div>
  );
}
