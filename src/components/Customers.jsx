import React from 'react';
import { ShieldCheck, Award, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { CUSTOMERS } from '../data/metrologyData';

export default function Customers({ onOpenBooking }) {
  return (
    <section id="customers" className="py-24 bg-[#08090d] relative overflow-hidden border-t border-b border-white/[0.06]">
      {/* Precision grid & ambient lighting */}
      <div className="absolute inset-0 bg-precision-grid opacity-20 pointer-events-none"></div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
            <span>PROVEN ENTERPRISE TRUST</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            TRUSTED BY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              INDUSTRY LEADERS.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Our laser metrology systems and engineering services are relied upon by India's top aerospace, defense, automotive, and advanced manufacturing giants.
          </p>
        </div>

        {/* Customer Logo / Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {CUSTOMERS.map((cust, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[#0d1017] hover:bg-[#151a26] border border-white/10 hover:border-[#ff6b00]/50 transition-all duration-300 group flex flex-col justify-between text-left shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono-tech text-slate-500 group-hover:text-[#ff6b00] transition-colors">
                    #0{idx + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#ff6b00] transition-colors"></div>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#ff6b00] transition-colors font-sans tracking-wide">
                  {cust.name}
                </h3>

                <p className="text-[11px] text-slate-400 font-light mt-1 line-clamp-1">
                  {cust.subtitle}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5">
                <span className="text-[9px] font-mono-tech text-slate-500 block truncate">
                  {cust.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Commitment Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#121622] via-[#0d1017] to-[#121622] border border-white/15 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                ISO 9001 & ISO 230-2 Audit-Ready Calibration Documentation
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Every calibrated machine tool receives detailed laser interferometry charts, repeatability histograms, and certified tolerance records.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>JOIN OUR CLIENT NETWORK</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
