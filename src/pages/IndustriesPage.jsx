import React, { useState } from 'react';
import { 
  Plane, 
  Shield, 
  Zap, 
  Cog, 
  HeartPulse, 
  Car, 
  CheckCircle2, 
  Crosshair, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { INDUSTRIES } from '../data/metrologyData';
import Industries from '../components/Industries';

export default function IndustriesPage({ onOpenBooking }) {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0]);

  const industryProfiles = [
    {
      id: "aerospace",
      title: "Aerospace Manufacturing",
      compliance: "AS9100 / ISO 230-2",
      tolerances: "< 0.005 mm (5 microns)",
      challenges: "Thin-walled aero structures, titanium wing spars, and 5-axis turbine blisk machining requiring continuous multi-axis synchronized precision without thermal deviation.",
      calRole: "Renishaw XL-80 multi-axis volumetric linear calibration and XR20-W 5-axis rotary table certification to eliminate toolpath distortion in flight-critical parts."
    },
    {
      id: "defence",
      title: "Defence & Strategic Tooling",
      compliance: "Mil-Std / ISO 9001",
      tolerances: "< 0.003 mm (3 microns)",
      challenges: "Missile guidance housings, armored turret prismatic machining, and radar antenna mountings requiring absolute geometrical squareness and zero backlash.",
      calRole: "Orthogonal squareness testing and QC20-W dynamic circularity interpolation diagnostics under high feed rates."
    },
    {
      id: "power",
      title: "Power & Energy Generation",
      compliance: "ISO 230-1 / ISO 9001",
      tolerances: "< 0.010 mm",
      challenges: "Massive gas and steam turbine casings, rotor generator shafts, and nuclear valve bodies machined over long axis travels up to 20 meters.",
      calRole: "Long-range Renishaw XL-80 laser interferometry with XC-80 environmental sensor compensation for massive shop-floor thermal variations."
    },
    {
      id: "heavy-engg",
      title: "Heavy Engineering & Gantry Mills",
      compliance: "ISO 230-1 / VDI 3441",
      tolerances: "< 0.015 mm / 10m",
      challenges: "Earthmoving equipment chassis, diesel engine blocks, and large gantry machining centres subject to guideway wear and foundation settling.",
      calRole: "Straightness, pitch, and yaw optical guideway inspection combined with controller pitch error table compensation."
    },
    {
      id: "medical",
      title: "Medical & Orthopedic Implants",
      compliance: "ISO 13485 Aligned",
      tolerances: "< 0.002 mm (2 microns)",
      challenges: "Micro-machining titanium orthopedic bone plates, hip joint spheres, and surgical instruments requiring ultra-fine surface finishes and sub-micron repeatability.",
      calRole: "High-resolution servo loop gain optimization, micro-backlash elimination, and circularity verification."
    },
    {
      id: "automotive",
      title: "Automotive High-Volume Tooling",
      compliance: "IATF 16949 / ISO 9001",
      tolerances: "< 0.008 mm",
      challenges: "High-speed CNC transfer lines, cylinder block boring mills, and transmission gear tooling where cycle time and Cp/Cpk process capability are critical.",
      calRole: "Rapid 15-minute QC20-W ballbar health checks for periodic TPM and acceptance testing of new machine lines."
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
            <span>CRITICAL SECTOR APPLICATION SPECTRUM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            PRECISION FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              CRITICAL INDUSTRIES.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            From flight-critical aerospace structures to high-volume automotive powertrain lines, CAL TECHNOLOGIES provides precision metrology and laser calibration tailored to strict sector requirements.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>REQUEST SECTOR-SPECIFIC AUDIT</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#ff6b00]" />
              <span>STRICT TOLERANCES DOWN TO SUB-MICRON RESOLUTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Horizontal Industries Showcase */}
      <Industries onOpenBooking={onOpenBooking} />

      {/* Deep Sector Profiles Grid */}
      <section className="py-20 bg-[#080a0f] border-t border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              SECTOR METROLOGY PROFILES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Detailed Industrial Standards & Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryProfiles.map((prof, idx) => (
              <div
                key={prof.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/40 transition-all space-y-4 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech text-[#ff6b00] font-bold">
                      SECTOR 0{idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-slate-300">
                      {prof.compliance}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {prof.title}
                  </h3>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono-tech text-xs space-y-1">
                    <span className="text-slate-400 block">Target Tolerance:</span>
                    <span className="text-emerald-400 font-bold text-sm block">{prof.tolerances}</span>
                  </div>

                  <div className="space-y-2 pt-2 text-xs sm:text-sm">
                    <div>
                      <strong className="text-slate-200 block mb-0.5">Manufacturing Challenges:</strong>
                      <p className="text-slate-400 font-light leading-relaxed">{prof.challenges}</p>
                    </div>

                    <div className="pt-2">
                      <strong className="text-[#ff6b00] block mb-0.5">CAL Calibration Intervention:</strong>
                      <p className="text-slate-300 font-light leading-relaxed">{prof.calRole}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                  <span>METROLOGY QUALIFIED</span>
                  <button
                    onClick={onOpenBooking}
                    className="text-[#ff6b00] hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <span>SCHEDULE AUDIT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
