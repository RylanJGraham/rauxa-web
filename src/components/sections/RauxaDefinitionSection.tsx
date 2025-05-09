
"use client";

import { Sparkles } from 'lucide-react';

const RauxaDefinitionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-card text-foreground relative overflow-hidden">
      <div 
        className="absolute inset-0"
      >
         <Sparkles className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 text-primary/10 animate-pulse" style={{ animationDuration: '3s' }} />
         <Sparkles className="absolute bottom-1/3 right-1/4 w-20 h-20 md:w-28 md:h-28 text-secondary/10 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
         <Sparkles className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 text-accent/10 animate-pulse" style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-md"
        >
          Rauxa
        </h2>
        
        <p 
          className="text-lg sm:text-xl text-muted-foreground mb-8"
        >
          (Catalan: <span className="italic">/ˈraw.ʃə/</span>)
        </p>

        <div 
          className="max-w-3xl mx-auto space-y-6"
        >
          <p 
            className="text-xl sm:text-2xl text-foreground/90 leading-relaxed"
          >
            A sudden, <strong className="font-semibold text-secondary">impetuous outburst</strong>. 
            That vital spark of <strong className="font-semibold text-accent">creative recklessness</strong> or delightful <strong className="font-semibold text-primary">irrationality</strong> that propels you into unforgettable action.
          </p>
          <p 
            className="text-md sm:text-lg text-muted-foreground"
          >
            At Rauxa, we embrace this spirit of unbridled spontaneity. Our app is your catalyst to break free from the everyday, to seize the moment, and to forge genuine connections through shared, impulsive experiences.
          </p>
        </div>

      </div>
    </section>
  );
};

export default RauxaDefinitionSection;
