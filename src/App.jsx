import './App.css';
import React from 'react';
import LandingPage from './landingpage';
import HeroSection from './HeroSection';
import Header from './Header';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';

function App() {
  
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;