
import React, { useEffect, useRef } from 'react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      window.gsap.fromTo(footerRef.current,
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate floating particles
      window.gsap.to('.footer-particle', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3
      });
    }
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: '#', icon: 'ph-github-logo', label: 'GitHub' },
    { href: '#', icon: 'ph-linkedin-logo', label: 'LinkedIn' },
    { href: '#', icon: 'ph-twitter-logo', label: 'Twitter' },
    { href: '#', icon: 'ph-instagram-logo', label: 'Instagram' },
  ];

  return (
    <footer ref={footerRef} className="relative py-16 px-6 mt-20">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="footer-particle absolute w-2 h-2 bg-neon-blue/40 rounded-full top-10 left-10"></div>
        <div className="footer-particle absolute w-3 h-3 bg-neon-purple/40 rounded-full top-20 right-20"></div>
        <div className="footer-particle absolute w-2 h-2 bg-neon-cyan/40 rounded-full bottom-20 left-32"></div>
        <div className="footer-particle absolute w-4 h-4 bg-neon-pink/40 rounded-full bottom-10 right-40"></div>
        <div className="footer-particle absolute w-2 h-2 bg-neon-green/40 rounded-full top-32 left-64"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Logo & Description */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gradient mb-4">ANJALI</h3>
              <p className="text-gray-400 leading-relaxed">
                Crafting innovative AI/ML solutions and immersive web experiences 
                that push the boundaries of technology.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 
                               hover:translate-x-1 transform transition-transform"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    className="w-12 h-12 glass-card rounded-full flex items-center justify-center 
                               hover:neon-glow transition-all duration-300 group transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <i className={`ph ${social.icon} text-xl text-gray-400 group-hover:text-neon-blue transition-colors duration-300`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2024 Anjali. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-neon-blue transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-neon-blue transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent -z-10"></div>
    </footer>
  );
};

export default Footer;
