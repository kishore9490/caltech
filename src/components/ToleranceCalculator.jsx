import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  Sliders, 
  ArrowRight,
  Zap,
  Cpu
} from 'lucide-react';

export default function ToleranceCalculator({ onOpenBooking }) {
  const [machineType, setMachineType] = useState('3-Axis VMC');
  const [axisTravel, setAxisTravel] = useState(800); // mm
  const [currentError, setCurrentError] = useState(25); // µm
  const [monthlyParts, setMonthlyParts] = useState(2500);

  // Derived engineering metrics
  const targetTolerance = 1.0; // µm with Renishaw XL-80
  const errorReductionPercent = Math.round(((currentError - targetTolerance) / currentError) * 100);
  const estimatedScrapReductionPercent = Math.min(Math.round((currentError / 30) * 85), 95);
  const throughputGainPercent = Math.min(Math.round((currentError / 20) * 18), 35);

  return (
    <section className="py-20 bg-[#07080c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-2xl bg-gradient-to-br from-[#121622] via-[#0b0e15] to-[#07090e] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Input Controls */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-3">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>INTERACTIVE METROLOGY SIMULATOR</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                  CALCULATE YOUR PRECISION GAIN
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light mt-2">
                  Simulate your CNC machine parameters to evaluate laser error compensation impact.
                </p>
              </div>

              {/* Machine Type Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono-tech text-slate-300 uppercase block">
                  Select Machine Category:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['3-Axis VMC', '5-Axis Machining', 'CNC Lathe', 'Horizontal HMC'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setMachineType(type)}
                      className={`p-2 rounded-lg text-xs font-mono-tech border transition-all cursor-pointer ${
                        machineType === type
                          ? 'bg-[#ff6b00] text-black font-bold border-[#ff6b00]'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                {/* Current Estimated Error */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono-tech text-slate-300">
                    <span>Current Uncompensated Drift:</span>
                    <span className="text-[#ff6b00] font-bold">±{currentError} µm</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="1"
                    value={currentError}
                    onChange={(e) => setCurrentError(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff6b00]"
                  />
                  <div className="flex justify-between text-[10px] font-mono-tech text-slate-500">
                    <span>5 µm (Mild)</span>
                    <span>25 µm (Typical Wear)</span>
                    <span>50 µm (Heavy Deviation)</span>
                  </div>
                </div>

                {/* Axis Stroke Length */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono-tech text-slate-300">
                    <span>Axis Travel Length:</span>
                    <span className="text-white font-bold">{axisTravel} mm</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="3000"
                    step="100"
                    value={axisTravel}
                    onChange={(e) => setAxisTravel(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff6b00]"
                  />
                </div>
              </div>
            </div>

            {/* Right: Calculated Metrology Yield */}
            <div className="lg:col-span-6 rounded-xl bg-black/60 border border-white/10 p-6 sm:p-8 space-y-6 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono-tech">
                <span className="text-[#ff6b00] font-bold">PROJECTED CALIBRATION OUTCOME</span>
                <span className="text-slate-400">{machineType}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0f141f] border border-white/10">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Error Elimination</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono-tech text-emerald-400 mt-1 block">
                    {errorReductionPercent}%
                  </span>
                  <span className="text-[10px] text-slate-400">Down to ±0.001 mm</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0f141f] border border-white/10">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Scrap Cost Avoidance</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono-tech text-[#ff6b00] mt-1 block">
                    ~{estimatedScrapReductionPercent}%
                  </span>
                  <span className="text-[10px] text-slate-400">Part test cutting eliminated</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono-tech text-slate-300">
                <div className="flex justify-between">
                  <span>Controller Compensation:</span>
                  <span className="text-emerald-400 font-bold">Pitch Table Generated</span>
                </div>
                <div className="flex justify-between">
                  <span>Throughput Boost:</span>
                  <span className="text-white font-bold">+{throughputGainPercent}% Feed Rate Capacity</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Readiness:</span>
                  <span className="text-white font-bold">ISO 9001 Certified Record</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-[#ff6b00]/30 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>REQUEST CALIBRATION FOR THIS MACHINE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
