import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatarSrc: string;
  rating: number;
  hint: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sofia G.',
    location: 'Barcelona',
    quote: "Rauxa is amazing! I've met so many cool people and discovered hidden gems in my own city. It's super easy to use.",
    avatarSrc: 'https://picsum.photos/100/100?random=10',
    rating: 5,
    hint: "young woman",
  },
  {
    id: 2,
    name: 'Marc V.',
    location: 'Barcelona',
    quote: "Finally, an app that gets spontaneity. Found a pickup football game last minute and it was awesome. Highly recommend!",
    avatarSrc: 'https://picsum.photos/100/100?random=11',
    rating: 5,
    hint: "young man",
  },
  {
    id: 3,
    name: 'Elena R.',
    location: 'Barcelona',
    quote: "Love the vibe of Rauxa. It's perfect for anyone new to the city or just looking to shake up their routine. The events are so diverse.",
    avatarSrc: 'https://picsum.photos/100/100?random=12',
    rating: 4,
    hint: "smiling person",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">
          Loved by Urban Explorers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl overflow-hidden">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Image
                  src={testimonial.avatarSrc}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                  data-ai-hint={testimonial.hint}
                />
                <div>
                  <h3 className="text-xl font-semibold text-secondary">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 italic leading-relaxed">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="pt-4 mt-auto">
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`} />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
