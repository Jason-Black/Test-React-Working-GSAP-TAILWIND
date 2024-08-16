import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to('.header', {
      y: showHeader ? 0 : -100,
      duration: 0.5,
      ease: 'power4.out',
    });
  }, [showHeader]);

  return (
    <header className="header fixed top-0 left-0 right-0 bg-primary text-white rounded-b-lg shadow-lg py-4 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Web Design</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#portfolio" className="hover:text-accent">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
