import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  Send,
  Crosshair,
  Building2
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/metrologyData';
import ContactTerminal from '../components/ContactTerminal';

export default function ContactPage() {
  const faqs = [
    {
      q: "How frequently should a CNC machine tool undergo laser calibration?",
      a: "For high-precision aerospace and automotive production, annual calibration is standard. In heavy production environments or after machine relocation, mechanical collisions, or spindle rebuilds, immediate recalibration is strongly advised to re-establish baseline geometric accuracy."
    },
    {
      q: "What machine preparations are needed prior to calibration on-site?",
      a: "The machine tool should be mechanically clean, powered on and cycled through a warm-up routine for 1 to 2 hours to achieve thermal equilibrium. Slideways, encoders, and linear scales should be free of coolant contamination."
    },
    {
      q: "How are error compensation tables uploaded to our CNC controller?",
      a: "Our metrology software generates digital pitch error and backlash compensation files formatted natively for your specific controller (Fanuc, Siemens Sinumerik, Heidenhain, Mitsubishi). Our engineers assist in direct parameter upload and post-calibration verification."
    },
    {
      q: "Do you supply official calibration certificates for ISO 9001 audits?",
      a: "Yes. Every calibration service concludes with a comprehensive, audit-ready Calibration Certificate including environmental correction telemetry, ISO 230-2 statistical deviation curves, and instrument traceability records."
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
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT FIELD ENGINEERING CHANNELS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            IS YOUR MACHINE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8c33] to-amber-300">
              TRULY ACCURATE?
            </span>
          </h1>

          <div className="mt-4 flex items-center gap-4 text-base sm:text-lg font-mono-tech text-slate-300">
            <span className="text-white font-bold">Measure it.</span>
            <span className="text-white/30">•</span>
            <span className="text-[#ff6b00] font-bold">Correct it.</span>
            <span className="text-white/30">•</span>
            <span className="text-emerald-400 font-bold">Certify it.</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Terminal */}
      <ContactTerminal />

      {/* Frequently Asked Calibration Questions */}
      <section className="py-20 bg-[#080a0f] border-t border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block mb-2">
              TECHNICAL FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Frequently Asked Metrology Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0f16] border border-white/10 space-y-3 shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00] shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 leading-relaxed">
                      {faq.a}
                    </p>
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
