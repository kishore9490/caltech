import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, Cpu, Building2, Phone, Compass, HelpCircle } from 'lucide-react';

export default function MobileBottomNav({ onOpenBooking }) {
  const location = useLocation();

  const bottomLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Capabilities', path: '/capabilities', icon: Layers },
    { label: 'Technology', path: '/technology', icon: Cpu },
    { label: 'Industries', path: '/industries', icon: Building2 },
    { label: 'Why Cal', path: '/why-calibrate', icon: HelpCircle },
    { label: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080a0f]/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {bottomLinks.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
                isActive
                  ? 'text-[#ff6b00] font-bold scale-105'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-[#ff6b00]/15' : 'bg-transparent'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono-tech mt-0.5 tracking-tight">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
