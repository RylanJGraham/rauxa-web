
"use client";

const RauxaDefinitionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
            {/* Column 1: Rauxa and Pronunciation */}
            <div className="md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right">
              <h2 
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary-foreground mb-2"
              >
                Rauxa
              </h2>
              <p 
                className="text-lg sm:text-xl text-muted-foreground"
              >
                (Catalan: <span className="italic">/ˈraw.ʃə/</span>)
              </p>
            </div>

            {/* Column 2: Definition */}
            <div className="md:w-2/3 md:pl-6 md:border-l border-border">
              <div className="p-6 border border-border rounded-lg shadow-md bg-card h-full flex items-center">
                <p 
                  className="text-xl sm:text-2xl text-card-foreground leading-relaxed"
                >
                  A sudden, <strong className="font-semibold text-secondary">impetuous outburst</strong>. 
                  That vital spark of <strong className="font-semibold text-accent">creative recklessness</strong> or delightful <strong className="font-semibold text-primary">irrationality</strong> that propels you into unforgettable action.
                </p>
              </div>
            </div>
          </div>
          
          <p 
            className="text-md sm:text-lg text-muted-foreground leading-relaxed text-center"
          >
            At Rauxa, we embrace this spirit of unbridled spontaneity. Our app is your catalyst to break free from the everyday, to seize the moment, and to forge genuine connections through shared, impulsive experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RauxaDefinitionSection;
