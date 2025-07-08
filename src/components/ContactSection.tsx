
import React, { useEffect, useRef, useState } from 'react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      const tl = window.gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo('.contact-input',
        { opacity: 0, x: -50, filter: 'blur(5px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.2 }
      )
      .fromTo('.social-icon',
        { opacity: 0, scale: 0, rotation: 180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.6, stagger: 0.1 },
        '-=0.4'
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // GSAP submit animation
    if (typeof window !== 'undefined' && window.gsap) {
      const button = e.currentTarget.querySelector('button[type="submit"]');
      window.gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
    
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="contact-input">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 glass-card border-0 rounded-xl text-white placeholder-gray-400 
                           focus:neon-glow focus:outline-none transition-all duration-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-input">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 glass-card border-0 rounded-xl text-white placeholder-gray-400 
                           focus:neon-glow focus:outline-none transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contact-input">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 glass-card border-0 rounded-xl text-white placeholder-gray-400 
                           focus:neon-glow focus:outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="btn-glow w-full py-4 text-lg font-semibold text-white rounded-xl 
                         transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center justify-center gap-3">
                <i className="ph ph-paper-plane-tilt text-xl"></i>
                Send Message
              </span>
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                    <i className="ph ph-envelope text-neon-blue text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white">anjali@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                    <i className="ph ph-map-pin text-neon-purple text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                    <i className="ph ph-clock text-neon-cyan text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-300">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a 
                  href="#"
                  className="social-icon w-12 h-12 glass-card rounded-full flex items-center justify-center 
                             hover:neon-glow transition-all duration-300 group"
                >
                  <i className="ph ph-github-logo text-xl text-gray-400 group-hover:text-neon-blue"></i>
                </a>
                <a 
                  href="#"
                  className="social-icon w-12 h-12 glass-card rounded-full flex items-center justify-center 
                             hover:neon-glow transition-all duration-300 group"
                >
                  <i className="ph ph-linkedin-logo text-xl text-gray-400 group-hover:text-neon-purple"></i>
                </a>
                <a 
                  href="#"
                  className="social-icon w-12 h-12 glass-card rounded-full flex items-center justify-center 
                             hover:neon-glow transition-all duration-300 group"
                >
                  <i className="ph ph-twitter-logo text-xl text-gray-400 group-hover:text-neon-cyan"></i>
                </a>
                <a 
                  href="#"
                  className="social-icon w-12 h-12 glass-card rounded-full flex items-center justify-center 
                             hover:neon-glow transition-all duration-300 group"
                >
                  <i className="ph ph-instagram-logo text-xl text-gray-400 group-hover:text-neon-pink"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="floating-orb w-32 h-32 bg-neon-blue/10 top-20 left-20"></div>
        <div className="floating-orb w-24 h-24 bg-neon-purple/10 bottom-32 right-32"></div>
      </div>
    </section>
  );
};

export default ContactSection;
