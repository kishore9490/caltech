import React from 'react';
import { 
  Wrench, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/metrologyData';

export default function AboutCompany({ onOpenBooking }) {
  const machineTypes = [
    {
      title: "CNC Machining Centres",
      desc: "3-Axis, 4-Axis & 5-Axis Vertical (VMC) & Horizontal (HMC) Machining Centres.",
      icon: "Layers"
    },
    {
      title: "CNC Lathes & Turning Centres",
      desc: "Single & dual-turret CNC lathes, live-tooling turning centres, and multi-spindle systems.",
      icon: "Cpu"
    },
    {
      title: "CNC Special Purpose Machines (SPMs)",
      desc: "Custom multi-station transfer machines, automated rotary indexing stations, and dedicated tooling cells.",
      icon: "Settings"
    },
    {
      title: "CNC Grinders & High-Precision Tools",
      desc: "Surface grinders, cylindrical grinders, jig borers, and ultra-precision coordinate machines.",
      icon: "Target"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#080a0f] border-t border-b border-white/[0.06] overflow-hidden">
      {/* Background Precision Geometry */}
      <div className="absolute inset-0 bg-precision-grid opacity-20 pointer-events-none"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
            <span>ENGINEERING HERITAGE & MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            MACHINE TOOL EXPERTISE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-amber-300">
              PROVEN ACROSS 5,000+ MACHINES.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 font-light leading-relaxed">
            CAL TECHNOLOGIES is a machine maintenance and laser calibration service provider powered by seasoned machine-tool engineering expertise. We combine cutting-edge laser metrology with deep mechanical and controller know-how to bring machines to their highest theoretical precision.
          </p>
        </div>

        {/* Big Number Feature Box & Engineering Heritage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 5,000+ Hero Stat Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#121622] to-[#0a0d14] border border-white/15 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#ff6b00]/15 rounded-full blur-2xl group-hover:bg-[#ff6b00]/25 transition-all"></div>
            <div className="absolute inset-0 bg-precision-grid-dense opacity-20 pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-widest">
                  // PROVEN TRACK RECORD
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[10px] font-mono-tech text-[#ff6b00]">
                  ALL OVER INDIA
                </span>
              </div>

              {/* Giant Animated Number */}
              <div className="pt-4">
                <div className="text-6xl sm:text-7xl xl:text-8xl font-black font-mono-tech tracking-tight text-white flex items-baseline">
                  5000<span className="text-[#ff6b00]">+</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-slate-200 mt-2">
                  CNC MACHINES CALIBRATED
                </div>
              </div>

              <p className="text-sm text-slate-400 font-light leading-relaxed pt-2">
                From high-precision aerospace 5-axis machining centres to high-speed automotive turning lines, our engineers have calibrated thousands of machines across India and international industrial regions.
              </p>
            </div>

            {/* Bottom Engineering Tag */}
            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-slate-400 relative z-10">
              <span>SERVICE VERIFIED</span>
              <span className="text-[#ff6b00] font-semibold">ISO 230-2 STANDARDS</span>
            </div>
          </div>

          {/* Calibrated Machine Range Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-[1px] bg-[#ff6b00]"></span>
              <span>CALIBRATION SPECTRUM & MACHINE SCOPE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {machineTypes.map((item, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl bg-[#0f121a] hover:bg-[#141824] border border-white/10 hover:border-[#ff6b00]/40 p-6 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                      {idx === 0 && <Layers className="w-5 h-5" />}
                      {idx === 1 && <Cpu className="w-5 h-5" />}
                      {idx === 2 && <Settings className="w-5 h-5" />}
                      {idx === 3 && <Target className="w-5 h-5" />}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-slate-500">
                    <span>STATUS: QUALIFIED</span>
                    <span className="text-slate-300">RENISHAW READY</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Promise Card */}
            <div className="rounded-xl bg-white/[0.02] border border-white/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Smart Working Machine Tools Engineering</h4>
                  <p className="text-xs text-slate-400">Experienced engineers who understand machine dynamics, controller compensation, and physical tooling.</p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="whitespace-nowrap px-4 py-2 rounded-lg bg-white/10 hover:bg-[#ff6b00] text-white hover:text-black font-mono-tech text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>BOOK ASSESSMENT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
