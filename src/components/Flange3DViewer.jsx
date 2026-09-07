import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Play, Eye, RotateCw, Sparkles, Layers, ShieldCheck, CheckCircle2, Sliders, Volume2, X, Move, Disc } from 'lucide-react';

export default function Flange3DViewer({ onOpenEnquiry }) {
  const [activeType, setActiveType] = useState('WN'); // WN, SO, BL, SW
  const [activeFinish, setActiveFinish] = useState('316L');
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [explodedView, setExplodedView] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);
  
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartRef = useRef(0);

  // 3D Flange Type Specs
  const flangeTypeConfigs = {
    'WN': { name: 'Weld Neck (WN)', desc: 'High pressure pipelines with tapered neck welded to pipe wall.', hasHub: true, hasBore: true },
    'SO': { name: 'Slip-On (SO)', desc: 'Low pressure lines slipped over pipe and fillet welded inside and out.', hasHub: false, hasBore: true },
    'BL': { name: 'Blind Flange (BL)', desc: 'Solid forged disc without center bore used to seal pipe ends.', hasHub: false, hasBore: false },
    'SW': { name: 'Socket Weld (SW)', desc: 'Small-diameter high-pressure pipelines with internal pipe socket.', hasHub: true, hasBore: true, isSocket: true }
  };

  // Material finish configurations
  const finishConfigs = {
    '304': { name: 'SS 304 (Satin Polish)', primaryColor: '#CBD5E1', specColor: '#94A3B8' },
    '316L': { name: 'SS 316L (Brushed Industrial)', primaryColor: '#94A3B8', specColor: '#64748B' },
    'Duplex': { name: 'Duplex 2205 (Titanium Matte)', primaryColor: '#E2E8F0', specColor: '#475569' }
  };

  const currentFinish = finishConfigs[activeFinish];
  const currentType = flangeTypeConfigs[activeType];

  // Auto 3D Rotation Loop
  useEffect(() => {
    let animationFrameId;
    if (autoRotate) {
      const animate = () => {
        setRotationAngle(prev => (prev + 0.8) % 360);
        animationFrameId = requestAnimationFrame(animate);
      };
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoRotate]);

  // Touch Gesture Handlers
  const handleTouchStart = (e) => {
    setAutoRotate(false);
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartRef.current) return;
    const deltaX = e.touches[0].clientX - touchStartRef.current;
    setRotationAngle(prev => (prev + deltaX * 0.5) % 360);
    touchStartRef.current = e.touches[0].clientX;
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setAutoRotate(false);
    touchStartRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (e.buttons !== 1 || !touchStartRef.current) return;
    const deltaX = e.clientX - touchStartRef.current;
    setRotationAngle(prev => (prev + deltaX * 0.6) % 360);
    touchStartRef.current = e.clientX;
  };

  // HTML5 WebGL 3D Canvas Renderer for Stainless Steel Flange Geometry
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const containerWidth = containerRef.current ? containerRef.current.clientWidth : 500;
    const canvasWidth = Math.min(containerWidth - 32, 540);
    const canvasHeight = Math.min(Math.round(canvasWidth * 0.65), 340);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const rad = (rotationAngle * Math.PI) / 180;
    const cosR = Math.cos(rad);
    const sinR = Math.sin(rad);

    const scale = canvasWidth / 500;

    // Render Background Grid
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.25)';
    ctx.lineWidth = 1;
    for (let i = -200 * scale; i <= 200 * scale; i += 35 * scale) {
      ctx.beginPath();
      ctx.moveTo(centerX + i, centerY + 80 * scale);
      ctx.lineTo(centerX + i * 0.7, centerY + 160 * scale);
      ctx.stroke();
    }

    const explodeOffset = (explodedView ? 40 : 0) * scale;

    // Outer Flange Rim
    const outerRadiusX = 120 * scale;
    const outerRadiusY = 48 * scale;
    const thickness = (activeType === 'BL' ? 32 : 24) * scale;

    // Metallic Gradient
    const grad = ctx.createLinearGradient(
      centerX - outerRadiusX * cosR,
      centerY - outerRadiusY * sinR,
      centerX + outerRadiusX * cosR,
      centerY + outerRadiusY * sinR
    );

    if (activeFinish === '316L') {
      grad.addColorStop(0, '#334155');
      grad.addColorStop(0.3, '#94A3B8');
      grad.addColorStop(0.5, '#F8FAFC');
      grad.addColorStop(0.8, '#64748B');
      grad.addColorStop(1, '#1E293B');
    } else if (activeFinish === 'Duplex') {
      grad.addColorStop(0, '#1E293B');
      grad.addColorStop(0.3, '#CBD5E1');
      grad.addColorStop(0.6, '#38BDF8');
      grad.addColorStop(0.9, '#1E293B');
      grad.addColorStop(1, '#0F172A');
    } else {
      grad.addColorStop(0, '#475569');
      grad.addColorStop(0.4, '#E2E8F0');
      grad.addColorStop(0.7, '#94A3B8');
      grad.addColorStop(1, '#334155');
    }

    // Draw Outer Rim Bottom Cylinder Wall
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + thickness, outerRadiusX, outerRadiusY, 0, 0, Math.PI);
    ctx.ellipse(centerX, centerY, outerRadiusX, outerRadiusY, 0, Math.PI, 0, true);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#64748B';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Draw Outer Rim Top Face
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, outerRadiusX, outerRadiusY, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Draw Bolt Holes
    const numHoles = 8;
    const holeOrbitX = 92 * scale;
    const holeOrbitY = 36 * scale;
    for (let i = 0; i < numHoles; i++) {
      const angle = ((i * 360) / numHoles + rotationAngle) * (Math.PI / 180);
      const hx = centerX + holeOrbitX * Math.cos(angle);
      const hy = centerY + holeOrbitY * Math.sin(angle);
      
      ctx.beginPath();
      ctx.ellipse(hx, hy, 6 * scale, 3.5 * scale, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#020617';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Render Tapered Weld Neck / Socket Hub (Only for WN and SW types)
    if (currentType.hasHub) {
      const neckRadiusX = 58 * scale;
      const neckRadiusY = 24 * scale;
      const neckHeight = (48 * scale) + explodeOffset;

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - neckHeight + 15, neckRadiusX, neckRadiusY, 0, 0, Math.PI);
      ctx.ellipse(centerX, centerY, neckRadiusX, neckRadiusY, 0, Math.PI, 0, true);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Top Face of Hub
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - neckHeight + 15, neckRadiusX, neckRadiusY, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Inner Bore (If not Blind)
      if (currentType.hasBore) {
        ctx.beginPath();
        ctx.ellipse(centerX, centerY - neckHeight + 15, 34 * scale, 14 * scale, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#020617';
        ctx.fill();
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    } else {
      // Slip-On or Blind Flange Top Face Inner Bore
      if (currentType.hasBore) {
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, 42 * scale, 17 * scale, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#020617';
        ctx.fill();
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    // Raised Face (RF) Accent Ring
    const rfY = currentType.hasHub ? centerY - ((48 * scale) + explodeOffset) + 15 : centerY;
    ctx.beginPath();
    ctx.ellipse(centerX, rfY, 46 * scale, 19 * scale, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

  }, [rotationAngle, activeFinish, activeType, explodedView]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 font-semibold px-3 py-1 rounded-full text-xs mb-3 border border-amber-500/30">
            <Box className="w-4 h-4 animate-spin-slow" /> Interactive 3D Flange Visualizer
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            3D Flange Types & Video Inspection
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 sm:mt-3">
            Select 3D Flange Type (Weld Neck, Slip-On, Blind, Socket Weld) to inspect 360° geometry, material finish, and manufacturing videos.
          </p>
        </div>

        {/* 3D Flange Model Type Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          {Object.entries(flangeTypeConfigs).map(([code, cfg]) => (
            <button
              key={code}
              onClick={() => setActiveType(code)}
              className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                activeType === code
                  ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-800'
              }`}
            >
              <Disc className="w-3.5 h-3.5" />
              <span>{cfg.name}</span>
            </button>
          ))}
        </div>

        {/* 3D Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* 3D Interactive Canvas Viewer */}
          <div 
            ref={containerRef}
            className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 relative shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 z-20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] sm:text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono">
                  3D Render • {currentType.name} ({currentFinish.name})
                </span>
              </div>

              {/* Exploded View & Auto-Rotate Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                    autoRotate 
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
                  <span className="hidden sm:inline">{autoRotate ? 'Auto-Rotating' : 'Paused'}</span>
                </button>

                <button
                  onClick={() => setExplodedView(!explodedView)}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                    explodedView 
                      ? 'bg-blue-500/20 text-blue-400 border-blue-500/40' 
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{explodedView ? 'Exploded 3D' : 'Standard 3D'}</span>
                </button>
              </div>
            </div>

            {/* 3D Canvas Box */}
            <div 
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              className="relative w-full min-h-[260px] sm:min-h-[320px] flex items-center justify-center bg-slate-950/70 rounded-xl sm:rounded-2xl border border-slate-800/80 my-2 touch-none cursor-grab active:cursor-grabbing select-none"
            >
              <canvas ref={canvasRef} className="max-w-full h-auto" />

              {/* Swipe Prompt */}
              <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] text-slate-400 flex items-center gap-1 pointer-events-none">
                <Move className="w-3 h-3 text-amber-400" /> Swipe or drag to rotate 3D
              </div>

              {/* 3D Hotspot Badge */}
              <div 
                onClick={() => setActiveHotspot('type')}
                className="absolute top-4 sm:top-10 left-1/2 -translate-x-1/2 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/50 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold cursor-pointer transition-all shadow-lg flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" /> 3D Specs: {currentType.name}
              </div>
            </div>

            {/* Hotspot Popup */}
            {activeHotspot && (
              <div className="bg-slate-950 border border-amber-500/40 p-2.5 rounded-xl text-xs mb-2 flex items-center justify-between text-slate-200">
                <span>{currentType.desc}</span>
                <button onClick={() => setActiveHotspot(null)} className="text-amber-400 font-bold ml-2">✕</button>
              </div>
            )}

            {/* Material Finish & 360 Angle Slider */}
            <div className="space-y-2.5 pt-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-semibold">Alloy Grade Finish:</span>
                <span className="text-amber-400 font-mono font-bold text-[11px] sm:text-xs">{currentFinish.name}</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {Object.keys(finishConfigs).map(key => (
                  <button
                    key={key}
                    onClick={() => setActiveFinish(key)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all border ${
                      activeFinish === key
                        ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2.5 text-xs pt-1">
                <span className="text-slate-500 text-[11px]">360° Angle:</span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={rotationAngle}
                  onChange={(e) => {
                    setAutoRotate(false);
                    setRotationAngle(Number(e.target.value));
                  }}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <span className="font-mono text-amber-400 w-9 text-right text-[11px]">{Math.round(rotationAngle)}°</span>
              </div>
            </div>

          </div>

          {/* Right Column: Industrial Video Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
              
              <div>
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Play className="w-4 h-4" /> Video Demonstration
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-100 mb-2">
                  High-Pressure Forging & Testing
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-4 sm:mb-6">
                  Watch our forging process, CNC machining, positive material identification (PMI), and 100% hydrostatic pressure testing in action.
                </p>

                {/* Video Preview Thumbnail */}
                <div 
                  onClick={() => setShowVideoModal(true)}
                  className="relative h-48 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 cursor-pointer shadow-xl group"
                >
                  <img 
                    src="/images/flange_forging_factory.jpg" 
                    alt="Industrial Stainless Steel Forging Manufacturing Video"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 bg-slate-950/85 backdrop-blur px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] sm:text-[11px] font-semibold text-amber-300 flex items-center gap-1.5 font-mono">
                    <Volume2 className="w-3.5 h-3.5" /> Watch Manufacturing Video (02:15)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 text-xs text-slate-300">
                  <div className="bg-slate-950 p-2 sm:p-2.5 rounded-xl border border-slate-800 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs">PMI Spectrum Check</span>
                  </div>
                  <div className="bg-slate-950 p-2 sm:p-2.5 rounded-xl border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs">Hydro Pressure Test</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenEnquiry}
                className="w-full mt-4 sm:mt-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition-all shadow-lg shadow-amber-500/20"
              >
                Request Video Inspection Report & Fast Quote
              </button>

            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Screen */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-4 shadow-2xl relative">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-3">
              <span className="font-heading font-bold text-amber-400 text-xs sm:text-sm flex items-center gap-2">
                <Play className="w-4 h-4" /> Bhansali Stainless Steel Flange Forging & Machining Video
              </span>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Clean Authentic Industrial Video Player (No Songs / Pure Industrial Forging Video) */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
              >
                <source src="https://cdn.coverr.co/videos/coverr-industrial-machine-working-5247/1080p.mp4" type="video/mp4" />
                <source src="https://cdn.coverr.co/videos/coverr-sparks-from-metal-welding-5374/1080p.mp4" type="video/mp4" />
                Your browser does not support HTML5 industrial video playback.
              </video>
            </div>

            <div className="mt-3 flex justify-between items-center text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Authentic ASTM A182 Forging & Hydro-Test Footage
              </span>
              <button
                onClick={() => setShowVideoModal(false)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-xs"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
