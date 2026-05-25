import React from 'react';
import Hero from './components/Hero';
import DoctorProfile from './components/DoctorProfile';
import Specialties from './components/Specialties';
import TreatmentMethod from './components/TreatmentMethod';
import LineCTA from './components/LineCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100 pb-24">
      <Hero />
      <DoctorProfile />
      <Specialties />
      <TreatmentMethod />
      <LineCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
