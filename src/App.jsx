import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Flange3DViewer from './components/Flange3DViewer';
import GradeVariants from './components/GradeVariants';
import SpecificationsTable from './components/SpecificationsTable';
import Certifications from './components/Certifications';
import ExportLogistics from './components/ExportLogistics';
import RelatedProducts from './components/RelatedProducts';
import ProductDetailModal from './components/ProductDetailModal';
import EnquiryForm from './components/EnquiryForm';
import AnalyticsConsole from './components/AnalyticsConsole';
import SeoStrategyModal from './components/SeoStrategyModal';
import Footer from './components/Footer';

export default function App() {
  const [prefillGrade, setPrefillGrade] = useState('316L');
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [lastEventPayload, setLastEventPayload] = useState(null);

  // Smooth scroll to enquiry form section
  const scrollToEnquiry = (gradeName = '') => {
    if (gradeName) {
      setPrefillGrade(gradeName);
    }
    const element = document.getElementById('enquiry-form-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleLeadSubmitted = (ga4Event, leadData) => {
    setLastEventPayload(ga4Event);
    // Auto open analytics console when lead is submitted to demonstrate GTM tracking
    setIsAnalyticsOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      {/* Header & Navigation */}
      <Navbar 
        onOpenEnquiry={() => scrollToEnquiry()} 
        onOpenSeoModal={() => setIsSeoModalOpen(true)}
        onToggleAnalytics={() => setIsAnalyticsOpen(!isAnalyticsOpen)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenEnquiry={() => scrollToEnquiry()} />

        {/* Interactive 3D Flange Visualizer & Manufacturing Video */}
        <Flange3DViewer onOpenEnquiry={() => scrollToEnquiry()} />

        {/* Grade Variants Explorer (304, 316, 316L, 316Ti, Duplex) */}
        <GradeVariants 
          onSelectGradeForQuote={(grade) => scrollToEnquiry(grade)} 
        />

        {/* Filterable Specifications & Dimensional Table */}
        <SpecificationsTable 
          onOpenEnquiry={() => scrollToEnquiry()} 
        />

        {/* Quality Certifications & MTC Specimen View */}
        <Certifications />

        {/* GCC Freight & Shipping Logistics */}
        <ExportLogistics />

        {/* PDF Brief Related Products Showcase (Flanges, Pipes, Fasteners) */}
        <RelatedProducts 
          onOpenEnquiry={() => scrollToEnquiry()}
          onSelectProduct={(product) => setSelectedProductModal(product)} 
        />

        {/* Enquiry Lead Capture Form Section */}
        <section className="py-16 lg:py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <EnquiryForm 
              prefillGrade={prefillGrade}
              onLeadSubmitted={handleLeadSubmitted}
            />
          </div>
        </section>
      </main>

      {/* Analytics Console Debugger (Mock GA4 & GTM) */}
      <AnalyticsConsole 
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
        lastEventPayload={lastEventPayload}
      />

      {/* Product Detail Modal (Size & Price Calculator) */}
      <ProductDetailModal 
        product={selectedProductModal}
        isOpen={!!selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onOpenEnquiry={(customPrefill) => scrollToEnquiry(customPrefill)}
      />

      {/* Assignment 2 SEO Specialist Deliverable Modal */}
      <SeoStrategyModal 
        isOpen={isSeoModalOpen}
        onClose={() => setIsSeoModalOpen(false)}
      />

      {/* Footer */}
      <Footer 
        onOpenEnquiry={() => scrollToEnquiry()}
        onOpenSeoModal={() => setIsSeoModalOpen(true)}
        onToggleAnalytics={() => setIsAnalyticsOpen(!isAnalyticsOpen)}
      />
    </div>
  );
}
