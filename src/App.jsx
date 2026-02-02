import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Activity,
  ShieldCheck,
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Award,
  Zap
} from 'lucide-react';

// --- Components ---
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import DeleteAccount from './pages/DeleteAccount';

// --- Home Page Component ---
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Equipment />
      <Contact />
      <Footer />
    </>
  );
};

// --- Main App Component ---
const App = () => {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
    </div>
  );
};

export default App;