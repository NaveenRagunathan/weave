import React from "react";

// Simple SVG illustration: stylized map with a dashed border and an arrow crossing it
const HeroMapIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Map shape */}
    <rect x="10" y="15" width="100" height="30" rx="12" fill="#222" stroke="#FFD700" strokeWidth="2" />
    {/* Dashed border */}
    <rect x="12" y="17" width="96" height="26" rx="10" stroke="#FFD700" strokeDasharray="4 3" strokeWidth="1.5" fill="none" />
    {/* Arrow crossing the border */}
    <g>
      <line x1="25" y1="45" x2="95" y2="25" stroke="#E11D48" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
      <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <polygon points="0 0, 7 3.5, 0 7" fill="#E11D48" />
      </marker>
    </g>
  </svg>
);

export default HeroMapIllustration;
