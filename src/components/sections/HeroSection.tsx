"use client";

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary via-primary/30 to-background text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 pattern-bg"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-primary-foreground  tracking-tight">
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
      <style jsx>{`
        .pattern-bg {
          background-image: radial-gradient(circle, hsl(var(--accent) / 0.1) 1px, transparent 1px);
          background-size: 1.5rem 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
