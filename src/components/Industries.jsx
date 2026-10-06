import React, { useState } from 'react';
import { 
  Plane, 
  Shield, 
  Zap, 
  Cog, 
  HeartPulse, 
  Car, 
  ChevronLeft, 
  ChevronRight, 
  Crosshair, 
  Layers, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { INDUSTRIES } from '../data/metrologyData';

export default function Industries({ onOpenBooking }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const getIndustryIcon = (id) => {
    switch (id) {
      case 'aerospace':
        return <Plane className="w-6 h-6" />;
      case 'defence':
        return <Shield className="w-6 h-6" />;
      case 'power':
        return <Zap className="w-6 h-6" />;
      case 'heavy-engg':
        return <Cog className="w-6 h-6" />;
      case 'medical':
        return <HeartPulse className="w-6 h-6" />;
      case 'automotive':
        return <Car className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-[#08090d] relative overflow-hidden border-t border-b border-white/[0.06]">
      {/* Precision grid & ambient lighting */}
      <div className="absolute inset-0 bg-precision-grid opacity-20 pointer-events-none"></div>
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
              <span>MISSION-CRITICAL SECTORS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
              PRECISION FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
                CRITICAL INDUSTRIES.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Where micron-level deviations mean the difference between mission success and catastrophic failure.
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setActiveIdx((prev) => (prev === 0 ? INDUSTRIES.length - 1 : prev - 1))}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-label="Previous Industry"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono-tech text-slate-400 px-2">
              0{activeIdx + 1} / 0{INDUSTRIES.length}
            </div>
            <button
              onClick={() => setActiveIdx((prev) => (prev === INDUSTRIES.length - 1 ? 0 : prev + 1))}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-label="Next Industry"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Industry Cinematic Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Selected Industry Stage Card */}
          <div className="lg:col-span-8 rounded-2xl bg-gradient-to-br from-[#121622] to-[#0a0d14] border border-white/15 p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Crosshair className="w-64 h-64 text-white" />
            </div>

            <div className="space-y-6 relative z-10 text-left">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00]">
                  {getIndustryIcon(INDUSTRIES[activeIdx].id)}
                </div>
                <div>
                  <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
                    SECTOR 0{activeIdx + 1}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                    {INDUSTRIES[activeIdx].title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-2xl">
                {INDUSTRIES[activeIdx].desc}
              </p>

              {/* Technical Specifications & Applications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono-tech">
                  <span className="text-[10px] text-slate-400 uppercase block">Required Tolerances</span>
                  <span className="text-lg font-bold text-emerald-400 mt-1 block">
                    {INDUSTRIES[activeIdx].tolerances}
                  </span>
                  <span className="text-[10px] text-slate-500">Certified by Renishaw XL-80</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono-tech">
                  <span className="text-[10px] text-slate-400 uppercase block">Key Components</span>
                  <span className="text-xs font-semibold text-slate-200 mt-1 block leading-relaxed">
                    {INDUSTRIES[activeIdx].applications}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <span className="text-xs font-mono-tech text-slate-400">
                COMPLIANCE: ISO 230-2 / AS9100 STANDARDS
              </span>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl bg-[#ff6b00] hover:bg-[#e65100] text-black font-mono-tech text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>REQUEST {INDUSTRIES[activeIdx].title} AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Industry Navigation Grid Right */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-2">
            {INDUSTRIES.map((ind, i) => {
              const isSelected = activeIdx === i;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIdx(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#181e2b] border-[#ff6b00] shadow-md text-white'
                      : 'bg-[#0b0e15] border-white/5 hover:border-white/20 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-tech text-[#ff6b00]">0{i + 1}</span>
                    <span className="text-sm font-bold">{ind.title}</span>
                  </div>

                  <div className="text-[11px] font-mono-tech text-slate-400">
                    {ind.tolerances}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
