import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, Building, MapPin, Layers, Server, FileSpreadsheet, Download, ShieldCheck, UserCheck, Clock } from 'lucide-react';

export default function EnquiryForm({ prefillGrade = '', onLeadSubmitted }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    countryCode: '+966',
    phone: '',
    companyName: '',
    flangeType: 'Weld Neck (WN)',
    grade: prefillGrade || '316L',
    quantity: '50 to 200 Pcs',
    destinationPort: 'Jebel Ali Port (UAE)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  // Client-Side Validation Logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid work email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9\s\-+]{6,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (digits only)';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Organization name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate Dummy CRM Endpoint & Google Sheet Log
    setTimeout(() => {
      const leadId = 'BS-LEAD-' + Math.floor(100000 + Math.random() * 900000);
      const timestamp = new Date().toLocaleString();

      const leadPayload = {
        leadId,
        timestamp,
        ...formData,
        fullPhone: `${formData.countryCode} ${formData.phone}`,
        status: 'NEW_LEAD_CRM_LOGGED',
        assignedEngineer: 'Tariq Al-Mansoor (GCC Technical Lead)',
        googleSheetRow: Math.floor(100 + Math.random() * 900)
      };

      // 1. Store in LocalStorage (verifiable client-side dummy CRM storage)
      const existingLeads = JSON.parse(localStorage.getItem('bhansali_crm_leads') || '[]');
      existingLeads.unshift(leadPayload);
      localStorage.setItem('bhansali_crm_leads', JSON.stringify(existingLeads));

      // 2. Mock GTM DataLayer GA4 Event Dispatcher
      const ga4EventData = {
        event: 'generate_lead',
        lead_id: leadId,
        value: 1500.00,
        currency: 'USD',
        product_interest: `${formData.flangeType} ${formData.grade}`,
        destination_country: formData.destinationPort,
        crm_status: 'Logged to Dummy CRM'
      };

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(ga4EventData);

      if (onLeadSubmitted) {
        onLeadSubmitted(ga4EventData, leadPayload);
      }

      setIsSubmitting(false);
      setSubmissionSuccess(leadPayload);
    }, 800);
  };

  const handleDownloadProForma = () => {
    setDownloadingPdf(true);
    setTimeout(() => setDownloadingPdf(false), 2500);
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setFormData({
      fullName: '',
      workEmail: '',
      countryCode: '+966',
      phone: '',
      companyName: '',
      flangeType: 'Weld Neck (WN)',
      grade: '316L',
      quantity: '50 to 200 Pcs',
      destinationPort: 'Jebel Ali Port (UAE)',
      message: ''
    });
    setErrors({});
  };

  return (
    <div id="enquiry-form-container" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Form Title */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 font-semibold px-3 py-1 rounded-full text-xs mb-2 border border-amber-500/30">
          <Send className="w-3.5 h-3.5" /> Instant B2B Lead Capture & CRM Integration
        </div>
        <h3 className="font-heading text-2xl font-bold text-slate-100">
          Request Price Quote & Material Test Sheet
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Submit your RFQ requirements for Stainless Steel Flanges. Sales engineers reply within <strong className="text-amber-400">2 Hours</strong>.
        </p>
      </div>

      {/* Submission Success Screen */}
      {submissionSuccess ? (
        <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-center space-y-5 animate-scaleUp">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <h4 className="font-heading text-2xl font-bold text-slate-100">
              Enquiry Logged & Verified!
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Your lead payload is stored in our verifiable CRM database, logged to Google Sheets, and dispatched to GTM GA4.
            </p>
          </div>

          {/* Assigned Sales Engineer & Speed Badge */}
          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl text-xs flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2 text-slate-300">
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>Assigned Engineer: <strong className="text-amber-300">{submissionSuccess.assignedEngineer}</strong></span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400 font-mono">
              <Clock className="w-3.5 h-3.5" /> 2-Hour Response Guaranteed
            </div>
          </div>

          {/* Integration Log Details */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-left text-xs space-y-2.5 font-mono text-slate-300">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500 flex items-center gap-1"><Server className="w-3.5 h-3.5 text-blue-400" /> Verifiable CRM Ref:</span>
              <span className="text-amber-400 font-bold">{submissionSuccess.leadId}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500 flex items-center gap-1"><FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" /> Google Sheets API:</span>
              <span>Row #{submissionSuccess.googleSheetRow} Logged</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">Destination Port:</span>
              <span>{submissionSuccess.destinationPort}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">GTM / GA4 Event Fired:</span>
              <span className="text-emerald-400 font-semibold">generate_lead ✓</span>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleDownloadProForma}
              className="w-full bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold py-3 px-4 rounded-xl text-xs transition-colors border border-amber-500/30 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{downloadingPdf ? 'Generating Pro-Forma PDF...' : 'Download Pro-Forma RFQ Summary'}</span>
            </button>

            <button
              onClick={handleReset}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-lg"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        /* Form */
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Full Name <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Tariq Al-Mansoor"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full bg-slate-950 border ${errors.fullName ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500`}
              />
              {errors.fullName && (
                <div className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </div>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Work Email <span className="text-amber-400">*</span>
              </label>
              <input
                type="email"
                placeholder="procurement@company.sa"
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                className={`w-full bg-slate-950 border ${errors.workEmail ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500`}
              />
              {errors.workEmail && (
                <div className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.workEmail}
                </div>
              )}
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Phone Number with GCC Selector */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Phone / WhatsApp <span className="text-amber-400">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-2 py-2.5 text-slate-200 focus:outline-none focus:border-amber-500 text-xs font-mono"
                >
                  <option value="+966">🇸🇦 +966 (KSA)</option>
                  <option value="+971">🇦🇪 +971 (UAE)</option>
                  <option value="+968">🇴🇲 +968 (Oman)</option>
                  <option value="+974">🇶🇦 +974 (Qatar)</option>
                  <option value="+965">🇰🇼 +965 (Kuwait)</option>
                  <option value="+91">🇮🇳 +91 (India)</option>
                </select>
                <input
                  type="text"
                  placeholder="9677806361"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full bg-slate-950 border ${errors.phone ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500`}
                />
              </div>
              {errors.phone && (
                <div className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </div>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Company / Organization <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Al-Jubail Oilfield Services Contracting"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className={`w-full bg-slate-950 border ${errors.companyName ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500`}
              />
              {errors.companyName && (
                <div className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.companyName}
                </div>
              )}
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Flange Type */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">Flange Type</label>
              <select
                value={formData.flangeType}
                onChange={(e) => setFormData({ ...formData, flangeType: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
              >
                <option value="Weld Neck (WN)">Weld Neck (WN)</option>
                <option value="Slip-On (SO)">Slip-On (SO)</option>
                <option value="Blind Flange (BL)">Blind Flange (BL)</option>
                <option value="Socket Weld (SW)">Socket Weld (SW)</option>
                <option value="Threaded (TH)">Threaded (TH)</option>
              </select>
            </div>

            {/* Grade Variant */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">Grade Variant</label>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
              >
                <option value="304/304L">SS 304 / 304L</option>
                <option value="316L">SS 316 / 316L</option>
                <option value="316Ti">SS 316Ti</option>
                <option value="Duplex 2205">Duplex 2205</option>
              </select>
            </div>

            {/* Destination Port */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">Destination Port</label>
              <select
                value={formData.destinationPort}
                onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500 text-xs"
              >
                <option value="Jebel Ali Port (UAE)">Jebel Ali Port (UAE)</option>
                <option value="Dammam Port (KSA)">King Abdulaziz Port Dammam (KSA)</option>
                <option value="Jeddah Port (KSA)">Jeddah Islamic Port (KSA)</option>
                <option value="Hamad Port (Qatar)">Hamad Port (Qatar)</option>
                <option value="Salalah Port (Oman)">Salalah Port (Oman)</option>
                <option value="Shuwaikh Port (Kuwait)">Shuwaikh Port (Kuwait)</option>
              </select>
            </div>

          </div>

          {/* Notes / Message */}
          <div>
            <label className="block text-slate-300 font-medium mb-1">Detailed Requirements (Size, Rating, Facing)</label>
            <textarea
              rows="3"
              placeholder="e.g., Need 150 Pcs 6 inch Class 300# Weld Neck SS 316L RF flanges with EN 10204 3.1 MTC."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Verifying & Logging CRM Record...' : 'Submit Enquiry & Receive Quote'}</span>
          </button>

          <p className="text-[11px] text-slate-500 text-center pt-1">
            🔒 Form submission logs data to dummy CRM endpoint & triggers mock GA4 <code className="text-amber-400 font-mono">generate_lead</code> tracking event.
          </p>
        </form>
      )}

    </div>
  );
}
