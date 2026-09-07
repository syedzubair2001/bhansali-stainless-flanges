import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Tag, ChevronRight, Download, Package, Layers } from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose, onOpenEnquiry }) {
  const [selectedSize, setSelectedSize] = useState('2" (DN50)');
  const [selectedClass, setSelectedClass] = useState('Class 300#');
  const [selectedGrade, setSelectedGrade] = useState('SS 316L');

  if (!isOpen || !product) return null;

  // Size & Pricing Matrix
  const sizePriceMatrix = {
    '1/2" (DN15)': { mrp: '$22.00', price: '$14.50', weight: '0.8 kg' },
    '1" (DN25)': { mrp: '$34.00', price: '$21.00', weight: '1.4 kg' },
    '2" (DN50)': { mrp: '$48.00', price: '$29.50', weight: '3.2 kg' },
    '4" (DN100)': { mrp: '$95.00', price: '$58.00', weight: '7.5 kg' },
    '6" (DN150)': { mrp: '$160.00', price: '$98.00', weight: '14.2 kg' },
    '8" (DN200)': { mrp: '$240.00', price: '$145.00', weight: '22.0 kg' },
    '12" (DN300)': { mrp: '$450.00', price: '$285.00', weight: '42.0 kg' },
    '24" (DN600)': { mrp: '$1,200.00', price: '$780.00', weight: '115.0 kg' }
  };

  const currentSizeSpec = sizePriceMatrix[selectedSize] || sizePriceMatrix['2" (DN50)'];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
        
        {/* Header */}
        <div className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-amber-400 uppercase font-semibold">
                Interactive Product Inspector & Size Calculator
              </span>
              <h3 className="font-heading font-bold text-slate-100 text-lg">
                {product.name}
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-slate-950 space-y-6 text-xs sm:text-sm">
          
          {/* Top Row: Image & Key Highlight Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            <div className="sm:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 h-52 group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur px-2 py-1 rounded text-[10px] text-amber-400 font-mono">
                ASTM A182 Certified
              </div>
            </div>

            <div className="sm:col-span-7 space-y-3">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {product.desc}
              </p>

              {/* Dynamic Price Box for Selected Size */}
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs font-semibold">Selected Size Pricing ({selectedSize}):</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/30 font-semibold">
                    Direct Export Rate
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="line-through text-slate-500 font-mono text-sm">{currentSizeSpec.mrp}</span>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">{currentSizeSpec.price}</span>
                  <span className="text-slate-400 text-xs">/ Piece</span>
                </div>

                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800 flex justify-between font-mono">
                  <span>Est. Piece Weight: <strong className="text-amber-400">{currentSizeSpec.weight}</strong></span>
                  <span>MTC EN 10204 3.1 Included</span>
                </div>
              </div>
            </div>

          </div>

          {/* Size & Pressure Class Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Size Selector */}
            <div>
              <label className="block text-slate-400 font-semibold mb-1 text-xs">
                Select Nominal Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-100 font-mono text-xs focus:border-amber-500"
              >
                {Object.keys(sizePriceMatrix).map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Pressure Rating */}
            <div>
              <label className="block text-slate-400 font-semibold mb-1 text-xs">
                Pressure Class Rating
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-100 font-mono text-xs focus:border-amber-500"
              >
                <option value="Class 150#">Class 150# (PN16)</option>
                <option value="Class 300#">Class 300# (PN40)</option>
                <option value="Class 600#">Class 600# (PN100)</option>
                <option value="Class 1500#">Class 1500# (PN250)</option>
                <option value="Class 2500#">Class 2500# (PN400)</option>
              </select>
            </div>

            {/* Material Grade */}
            <div>
              <label className="block text-slate-400 font-semibold mb-1 text-xs">
                Material Grade Alloy
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-100 font-mono text-xs focus:border-amber-500"
              >
                <option value="SS 304">SS 304 (UNS S30400)</option>
                <option value="SS 316L">SS 316L (UNS S31603)</option>
                <option value="SS 316Ti">SS 316Ti (UNS S31635)</option>
                <option value="Duplex 2205">Duplex 2205 (UNS S31803)</option>
              </select>
            </div>

          </div>

          {/* Quick Dimensional Table Summary */}
          <div className="border border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-slate-900 text-slate-400">
                <tr>
                  <th className="py-2.5 px-3">Selected Spec</th>
                  <th className="py-2.5 px-3">List MRP</th>
                  <th className="py-2.5 px-3">Export Rate</th>
                  <th className="py-2.5 px-3">Unit Weight</th>
                  <th className="py-2.5 px-3 text-right">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr className="bg-slate-900/40 font-bold">
                  <td className="py-2.5 px-3 text-amber-400">{selectedSize} • {selectedClass} • {selectedGrade}</td>
                  <td className="py-2.5 px-3 line-through text-slate-500">{currentSizeSpec.mrp}</td>
                  <td className="py-2.5 px-3 text-emerald-400">{currentSizeSpec.price}</td>
                  <td className="py-2.5 px-3">{currentSizeSpec.weight}</td>
                  <td className="py-2.5 px-3 text-right text-emerald-400">Save ~38%</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-slate-400 text-xs">
            Ready to order <strong className="text-white">{selectedSize} {selectedGrade}</strong>?
          </span>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-800 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(`${product.name} ${selectedSize} ${selectedGrade}`);
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <span>Get Quote for {selectedSize}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
