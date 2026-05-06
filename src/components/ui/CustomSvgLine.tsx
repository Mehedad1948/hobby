import React from 'react';

interface CustomSvgLineProps extends React.SVGProps<SVGSVGElement> {
  width?: number;  // Total width
  height?: number; // Total height (vertical line length)
}

export const CustomSvgLine: React.FC<CustomSvgLineProps> = ({ 
  width = 258, 
  height = 55,
  className = '', 
  ...props 
}) => {
  // Calculate offsets based on original dimensions (258x55)
  const widthOffset = width - 258;
  const heightOffset = height - 55;
  
  // Dynamic anchor points
  const rx = 253.33 + widthOffset; 
  const ry = 50.3301 + heightOffset;

  const pathData = `
    M-4.91142e-05 4.33008L4.33008 -4.95911e-05L8.66021 4.33008L4.33008 8.66021L-4.91142e-05 4.33008Z 
    M${rx - 4} ${ry}C${rx - 4} ${ry - 2.2092} ${rx - 2.209} ${ry - 4} ${rx} ${ry - 4}C${rx + 2.209} ${ry - 4} ${rx + 4} ${ry - 2.2092} ${rx + 4} ${ry}C${rx + 4} ${ry + 2.2092} ${rx + 2.209} ${ry + 4} ${rx} ${ry + 4}C${rx - 2.209} ${ry + 4} ${rx - 4} ${ry + 2.2092} ${rx - 4} ${ry}Z 
    M${rx} 4.33008V3.58008H${rx + 0.75}V4.33008H${rx}Z 
    M4.33008 4.33008V3.58008H${rx}V4.33008V5.08008H4.33008V4.33008Z 
    M${rx} 4.33008H${rx + 0.75}V${ry}H${rx}H${rx - 0.75}V4.33008H${rx}Z
  `.replace(/\s+/g, ' ').trim();

  return (
    <svg
      className={`absolute ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={pathData} fill="url(#paint0_linear_1_5193)" />
      <defs>
        <linearGradient
          id="paint0_linear_1_5193"
          x1="4.33008"
          y1="3.70846"
          x2={305.163 + widthOffset}
          y2="3.70846"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#876C20" />
          <stop offset="1" stopColor="#EDBE39" />
        </linearGradient>
      </defs>
    </svg>
  );
};
