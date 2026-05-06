import { GoldenTag } from '@/components/ui/golden-tag';
import { imageUrlHandler } from '@/lib/helpers/image-url-handler';
import Image from 'next/image';
import React from 'react';

export function BackingTransparencySection() {
  const features = [
    {
      title: "100% Gold Backed",
      description: "Each token is backed 1:1 by physical gold.",
      // Replace this with your actual image path
      iconPath: imageUrlHandler('star-bars.png', '/dev-only/star-bars.png'),
    },
    {
      title: "Bank-Level Security",
      description: "Institutional-grade security to protect your assets.",
      iconPath: imageUrlHandler('banke-level.png', '/dev-only/banke-level.png')
    },
    {
      title: "Global Accessibility",
      description: "Send, receive, and trade anytime, anywhere.",
      iconPath: imageUrlHandler('global-access.png', '/dev-only/global-access.png')
    },
    {
      title: "Full Transparency",
      description: "Real-time audit, reserve proofs, and verifiable data.",
      iconPath: imageUrlHandler('Full transparncy.png', '/dev-only/Full transparncy.png'),
    }
  ];

  return (
    <section className="py-20 px-4 bg-white flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <GoldenTag>Backing & Transparency</GoldenTag>

          <h2 className="mt-8 mb-6 ">
            A Token Built on Real Gold
          </h2>

          <p className="max-w-4xl text-base">
            In a digital economy filled with abstractions, leverage, and promises, this project is built on one clear foundation:
            real assets, real custody, and real verification.
          </p>
        </div>

        {/* Features Grid */}
        {/* lg:divide-x creates the vertical lines between items on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x divide-secondary-main/20">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center px-6">

              {/* Icon Container - Pale yellow background */}
              <div className="aspect-square p-4 rounded-full bg-[#fcf9f2] flex items-center justify-center mb-8">
                {/* Placeholder for your image */}
                <Image
                  className='rounded-full w-16'
                  alt={feature.title}
                  width={100}
                  height={100}
                  src={feature.iconPath}
                />
              </div>

              {/* Text Content */}
              <h3 className=" mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-[250px]">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
