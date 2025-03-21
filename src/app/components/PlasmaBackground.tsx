// components/PlasmaBackground.tsx
"use client";

import React, { useState, useEffect } from 'react';

const PlasmaBackground: React.FC = () => {
  const colorSets = [
    ['rgb(119, 11, 136)', 'rgb(87, 62, 54)', 'rgb(214, 46, 65)'], // Set 1
    ['rgb(50, 150, 200)', 'rgb(200, 100, 50)', 'rgb(100, 200, 150)'], // Set 2
    ['rgb(255, 100, 0)', 'rgb(0, 150, 255)', 'rgb(150, 0, 255)'], // Set 3
  ];

  const [currentColors, setCurrentColors] = useState(colorSets[0]); // Initial color set
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const screenHeight = window.innerHeight;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const is75PercentVisible = rect.top <= screenHeight * 0.25 && rect.bottom >= screenHeight * 0.75;

      if (is75PercentVisible) {
        if (index === 0) {
          setCurrentColors(colorSets[0]);
        } else if (index === 1) {
          setCurrentColors(colorSets[1]);
        } else if (index === 2) {
          setCurrentColors(colorSets[2]);
        }
      }
    });
  };

  const updateViewportSize = () => {
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateViewportSize);
    
    // Initialize values
    updateViewportSize();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateViewportSize);
    };
  }, []);

  // Calculate gradient sizes based on viewport
  const getGradientSize = (baseSize: number) => {
    const smallerDimension = Math.min(viewportSize.width, viewportSize.height);
    return Math.max(smallerDimension * (baseSize / 1000), 150); // Ensure minimum size
  };

  const gradient1Size = getGradientSize(700);
  const gradient2Size = getGradientSize(600);
  const gradient3Size = getGradientSize(500);

  return (
    <div className="wrapper">
      <div 
        className="gradient gradient-1" 
        style={{ 
          background: currentColors[0],
          width: `${gradient1Size}px`,
          height: `${gradient1Size}px`
        }}
      ></div>
      <div 
        className="gradient gradient-2" 
        style={{ 
          background: currentColors[1],
          width: `${gradient2Size}px`,
          height: `${gradient2Size}px`
        }}
      ></div>
      <div 
        className="gradient gradient-3" 
        style={{ 
          background: currentColors[2],
          width: `${gradient3Size}px`,
          height: `${gradient3Size}px`
        }}
      ></div>
      <style jsx global>{`
        .wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          filter: blur(${Math.min(viewportSize.width, viewportSize.height) * 0.15}px);
          z-index: -10;
        }

        .gradient {
          position: absolute;
          border-radius: 100%;
          opacity: 0.7; /* Increased from 0.6 for better visibility on mobile */
          mix-blend-mode: screen;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
        }

        .gradient-1 {
          animation-duration: 7s;
          left: 60%;
          top: 40%;
          animation-name: animation-gradient-1;
        }
        .gradient-2 {
          animation-duration: 7s;
          left: 40%;
          top: 60%;
          animation-name: animation-gradient-2;
        }
        .gradient-3 {
          animation-duration: 7s;
          left: 50%;
          top: 50%;
          animation-name: animation-gradient-3;
        }

        @keyframes animation-gradient-1 {
          0% {
            transform: translateY(-50%) translateX(-50%) rotate(-20deg) translateX(20%);
          }
          25% {
            transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg) rotate(80deg) translateX(30%);
          }
          50% {
            transform: translateY(-50%) translateX(-50%) rotate(180deg) translateX(25%);
          }
          75% {
            transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg) rotate(240deg) translateX(15%);
          }
          100% {
            transform: translateY(-50%) translateX(-50%) rotate(340deg) translateX(20%);
          }
        }

        @keyframes animation-gradient-2 {
          0% {
            transform: translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%);
          }
          25% {
            transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg) rotate(110deg) translateX(-5%);
          }
          50% {
            transform: translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%);
          }
          75% {
            transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg) rotate(300deg) translateX(-10%);
          }
          100% {
            transform: translateY(-50%) translateX(-50%) rotate(400deg) translateX(-20%);
          }
        }

        @keyframes animation-gradient-3 {
          0% {
            transform: translateY(-50%) translateX(-50%) translateX(-15%) translateY(10%);
          }
          20% {
            transform: translateY(-50%) translateX(-50%) translateX(20%) translateY(-30%);
          }
          40% {
            transform: translateY(-50%) translateX(-50%) translateX(-25%) translateY(-15%);
          }
          60% {
            transform: translateY(-50%) translateX(-50%) translateX(30%) translateY(20%);
          }
          80% {
            transform: translateY(-50%) translateX(-50%) translateX(5%) translateY(35%);
          }
          100% {
            transform: translateY(-50%) translateX(-50%) translateX(-15%) translateY(10%);
          }
        }

        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .wrapper {
            filter: blur(70px); /* Less blur on mobile for sharper colors */
          }
          
          .gradient {
            opacity: 0.8; /* Even higher opacity on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default PlasmaBackground;