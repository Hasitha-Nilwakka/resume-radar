import React from 'react';

interface ScoreBarProps {
  score: number;
}

const ScoreBar: React.FC<ScoreBarProps> = ({ score }) => {
  // Clamp score between 0 and 100
  const normalizedScore = Math.min(Math.max(score, 0), 100);
  
  // SVG Parameters
  const radius = 90;
  const strokeWidth = 20;
  const center = 100;
  
  const arcLength = Math.PI * radius;
  
  // Calculate the dash offset: (percentage of arc NOT filled)
  const dashOffset = arcLength - (normalizedScore / 100) * arcLength;

  return (
    <div style={{ position: 'relative', width: '200px', margin: '0 auto' }}>
      <svg viewBox="0 0 200 110" style={{ transform: 'rotate(0deg)' }}>
        {/* Define Gradient */}
        <defs>
          <linearGradient id="vibrantGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#662D91" /> {/* Pink */}
            <stop offset="20%" stopColor="#EC1C24" /> {/* Purple */}
            <stop offset="60%" stopColor="#EC1C00" /> {/* Purple */}
            <stop offset="100%" stopColor="#F15A24" /> {/* Blue */}
          </linearGradient>
        </defs>

        {/* Background Track (Grey) */}
        <path
          d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />

        {/* Progress Bar (Gradient) */}
        <path
          d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`}
          fill="none"
          stroke="url(#vibrantGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={arcLength}
          strokeDashoffset={dashOffset}
          strokeLinecap="butt"
          style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
        />
      </svg>

      {/* Score Text Overlay */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        fontFamily: 'sans-serif'
      }}>
        <span style={{ fontSize: '28px', fontWeight: 'bold' }} className='dark:text-white'>{normalizedScore}</span>
        <span style={{ fontSize: '20px'}} className='text-[#666] dark:text-white/70'> / 100</span>
      </div>
    </div>
  );
};

export default ScoreBar;
