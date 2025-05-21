
"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden h-[70vh] md:h-[90vh]">
      <Image
        src="/HeaderImage2.jpg" 
        alt="Young students hanging out in Barcelona, exemplifying spontaneous connections."
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="barcelona students"
        priority
      />
      <div className="absolute inset-0 bg-black/70 z-1"></div> {/* Overlay for text readability, increased opacity */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-primary-foreground tracking-tight">
          Spontaneous Plans, <br className="sm:hidden"/>Real Connections
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Rauxa helps you meet people and join events <br /> <strong className="font-bold">instantly</strong>
        </p>
        <Button 
          size="lg" 
          variant="default" // Provides text-primary-foreground
          className="bg-gradient-to-r from-[#0367A6] to-[#D9043D] text-primary-foreground hover:brightness-90 rounded-full text-lg px-8 py-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          aria-label="Download the Rauxa App"
        >
          Download Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
