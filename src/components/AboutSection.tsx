
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML5', icon: 'ph-file-html' },
    { name: 'CSS3', icon: 'ph-file-css' },
    { name: 'JavaScript', icon: 'ph-file-js' },
    { name: 'React', icon: 'ph-atom' },
    { name: 'Python', icon: 'ph-snake' },
    { name: 'AI/ML', icon: 'ph-brain' },
    { name: 'Node.js', icon: 'ph-leaf' },
    { name: 'GSAP', icon: 'ph-magic-wand' },
  ];

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

      tl.fromTo(imageRef.current,
        { opacity: 0, x: -100, filter: 'blur(10px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1 }
      )
      .fromTo(contentRef.current,
        { opacity: 0, x: 100, filter: 'blur(10px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1 },
        '-=0.5'
      )
      .fromTo('.skill-icon',
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/bd5eaff2-83b9-4d12-aabb-476c71f0d3d2.png"
                    alt="Anjali Profile"
                    className="w-72 h-72 rounded-full object-cover neon-glow"
                  />
                </div>
              </div>
              
              {/* Floating Elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-neon-blue/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-neon-purple/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate Computer Science student specializing in AI/ML, 
                  dedicated to pushing the boundaries of technology and creating 
                  innovative solutions that make a real impact.
                </p>
                <p className="text-lg">
                  With expertise spanning from machine learning algorithms to 
                  full-stack web development, I bridge the gap between cutting-edge 
                  AI research and practical, user-centric applications.
                </p>
                <p className="text-lg">
                  Currently exploring the fascinating worlds of neural networks, 
                  computer vision, and natural language processing while building 
                  robust web applications with modern frameworks.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-semibold text-white mb-6">Tech Stack</h3>
              <div className="grid grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-icon glass-card p-4 text-center group hover:neon-glow transition-all duration-300 cursor-pointer"
                  >
                    <i className={`ph ${skill.icon} text-3xl text-neon-blue group-hover:text-neon-purple transition-colors duration-300`}></i>
                    <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="floating-orb w-40 h-40 bg-neon-purple/10 top-20 right-20"></div>
        <div className="floating-orb w-32 h-32 bg-neon-blue/10 bottom-32 left-32"></div>
      </div>
    </section>
  );
};

export default AboutSection;
