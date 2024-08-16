import React, { useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  useEffect(() => {
    gsap.from('.portfolio-item', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.portfolio-item',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: 1,
      },
    });
  }, []);

  const projects = Array(6).fill('/path-to-dummy-image.jpg'); // Dummy image paths

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item relative">
              <img src={project} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-lg hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity rounded-lg flex items-center justify-center">
                <h3 className="text-2xl font-bold">Project {index + 1}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
