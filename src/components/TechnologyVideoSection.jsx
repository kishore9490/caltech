import React, { useState } from 'react';
import { 
  Play, 
  Film, 
  Sparkles, 
  CheckCircle2, 
  Maximize2, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Crosshair,
  Clock,
  Tv
} from 'lucide-react';
import { METROLOGY_VIDEOS } from '../data/metrologyData';

export default function TechnologyVideoSection({ onOpenBooking }) {
  const [activeVideo, setActiveVideo] = useState(METROLOGY_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);

  const handleSelectVideo = (vid) => {
    setActiveVideo(vid);
    setIsPlaying(true);
  };

  return (
    <section className="py-24 bg-[#06080d] border-t border-b border-white/10 relative overflow-hidden text-left" id="videos">
      {/* Precision Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff6b00]/10 blur-[150px] pointer-events-none rounded-full"></div>
      <div className="absolute inset-0 bg-precision-grid-dense opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#ff6b00]">
              <Film className="w-3.5 h-3.5" />
              <span>// METROLOGY HARDWARE IN ACTION • VIDEO ARCHIVE</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              WATCH PRECISION IN MOTION. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffaa00] to-amber-300">
                FIELD OPERATION DEMONSTRATIONS.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Witness our Renishaw laser interferometers, circular ballbar transducers, and motorized rotary calibrators in real workshop operating environments.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-[#0c0f16] border border-white/10 px-4 py-2.5 rounded-2xl shrink-0">
            <Tv className="w-4 h-4 text-[#ff6b00]" />
            <span className="text-xs font-mono-tech text-slate-300">4 HD DEMONSTRATIONS AVAILABLE</span>
          </div>
        </div>

        {/* Featured Video Player Theater */}
        <div className="rounded-3xl bg-[#090c13] border border-white/15 p-4 sm:p-8 shadow-2xl relative overflow-hidden mb-12">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
            
            {isPlaying ? (
              activeVideo.videoSrc ? (
                <video
                  src={`${import.meta.env.BASE_URL}${activeVideo.videoSrc}`}
                  poster={`${import.meta.env.BASE_URL}${activeVideo.poster}`}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.embedId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )
            ) : (
              <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                <img 
                  src={`${import.meta.env.BASE_URL}${activeVideo.poster}`}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-90 group-hover:scale-102 group-hover:brightness-100 transition-all duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none"></div>
                <div className="absolute inset-0 bg-precision-grid-dense opacity-20 pointer-events-none"></div>

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#ff6b00] text-black flex items-center justify-center shadow-2xl shadow-[#ff6b00]/60 group-hover:scale-110 group-hover:bg-[#ff851a] transition-transform duration-300">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-black translate-x-0.5" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/40 animate-ping pointer-events-none"></div>
                  </div>
                </div>

                {/* Top Corner Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono-tech text-white font-bold flex items-center gap-1.5">
                    <Crosshair className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>{activeVideo.tool}</span>
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono-tech text-white">
                  <Clock className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>{activeVideo.duration}</span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-left space-y-1.5">
                  <span className="text-xs font-mono-tech text-[#ff6b00] uppercase tracking-wider block">
                    CLICK TO PLAY DEMONSTRATION VIDEO
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light max-w-3xl line-clamp-2">
                    {activeVideo.subtitle}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Video Metadata Bar */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono-tech text-slate-400 mr-2 uppercase">STANDARDS & DOMAINS:</span>
              {activeVideo.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono-tech text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#ff6b00]" />
                <span>{isPlaying ? 'Reload Video' : 'Play Video'}</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#ff6b00]/30 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>BOOK THIS SERVICE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Playlist Grid */}
        <div className="space-y-4 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-widest block">
              AVAILABLE DEMONSTRATION VIDEOS:
            </span>
            <span className="text-xs font-mono-tech text-[#ff6b00]">
              SELECT ANY VIDEO TO PLAY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {METROLOGY_VIDEOS.map((vid) => {
              const isSelected = activeVideo.id === vid.id;
              return (
                <div
                  key={vid.id}
                  onClick={() => handleSelectVideo(vid)}
                  className={`group rounded-2xl bg-[#0b0e15] border p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-xl hover:shadow-[#ff6b00]/10 ${
                    isSelected
                      ? 'border-[#ff6b00] ring-2 ring-[#ff6b00]/30 bg-[#121622]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Thumbnail Frame */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-white/10">
                      <img 
                        src={`${import.meta.env.BASE_URL}${vid.poster}`}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors pointer-events-none"></div>
                      
                      {/* Play Badge */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                          isSelected ? 'bg-[#ff6b00] text-black shadow-lg shadow-[#ff6b00]/40' : 'bg-black/80 text-white border border-white/30'
                        }`}>
                          <Play className="w-4 h-4 fill-current translate-x-0.5" />
                        </div>
                      </div>

                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono-tech text-slate-300">
                        {vid.duration}
                      </div>

                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#ff6b00]/20 border border-[#ff6b00]/40 text-[9px] font-mono-tech text-[#ff6b00] font-bold">
                        {vid.tool}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#ffaa00] transition-colors leading-snug">
                        {vid.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-light mt-1 line-clamp-2 leading-relaxed">
                        {vid.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
                    <span>{isSelected ? 'CURRENTLY PLAYING' : 'CLICK TO WATCH'}</span>
                    <Play className={`w-3 h-3 ${isSelected ? 'text-[#ff6b00]' : 'text-slate-500'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
