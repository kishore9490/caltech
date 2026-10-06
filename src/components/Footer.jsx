import React from 'react';
import { Link } from 'react-router-dom';
import { Crosshair, ShieldCheck, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/metrologyData';
import CalLogo from './CalLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-left">
      <div className="absolute inset-0 bg-precision-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <CalLogo className="h-12" />
            </Link>


            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              A machine maintenance and laser calibration service provider with experienced machine-tool engineering expertise. Serving over 5,000+ CNC machines across India and globally.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#ff6b00]/10 border border-[#ff6b00]/25 text-[10px] font-mono-tech text-[#ff6b00]">
                <ShieldCheck className="w-3 h-3" />
                <span>ISO 9001 / ISO 230-2 ALIGNED</span>
              </span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block font-semibold">
              CALIBRATION SERVICES
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><Link to="/capabilities" className="hover:text-white transition-colors">CNC Machine Tool Calibration</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Renishaw XL-80 Laser Calibration</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">QC20-W Circular Ballbar Testing</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">XR20-W Rotary Axis Calibration</Link></li>
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Controller Pitch Error Compensation</Link></li>
              <li><Link to="/why-calibrate" className="hover:text-white transition-colors">Preventive Maintenance & Diagnosis</Link></li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block font-semibold">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Company</Link></li>
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link to="/why-calibrate" className="hover:text-white transition-colors">Why Calibrate</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/reach" className="hover:text-white transition-colors">Global Reach</Link></li>
              <li><Link to="/customers" className="hover:text-white transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>


          {/* Direct Hotlines & Emails */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block font-semibold">
              DIRECT CONTACT
            </span>
            <div className="space-y-2 text-xs font-mono-tech text-slate-300">
              <div>
                <span className="text-[10px] text-slate-500 block">PHONE:</span>
                <div className="space-y-1 mt-0.5">
                  <a href="tel:8722722396" className="text-slate-200 hover:text-[#ff6b00] block transition-colors">+91 87227 22396</a>
                  <a href="tel:9742000900" className="text-slate-200 hover:text-[#ff6b00] block transition-colors">+91 97420 00900</a>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-slate-500 block">EMAIL INBOXES:</span>
                <div className="space-y-1 mt-0.5">
                  <a href="mailto:tejas@caltech.co.in" className="text-slate-300 hover:text-[#ff6b00] block transition-colors">tejas@caltech.co.in</a>
                  <a href="mailto:service@caltech.co.in" className="text-slate-300 hover:text-[#ff6b00] block transition-colors">service@caltech.co.in</a>
                  <a href="mailto:support@caltech.co.in" className="text-slate-300 hover:text-[#ff6b00] block transition-colors">support@caltech.co.in</a>
                </div>
              </div>

              <div className="pt-2 text-slate-400">
                <span className="text-[10px] text-slate-500 block">BASE LOCATION:</span>
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-tech text-slate-500">
          <div>
            © {new Date().getFullYear()} CAL TECHNOLOGIES. All Rights Reserved. Precision Machine Tool Metrology.
          </div>

          <div className="flex items-center gap-6">
            <span>CALIBRATION PROTOCOL: ISO 230-2 / ISO 230-4</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#ff6b00] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
