import React from 'react';

interface GlowBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: string | number;
  background?: string;
  blur?: string;
  width?: string;
}

export const GlowBackground: React.FC<GlowBackgroundProps> = ({
  aspectRatio = '2 / 1', // Controls the ellipse shape (e.g., '1/1' is a perfect circle)
  background = '#FFCC00B2',
  blur = '250px',
  width = '100%',
  className = '',
  style,
  ...props
}) => {
  return (
    <div
      className={`absolute -z-10 pointer-events-none ${className}`}
      style={{
        width,
        aspectRatio,
        background,
        borderRadius: '50%',
        filter: `blur(${blur})`, // Use 'backdrop-filter' here instead if you specifically want the frosted glass effect
        ...style,
      }}
      {...props}
    />
  );
};
