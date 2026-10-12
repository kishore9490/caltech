import React, { useState } from 'react';
import { X, Send, CheckCircle2, Crosshair, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/metrologyData';
import { sendWeb3Form } from '../config/formConfig';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    machineType: 'Vertical Machining Centre (VMC)',
    axes: '3-Axis',
    location: '',
    serviceType: 'Renishaw XL-80 Laser Calibration'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendWeb3Form({
        subject: `[EXPEDITED SERVICE BOOKING] ${formData.name} - ${formData.company} (${formData.serviceType})`,
        fromName: `${formData.name} (${formData.company})`,
        data: {
          client_name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          machine_type: formData.machineType,
          axes: formData.axes,
          location: formData.location,
          service_requested: formData.serviceType,
          recipient_inboxes: "Support@caltech.co.in, tejas@caltech.co.in"
        }
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Booking error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0d1017] border border-white/20 p-5 sm:p-8 shadow-2xl text-left">
        
        {/* Ambient glow in modal */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b00]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Calibration Request Dispatched</h3>
            <p className="text-sm text-slate-300">
              Thank you, <strong className="text-white">{formData.name}</strong> from <strong className="text-white">{formData.company}</strong>. Our senior calibration team has received your request for <strong className="text-[#ff6b00]">{formData.serviceType}</strong> and will reach out within 4 hours.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href={`https://wa.me/918722722396?text=${encodeURIComponent(`Hello CAL TECHNOLOGIES, I booked service for ${formData.serviceType} (${formData.machineType}, ${formData.axes}) at ${formData.location} for ${formData.company}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono-tech text-xs font-bold uppercase transition-all flex items-center gap-1.5"
              >
                <span>WhatsApp Follow-up</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono-tech text-xs font-bold uppercase transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#ff6b00] mb-1">
                <Crosshair className="w-3.5 h-3.5" />
                <span>EXPEDITED SERVICE BOOKING</span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                REQUEST MACHINE CALIBRATION
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct dispatch from Bangalore HQ to your manufacturing facility.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono-tech text-slate-300 uppercase block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white placeholder-slate-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-tech text-slate-300 uppercase block mb-1">Company *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. HAL / Bosch"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white placeholder-slate-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono-tech text-slate-300 uppercase block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white placeholder-slate-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-tech text-slate-300 uppercase block mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="ramesh@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white placeholder-slate-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono-tech text-slate-300 uppercase block mb-1">Machine Type</label>
                  <select
                    value={formData.machineType}
                    onChange={(e) => setFormData({ ...formData, machineType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white focus:outline-none"
                  >
                    <option value="Vertical Machining Centre (VMC)">Vertical Machining Centre (VMC)</option>
                    <option value="Horizontal Machining Centre (HMC)">Horizontal Machining Centre (HMC)</option>
                    <option value="CNC Lathe / Turning Centre">CNC Lathe / Turning Centre</option>
                    <option value="CNC Special Purpose Machine (SPM)">CNC Special Purpose Machine (SPM)</option>
                    <option value="CNC Grinder / Jig Borer">CNC Grinder / Jig Borer</option>
                    <option value="5-Axis Swivel / Gantry">5-Axis Swivel / Heavy Gantry</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono-tech text-slate-300 uppercase block mb-1">Primary Requirement</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white focus:outline-none"
                  >
                    <option value="Renishaw XL-80 Laser Calibration">Renishaw XL-80 Laser Calibration</option>
                    <option value="QC20-W Circular Ballbar Testing">QC20-W Circular Ballbar Testing</option>
                    <option value="XR20-W Rotary Axis Calibration">XR20-W Rotary Axis Calibration</option>
                    <option value="Full PM, Pitch Error Comp & Certification">Full PM, Error Compensation & Certification</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono-tech text-slate-300 uppercase block mb-1">Plant Location (City / State / Country) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bangalore / Chennai / Pune / Dubai"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/10 focus:border-[#ff6b00] text-xs text-white placeholder-slate-600 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-white font-mono-tech text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#ff6b00]/30 hover:shadow-[#ff6b00]/50 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>DISPATCHING TO INBOX...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SUBMIT CALIBRATION INQUIRY</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-[10px] font-mono-tech text-slate-500">
                  Or call directly: <a href="tel:8722722396" className="text-[#ff6b00]">+91 87227 22396</a> / <a href="tel:9742000900" className="text-[#ff6b00]">+91 97420 00900</a>
                </span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
