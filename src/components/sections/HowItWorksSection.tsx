import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Search, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Smartphone,
    title: 'Open the App',
    description: 'Sign up in seconds and discover a world of spontaneity.',
  },
  {
    icon: Search,
    title: 'See What’s Happening',
    description: 'Browse real-time events and meetups happening near you.',
  },
  {
    icon: Users,
    title: 'Join Instantly',
    description: 'Connect with new people and dive into exciting experiences.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">
          How Rauxa Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl overflow-hidden">
              <CardHeader className="bg-secondary/10">
                <div className="mx-auto bg-accent text-accent-foreground rounded-full p-4 w-fit mb-4">
                  <step.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl font-semibold text-secondary">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
