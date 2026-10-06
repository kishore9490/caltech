import React from 'react';
import { ShieldCheck, Award, Building2, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { CUSTOMERS } from '../data/metrologyData';
import Customers from '../components/Customers';

export default function CustomersPage({ onOpenBooking }) {
  return (
    <div className="pt-28 pb-20 bg-[#07080c] min-h-screen text-slate-100">
      
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-precision-grid opacity-25 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#ff6b00]/10 blur-[130px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>ENTERPRISE CLIENTS & ESTEEMED PARTNERS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            TRUSTED BY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8c33] to-amber-300">
              INDUSTRY LEADERS.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            Our laser calibration and machine tool maintenance services are trusted by the most respected aerospace, defence, automotive, and heavy engineering corporations in India.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>PARTNER WITH CAL TECHNOLOGIES</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>5,000+ CNC MACHINES SERVED ACROSS INDUSTRY SECTORS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Customers Grid Component */}
      <Customers onOpenBooking={onOpenBooking} />

      {/* Detailed Customer Relationship Ethos */}
      <section className="py-20 bg-[#080a0f] border-t border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0c0f16] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center font-bold font-mono-tech">01</div>
              <h3 className="text-lg font-bold text-white">Tier-1 Metrology Verification</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                We satisfy rigorous vendor audit requirements, supplying complete laser documentation, pitch compensation files, and ISO 230-2 calibration certificates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c0f16] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center font-bold font-mono-tech">02</div>
              <h3 className="text-lg font-bold text-white">Zero Production Interruption</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Calibration cycles are structured to fit seamlessly into scheduled maintenance windows, minimizing plant downtime and ensuring rapid recommissioning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c0f16] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center font-bold font-mono-tech">03</div>
              <h3 className="text-lg font-bold text-white">Direct Engineering Synergy</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Our machine-tool engineering specialists collaborate directly with client maintenance, tooling, and quality control departments for lasting machine performance.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
