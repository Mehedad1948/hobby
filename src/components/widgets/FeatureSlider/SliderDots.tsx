'use client';

interface SliderDotsProps {
  currentIndex: number;
  total: number;
  className?: string;
}

export function SliderDots({ currentIndex, total, className = '' }: SliderDotsProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full bg-yellow-200 transition-all duration-500 ${
            index === currentIndex
              ? 'w-12 h-3 bg-yellow-500'
              : 'w-3 h-3'
          }`}
        />
      ))}
    </div>
  );
}
