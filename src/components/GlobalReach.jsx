import React, { useState } from 'react';
import { 
  MapPin, 
  Globe, 
  Crosshair, 
  Navigation, 
  CheckCircle2, 
  Radio, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { SERVICE_LOCATIONS } from '../data/metrologyData';

export default function GlobalReach({ onOpenBooking }) {
  const [selectedCity, setSelectedCity] = useState(SERVICE_LOCATIONS.india[0]);
  const [activeTab, setActiveTab] = useState('india');

  return (
    <section id="reach" className="py-24 bg-[#07080c] relative overflow-hidden">
      {/* Background Precision Geometry */}
      <div className="absolute inset-0 bg-precision-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff6b00]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
            <span>DOMESTIC & INTERNATIONAL COVERAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            NATIONWIDE REACH. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              GLOBAL FIELD ASSISTANCE.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Headquartered in Bangalore with mobile laser metrology teams providing on-site calibration across major Indian industrial hubs and foreign manufacturing facilities.
          </p>
        </div>

        {/* Big 5000+ Typographic Banner with Integrated Scope */}
        <div className="mb-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#121622] via-[#0d1017] to-[#121622] border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-precision-grid-dense opacity-20 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 text-left space-y-2">
              <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-widest block">
                // PAN-INDIA TRACK RECORD
              </span>
              <div className="text-6xl sm:text-7xl xl:text-8xl font-black font-mono-tech text-white tracking-tight">
                5,000<span className="text-[#ff6b00]">+</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-slate-200">
                CNC MACHINES CALIBRATED
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { title: "CNC Machining Centres", desc: "VMCs, HMCs & 5-Axis" },
                { title: "CNC Lathes & Turning", desc: "Live tooling & Multi-axis" },
                { title: "CNC SPMs & Cells", desc: "Custom Transfer Lines" },
                { title: "CNC Grinders", desc: "Jig & Surface Grinding" },
                { title: "Rotary Tables", desc: "4th & 5th Rotary Axes" },
                { title: "CMMs & Custom", desc: "Coordinate Motion Systems" }
              ].map((m, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono-tech">
                  <span className="text-xs font-bold text-white block">{m.title}</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">{m.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Map & Locations Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Precision Radar Map (India & International) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#090b10] border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Map Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono-tech">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#ff6b00] animate-pulse" />
                <span className="text-white font-bold">RADAR METROLOGY GRID</span>
              </div>

              <div className="flex items-center p-1 rounded-lg bg-black/60 border border-white/10">
                <button
                  onClick={() => setActiveTab('india')}
                  className={`px-3 py-1 rounded text-[11px] font-bold uppercase transition-all cursor-pointer ${
                    activeTab === 'india' ? 'bg-[#ff6b00] text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  India Network
                </button>
                <button
                  onClick={() => setActiveTab('international')}
                  className={`px-3 py-1 rounded text-[11px] font-bold uppercase transition-all cursor-pointer ${
                    activeTab === 'international' ? 'bg-[#ff6b00] text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  International
                </button>
              </div>
            </div>

            {/* Simulated Geographic Metrology Map Canvas */}
            <div className="relative h-96 w-full rounded-xl bg-black border border-white/10 overflow-hidden flex items-center justify-center p-4">
              
              {/* Radar Rings & Grids */}
              <div className="absolute inset-0 bg-precision-grid-dense opacity-30 pointer-events-none"></div>
              <div className="w-80 h-80 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border border-white/5 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-white/5"></div>
                </div>
              </div>

              {/* Radar Sweep Animation */}
              <div className="absolute w-80 h-80 rounded-full animate-radar-sweep pointer-events-none overflow-hidden">
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-[#ff6b00]/30 to-transparent origin-bottom-right"></div>
              </div>

              {/* India Network Points Overlay */}
              {activeTab === 'india' ? (
                <div className="absolute inset-0 p-8">
                  {SERVICE_LOCATIONS.india.map((loc) => {
                    const isSelected = selectedCity.city === loc.city;
                    return (
                      <button
                        key={loc.city}
                        onClick={() => setSelectedCity(loc)}
                        className="absolute group transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                        style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                      >
                        <div className="relative flex items-center justify-center">
                          {loc.isHQ && (
                            <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-[#ff6b00] opacity-75"></span>
                          )}
                          <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                            isSelected
                              ? 'bg-[#ff6b00] border-white scale-125 shadow-[0_0_12px_#ff6b00]'
                              : loc.isHQ
                              ? 'bg-[#ff6b00] border-white'
                              : 'bg-white border-[#ff6b00] hover:scale-110'
                          }`}></div>

                          <div className={`absolute left-5 whitespace-nowrap text-[10px] font-mono-tech px-2 py-0.5 rounded transition-all ${
                            isSelected
                              ? 'bg-[#ff6b00] text-black font-bold shadow-md z-20'
                              : 'bg-black/80 text-slate-300 border border-white/10'
                          }`}>
                            {loc.city} {loc.isHQ && '(HQ)'}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* International Coverage Map Cards */
                <div className="absolute inset-0 p-8 grid grid-cols-1 sm:grid-cols-2 gap-3 items-center justify-center">
                  {SERVICE_LOCATIONS.international.map((country) => (
                    <div
                      key={country.country}
                      className="p-3.5 rounded-xl bg-gradient-to-r from-[#171c28] to-[#0f121a] border border-[#ff6b00]/30 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#ff6b00]" />
                        <span className="text-sm font-bold text-white">{country.country}</span>
                      </div>
                      <span className="text-[10px] font-mono-tech text-slate-400 mt-1 block">
                        {country.desc}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Map Status Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono-tech text-slate-400 bg-black/80 p-2 rounded border border-white/10">
                <span>RADAR FREQUENCY: 10.5 GHz</span>
                <span>HQ: BANGALORE (12.9716° N, 77.5946° E)</span>
              </div>
            </div>

            {/* Selected Location Details Strip */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-left">
              <div>
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>{selectedCity.city}, {selectedCity.state}</span>
                </span>
                <span className="text-[11px] text-slate-400 font-light">{selectedCity.desc}</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-4 py-1.5 rounded-lg bg-[#ff6b00] hover:bg-[#e65100] text-black font-mono-tech text-[11px] font-bold uppercase transition-colors cursor-pointer"
              >
                REQUEST SERVICE IN {selectedCity.city.toUpperCase()}
              </button>
            </div>

          </div>

          {/* Right: Service Destinations Checklist */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0b0e15] border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-left">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
                  ALL ASSISTANCE DESTINATIONS
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Service Footprint
                </h3>
              </div>

              {/* India Hubs List */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                  INDIA INDUSTRIAL HUBS:
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-mono-tech">
                  {SERVICE_LOCATIONS.india.map((c) => (
                    <button
                      key={c.city}
                      onClick={() => setSelectedCity(c)}
                      className={`text-left p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                        selectedCity.city === c.city
                          ? 'bg-[#ff6b00]/15 border-[#ff6b00] text-white font-bold'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/15 text-slate-300'
                      }`}
                    >
                      <span>{c.city}</span>
                      {c.isHQ && <span className="text-[8px] bg-[#ff6b00] text-black px-1 rounded">HQ</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Foreign Destinations List */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                  INTERNATIONAL ASSISTANCE:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICE_LOCATIONS.international.map((f) => (
                    <span
                      key={f.country}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-xs font-mono-tech text-slate-300"
                    >
                      {f.country}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Logistics Note */}
            <div className="pt-6 mt-6 border-t border-white/10 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs text-slate-300 leading-relaxed block">
                <strong className="text-white">Rapid Deployment:</strong> Our metrology engineers travel on-site with calibrated Renishaw laser kits, ready for immediate machine alignment.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
