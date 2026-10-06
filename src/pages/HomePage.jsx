import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Cpu, 
  Layers, 
  Building2, 
  ShieldCheck, 
  Activity, 
  Target, 
  CheckCircle2, 
  TrendingUp, 
  Compass, 
  Wrench, 
  Phone, 
  Mail,
  Globe
} from 'lucide-react';
import Hero from '../components/Hero';
import ToleranceCalculator from '../components/ToleranceCalculator';
import { CUSTOMERS } from '../data/metrologyData';

export default function HomePage({ onOpenBooking }) {
  const previewCapabilities = [
    {
      title: "Static Positioning & Linear Displacement",
      desc: "Sub-micron evaluation and controller pitch error compensation across full axis travel.",
      standard: "ISO 230-2"
    },
    {
      title: "Circularity & Backlash Interpolation",
      desc: "Rapid dynamic diagnostic of reversal spikes, lost motion, and servo loop gains.",
      standard: "ISO 230-4"
    },
    {
      title: "Straightness & Orthogonal Squareness",
      desc: "Guideway pitch/yaw alignment and 90.000° perpendicularity verification.",
      standard: "ISO 230-1"
    },
    {
      title: "Controller Compensation & Certification",
      desc: "Direct pitch error file generation for Fanuc, Siemens, Heidenhain, and Mitsubishi.",
      standard: "ISO 9001"
    }
  ];

  const previewTech = [
    {
      id: "xl80",
      name: "Renishaw XL-80",
      role: "Laser Interferometer",
      accuracy: "±0.5 ppm certified",
      desc: "High-performance linear & angular measurement for CNC machines and CMMs."
    },
    {
      id: "qc20",
      name: "Renishaw QC20-W",
      role: "Wireless Ballbar",
      accuracy: "0.1 µm resolution",
      desc: "Rapid circularity interpolation diagnostic for turning centres and VMCs."
    },
    {
      id: "xr20",
      name: "Renishaw XR20-W",
      role: "Rotary Axis Calibrator",
      accuracy: "±1 arcsecond precision",
      desc: "Vertical & horizontal rotary axis calibration with automatic alignment compensation."
    }
  ];

  return (
    <div className="bg-[#07080c] min-h-screen text-slate-100">
      
      {/* 1. Cinematic Hero Section with Live Calibration Simulator */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Executive Overview & 5,000+ Proven Track Record Gateway */}
      <section className="py-20 bg-[#090c12] border-t border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 bg-precision-grid opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
                <span>ENGINEERING EXCELLENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                Machine Tool Expertise. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-amber-300">
                  Precision Engineering Heritage.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                CAL TECHNOLOGIES is a machine maintenance and laser calibration service provider powered by experienced machine-tool engineering expertise. We restore CNC machine tools to their highest theoretical accuracy across machining centres, CNC lathes, SPMs, and grinders.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech font-bold uppercase tracking-wider text-[#ff6b00] hover:text-white transition-colors"
                >
                  <span>LEARN MORE ABOUT OUR COMPANY</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 5,000+ Big Number Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0f131d] border border-white/15 relative shadow-xl">
              <span className="text-[10px] font-mono-tech text-[#ff6b00] uppercase tracking-widest block">
                // PROVEN BENCHMARK
              </span>
              <div className="text-5xl sm:text-6xl font-black font-mono-tech text-white mt-2">
                5,000<span className="text-[#ff6b00]">+</span>
              </div>
              <div className="text-lg font-bold uppercase tracking-wider text-slate-200 mt-1">
                CNC MACHINES CALIBRATED
              </div>
              <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">
                Serving aerospace, defence, automotive, power, and heavy manufacturing leaders across India & internationally.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-slate-400">
                <Link to="/reach" className="text-slate-300 hover:text-[#ff6b00] flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>View Global Reach</span>
                </Link>
                <Link to="/customers" className="text-slate-300 hover:text-[#ff6b00] flex items-center gap-1">
                  <span>View Clients</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Capabilities Gateway */}
      <section className="py-20 bg-[#07080c] relative text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
                METROLOGICAL SCOPE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Precision At Every Axis
              </h2>
            </div>
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-[#ff6b00] text-white hover:text-black font-mono-tech text-xs font-bold uppercase transition-all border border-white/10"
            >
              <span>VIEW ALL 10 CAPABILITIES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {previewCapabilities.map((c, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/40 transition-all space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono-tech text-[#ff6b00] block">{c.standard}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#ff6b00] transition-colors">{c.title}</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{c.desc}</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] font-mono-tech text-slate-500">
                  <span>METROLOGY QUALIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Flagship Renishaw Technology Gateway */}
      <section className="py-20 bg-[#090b10] border-t border-b border-white/[0.08] relative text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
                FLAGSHIP INSTRUMENTATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Measurement Without Compromise
              </h2>
            </div>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-[#ff6b00] text-white hover:text-black font-mono-tech text-xs font-bold uppercase transition-all border border-white/10"
            >
              <span>EXPLORE INSTRUMENT SPECS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewTech.map((tech) => (
              <div
                key={tech.id}
                className="p-6 rounded-2xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/40 transition-all space-y-4 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono-tech text-[#ff6b00] font-bold">{tech.role}</span>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#ff6b00] transition-colors">{tech.name}</h3>
                  <div className="p-2 rounded bg-black/40 text-xs font-mono-tech text-emerald-400 font-bold">
                    {tech.accuracy}
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">{tech.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    to="/technology"
                    className="text-xs font-mono-tech text-slate-300 group-hover:text-[#ff6b00] flex items-center gap-1 font-semibold"
                  >
                    <span>Inspect Optics & Diagrams</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Calibrate Snapshot */}
      <section className="py-20 bg-[#07080c] relative text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#121622] via-[#0b0e15] to-[#07090e] border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
                WHY CALIBRATE?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Eliminate Scrap. Maximize Feed Rates.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Calibration eliminates expensive part-cutting tests, reduces unplanned machine downtime, and injects digital error compensation directly into CNC controllers.
              </p>
              <div className="pt-2">
                <Link
                  to="/why-calibrate"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff6b00] hover:bg-[#e65100] text-black font-mono-tech text-xs font-bold uppercase transition-all"
                >
                  <span>SEE THE 5-STAGE LIFECYCLE & ROI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full lg:w-auto font-mono-tech text-xs">
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-slate-400 block">Part-Cutting Tests</span>
                <span className="text-emerald-400 font-bold text-sm">ELIMINATED</span>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-slate-400 block">Diagnosis Time</span>
                <span className="text-[#ff6b00] font-bold text-sm">MINUTES</span>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-slate-400 block">Accuracy Drift</span>
                <span className="text-white font-bold text-sm">±0.001 mm</span>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-slate-400 block">Audit Status</span>
                <span className="text-white font-bold text-sm">ISO 9001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Precision & ROI Simulator */}
      <ToleranceCalculator onOpenBooking={onOpenBooking} />

      {/* 7. Industry Sectors & Esteemed Clients Gateway */}
      <section className="py-20 bg-[#080a0f] border-t border-b border-white/[0.08] relative text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
                MISSION-CRITICAL SECTORS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                Trusted Across Strategic Industries
              </h2>
            </div>
            <div className="flex gap-3">
              <Link
                to="/industries"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono-tech font-bold uppercase transition-all border border-white/10 text-slate-300"
              >
                Industries Page ➔
              </Link>
              <Link
                to="/customers"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono-tech font-bold uppercase transition-all border border-white/10 text-slate-300"
              >
                Clients Directory ➔
              </Link>
            </div>
          </div>

          {/* Client Logos Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {CUSTOMERS.slice(0, 6).map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#0c0f16] border border-white/10 text-center">
                <span className="text-sm font-bold text-white block">{c.name}</span>
                <span className="text-[10px] text-slate-400 font-mono-tech mt-1 block truncate">{c.sector}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Bottom Direct Contact CTA */}
      <section className="py-20 bg-[#07080c] relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00]">
            <Target className="w-3.5 h-3.5" />
            <span>PRECISION ENGINEERING CONSULTATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            IS YOUR MACHINE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              TRULY ACCURATE?
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 text-sm font-mono-tech text-slate-300">
            <span className="text-white font-bold">Measure it.</span>
            <span className="text-white/30">•</span>
            <span className="text-[#ff6b00] font-bold">Correct it.</span>
            <span className="text-white/30">•</span>
            <span className="text-emerald-400 font-bold">Certify it.</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#ff6b00]/30 hover:shadow-[#ff6b00]/50 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>REQUEST CALIBRATION</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-tech text-xs font-bold uppercase transition-all text-center"
            >
              VIEW CONTACT DETAILS & FAQ
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
