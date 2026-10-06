import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Activity, ChevronRight, Phone, Mail, Crosshair } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/metrologyData';
import CalLogo from './CalLogo';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Technology', path: '/technology' },
    { label: 'Why Calibrate', path: '/why-calibrate' },
    { label: 'Industries', path: '/industries' },
    { label: 'Global Reach', path: '/reach' },
    { label: 'Clients', path: '/customers' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Engineering Micro-Bar (Hidden on smaller screens, clean on desktop) */}
      <div className="hidden lg:flex items-center justify-between px-6 xl:px-8 py-1.5 bg-[#050608] border-b border-white/[0.05] text-[11px] font-mono-tech text-slate-400">
        <div className="flex items-center gap-4 xl:gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
            </span>
            <span className="text-slate-300 font-semibold">METROLOGY STATUS: ACTIVE</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Crosshair className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>ACCURACY: ±0.001 mm</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="text-slate-400">
            <span>ISO 9001 / ISO 230-2 COMPLIANT</span>
          </div>
        </div>

        <div className="flex items-center gap-4 xl:gap-6">
          <a href="tel:+918722722396" className="flex items-center gap-1.5 text-slate-400 hover:text-[#ff6b00] transition-colors">
            <Phone className="w-3 h-3 text-[#ff6b00]" />
            <span>+91 87227 22396</span>
          </a>
          <span className="text-white/20">|</span>
          <a href="mailto:service@caltech.co.in" className="flex items-center gap-1.5 text-slate-400 hover:text-[#ff6b00] transition-colors">
            <Mail className="w-3 h-3 text-[#ff6b00]" />
            <span>service@caltech.co.in</span>
          </a>
          <span className="text-white/20">|</span>
          <span className="text-slate-500">HQ: BENGALURU</span>
        </div>
      </div>

      {/* Floating Main Navigation */}
      <header 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'top-2 sm:top-4 px-2.5 sm:px-6 lg:px-8' 
            : 'top-0 lg:top-7 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3'
        }`}
      >
        <div 
          className={`mx-auto max-w-7xl transition-all duration-300 rounded-2xl flex items-center justify-between ${
            isScrolled 
              ? 'bg-[#0B0E14]/95 backdrop-blur-xl border border-white/[0.12] shadow-2xl shadow-black/90 px-3.5 sm:px-6 py-2 sm:py-2.5' 
              : 'bg-[#090C12]/80 backdrop-blur-md border border-white/[0.08] px-4 sm:px-6 py-2.5 sm:py-3'
          }`}
        >
          {/* Brand Identity / Ultra-Sharp Vector Original Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group focus:outline-none shrink-0"
          >
            <CalLogo className="h-9 sm:h-11" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/[0.05]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide rounded-lg transition-all ${
                    isActive
                      ? 'text-[#ff6b00] bg-white/[0.08] shadow-sm font-bold border border-[#ff6b00]/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Mobile Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Call Icon on Mobile */}
            <a
              href="tel:+918722722396"
              className="sm:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-[#ff6b00] hover:bg-white/10 transition-colors"
              aria-label="Call CAL Technologies"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Desktop / Tablet CTA */}
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff6b00]/25 hover:shadow-[#ff6b00]/50 transition-all active:scale-[0.98] border border-[#ff8c33]/40 cursor-pointer hidden xs:flex items-center"
            >
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <span>REQUEST CALIBRATION</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 sm:p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff6b00]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (100% Mobile Optimized) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-black/90 backdrop-blur-2xl animate-fadeIn flex flex-col justify-between">
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#080a0f]">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <CalLogo className="h-9" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-[#ff6b00]" />
            </button>
          </div>

          {/* Drawer Links List */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            <div className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest px-3 py-1">
              NAVIGATION MENU
            </div>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#ff6b00]/15 text-[#ff6b00] font-bold border border-[#ff6b00]/30'
                      : 'text-slate-200 hover:text-[#ff6b00] hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              );
            })}
          </div>

          {/* Drawer Bottom Actions & Direct Contacts */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-[#080a0f] space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
              <a 
                href="tel:+918722722396" 
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-1.5 text-slate-200 hover:text-[#ff6b00]"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff6b00]" />
                <span>Call Hotline</span>
              </a>
              <a 
                href="mailto:service@caltech.co.in" 
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-1.5 text-slate-200 hover:text-[#ff6b00]"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff6b00]" />
                <span>Email Us</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#ff6b00]/30 text-center cursor-pointer"
            >
              REQUEST CALIBRATION
            </button>
          </div>
        </div>
      )}
    </>
  );
}
