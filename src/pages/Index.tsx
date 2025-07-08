
import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize GSAP and ScrollTrigger when they're available
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      
      // Smooth scrolling
      window.gsap.registerPlugin(window.ScrollTrigger);
      
      // Refresh ScrollTrigger after loading
      if (!isLoading) {
        window.ScrollTrigger.refresh();
      }
    }

    // Initialize Locomotive Scroll when available
    if (typeof window !== 'undefined' && window.LocomotiveScroll && !isLoading) {
      const locomotiveScroll = new window.LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: true,
        class: 'is-reveal'
      });

      // Update ScrollTrigger
      if (window.ScrollTrigger) {
        locomotiveScroll.on('scroll', window.ScrollTrigger.update);
        
        window.ScrollTrigger.scrollerProxy('[data-scroll-container]', {
          scrollTop(value) {
            return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
          },
          pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed'
        });

        window.ScrollTrigger.addEventListener('refresh', () => locomotiveScroll.update());
        window.ScrollTrigger.refresh();
      }

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handleLoadingComplete} />;
  }

  return (
    <div data-scroll-container className="relative">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="cyber-grid absolute inset-0 opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50"></div>
      </div>
    </div>
  );
};

export default Index;
