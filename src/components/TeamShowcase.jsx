import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  ShieldCheck, 
  Wrench, 
  FileText, 
  Calculator, 
  Compass, 
  ChevronRight, 
  X, 
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Briefcase
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/metrologyData';

export default function TeamShowcase({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);

  const categories = [
    { id: 'all', label: 'All Team Members', count: TEAM_MEMBERS.length },
    { id: 'leadership', label: 'Executive Leadership', count: TEAM_MEMBERS.filter(m => m.category === 'leadership').length },
    { id: 'engineering', label: 'Calibration Engineering', count: TEAM_MEMBERS.filter(m => m.category === 'engineering').length },
    { id: 'accounts', label: 'Finance & Operations', count: TEAM_MEMBERS.filter(m => m.category === 'accounts').length },
    { id: 'trainee', label: 'Technical Trainees', count: TEAM_MEMBERS.filter(m => m.category === 'trainee').length },
  ];

  const filteredMembers = activeCategory === 'all' 
    ? TEAM_MEMBERS 
    : TEAM_MEMBERS.filter(m => m.category === activeCategory);

  const getBadgeStyle = (category) => {
    switch(category) {
      case 'leadership':
        return 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300';
      case 'engineering':
        return 'bg-gradient-to-r from-[#ff6b00]/20 to-amber-500/20 border-[#ff6b00]/40 text-[#ff6b00]';
      case 'accounts':
        return 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300';
      case 'trainee':
        return 'bg-gradient-to-r from-sky-500/20 to-blue-500/20 border-sky-500/40 text-sky-300';
      default:
        return 'bg-white/10 border-white/20 text-slate-300';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'leadership':
        return <Award className="w-3.5 h-3.5 text-amber-400" />;
      case 'engineering':
        return <Wrench className="w-3.5 h-3.5 text-[#ff6b00]" />;
      case 'accounts':
        return <Calculator className="w-3.5 h-3.5 text-emerald-400" />;
      case 'trainee':
        return <Compass className="w-3.5 h-3.5 text-sky-400" />;
      default:
        return <Users className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#08090e] border-t border-b border-white/10 relative overflow-hidden text-left" id="team">
      {/* Precision Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ff6b00]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-precision-grid-dense opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00]">
              <Users className="w-3.5 h-3.5" />
              <span>// CAL TECHNOLOGIES HUMAN CAPITAL & LEADERSHIP</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              MEET THE TEAM BEHIND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
                OUR SUB-MICRON EXCELLENCE.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Our multidisciplinary team unites visionary company leadership, certified senior calibration engineers, dedicated accounting compliance professionals, and passionate apprentices committed to precision engineering.
            </p>
          </div>

          {/* Quick Team Metrics Pill */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 bg-[#0d1017] border border-white/10 p-3 rounded-2xl shrink-0">
            <div className="px-3.5 py-2 border-r border-white/10">
              <span className="text-[10px] font-mono-tech text-slate-400 block uppercase">Team Strength</span>
              <span className="text-xl font-bold font-mono-tech text-white">10+ Members</span>
            </div>
            <div className="px-3.5 py-2">
              <span className="text-[10px] font-mono-tech text-slate-400 block uppercase">Field Coverage</span>
              <span className="text-xl font-bold font-mono-tech text-[#ff6b00]">Pan-India & Global</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-tech uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-bold shadow-lg shadow-[#ff6b00]/20'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeCategory === cat.id ? 'bg-black/30 text-black' : 'bg-white/10 text-slate-300'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl bg-[#0c0e15] border border-white/10 hover:border-[#ff6b00]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#ff6b00]/10"
            >
              <div>
                {/* Photo Frame Container */}
                <div className="relative aspect-[4/4.5] w-full bg-[#141824] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${member.photo}`}
                    alt={`${member.name} - ${member.designation}`}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15] via-transparent to-black/20 pointer-events-none"></div>
                  
                  {/* Top Department Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono-tech text-slate-300">
                    {getCategoryIcon(member.category)}
                    <span>{member.department}</span>
                  </div>

                  {/* Corner Target Reticle */}
                  <div className="absolute top-3 right-3 text-white/30 group-hover:text-[#ff6b00] transition-colors">
                    <span className="font-mono-tech text-[10px]">#0{TEAM_MEMBERS.findIndex(m => m.id === member.id) + 1}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide uppercase group-hover:text-[#ffaa00] transition-colors">
                      {member.name}
                    </h3>
                    
                    <div className="mt-1.5 flex items-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech font-bold uppercase tracking-wider border ${getBadgeStyle(member.category)}`}>
                        {member.designation}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                    {member.summary}
                  </p>

                  {/* Focus Area Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.focusAreas.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[10px] font-mono-tech text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-[#ff6b00] text-slate-300 hover:text-black border border-white/10 hover:border-[#ff6b00] text-xs font-mono-tech font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                >
                  <span>View Roles & Responsibilities</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Call to Action */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#121520] via-[#0e111a] to-[#121520] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
              // COLLABORATE WITH CAL TECHNOLOGIES
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Ready to restore your CNC machinery with our team?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Our engineers travel to your facility equipped with Renishaw XL-80 and QC20-W laser systems.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all cursor-pointer flex items-center gap-2 shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>SCHEDULE ON-SITE CALIBRATION</span>
          </button>
        </div>

      </div>

      {/* Detailed Roles & Responsibilities Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d1017] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 text-left space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#141824]">
                  <img
                    src={`${import.meta.env.BASE_URL}${selectedMember.photo}`}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest">
                      {selectedMember.department}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-[10px] font-mono-tech text-[#ff6b00]">
                      CAL TECHNOLOGIES
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase">
                    {selectedMember.name}
                  </h3>
                  <div className="mt-1">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider border ${getBadgeStyle(selectedMember.category)}`}>
                      {selectedMember.designation}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Official Scope & Responsibilities */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>OFFICIAL ROLES & RESPONSIBILITIES</span>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
                {selectedMember.responsibilities}
              </div>
            </div>

            {/* Focus Pillars */}
            <div className="space-y-2">
              <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block">
                CORE OPERATIONAL DOMAINS
              </span>
              <div className="grid grid-cols-2 gap-2">
                {selectedMember.focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono-tech text-slate-500">
                VERIFIED CORPORATE PROFILE // ISO 9001 ALIGNED
              </span>
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
