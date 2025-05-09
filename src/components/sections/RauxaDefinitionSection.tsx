
"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const RauxaDefinitionSection = () => {
  const rauxaTitleVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9], // Smooth cubic bezier
      } 
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.6, // Stagger delay after title
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-card text-foreground relative overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
      >
         <Sparkles className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 text-primary/20 animate-pulse" style={{ animationDuration: '3s' }} />
         <Sparkles className="absolute bottom-1/3 right-1/4 w-20 h-20 md:w-28 md:h-28 text-secondary/20 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
         <Sparkles className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 text-accent/20 animate-pulse" style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-md"
          variants={rauxaTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Rauxa
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl text-muted-foreground mb-8"
          custom={0}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          (Catalan: <span className="italic">/ˈraw.ʃə/</span>)
        </motion.p>

        <motion.div 
          className="max-w-3xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } }
          }}
        >
          <motion.p 
            className="text-xl sm:text-2xl text-foreground/90 leading-relaxed"
            variants={contentVariants} // individual items can use the same variant if delay is handled by parent
          >
            A sudden, <strong className="font-semibold text-secondary">impetuous outburst</strong>. 
            That vital spark of <strong className="font-semibold text-accent">creative recklessness</strong> or delightful <strong className="font-semibold text-primary">irrationality</strong> that propels you into unforgettable action.
          </motion.p>
          <motion.p 
            className="text-md sm:text-lg text-muted-foreground"
            variants={contentVariants}
          >
            At Rauxa, we embrace this spirit of unbridled spontaneity. Our app is your catalyst to break free from the everyday, to seize the moment, and to forge genuine connections through shared, impulsive experiences.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default RauxaDefinitionSection;
