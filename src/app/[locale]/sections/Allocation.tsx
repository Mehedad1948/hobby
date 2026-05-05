import { GoldenTag } from '@/components/ui/golden-tag';
import React from 'react';

export default function Allocation() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">

        {/* Header Section */}
        <GoldenTag>Token Sale Allocation</GoldenTag>

        <h2 className="mt-6 mb-6 text-white">
          Simple. Secure. Seamless
        </h2>

        <p className="max-w-4xl text-white">
          GLDON token will be released on the Ethereum platform. It’s the token&rsquo;s compatibility with third-party services, wallets, and exchanges, and it provides easy-to-use integration.
          The objective is stability, not short-term volatility.
        </p>

        {/* Stats Cards Grid */}
        <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Live Gold Price */}
          <div className="relative p-6 rounded-2xl  flex flex-col items-start justify-between text-left overflow-hidden h-40">
            <div className="z-10 relative">
              <p className="text-sm text-gray-300 mb-2">Live Gold Price</p>
              <div className="text-3xl font-bold text-white mb-2">$2,387.65</div>
              <p className="text-sm text-gray-400">+0.56% (24h)</p>
            </div>

            {/* Simple SVG Chart Placeholder */}
            <div className="absolute bottom-0 right-0 w-32 h-20 pointer-events-none opacity-80">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                  <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-secondary-main)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--color-secondary-main)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,40 C10,40 20,20 30,25 C40,30 50,10 60,15 C70,20 80,5 90,20 L100,30 L100,50 L0,50 Z"
                  fill="url(#chart-gradient)"
                />
                <path
                  d="M0,40 C10,40 20,20 30,25 C40,30 50,10 60,15 C70,20 80,5 90,20 L100,30"
                  fill="none"
                  stroke="var(--color-secondary-main)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Card 2: Total Gold Backed */}
          <div className="relative p-6 rounded-2xl  flex flex-col items-start justify-between text-left h-40">
            <div>
              <p className="text-sm text-gray-300 mb-2">Total Gold Backed</p>
              <div className="text-3xl font-bold text-white mb-2">
                12,583.55 <span className="text-secondary-main">Kg</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-auto">+ Audited & Verified</p>
          </div>

          {/* Card 3: Total Holders */}
          <div className="relative p-6 rounded-2xl  flex flex-col items-start justify-between text-left h-40 overflow-hidden">
            <div className="z-10 relative">
              <p className="text-sm text-gray-300 mb-2">Total Holders</p>
              <div className="text-3xl font-bold text-white mb-2">23,456+</div>
              <p className="text-sm text-gray-400 mt-auto">Across 120+ Countries</p>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-24 opacity-60 pointer-events-none">
              {/* Replace this div with an actual <img src="/world-map.svg" /> or your map SVG component */}
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-main/30 to-transparent flex items-center justify-center">
                <span className="text-xs text-secondary-main/50">[Map SVG]</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
