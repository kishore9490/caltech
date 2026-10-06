import React from 'react';
import { 
  Wrench, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  ChevronRight,
  Building2,
  Award
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/metrologyData';
import AboutCompany from '../components/AboutCompany';

export default function AboutPage({ onOpenBooking }) {
  const principles = [
    {
      title: "Machine Tool Engineering Heritage",
      desc: "We are a group of experienced, smart-working machine tool engineers. We understand the physical metallurgy, guideway dynamics, and controller architecture of modern CNC machinery.",
      icon: "Wrench"
    },
    {
      title: "Traceable Laser Metrology",
      desc: "All calibration procedures utilize internationally certified Renishaw laser interferometers and circular ballbars, calibrated to national and primary standards.",
      icon: "Target"
    },
    {
      title: "Root-Cause Error Compensation",
      desc: "Rather than merely taking measurements, we diagnose the underlying mechanical, thermal, or servo cause and inject calibrated error compensation tables directly into the CNC controller.",
      icon: "Cpu"
    },
    {
      title: "ISO 9001 Compliance",
      desc: "Every calibration session generates audit-ready certificates, deviation histograms, and repeatability charts required by tier-1 automotive and aerospace quality auditors.",
      icon: "ShieldCheck"
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
            <Building2 className="w-3.5 h-3.5" />
            <span>COMPANY PROFILE & ENGINEERING ETHOS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            ENGINEERING EXPERTISE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8c33] to-amber-300">
              TRUSTED ACROSS INDIA.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            CAL TECHNOLOGIES is a dedicated machine maintenance and laser calibration service provider headquartered in Bangalore, with over 5,000+ CNC machines calibrated across India and foreign facilities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>CONNECT WITH OUR ENGINEERS</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <Award className="w-4 h-4 text-[#ff6b00]" />
              <span>5,000+ MACHINES CALIBRATED IN INDIA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core About Company Component with 5000+ Stat */}
      <AboutCompany onOpenBooking={onOpenBooking} />

      {/* Engineering Principles & Core Philosophy */}
      <section className="py-20 bg-[#080a0f] border-t border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              OUR CORE FOUNDATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              The CAL TECHNOLOGIES Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/40 transition-all space-y-4 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center text-[#ff6b00]">
                    {idx === 0 && <Wrench className="w-6 h-6" />}
                    {idx === 1 && <Target className="w-6 h-6" />}
                    {idx === 2 && <Cpu className="w-6 h-6" />}
                    {idx === 3 && <ShieldCheck className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                  <span>FOUNDATION 0{idx + 1}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
