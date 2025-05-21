
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import React, { useEffect, useState, useCallback, useRef } from 'react';

const screenshots = [
  { id: 1, src: "/Demo/Demo1.png", alt: "App Screenshot 1", hint: "app screen" },
  { id: 2, src: "/Demo/Demo2.png", alt: "App Screenshot 2", hint: "app interface" },
  { id: 3, src: "/Demo/Demo3.png", alt: "App Screenshot 3", hint: "user profile" },
  { id: 4, src: "/Demo/Demo4.png", alt: "App Screenshot 4", hint: "event details" },
  { id: 5, src: "/Demo/Demo5.png", alt: "App Screenshot 5", hint: "map view" },
];

const ScreenshotsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (!api) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); 
      }
    }, 3000); 
  }, [api]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    startAutoplay(); 
    return () => stopAutoplay(); 
  }, [api, startAutoplay, stopAutoplay]);

  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">
          See Rauxa in Action
        </h2>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <CarouselContent className="-ml-4">
            {screenshots.map((screenshot) => (
              <CarouselItem key={screenshot.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden rounded-xl shadow-lg h-full transform transition-transform duration-300 hover:scale-105 aspect-[9/19] md:max-w-xs mx-auto">
                    <CardContent className="p-0 flex items-center justify-center h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, 320px"
                          data-ai-hint={screenshot.hint}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ScreenshotsCarousel;

