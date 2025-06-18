import React from 'react';

interface JourneyFlowLineProps {
  className?: string;
}

const JourneyFlowLine = ({ className }: JourneyFlowLineProps) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="none"
      viewBox="0 0 1440 800"
    >
      <path
        d="M-200 200 Q 400 300, 720 400 T 1640 600"
        fill="none"
        stroke="url(#journey-gradient)"
        strokeWidth="2"
        strokeDasharray="5 5"
        className="opacity-50"
      />
      <defs>
        <linearGradient id="journey-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default JourneyFlowLine;
