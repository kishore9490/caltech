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
  ArrowRight,
  Eye,
  Camera
} from 'lucide-react';
import { TECHNOLOGIES } from '../data/metrologyData';
import Technology from '../components/Technology';

export default function TechnologyPage({ onOpenBooking }) {
  const opticsList = [
    {
      name: "Linear Measurement Optics",
      desc: "Beam splitter and retroreflector kit for high-accuracy linear displacement and positioning error over distances up to 80 meters.",
      accuracy: "±0.5 ppm",
      image: "assets/instruments/renishaw-xl80-optics-kit.jpg"
    },
    {
      name: "Angular Pitch & Yaw Optics",
      desc: "Angular interferometer and angular reflector for assessing rotational pitch and yaw tilt errors along CNC linear slideways.",
      accuracy: "±0.5 arcsec",
      image: "assets/instruments/renishaw-xl80-optics-advanced.jpg"
    },
    {
      name: "Straightness & Flatness Optics",
      desc: "Straightness beam splitter and Wollaston prism for measuring horizontal and vertical guideway straightness and bed sag.",
      accuracy: "±0.5 µm / m",
      image: "assets/instruments/renishaw-xl80-main.jpg"
    },
    {
      name: "Optical Square (90° Reference)",
      desc: "Pentaprism and optical square for verifying orthogonal squareness between X-Y, Y-Z, and X-Z machine planes.",
      accuracy: "±0.5 arcsec",
      image: "assets/instruments/renishaw-xl80-optics-advanced.jpg"
    },
    {
      name: "XC-80 Environmental Sensor Unit",
      desc: "Real-time atmospheric compensation tracking ambient air temperature, barometric air pressure, relative humidity, and material thermal growth.",
      accuracy: "Real-time sync",
      image: "assets/instruments/renishaw-xc80-compensator.jpg"
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

      {/* Main Interactive Metrology Tech Experience with Tool Images & Galleried Hardware Views */}
      <Technology onOpenBooking={onOpenBooking} />

      {/* Equipment Comparison Matrix with Real Photos */}
      <section className="py-20 bg-[#08090e] border-t border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              SYSTEM SELECTION MATRIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Flagship Metrology Systems In Detail
            </h2>
            <p className="text-sm text-slate-300 font-light mt-2">
              Explore our core calibration instruments, certified under ISO 230-2, ISO 230-4, and CIPM MRA standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.id}
                className="rounded-2xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between overflow-hidden shadow-xl group"
              >
                <div>
                  {/* Real Instrument Photo Header */}
                  <div className="relative aspect-[16/10] w-full bg-[#141824] overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${tech.image}`}
                      alt={`${tech.name} - ${tech.category}`}
                      className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f16] via-transparent to-black/30 pointer-events-none"></div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono-tech text-[#ff6b00]">
                      {tech.badge}
                    </div>

                    <div className="absolute bottom-2 right-3 text-[10px] font-mono-tech text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {tech.specs.accuracy || tech.specs.wavelength}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-white group-hover:text-[#ffaa00] transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-xs font-mono-tech text-slate-400 mt-1">
                        {tech.category}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {tech.desc}
                    </p>
                    
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest block">
                        VERIFIED CAPABILITIES:
                      </span>
                      {tech.capabilities.map((c, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#ff6b00] text-white hover:text-black font-mono-tech text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>CALIBRATE WITH THIS SYSTEM</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive on Renishaw Optics Suite with Images */}
      <section className="py-20 bg-[#07080c] relative">
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
                className="rounded-2xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/40 transition-all flex flex-col justify-between overflow-hidden shadow-lg group"
              >
                <div>
                  {/* Optics Photo Thumbnail */}
                  <div className="relative aspect-[16/9] w-full bg-[#141824] overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${opt.image}`}
                      alt={opt.name}
                      className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f16] via-transparent to-black/20 pointer-events-none"></div>
                    
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono-tech text-[#ff6b00]">
                      OPTIC 0{idx + 1}
                    </div>

                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/10 backdrop-blur-md text-[10px] font-mono-tech text-emerald-400">
                      {opt.accuracy}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                      {opt.name}
                    </h3>

                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                    <span>DEPLOYED ON-SITE</span>
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
