
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const tl = window.gsap.timeline({ delay: 0.5 });
      
      tl.fromTo(textRef.current, 
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.5'
      );

      // Floating animation for background elements
      window.gsap.to('.hero-orb', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.5
      });
    }
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="spline-container">
        <iframe 
          src='https://my.spline.design/aidatamodelinteraction-CqfWtjRnzmGkqhdW6AdsL2I1/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="AI Data Model Interaction"
        />
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      {/* Floating Orbs */}
      <div className="hero-orb floating-orb w-32 h-32 bg-neon-blue/20 top-20 left-20"></div>
      <div className="hero-orb floating-orb w-24 h-24 bg-neon-purple/20 top-40 right-32"></div>
      <div className="hero-orb floating-orb w-20 h-20 bg-neon-pink/20 bottom-32 left-40"></div>
      <div className="hero-orb floating-orb w-28 h-28 bg-neon-cyan/20 bottom-20 right-20"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div ref={textRef} className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-white">Hi, I'm</span>
            <span className="block text-gradient text-6xl md:text-8xl lg:text-9xl font-black">
              ANJALI
            </span>
            <span className="block text-gray-300 text-2xl md:text-3xl lg:text-4xl font-light mt-4">
              CSE (AI/ML) Student
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent solutions through cutting-edge AI/ML technologies 
            and full-stack development
          </p>
        </div>

        <button 
          ref={ctaRef}
          className="btn-glow mt-12 px-12 py-4 text-xl font-semibold text-white rounded-full 
                     transform transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-3">
            <i className="ph ph-rocket-launch text-2xl"></i>
            Hire Me
          </span>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ph ph-caret-down text-neon-blue text-3xl"></i>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
    </section>
  );
};

export default HeroSection;
