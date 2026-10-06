import React, { useState, useEffect, useRef } from 'react';
import { 
  Crosshair, 
  Activity, 
  ShieldCheck, 
  Play, 
  RotateCw, 
  Zap, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Sliders, 
  ChevronRight,
  TrendingUp,
  Cpu,
  Sparkles,
  Radio
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../data/metrologyData';

export default function Hero({ onOpenBooking }) {
  // Calibration Simulation Stage
  // 1: Laser Emitted, 2: Axis Scanning, 3: Error Detected, 4: Compensating, 5: Certified
  const [scanStep, setScanStep] = useState(2);
  const [selectedAxis, setSelectedAxis] = useState('X-Axis');
  const [autoSimulate, setAutoSimulate] = useState(true);
  
  // Real-time live metrology ticker coordinates
  const [coords, setCoords] = useState({ x: 420.150, y: 180.220, z: -85.040, b: 0.00 });
  const [laserPulse, setLaserPulse] = useState(0);

  const canvasRef = useRef(null);

  // Automated metrology ticker simulation
  useEffect(() => {
    if (!autoSimulate) return;
    const interval = setInterval(() => {
      setScanStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [autoSimulate]);

  // High-frequency live coordinate generator & pulse
  useEffect(() => {
    const timer = setInterval(() => {
      setLaserPulse((p) => (p + 1) % 100);
      setCoords((prev) => {
        const jitter = (Math.random() - 0.5) * 0.003;
        if (selectedAxis === 'X-Axis') {
          const newX = prev.x > 800 ? 100 : prev.x + 1.25;
          return { ...prev, x: Number((newX + jitter).toFixed(3)) };
        } else if (selectedAxis === 'Y-Axis') {
          const newY = prev.y > 500 ? 50 : prev.y + 0.85;
          return { ...prev, y: Number((newY + jitter).toFixed(3)) };
        } else if (selectedAxis === 'Z-Axis') {
          const newZ = prev.z < -300 ? -20 : prev.z - 0.65;
          return { ...prev, z: Number((newZ + jitter).toFixed(3)) };
        } else {
          const newB = (prev.b + 0.5) % 360;
          return { ...prev, b: Number(newB.toFixed(2)) };
        }
      });
    }, 40);
    return () => clearInterval(timer);
  }, [selectedAxis]);

  // Rich Canvas Particle & Laser Scan Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let scanLineY = 0;
    let scanLineX = 0;
    let particles = [];

    // Initialize laser spark particles
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: canvas.width * 0.5 + (Math.random() - 0.5) * 40,
        y: canvas.height * 0.52 + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 1.2) * 2.0,
        size: Math.random() * 2.5 + 1,
        life: Math.random() * 30 + 10,
        maxLife: 40,
        color: Math.random() > 0.3 ? '#ff6b00' : '#ffffff'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Coordinates for key points on the 3D machine canvas
      const leftArm = { x: w * 0.22, y: h * 0.44 };
      const rightArm = { x: w * 0.78, y: h * 0.44 };
      const centerTarget = { x: w * 0.50, y: h * 0.52 };

      // 1. Draw dynamic sweeping laser plane across machine table
      scanLineY = (scanLineY + 1.2) % (h * 0.4);
      const currentScanY = h * 0.35 + scanLineY;

      ctx.save();
      // Sweeping horizontal scanline
      const scanGrad = ctx.createLinearGradient(w * 0.15, currentScanY, w * 0.85, currentScanY);
      scanGrad.addColorStop(0, 'rgba(255, 107, 0, 0)');
      scanGrad.addColorStop(0.5, 'rgba(255, 107, 0, 0.45)');
      scanGrad.addColorStop(1, 'rgba(255, 107, 0, 0)');
      ctx.strokeStyle = scanGrad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(w * 0.15, currentScanY);
      ctx.lineTo(w * 0.85, currentScanY);
      ctx.stroke();

      // Vertical scanner grid sweep
      scanLineX = (scanLineX + 1.8) % (w * 0.6);
      const currentScanX = w * 0.2 + scanLineX;
      ctx.strokeStyle = 'rgba(255, 140, 50, 0.25)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(currentScanX, h * 0.35);
      ctx.lineTo(currentScanX, h * 0.72);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 2. Dual Laser Interferometer Beams from Robotic Arms to Center
      if (scanStep >= 1) {
        ctx.save();
        
        // Left arm laser beam
        const leftGrad = ctx.createLinearGradient(leftArm.x, leftArm.y, centerTarget.x, centerTarget.y);
        leftGrad.addColorStop(0, '#ffffff');
        leftGrad.addColorStop(0.3, '#ff8c33');
        leftGrad.addColorStop(1, '#ff3b00');
        
        ctx.shadowColor = '#ff6b00';
        ctx.shadowBlur = 15;
        ctx.strokeStyle = leftGrad;
        ctx.lineWidth = scanStep === 5 ? 3 : 2;
        ctx.beginPath();
        ctx.moveTo(leftArm.x, leftArm.y);
        ctx.lineTo(centerTarget.x, centerTarget.y);
        ctx.stroke();

        // Right arm laser beam
        const rightGrad = ctx.createLinearGradient(rightArm.x, rightArm.y, centerTarget.x, centerTarget.y);
        rightGrad.addColorStop(0, '#ffffff');
        rightGrad.addColorStop(0.3, '#ff8c33');
        rightGrad.addColorStop(1, '#ff3b00');
        
        ctx.strokeStyle = rightGrad;
        ctx.beginPath();
        ctx.moveTo(rightArm.x, rightArm.y);
        ctx.lineTo(centerTarget.x, centerTarget.y);
        ctx.stroke();

        // Pulsing core laser beam at nozzle tips
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(leftArm.x, leftArm.y, 3.5, 0, Math.PI * 2);
        ctx.arc(rightArm.x, rightArm.y, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // 3. Focal Point Sparks & Metrology Crosshair
      ctx.save();
      ctx.shadowColor = '#ff6b00';
      ctx.shadowBlur = 18;

      // Rotating optical target rings at center spindle
      const time = Date.now() * 0.002;
      ctx.strokeStyle = scanStep === 5 ? 'rgba(16, 185, 129, 0.9)' : 'rgba(255, 107, 0, 0.85)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerTarget.x, centerTarget.y, 16 + Math.sin(time * 3) * 2, 0, Math.PI * 2);
      ctx.stroke();

      // Outer dashed target ring
      ctx.strokeStyle = scanStep === 5 ? 'rgba(16, 185, 129, 0.5)' : 'rgba(255, 140, 50, 0.5)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.arc(centerTarget.x, centerTarget.y, 28, time, time + Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Center bright laser focal core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerTarget.x, centerTarget.y, 3, 0, Math.PI * 2);
      ctx.fill();

      // 4. Update and draw energetic spark particles
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        const alpha = Math.max(0, p.life / p.maxLife);
        ctx.fillStyle = p.color === '#ffffff' ? `rgba(255, 255, 255, ${alpha})` : `rgba(255, 107, 0, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();

        // Respawn particle at laser impact
        if (p.life <= 0) {
          p.x = centerTarget.x + (Math.random() - 0.5) * 6;
          p.y = centerTarget.y + (Math.random() - 0.5) * 6;
          p.vx = (Math.random() - 0.5) * 3;
          p.vy = (Math.random() - 1.5) * 2.5;
          p.life = p.maxLife;
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [scanStep]);

  const stages = [
    { step: 1, name: 'Laser Beam Emission', status: 'XL-80 633nm HeNe Active' },
    { step: 2, name: 'Kinematic Axis Scan', status: 'Linear & Angular Pitch Capture' },
    { step: 3, name: 'Error Deviation Mapping', status: 'Lost Motion & Pitch Drift Detected' },
    { step: 4, name: 'Digital Pitch Compensation', status: 'Uploading CNC Error Matrix' },
    { step: 5, name: 'Machine Certified', status: '±0.001mm True Tolerance Verified' }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#07080c] flex flex-col justify-between">
      {/* Background Precision Metrology Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-precision-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-gradient-to-b from-[#ff6b00]/15 via-[#ff6b00]/5 to-transparent blur-[130px] pointer-events-none rounded-full"></div>
      
      {/* Precision Axis Lines Overlay */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/[0.04] hidden md:block pointer-events-none">
        <div className="absolute top-48 -left-2 text-[9px] font-mono-tech text-white/30 rotate-90 origin-left">AXIS_REF_01_VERTICAL</div>
      </div>
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-white/[0.04] hidden md:block pointer-events-none">
        <div className="absolute top-48 -right-2 text-[9px] font-mono-tech text-white/30 -rotate-90 origin-right">OPTICAL_LINE_633NM</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        {/* Top Technical Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
            <span className="text-[#ff6b00] font-semibold">5,000+ CNC MACHINES CALIBRATED</span>
            <span className="text-white/20">|</span>
            <span className="text-slate-400">PAN INDIA & GLOBAL SERVICE</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[11px] font-mono-tech text-[#ff6b00]">
            <Crosshair className="w-3 h-3" />
            <span>RENISHAW XL-80 • QC20-W BALLBAR • XR20-W ROTARY</span>
          </div>
        </div>

        {/* Hero Grid: Editorial Typography Left, Cinematic 3D Metrology Environment Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Precision Headline & Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] uppercase">
                PRECISION <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8c33] to-amber-300">
                  YOU CAN MEASURE.
                </span>
              </h1>
              
              <div className="mt-4 flex items-center gap-3">
                <div className="h-[2px] w-12 bg-[#ff6b00]"></div>
                <p className="text-sm sm:text-base font-mono-tech uppercase tracking-widest text-slate-300 font-semibold">
                  CNC MACHINE TOOL CALIBRATION & PRECISION METROLOGY
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
              We deliver machine-tool engineering expertise, laser interferometry, and controller pitch error compensation to eliminate machining inaccuracy, prevent downtime, and guarantee ISO 9001 compliance.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#0e1118]/80 border border-white/10 backdrop-blur-md">
              <div className="space-y-0.5 border-r border-white/10 pr-2">
                <span className="text-[10px] font-mono-tech text-slate-400 block uppercase">Calibrated Machines</span>
                <span className="text-xl sm:text-2xl font-bold font-mono-tech text-white">5,000+</span>
                <span className="text-[9px] text-slate-500 block">VMCs, Lathes, SPMs</span>
              </div>
              <div className="space-y-0.5 border-r border-white/10 pr-2 pl-1">
                <span className="text-[10px] font-mono-tech text-slate-400 block uppercase">Interferometer</span>
                <span className="text-xl sm:text-2xl font-bold font-mono-tech text-[#ff6b00]">±0.5 ppm</span>
                <span className="text-[9px] text-slate-500 block">Renishaw XL-80</span>
              </div>
              <div className="space-y-0.5 pl-1">
                <span className="text-[10px] font-mono-tech text-slate-400 block uppercase">Target Accuracy</span>
                <span className="text-xl sm:text-2xl font-bold font-mono-tech text-emerald-400">±0.001mm</span>
                <span className="text-[9px] text-slate-500 block">Sub-Micron Certified</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#e65100] text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#ff6b00]/30 hover:shadow-[#ff6b00]/50 transition-all active:scale-[0.98] border border-[#ff8c33]/40 cursor-pointer"
              >
                <span>REQUEST CALIBRATION</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/technology"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-semibold tracking-wide text-slate-200 hover:text-white transition-all"
              >
                <Cpu className="w-4 h-4 text-[#ff6b00]" />
                <span>EXPLORE INSTRUMENTS</span>
              </Link>
            </div>

            {/* Esteemed Customer Badges Ticker */}
            <div className="pt-2">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest block mb-2">
                TRUSTED BY INDUSTRY LEADERS:
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-400">
                <span className="hover:text-[#ff6b00] transition-colors">HAL</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-[#ff6b00] transition-colors">GODREJ</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-[#ff6b00] transition-colors">TOYOTA</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-[#ff6b00] transition-colors">BOSCH</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-[#ff6b00] transition-colors">TATA</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-[#ff6b00] transition-colors">L&T</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-[#ff6b00] transition-colors">ROYAL ENFIELD</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Cinematic Metrology Environment HUD with LIVE ANIMATED LASER SCANNER */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#090b10] border border-white/15 p-4 sm:p-5 shadow-2xl shadow-black overflow-hidden">
              
              {/* Top Metrology HUD Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono-tech">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#ff6b00] animate-ping"></div>
                  <span className="text-white font-bold tracking-wider">CALIBRATION SIMULATOR</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-300">STAGE {scanStep}/5</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setAutoSimulate(!autoSimulate)}
                    className={`px-2 py-0.5 rounded text-[10px] border transition-colors cursor-pointer ${
                      autoSimulate 
                        ? 'bg-[#ff6b00]/20 border-[#ff6b00]/50 text-[#ff6b00]' 
                        : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  >
                    {autoSimulate ? 'AUTO: RUNNING' : 'AUTO: PAUSED'}
                  </button>
                  <button 
                    onClick={() => setScanStep((prev) => (prev >= 5 ? 1 : prev + 1))}
                    className="p-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-[10px] flex items-center gap-1 cursor-pointer"
                    title="Next Calibration Step"
                  >
                    <RotateCw className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Main Visual Display: 3D Render + High-Frame-Rate Canvas Laser System */}
              <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden bg-black border border-white/10 group">
                
                {/* Authentic 3D Factory Render Asset */}
                <img 
                  src="/assets/cal-hero-render.jpg" 
                  alt="CAL TECHNOLOGIES Cinematic CNC Machine & Robotics Metrology Environment"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    scanStep === 5 ? 'brightness-110 contrast-105' : 'brightness-95'
                  }`}
                />

                {/* Ambient Dark Overlay & Grid */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-black/30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-precision-grid-dense opacity-20 pointer-events-none"></div>

                {/* Animated Metrology Canvas Layer (Sparks, Beams, Laser Sweeps) */}
                <canvas 
                  ref={canvasRef} 
                  width={640} 
                  height={440} 
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                />

                {/* Dynamic Metrology Scanners HUD Box Left */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 p-1.5 sm:p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-[9px] sm:text-[11px] font-mono-tech space-y-0.5 sm:space-y-1 max-w-[160px] sm:max-w-[210px] z-20 shadow-lg text-left">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>AXIS:</span>
                    <span className="text-white font-bold">{selectedAxis}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>POS:</span>
                    <span className="text-[#ff8c33] font-bold truncate ml-1">
                      {selectedAxis === 'X-Axis' && `${coords.x}mm`}
                      {selectedAxis === 'Y-Axis' && `${coords.y}mm`}
                      {selectedAxis === 'Z-Axis' && `${coords.z}mm`}
                      {selectedAxis === 'B-Rotary' && `${coords.b}°`}
                    </span>
                  </div>
                  <div className="hidden xs:flex items-center justify-between text-slate-400">
                    <span>WAVE:</span>
                    <span className="text-[#ff6b00]">632.8nm</span>
                  </div>
                  <div className="hidden xs:flex items-center justify-between text-slate-400">
                    <span>TEMP:</span>
                    <span className="text-emerald-400">20.0°C</span>
                  </div>
                </div>

                {/* Live Real-Time Deviation Readout Box Right */}
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 p-1.5 sm:p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-[9px] sm:text-[11px] font-mono-tech space-y-0.5 sm:space-y-1.5 min-w-[140px] sm:min-w-[200px] z-20 shadow-lg text-left">
                  <div className="text-[8px] sm:text-[10px] text-slate-400 uppercase flex items-center justify-between">
                    <span>STATUS</span>
                    <span className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${scanStep === 5 ? 'bg-emerald-400' : 'bg-[#ff6b00] animate-pulse'}`}></span>
                  </div>
                  
                  {scanStep < 4 ? (
                    <div>
                      <div className="text-[10px] sm:text-xs text-red-400 font-bold flex items-center justify-between">
                        <span>ERROR:</span>
                        <span>+18.4 µm</span>
                      </div>
                      <span className="text-[8px] sm:text-[9px] text-slate-400 block mt-0.5 hidden xs:block">Uncompensated</span>
                    </div>
                  ) : scanStep === 4 ? (
                    <div>
                      <div className="text-[10px] sm:text-xs text-amber-400 font-bold flex items-center justify-between">
                        <span>COMPENSATING:</span>
                        <span>-18.4 µm</span>
                      </div>
                      <span className="text-[8px] sm:text-[9px] text-slate-300 block mt-0.5 hidden xs:block">Writing pitch table</span>
                    </div>
                  ) : (
                    <div>
                      <div className="text-[10px] sm:text-xs text-emerald-400 font-bold flex items-center justify-between">
                        <span>CALIBRATED:</span>
                        <span>±0.001 mm</span>
                      </div>
                      <span className="text-[8px] sm:text-[9px] text-emerald-300 block mt-0.5 hidden xs:block">ISO 230-2 Certified</span>
                    </div>
                  )}
                </div>

                {/* Axis Selector Chips on Top Right */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 z-20">
                  {['X-Axis', 'Y-Axis', 'Z-Axis', 'B-Rotary'].map((axis) => (
                    <button
                      key={axis}
                      onClick={() => setSelectedAxis(axis)}
                      className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[8px] sm:text-[10px] font-mono-tech transition-all cursor-pointer ${
                        selectedAxis === axis
                          ? 'bg-[#ff6b00] text-black font-bold shadow-md'
                          : 'bg-black/75 text-slate-300 hover:bg-black/90 border border-white/10'
                      }`}
                    >
                      {axis.replace('-Axis', '')}
                    </button>
                  ))}
                </div>

              </div>

              {/* Bottom Interactive Stage Progression HUD */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span className="text-xs font-mono-tech text-white font-semibold">
                      {stages[scanStep - 1]?.name || 'Calibration Active'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-tech text-slate-400">
                    {stages[scanStep - 1]?.status}
                  </span>
                </div>

                {/* Step indicators */}
                <div className="grid grid-cols-5 gap-1.5">
                  {stages.map((st) => {
                    const isPassed = scanStep >= st.step;
                    const isCurrent = scanStep === st.step;
                    return (
                      <button
                        key={st.step}
                        onClick={() => {
                          setScanStep(st.step);
                          setAutoSimulate(false);
                        }}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-[#ff6b00] shadow-[0_0_10px_#ff6b00]'
                            : isPassed
                            ? 'bg-amber-500/80'
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                        title={st.name}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Information Microbar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-8 flex items-center justify-between text-xs font-mono-tech text-slate-500 border-t border-white/[0.05]">
        <div className="flex items-center gap-4">
          <span>COORDINATES: LAT 12.9716° N / LON 77.5946° E</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline">BENCHMARK: HEIDENHAIN & FANUC NATIVE</span>
        </div>

        <Link 
          to="/capabilities" 
          className="flex items-center gap-2 text-slate-400 hover:text-[#ff6b00] transition-colors"
        >
          <span>EXPLORE FULL CAPABILITIES</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
