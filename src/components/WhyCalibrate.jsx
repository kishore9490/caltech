import React, { useState } from 'react';
import { 
  Factory, 
  Wrench, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Sliders,
  DollarSign,
  AlertTriangle
} from 'lucide-react';
import { WORKFLOW_STEPS, PRODUCTION_BENEFITS, MAINTENANCE_BENEFITS } from '../data/metrologyData';

export default function WhyCalibrate({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('production');
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="why-calibrate" className="py-24 bg-[#090b10] relative overflow-hidden border-t border-b border-white/[0.06]">
      {/* Background Subtle Glow & Grid */}
      <div className="absolute inset-0 bg-precision-grid opacity-20 pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff6b00]/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
            <span>WHY CALIBRATE YOUR MACHINES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            FROM MACHINE UNCERTAINTY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              TO CERTIFIED PRECISION.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Eliminate trial-and-error scrap, restore CNC machine health, and unlock maximized feed rates with our certified 5-stage laser calibration lifecycle.
          </p>
        </div>

        {/* 5-Step Cinematic Problem -> Solution Workflow */}
        <div className="mb-20">
          <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400 mb-4 px-1">
            <span>THE CALIBRATION PIPELINE</span>
            <span>STEP 01 ➔ 05</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx + 1;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx + 1)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#181d2a] to-[#0e121a] border-[#ff6b00] shadow-xl shadow-[#ff6b00]/15'
                      : 'bg-[#0c0f16]/90 border-white/10 hover:border-white/20 hover:bg-[#121622]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-2xl font-black font-mono-tech ${
                        isSelected ? 'text-[#ff6b00]' : 'text-slate-500 group-hover:text-slate-300'
                      }`}>
                        {step.step}
                      </span>
                      <span className={`text-[10px] font-mono-tech uppercase px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#ff6b00]/20 text-[#ff6b00] font-bold' : 'bg-white/5 text-slate-400'
                      }`}>
                        {step.label}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-slate-500">
                    <span>STAGE COMPLIANCE</span>
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-[#ff6b00]' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dual Pillar: For Production vs For Maintenance */}
        <div className="rounded-2xl bg-[#0c0f16] border border-white/15 p-6 sm:p-10 shadow-2xl">
          
          {/* Pillar Switcher Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
                BUSINESS & ENGINEERING IMPACT
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Value Across Your Enterprise
              </h3>
            </div>

            <div className="flex items-center p-1 rounded-xl bg-black/50 border border-white/10">
              <button
                onClick={() => setActiveTab('production')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                  activeTab === 'production'
                    ? 'bg-[#ff6b00] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Factory className="w-4 h-4" />
                <span>FOR PRODUCTION</span>
              </button>

              <button
                onClick={() => setActiveTab('maintenance')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                  activeTab === 'maintenance'
                    ? 'bg-[#ff6b00] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>FOR MAINTENANCE</span>
              </button>
            </div>
          </div>

          {/* Pillar Content Details */}
          <div className="pt-8">
            {activeTab === 'production' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-left">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <Factory className="w-5 h-5 text-[#ff6b00]" />
                    <span>Process Control & Maximum Production Throughput</span>
                  </h4>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Calibration gives production heads complete transparency into the true geometric capabilities of each machine tool on the shop floor.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {PRODUCTION_BENEFITS.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#ff6b00]/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Production Impact Metric Card */}
                <div className="lg:col-span-5 rounded-xl bg-gradient-to-br from-[#151a26] to-[#0a0c12] border border-white/10 p-6 space-y-5">
                  <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
                    KEY OUTCOMES (SHOP FLOOR)
                  </span>

                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Part-Cutting Test Costs</span>
                      <span className="text-sm font-bold font-mono-tech text-emerald-400">ELIMINATED</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Throughput Optimization</span>
                      <span className="text-sm font-bold font-mono-tech text-[#ff6b00]">HIGHER FEED RATES</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Job Scheduling</span>
                      <span className="text-sm font-bold font-mono-tech text-white">CAPABILITY MATCHED</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-lg bg-[#ff6b00] hover:bg-[#e65100] text-black font-mono-tech text-xs font-bold uppercase transition-colors text-center cursor-pointer"
                  >
                    SCHEDULE MACHINE CALIBRATION
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-left">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-[#ff6b00]" />
                    <span>Downtime Reduction & Controller Error Compensation</span>
                  </h4>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Maintenance teams can rapidly diagnose mechanical wear versus controller pitch error, drastically cutting troubleshooting hours from days to minutes.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {MAINTENANCE_BENEFITS.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#ff6b00]/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Maintenance Impact Metric Card */}
                <div className="lg:col-span-5 rounded-xl bg-gradient-to-br from-[#151a26] to-[#0a0c12] border border-white/10 p-6 space-y-5">
                  <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
                    MAINTENANCE HIGHLIGHTS
                  </span>

                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Diagnosis Speed</span>
                      <span className="text-sm font-bold font-mono-tech text-emerald-400">MINUTES VS DAYS</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Error Compensation File</span>
                      <span className="text-sm font-bold font-mono-tech text-[#ff6b00]">DIRECT CONTROLLER UPLOAD</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Quality Compliance</span>
                      <span className="text-sm font-bold font-mono-tech text-white">ISO 9001 AUDIT READY</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-lg bg-[#ff6b00] hover:bg-[#e65100] text-black font-mono-tech text-xs font-bold uppercase transition-colors text-center cursor-pointer"
                  >
                    REQUEST PREVENTIVE AUDIT
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
