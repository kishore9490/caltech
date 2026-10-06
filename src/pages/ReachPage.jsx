import React from 'react';
import { 
  MapPin, 
  Globe, 
  Crosshair, 
  Radio, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck,
  ArrowRight
} from 'lucide-react';
import { SERVICE_LOCATIONS } from '../data/metrologyData';
import GlobalReach from '../components/GlobalReach';

export default function ReachPage({ onOpenBooking }) {
  return (
    <div className="pt-28 pb-20 bg-[#07080c] min-h-screen text-slate-100">
      
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-precision-grid opacity-25 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#ff6b00]/10 blur-[130px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <Radio className="w-3.5 h-3.5" />
            <span>METROLOGY LOGISTICS & SERVICE NETWORK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            NATIONWIDE REACH. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              GLOBAL ASSISTANCE.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            Headquartered in Bangalore, Karnataka, CAL TECHNOLOGIES provides on-site mobile laser calibration services across major industrial corridors in India, as well as project-based international field assistance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>REQUEST SERVICE IN YOUR CITY</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <Truck className="w-4 h-4 text-[#ff6b00]" />
              <span>RAPID ON-SITE MOBILE CALIBRATION TEAMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Global Reach Component */}
      <GlobalReach onOpenBooking={onOpenBooking} />

      {/* Detailed City & Country Profiles */}
      <section className="py-20 bg-[#080a0f] border-t border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              SERVICE HUBS & DESTINATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Domestic Industrial Hubs & Foreign Coverage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_LOCATIONS.india.map((hub) => (
              <div
                key={hub.city}
                className="p-5 rounded-xl bg-[#0c0f16] border border-white/10 hover:border-[#ff6b00]/40 transition-all space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech text-[#ff6b00] font-bold">INDIA</span>
                    {hub.isHQ && <span className="px-2 py-0.5 rounded bg-[#ff6b00] text-black font-mono-tech text-[9px] font-bold">HQ BASE</span>}
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{hub.city}</h3>
                  <span className="text-xs text-slate-400 font-mono-tech block">{hub.state}</span>
                  <p className="text-xs text-slate-300 font-light mt-2">{hub.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                  <span>ACTIVE ROUTE</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                </div>
              </div>
            ))}

            {SERVICE_LOCATIONS.international.map((f) => (
              <div
                key={f.country}
                className="p-5 rounded-xl bg-gradient-to-br from-[#161c28] to-[#0c0f16] border border-[#ff6b00]/30 hover:border-[#ff6b00] transition-all space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech text-emerald-400 font-bold">INTERNATIONAL</span>
                    <Globe className="w-3.5 h-3.5 text-[#ff6b00]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{f.country}</h3>
                  <span className="text-xs text-slate-400 font-mono-tech block">{f.region}</span>
                  <p className="text-xs text-slate-300 font-light mt-2">{f.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                  <span>FIELD ASSISTANCE</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
