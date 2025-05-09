
"use client";

const RauxaDefinitionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-primary-foreground"
          >
            Rauxa
          </h2>
          
          <p 
            className="text-lg sm:text-xl text-muted-foreground mb-6"
          >
            (Catalan: <span className="italic">/ˈraw.ʃə/</span>)
          </p>

          <div className="p-6 border border-border rounded-lg shadow-md mb-10 bg-card">
            <p 
              className="text-xl sm:text-2xl text-card-foreground leading-relaxed text-left"
            >
              A sudden, <strong className="font-semibold text-secondary">impetuous outburst</strong>. 
              That vital spark of <strong className="font-semibold text-accent">creative recklessness</strong> or delightful <strong className="font-semibold text-primary">irrationality</strong> that propels you into unforgettable action.
            </p>
          </div>
          
          <p 
            className="text-md sm:text-lg text-muted-foreground leading-relaxed"
          >
            At Rauxa, we embrace this spirit of unbridled spontaneity. Our app is your catalyst to break free from the everyday, to seize the moment, and to forge genuine connections through shared, impulsive experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RauxaDefinitionSection;

