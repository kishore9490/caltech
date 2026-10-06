import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Crosshair, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Building,
  Wrench,
  Clock
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/metrologyData';

export default function ContactTerminal() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    machineType: '3-Axis / 5-Axis VMC',
    controller: 'Fanuc',
    location: 'Bangalore / Karnataka',
    requirement: 'Full Laser & Ballbar Calibration',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080a0f] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Precision Metrology Grid & Glows */}
      <div className="absolute inset-0 bg-precision-grid opacity-25 pointer-events-none"></div>
      <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff6b00]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
            <span>DIRECT ENGINEERING CONSULTATION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            IS YOUR MACHINE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
              TRULY ACCURATE?
            </span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-4 text-sm sm:text-base font-mono-tech text-slate-300">
            <span className="text-white font-bold">Measure it.</span>
            <span className="text-white/30">•</span>
            <span className="text-[#ff6b00] font-bold">Correct it.</span>
            <span className="text-white/30">•</span>
            <span className="text-emerald-400 font-bold">Certify it.</span>
          </div>
        </div>

        {/* Contact Grid: Direct Info Left & Interactive Request Terminal Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Direct Channels & Location Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Phone Hotlines Card */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-white/15 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                    DIRECT ENGINEERING PHONES
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Speak to Calibration Engineers
                  </h3>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                {COMPANY_DETAILS.phones.map((p, idx) => (
                  <a
                    key={idx}
                    href={`tel:${p.number}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-black/40 hover:bg-white/[0.05] border border-white/5 hover:border-[#ff6b00]/40 transition-all font-mono-tech group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                      {p.display}
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-white transition-colors">
                      CLICK TO CALL ➔
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email Channels Card */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-white/15 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                    OFFICIAL CORRESPONDENCE
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Department Inboxes
                  </h3>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                {COMPANY_DETAILS.emails.map((e, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${e.address}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-black/40 hover:bg-white/[0.05] border border-white/5 hover:border-[#ff6b00]/40 transition-all font-mono-tech group"
                  >
                    <div>
                      <span className="text-xs text-slate-400 block">{e.label}</span>
                      <span className="text-xs font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                        {e.address}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 group-hover:text-white transition-colors">
                      EMAIL ➔
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Headquarters & Service Base Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121622] to-[#0a0d14] border border-white/15 text-left space-y-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#ff6b00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
                    HEADQUARTERS & METROLOGY LABS
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    Bengaluru, Karnataka, India
                  </h4>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Rapid on-site deployment across Karnataka, Hyderabad, Chennai, Mumbai, Pune, Delhi, Ahmedabad, Kolkata, and international client plants.
              </p>
            </div>

          </div>

          {/* Right: Interactive Request Calibration Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0c0f16] border border-white/15 p-6 sm:p-10 shadow-2xl relative text-left">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
                  CALIBRATION SERVICE GATEWAY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Request Machine Tool Calibration
                </h3>
              </div>
              <div className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-slate-300">
                RESPONSE: &lt; 4 HOURS
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Calibration Request Received</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our lead calibration engineer will review your machine specifications and contact you shortly.
                </p>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 max-w-md mx-auto text-xs font-mono-tech text-slate-400 space-y-1 text-left">
                  <div>MACHINE: {formData.machineType}</div>
                  <div>CONTROLLER: {formData.controller}</div>
                  <div>LOCATION: {formData.location}</div>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono-tech font-bold uppercase transition-all cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono-tech text-slate-300 uppercase">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono-tech text-slate-300 uppercase">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. HAL / Precision Engg"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono-tech text-slate-300 uppercase">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono-tech text-slate-300 uppercase">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Machine Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono-tech text-slate-300 uppercase">
                      Machine Type
                    </label>
                    <select
                      value={formData.machineType}
                      onChange={(e) => setFormData({ ...formData, machineType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white focus:outline-none"
                    >
                      <option value="3-Axis / 5-Axis VMC">VMC (Vertical Machining)</option>
                      <option value="Horizontal HMC">HMC (Horizontal)</option>
                      <option value="CNC Lathe / Turning">CNC Lathe / Turning</option>
                      <option value="CNC SPM / Transfer">CNC SPM / Special</option>
                      <option value="CNC Grinder / Jig Borer">CNC Grinder / Jig Borer</option>
                      <option value="Gantry Mill / Heavy">Heavy Gantry Mill</option>
                    </select>
                  </div>

                  {/* Controller */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono-tech text-slate-300 uppercase">
                      CNC Controller
                    </label>
                    <select
                      value={formData.controller}
                      onChange={(e) => setFormData({ ...formData, controller: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white focus:outline-none"
                    >
                      <option value="Fanuc">Fanuc (0i / 31i / 32i)</option>
                      <option value="Siemens Sinumerik">Siemens Sinumerik (840D / 828D)</option>
                      <option value="Heidenhain">Heidenhain (TNC)</option>
                      <option value="Mitsubishi">Mitsubishi (M80 / M800)</option>
                      <option value="Mazak / Haas">Mazak / Haas</option>
                      <option value="Other Controller">Other / Custom</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono-tech text-slate-300 uppercase">
                      Plant Location
                    </label>
                    <input
                      type="text"
                      placeholder="City / State / Country"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Calibration Scope */}
                <div className="space-y-1">
                  <label className="text-xs font-mono-tech text-slate-300 uppercase">
                    Calibration Scope
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white focus:outline-none"
                  >
                    <option value="Renishaw XL-80 Linear Calibration">Renishaw XL-80 Linear Pitch Error Calibration</option>
                    <option value="Renishaw QC20-W Circular Ballbar Test">Renishaw QC20-W Circular Ballbar Dynamic Test</option>
                    <option value="Renishaw XR20-W Rotary Axis Calibration">Renishaw XR20-W 4th/5th Rotary Axis Calibration</option>
                    <option value="Full Comprehensive PM & ISO 9001 Certification">Complete Turnkey PM, Error Compensation & ISO 9001 Certification</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1">
                  <label className="text-xs font-mono-tech text-slate-300 uppercase">
                    Machine Serial / Specific Requirements (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Enter machine model, number of axes, observed issues (e.g. circularity deviation, backlash on X-axis)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-white font-mono-tech text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl shadow-[#ff6b00]/30 hover:shadow-[#ff6b00]/50 transition-all active:scale-[0.99] border border-[#ff8c33]/40 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST CALIBRATION</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
