import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo('.hero-heading', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' });
    gsap.fromTo('.hero-subheading', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.3 });
    gsap.fromTo('.cta-button', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)', delay: 0.6 });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white">
        <h1 className="hero-heading text-6xl md:text-7xl font-bold">Creative Solutions</h1>
        <p className="hero-subheading text-2xl md:text-3xl mt-4">We design your success</p>
        <button className="cta-button mt-8 bg-accent text-white py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
