'use client';

import { useState, ReactNode } from 'react';

interface ScrollSliderProps {
  children: ReactNode[];
  renderDots?: (currentIndex: number, total: number) => ReactNode;
}

export default function ScrollSlider({ children, renderDots }: ScrollSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < children.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="flex items-center justify-center h-full gap-8 px-8">
        {/* Main Card */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            transform: `translateX(${currentIndex * -100}%)`,
          }}
        >
          <div className="w-[600px] h-[500px] rounded-3xl border-4 border-yellow-500 bg-white shadow-2xl overflow-hidden">
            {children[currentIndex]}
          </div>
        </div>

        {/* Next Card Preview */}
        {currentIndex < children.length - 1 && (
          <div className="w-[400px] h-[350px] rounded-3xl overflow-hidden blur-sm opacity-60 scale-90 transition-all duration-700">
            {children[currentIndex + 1]}
          </div>
        )}
      </div>

      {/* Navigation Buttons (optional) */}
      <button
        onClick={goToPrev}
        disabled={currentIndex === 0}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        disabled={currentIndex === children.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
      >
        →
      </button>

      {/* Render custom dots if provided */}
      {renderDots && renderDots(currentIndex, children.length)}
    </div>
  );
}
