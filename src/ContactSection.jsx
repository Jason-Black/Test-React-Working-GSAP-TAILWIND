import React, { useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  useEffect(() => {
    gsap.fromTo('.contact-form', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
    }});
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">Contact Us</h2>
        <form className="contact-form max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary hover:border-primary transition-colors duration-300 ease-in-out" 
            />
          </div>
          <div className="mb-6">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary hover:border-primary transition-colors duration-300 ease-in-out" 
            />
          </div>
          <div className="mb-6">
            <textarea 
              placeholder="Your Message" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary hover:border-primary transition-colors duration-300 ease-in-out h-32" 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-secondary text-white py-3 px-6 rounded-full shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
