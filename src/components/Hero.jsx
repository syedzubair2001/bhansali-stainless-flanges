import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Truck, ChevronRight, Phone, MessageSquare, Mail, FileCheck, CheckCircle2, Play, VolumeX, Volume2 } from 'lucide-react';

export default function Hero({ onOpenEnquiry }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const canvasRef = useRef(null);

  // Dynamic 3D Metal Mesh Canvas Background (runs in parallel with background video)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 600);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // Glowing 3D particles & industrial sparks
    const sparks = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 1.2,
      speedY: -Math.random() * 1.5 - 0.5,
      alpha: Math.random() * 0.7 + 0.3
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw floating industrial sparks
      sparks.forEach(s => {
        s.x += s.speedX;
        s.y += s.speedY;

        if (s.y < 0) {
          s.y = height;
          s.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${s.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#F59E0B';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="overview" className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 border-b border-slate-800 min-h-[85vh] flex items-center">
      
      {/* FULLSCREEN BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Background HTML5 Video Stream */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover scale-105 opacity-40 filter brightness-90 contrast-125"
        >
          <source src="https://cdn.coverr.co/videos/coverr-sparks-from-metal-welding-5374/1080p.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-industrial-machine-working-5247/1080p.mp4" type="video/mp4" />
        </video>

        {/* 3D Animated Spark Canvas Layer */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-1" />

        {/* Dark Metallic Overlay Gradients for 100% Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60 z-2" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80 z-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Staggered Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Target Region Tag */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-amber-500/40 rounded-full px-3.5 py-1.5 text-xs font-semibold text-amber-400 mb-6 shadow-md backdrop-blur">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span>Saudi Arabia • UAE • Qatar • Oman • Kuwait Direct Supply</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-[1.15] mb-6">
              Industrial Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Stainless Steel Flanges
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Manufacturer & Stockist of high-pressure ASTM A182 ANSI B16.5 & DIN Forged Flanges in <strong className="text-white">SS 304/304L, 316/316L, 316Ti & Duplex 2205</strong>. Engineered for oil & gas refineries, desalination plants, and chemical processing across the Middle East.
            </p>

            {/* Quick Feature Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/85 border border-slate-800 p-2.5 rounded-xl backdrop-blur shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1,000+ Tonnes In Stock</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/85 border border-slate-800 p-2.5 rounded-xl backdrop-blur shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>EN 10204 3.1 MTC</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/85 border border-slate-800 p-2.5 rounded-xl backdrop-blur shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>48h GCC Dispatch</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, shadow: "0px 10px 25px rgba(245, 158, 11, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <span>Request Custom Quote (RFQ)</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/919677806361?text=Hi%20Bhansali%20Stainless,%20I%20want%20to%20inquire%20about%20Stainless%20Steel%20Flanges%20pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-base flex items-center justify-center gap-2 transition-all backdrop-blur"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Instant Inquiry (+91 9677806361)</span>
              </motion.a>
            </div>

            {/* Click-to-contact direct indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-900/80 w-full">
              <span className="font-semibold text-slate-300">Fast Contact:</span>
              <a href="tel:+919677806361" className="hover:text-amber-400 flex items-center gap-1 font-medium">
                <Phone className="w-3.5 h-3.5 text-amber-500" /> Direct: +91 9677806361
              </a>
              <span className="text-slate-800">•</span>
              <a href="https://wa.me/919677806361" target="_blank" rel="noreferrer" className="hover:text-emerald-400 flex items-center gap-1 font-medium">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp: 9677806361
              </a>
              <span className="text-slate-800">•</span>
              <a href="mailto:sales@bhansaliflanges.com" className="hover:text-amber-400 flex items-center gap-1 font-medium">
                <Mail className="w-3.5 h-3.5 text-amber-500" /> sales@bhansaliflanges.com
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Product Card Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-slate-900/85 backdrop-blur-md p-6 border border-slate-800 shadow-2xl overflow-hidden">
              {/* Product Badge */}
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded shadow">
                ASTM A182 Certified
              </div>

              {/* High Quality AI Generated 3D Industrial Image */}
              <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-slate-900 border border-slate-800 group shadow-xl">
                <img 
                  src="/images/weld_neck_flange_3d.jpg" 
                  alt="Industrial Forged Stainless Steel Flange Manufacturing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200 bg-slate-950/85 backdrop-blur px-3 py-2 rounded-lg border border-slate-800 font-mono">
                  <span className="font-semibold text-amber-400">Forged SS 316L Weld Neck Flange (3D Render)</span>
                  <span className="text-slate-400">ASTM A182</span>
                </div>
              </div>

              {/* Quick Specs Highlight Box */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                  <span className="text-slate-400">Available Pressure Ratings</span>
                  <span className="font-medium text-slate-200">150#, 300#, 600#, 900#, 1500#, 2500#</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                  <span className="text-slate-400">Facing Types</span>
                  <span className="font-medium text-slate-200">Raised Face (RF), Flat (FF), RTJ</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                  <span className="text-slate-400">Testing Standards</span>
                  <span className="font-medium text-emerald-400 flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5" /> 100% Hydrostatic & PMI Tested
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-400">Primary Ports</span>
                  <span className="font-medium text-slate-200">Jebel Ali (UAE), Dammam (KSA)</span>
                </div>
              </div>

              {/* Instant Spec Download Action */}
              <div className="mt-6">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2.5 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Download Complete Specs & Weight Chart</span>
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
