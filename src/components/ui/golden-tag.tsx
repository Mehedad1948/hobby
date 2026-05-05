import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function GoldenTag({ children, className = '' }: TagProps) {
  return (
    <div 
      className={`inline-flex items-center justify-center py-1 px-4 rounded-full border-1 border-secondary-main bg-transparent ${className}`}
    >
      {/* Inner dashed border */}
        <span className="text-secondary-dark text-sm font-normal">
          {children}
        </span>
    </div>
  );
}
