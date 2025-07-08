
import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className={`preloader fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-all duration-1000 ${isComplete ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <div className="flex flex-col items-center space-y-8">
        {/* Animated Logo/Name */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient animate-pulse">
            ANJALI
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-30 blur-2xl animate-pulse"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 bg-gray-800 rounded-full h-2 overflow-hidden">
          <div 
            className="progress-bar h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress Text */}
        <div className="text-lg font-medium text-gray-300">
          {Math.floor(progress)}%
        </div>

        {/* Loading Animation */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-neon-blue rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="floating-orb w-20 h-20 bg-neon-blue/30 top-1/4 left-1/4 animate-float"></div>
      <div className="floating-orb w-16 h-16 bg-neon-purple/30 top-3/4 right-1/3" style={{ animationDelay: '2s' }}></div>
      <div className="floating-orb w-12 h-12 bg-neon-pink/30 bottom-1/4 left-1/2" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default Preloader;
