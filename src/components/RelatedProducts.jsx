import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ChevronRight, CheckCircle2, Package, ShieldCheck, Box, Tag } from 'lucide-react';

export default function RelatedProducts({ onOpenEnquiry, onSelectProduct }) {
  const categories = [
    {
      id: 'flanges',
      name: 'Stainless Steel Flanges (ANSI B16.5)',
      tag: 'PDF Brief Main Category',
      badge: 'Bestseller',
      image: '/images/weld_neck_flange_3d.jpg',
      desc: 'Weld Neck, Slip-On, Blind, Socket Weld & Threaded Forged Flanges in 304, 316L, 316Ti & Duplex 2205.',
      mrpPrice: '$48.00 / Pc',
      finalPrice: '$29.50 / Pc',
      discountBadge: 'Save 38% GCC Direct Export',
      grades: 'SS 304, 316L, 316Ti, Duplex 2205',
      pressure: 'Class 150# to 2500#',
      demand: 'Direct Factory Shipping to KSA & UAE'
    },
    {
      id: 'pipes',
      name: 'Stainless Steel Pipes & Tubes',
      tag: 'PDF Brief Category 2',
      badge: 'PDF Brief Option',
      image: '/images/pipes_3d_render.jpg',
      desc: 'Seamless & Welded Heavy Wall Pipes for high-pressure oil refineries and gas pipelines.',
      mrpPrice: '$1,850.00 / Ton',
      finalPrice: '$1,290.00 / Ton',
      discountBadge: 'Save 30% Bulk Export Offer',
      grades: 'ASTM A312 TP304/304L, TP316/316L',
      pressure: 'Sch 10S to Sch XXS (1/2" to 48")',
      demand: 'Aramco & ADNOC Pipeline Specs'
    },
    {
      id: 'fasteners',
      name: 'Industrial Fasteners & Stud Bolts',
      tag: 'PDF Brief Category 3',
      badge: 'PDF Brief Option',
      image: '/images/fasteners_3d_render.jpg',
      desc: 'High-tensile Heavy Hex Stud Bolts, Threaded Rods, Nuts, and Washers for flange bolting.',
      mrpPrice: '$12.50 / Set',
      finalPrice: '$7.80 / Set',
      discountBadge: 'Save 37% Assembly Bundle',
      grades: 'ASTM A193 B7/B8/B8M, A194 2H/8/8M',
      pressure: 'Metric M6-M100 / Imperial 1/4"-4"',
      demand: 'Flange Joint Assemblies'
    },
    {
      id: 'fittings',
      name: 'Buttweld Pipe Fittings',
      tag: 'Complementary Product',
      badge: 'Piping Ecosystem',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      desc: 'Seamless & Welded 90°/45° Elbows, Equal Tees, Concentric Reducers, and Pipe End Caps.',
      mrpPrice: '$32.00 / Pc',
      finalPrice: '$19.90 / Pc',
      discountBadge: 'Save 37% Factory Pricing',
      grades: 'ASTM A403 WP304/WP316L/WP316Ti',
      pressure: 'Matching Pipe Schedules',
      demand: 'Refinery Piping Construction'
    }
  ];

  return (
    <section id="related-products" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 font-semibold px-3 py-1 rounded-full text-xs mb-3 border border-amber-500/30">
            <Package className="w-3.5 h-3.5" /> Client Brief Product Portfolio & Pricing
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Product Portfolio & Direct Export Pricing
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Click any product card below to inspect available sizes (1/2" to 48"), pressure classes, and unit pricing.
          </p>
        </motion.div>

        {/* Product Cards Grid with Click Trigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => onSelectProduct(item)}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all cursor-pointer overflow-hidden group"
            >
              <div>
                {/* Product Image Thumbnail */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 border border-slate-800">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur text-amber-400 border border-amber-500/30 text-[11px] font-mono px-2.5 py-1 rounded-md font-semibold">
                    {item.tag}
                  </div>

                  <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow">
                    {item.badge}
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Struck-Through MRP & Final Export Price Box */}
                <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                      <span>Standard List MRP:</span>
                      <span className="line-through text-slate-400 font-mono">{item.mrpPrice}</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono flex items-center gap-1.5 mt-0.5">
                      <Tag className="w-4 h-4 text-emerald-400" />
                      <span>{item.finalPrice}</span>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {item.discountBadge}
                  </div>
                </div>

                {/* Technical Specifications Specs Pill */}
                <div className="space-y-2 text-xs font-mono bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 mb-6">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Grades:</span>
                    <span className="text-amber-300 font-semibold">{item.grades}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Sizes / Pressure:</span>
                    <span className="text-slate-200">{item.pressure}</span>
                  </div>
                  <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800">
                    <span className="text-slate-500">GCC Demand:</span>
                    <span className="text-emerald-400 font-semibold">{item.demand}</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProduct(item);
                }}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Inspect Sizes (1/2" to 48") & Price Matrix</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
