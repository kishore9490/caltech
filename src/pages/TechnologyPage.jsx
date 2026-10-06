import React from 'react';
import { 
  Cpu, 
  RotateCw, 
  Layers, 
  CheckCircle2, 
  Crosshair, 
  ChevronRight, 
  ShieldCheck, 
  Activity,
  Sliders,
  Zap,
  ArrowRight
} from 'lucide-react';
import { TECHNOLOGIES } from '../data/metrologyData';
import Technology from '../components/Technology';

export default function TechnologyPage({ onOpenBooking }) {
  const opticsList = [
    {
      name: "Linear Measurement Optics",
      desc: "Beam splitter and retroreflector kit for high-accuracy linear displacement and positioning error over distances up to 80 meters.",
      accuracy: "±0.5 ppm"
    },
    {
      name: "Angular Pitch & Yaw Optics",
      desc: "Angular interferometer and angular reflector for assessing rotational pitch and yaw tilt errors along CNC linear slideways.",
      accuracy: "±0.5 arcsec"
    },
    {
      name: "Straightness & Flatness Optics",
      desc: "Straightness beam splitter and Wollaston prism for measuring horizontal and vertical guideway straightness and bed sag.",
      accuracy: "±0.5 µm / m"
    },
    {
      name: "Optical Square (90° Reference)",
      desc: "Pentaprism and optical square for verifying orthogonal squareness between X-Y, Y-Z, and X-Z machine planes.",
      accuracy: "±0.5 arcsec"
    },
    {
      name: "XC-80 Environmental Sensor Unit",
      desc: "Real-time atmospheric compensation tracking ambient air temperature, barometric air pressure, relative humidity, and material thermal growth.",
      accuracy: "Real-time sync"
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
            <Cpu className="w-3.5 h-3.5" />
            <span>PRIMARY METROLOGICAL INSTRUMENTATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            MEASUREMENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              WITHOUT COMPROMISE.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            CAL TECHNOLOGIES is equipped with industry-gold-standard Renishaw laser interferometers, circular ballbar systems, and motorized rotary axis calibrators to measure sub-micron linear and angular deviations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>SCHEDULE LASER CALIBRATION</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#ff6b00]" />
              <span>RENISHAW CALIBRATED & TRACEABLE EQUIPMENT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Metrology Tech Experience */}
      <Technology onOpenBooking={onOpenBooking} />

      {/* Deep Dive on Renishaw Optics Suite */}
      <section className="py-20 bg-[#080a0f] border-t border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              OPTICAL ARRAYS & SENSOR KITS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Precision Laser Optics Configurations
            </h2>
            <p className="text-sm text-slate-300 font-light mt-2">
              Our mobile calibration engineers travel on-site with modular optical setups tailored to inspect every dimension of machine tool kinematic motion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opticsList.map((opt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/40 transition-all space-y-4 flex flex-col justify-between shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech text-[#ff6b00]">OPTIC 0{idx + 1}</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono-tech text-emerald-400">
                      {opt.accuracy}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                    {opt.name}
                  </h3>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {opt.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                  <span>DEPLOYED ON-SITE</span>
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Comparison Matrix */}
      <section className="py-20 bg-[#07080c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              SYSTEM SELECTION MATRIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Choosing the Right Metrology System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.id}
                className="p-6 rounded-2xl bg-[#0c0f16] border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono-tech text-[#ff6b00] font-bold block">{tech.badge}</span>
                  <h3 className="text-2xl font-black text-white">{tech.name}</h3>
                  <p className="text-xs font-mono-tech text-slate-400">{tech.category}</p>
                  
                  <div className="space-y-2 pt-2">
                    {tech.capabilities.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#ff6b00] text-white hover:text-black font-mono-tech text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>CALIBRATE WITH THIS SYSTEM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
