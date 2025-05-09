import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const screenshots = [
  { id: 1, src: "https://picsum.photos/300/600?random=1", alt: "App Screenshot 1", hint: "app screen" },
  { id: 2, src: "https://picsum.photos/300/600?random=2", alt: "App Screenshot 2", hint: "app interface" },
  { id: 3, src: "https://picsum.photos/300/600?random=3", alt: "App Screenshot 3", hint: "user profile" },
  { id: 4, src: "https://picsum.photos/300/600?random=4", alt: "App Screenshot 4", hint: "event details" },
  { id: 5, src: "https://picsum.photos/300/600?random=5", alt: "App Screenshot 5", hint: "map view" },
];

const ScreenshotsCarousel = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">
          See Rauxa in Action
        </h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-accent scrollbar-track-accent/20">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="flex-shrink-0 w-[250px] sm:w-[300px]">
              <Card className="overflow-hidden rounded-xl shadow-lg h-full transform transition-transform duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={300}
                    height={600}
                    className="object-cover w-full h-auto aspect-[1/2]"
                    data-ai-hint={screenshot.hint}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--accent)) hsl(var(--accent) / 0.2);
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: hsl(var(--accent) / 0.2);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: hsl(var(--accent));
          border-radius: 10px;
          border: 2px solid hsl(var(--accent) / 0.2);
        }
      `}</style>
    </section>
  );
};

export default ScreenshotsCarousel;
