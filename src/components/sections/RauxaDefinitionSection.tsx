
"use client";

const RauxaDefinitionSection = () => {
  const catalanFlagSVG = (
    <svg 
      width="24" 
      height="150" 
      viewBox="0 0 24 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Catalan Flag (Senyera)"
      className="object-cover w-full h-full"
    >
      <title>Catalan Flag (Senyera)</title>
      {/* Yellow background */}
      <rect width="24" height="150" fill="#FECB00"/>
      {/* Red stripes (4) */}
      <rect y={150/9 * 1} width="24" height={150/9} fill="#DA121A"/>
      <rect y={150/9 * 3} width="24" height={150/9} fill="#DA121A"/>
      <rect y={150/9 * 5} width="24" height={150/9} fill="#DA121A"/>
      <rect y={150/9 * 7} width="24" height={150/9} fill="#DA121A"/>
    </svg>
  );

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-stretch mb-10">
          {/* Left Part (1/3 width on md screens) */}
          <div className="w-full md:w-1/3 flex flex-row gap-2 items-stretch">
            {/* Column 1: Rauxa and Pronunciation */}
            <div className="flex-shrink-0 flex flex-col items-start text-left justify-center">
              <h2 
                className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-primary-foreground mb-2" // Reduced md size
              >
                Rauxa
              </h2>
              <p 
                className="text-base sm:text-lg md:text-lg text-primary-foreground" // Adjusted sizes
              >
                (Catalan: <span className="italic">/ˈraw.ʃə/</span>)
              </p>
            </div>

            {/* Divider: Catalan Flag */}
            <div className="flex-grow h-full overflow-hidden rounded-lg">
              {catalanFlagSVG}
            </div>
          </div>

          {/* Right Part (2/3 width on md screens) - Column 2: Definition */}
          <div className="w-full md:w-2/3">
            <div className="p-6 border border-border rounded-lg shadow-md bg-card flex items-center h-full"> 
              <p 
                className="text-xl sm:text-2xl text-card-foreground leading-relaxed text-left"
              >
                A sudden, <strong className="font-semibold text-secondary">impetuous outburst</strong>. 
                That vital spark of <strong className="font-semibold text-accent">creative recklessness</strong> or delightful <strong className="font-semibold text-primary">irrationality</strong> that propels you into unforgettable action.
              </p>
            </div>
          </div>
        </div>
        
        <p 
          className="text-md sm:text-lg text-muted-foreground leading-relaxed text-left"
        >
          At Rauxa, we embrace this spirit of unbridled spontaneity. Our app is your catalyst to break free from the everyday, to seize the moment, and to forge genuine connections through shared experiences.
        </p>
      </div>
    </section>
  );
};

export default RauxaDefinitionSection;
