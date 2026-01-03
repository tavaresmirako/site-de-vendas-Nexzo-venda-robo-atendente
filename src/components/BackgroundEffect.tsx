import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createShock = () => {
      const line = document.createElement('div');
      line.className = 'shock-line';
      
      const isHorizontal = Math.random() > 0.5;
      const size = Math.random() * 500 + 200; 

      if (isHorizontal) {
        line.style.width = size + 'px';
        line.style.height = '1.8px';
        line.style.top = Math.random() * 100 + 'vh';
        line.style.left = Math.random() * 100 + 'vw';
      } else {
        line.style.width = '1.8px';
        line.style.height = size + 'px';
        line.style.top = Math.random() * 100 + 'vh';
        line.style.left = Math.random() * 100 + 'vw';
      }
      
      const duration = Math.random() * 0.25 + 0.05;
      line.style.animation = `shock-animation ${duration}s ease-out forwards`;
      
      container.appendChild(line);
      
      setTimeout(() => line.remove(), 400);
    };

    let timeoutId: NodeJS.Timeout;
    const startEffect = () => {
      const burst = Math.floor(Math.random() * 4) + 2;
      for (let i = 0; i < burst; i++) {
        createShock();
      }
      timeoutId = setTimeout(startEffect, Math.random() * 120 + 30);
    };

    startEffect();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <style>
        {`
          .shock-line {
            position: absolute;
            background: #00ff41;
            box-shadow: 0 0 25px #00ff41, 0 0 50px #00ff41, 0 0 80px #00ff41;
            opacity: 0;
            z-index: 2;
            pointer-events: none;
          }

          @keyframes shock-animation {
            0% { transform: scaleX(0); opacity: 0; }
            10% { opacity: 1; }
            20% { opacity: 0.6; }
            30% { opacity: 1; transform: scaleX(1); }
            100% { opacity: 0; transform: scaleX(2.2); }
          }
        `}
      </style>
      <div 
        id="bg-container" 
        ref={containerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#01110a',
          overflow: 'hidden',
          zIndex: -1,
        }}
      >
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </>
  );
};

export default BackgroundEffect;
