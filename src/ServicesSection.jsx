import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ServicesSection = () => {
  useEffect(() => {
    gsap.fromTo('.service-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', stagger: 0.2 });
  }, []);

  const services = [
    { title: 'Web Design', description: 'Beautiful and responsive websites.' },
    { title: 'SEO Optimization', description: 'Rank higher in search results.' },
    { title: 'Advertising', description: 'Targeted campaigns to boost your brand.' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
