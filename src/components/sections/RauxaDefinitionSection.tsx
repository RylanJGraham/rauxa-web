"use client";

import Image from "next/image";

const RauxaDefinitionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch mb-10">
          
          {/* Left Part (Rauxa + Flag Image) */}
          <div className="w-full md:w-1/3 flex items-center justify-between gap-4">
            {/* Rauxa Text Block */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-foreground mb-2">
                Rauxa
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground">
                (Catalan: <span className="italic">/ˈraw.ʃə/</span>)
              </p>
            </div>

            {/* Flag Image (acts as an icon) */}
            <div className="h-auto w-auto flex-shrink-0">
              <Image
                src="/CatalanFlag.png"
                alt="Catalan Flag"
                width={200}
                height={118}
                className="object-contain h-full rounded-lg"
              />
            </div>
          </div>

          {/* Right Part (Definition Block) */}
          <div className="w-full md:w-2/3">
            <div className="p-6 border border-border rounded-lg shadow-md bg-card flex items-center h-full">
              <p className="text-xl sm:text-2xl text-card-foreground leading-relaxed text-left">
                A sudden, <strong className="font-semibold text-secondary">impetuous outburst</strong>. 
                That vital spark of <strong className="font-semibold text-accent">creative recklessness</strong> or delightful <strong className="font-semibold text-primary">irrationality</strong> that propels you into unforgettable action.
              </p>
            </div>
          </div>
        </div>

        <p className="text-md sm:text-lg text-muted-foreground leading-relaxed text-left">
          At Rauxa, we embrace this spirit of unbridled spontaneity. Our app is your catalyst to break free from the everyday, to seize the moment, and to forge genuine connections through shared experiences.
        </p>
      </div>
    </section>
  );
};

export default RauxaDefinitionSection;
