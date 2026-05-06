"use client";

import { GoldenTag } from '@/components/ui/golden-tag';
import { imageUrlHandler } from '@/lib/helpers/image-url-handler';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="w-full mt-16 max-w-md lg:max-w-full mx-auto flex lg:flex-row lg:justify-center flex-col gap-6">

          {/* Card 1: Live Gold Price */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="relative p-6 rounded-2xl border-primary-main border bg-primary/10 gap-8 flex items-center justify-between text-left overflow-hidden h-40"
          >
            <div className="z-10 relative">
              <p className="text-sm text-gray-500 font-semibold mb-2">Live Gold Price</p>
              <div className="text-3xl font-bold text-white mb-2">$2,387.65</div>
              <p className="text-sm text-gray-500 font-semibold">+0.56% (24h)</p>
            </div>

            {/* Simple SVG Chart Placeholder */}
            <div className="w-32 h-20 pointer-events-none opacity-80">
              <Image
                width={150}
                height={150}
                alt='Gold'
                src={imageUrlHandler('stack-chart.png', '/dev-only/stack-chart.png')}
              />
            </div>
          </motion.div>

          {/* Card 2: Total Gold Backed */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative p-6 rounded-2xl border-primary-main border bg-primary/10 flex gap-8 items-center justify-between text-left h-40"
          >
            <div>
              <p className="text-sm text-gray-500 font-semibold mb-2">Gold Trading Volume</p>
              <div className="text-3xl font-bold text-white mb-2">
                $75,200.95
              </div>
               <p className="text-sm text-gray-500 font-semibold mt-auto">+0.56% (24h)</p>
            </div>
            <Image
              className='object-contain w-21'
              width={150}
              height={150}
              alt='Gold'
              src={imageUrlHandler('dollar-exchange.png', '/dev-only/dollar-exchange.png')}
            />
          </motion.div>

          {/* Card 3: Total Holders */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="relative p-6 rounded-2xl border-primary-main border bg-primary/10 flex items-center justify-between text-left h-40 overflow-hidden"
          >
            <div className="z-10 relative">
              <p className="text-sm text-gray-500 font-semibold mb-2">Total Holders</p>
              <div className="text-3xl font-bold text-white mb-2">23,456+</div>
              <p className="text-sm text-gray-500 font-semibold mt-auto">Across 120+ Countries</p>
            </div>

            {/* Map Placeholder Graphic */}
            <Image
              width={150}
              height={150}
              alt='Gold'
              className='object-contain h-20'
              src={imageUrlHandler('world.png', '/dev-only/world.png')}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
