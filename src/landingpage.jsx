import React from 'react';
import { gsap } from 'gsap';

const LandingPage = () => {
  React.useEffect(() => {
    gsap.fromTo('.hero-text', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' });
    gsap.fromTo('.hero-subtext', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.3 });
    gsap.fromTo('.cta-button', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)', delay: 0.6 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center p-4">
      <div className="text-center text-white">
        <h1 className="hero-text text-5xl md:text-6xl font-extrabold mb-4">
          We Build Beautiful Websites
        </h1>
        <p className="hero-subtext text-xl md:text-2xl font-light mb-8">
          Transforming your ideas into stunning digital experiences.
        </p>
        <button className="cta-button bg-white text-indigo-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
