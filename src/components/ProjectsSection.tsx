import React, { useEffect, useRef } from 'react';
const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = [{
    id: 1,
    title: "EatTasty - Food Platform",
    description: "A comprehensive food delivery platform with modern UI/UX design and seamless user experience.",
    image: "/lovable-uploads/3b13b9b4-b518-44b9-92a3-c726356461eb.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#"
  }, {
    id: 2,
    title: "3D Gaming UI System",
    description: "Next-level gaming interface with immersive 3D elements and real-time character stats.",
    image: "/lovable-uploads/6c677394-072b-4012-83f4-f3403c30577e.png",
    tech: ["Three.js", "React", "WebGL"],
    github: "#",
    live: "#"
  }, {
    id: 3,
    title: "3D Developer Portfolio",
    description: "Interactive 3D portfolio showcasing web development skills with cutting-edge animations.",
    image: "/lovable-uploads/d5018471-e1ef-4601-8681-8c8afa441cbc.png",
    tech: ["Spline", "GSAP", "React"],
    github: "#",
    live: "#"
  }, {
    id: 4,
    title: "Gaming Website Platform",
    description: "Comprehensive gaming platform with character management and interactive elements.",
    image: "/lovable-uploads/65857be3-f8a4-4378-867f-f9a100728d6b.png",
    tech: ["React", "WebGL", "GSAP"],
    github: "#",
    live: "#"
  }, {
    id: 5,
    title: "Responsive Web Design",
    description: "Multi-device responsive website with modern design principles and optimal UX.",
    image: "/lovable-uploads/4b87da2d-86db-4f37-8139-82f37e91606e.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "#",
    live: "#"
  }, {
    id: 6,
    title: "Professional Web Builder",
    description: "Advanced website builder with drag-and-drop functionality and premium templates.",
    image: "/lovable-uploads/5434457f-964e-4f95-a8b2-11b476e9ae6d.png",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#",
    live: "#"
  }];
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Animate project cards
      window.gsap.fromTo('.project-card', {
        opacity: 0,
        y: 100,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Horizontal scroll for desktop
      if (window.innerWidth > 768) {
        const scrollWidth = containerRef.current?.scrollWidth || 0;
        const viewportWidth = window.innerWidth;
        window.gsap.to(containerRef.current, {
          x: -(scrollWidth - viewportWidth + 100),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1
          }
        });
      }
    }
  }, []);
  return <section id="projects" ref={sectionRef} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
          Explore my latest work showcasing innovative solutions and cutting-edge technologies
        </p>
      </div>

      <div ref={containerRef} className="flex gap-8 px-6 md:px-12 pb-8 md:pb-0" style={{
      width: 'max-content'
    }}>
        {projects.map((project, index) => <div key={project.id} className="project-card glass-card flex-shrink-0 w-80 md:w-96 group cursor-pointer
                       hover:neon-glow transition-all duration-500 hover:-translate-y-2">
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-t-2xl h-48 md:h-56">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Overlay buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a href={project.github} className="btn-glow p-3 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <i className="ph ph-github-logo text-xl"></i>
                </a>
                <a href={project.live} className="btn-glow p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <i className="ph ph-arrow-square-out text-xl"></i>
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => <span key={tech} className="px-3 py-1 text-xs font-medium bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30 hover:bg-neon-blue/30 transition-colors duration-300 text-center">
                    {tech}
                  </span>)}
              </div>

              {/* Project Links */}
              <div className="flex gap-4 pt-2">
                <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors duration-300">
                  <i className="ph ph-github-logo"></i>
                  <span className="text-sm">Code</span>
                </a>
                <a href={project.live} className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors duration-300">
                  <i className="ph ph-arrow-square-out"></i>
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </div>
          </div>)}
      </div>

      {/* Mobile scroll indicator */}
      <div className="md:hidden text-center mt-8">
        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
          <i className="ph ph-swipe-right"></i>
          Swipe to explore more projects
        </p>
      </div>
    </section>;
};
export default ProjectsSection;