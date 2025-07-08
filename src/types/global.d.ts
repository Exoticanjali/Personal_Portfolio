
// Global type declarations for libraries loaded via CDN
declare global {
  interface Window {
    gsap: {
      timeline: (options?: any) => any;
      registerPlugin: (plugin: any) => void;
      fromTo: (target: any, from: any, to: any) => any;
      to: (target: any, options: any) => any;
      set: (target: any, options: any) => any;
    };
    ScrollTrigger: {
      create: (options: any) => any;
      refresh: () => void;
      update: () => void;
      addEventListener: (event: string, callback: () => void) => void;
      scrollerProxy: (scroller: string, options: any) => void;
    };
    LocomotiveScroll: new (options: any) => {
      on: (event: string, callback: (...args: any[]) => void) => void;
      scrollTo: (target: any, duration?: number, easing?: number) => void;
      update: () => void;
      destroy: () => void;
      scroll: {
        instance: {
          scroll: {
            y: number;
          };
        };
      };
    };
  }
}

export {};
