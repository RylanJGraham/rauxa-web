"use client";

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden">
      <Image
        src="https://picsum.photos/1200/800?random=15" 
        alt="Young students hanging out in Barcelona"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="students barcelona"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-1"></div> {/* Overlay for text readability */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-primary-foreground tracking-tight">
          Spontaneous Plans, <br className="sm:hidden"/>Real Connections
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Rauxa helps you meet people and join events — instantly.
        </p>
        <Button 
          size="lg" 
          variant="default"
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg px-8 py-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          aria-label="Download the Rauxa App"
        >
          <ArrowDown className="mr-2 h-5 w-5" /> Download the App
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

