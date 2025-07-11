
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Search, Users, MessagesSquare, Sparkles, ShieldCheck } from 'lucide-react';
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
  {
    icon: MessagesSquare,
    title: 'Connect & Chat',
    description: 'Engage with event attendees through direct messages and group chats seamlessly.',
  },
  {
    icon: Sparkles,
    title: 'Host Your Vibe',
    description: 'Easily create your own meetups, from spontaneous hangouts to planned gatherings, with smart suggestions.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: 'Enjoy peace of mind with secure messaging, robust authentication, and privacy controls.',
  }
];

const cardStyles = [
  { headerBg: 'bg-gradient-stop-1', textIconColor: 'text-primary-foreground' }, // Card 1: #0367A6
  { headerBg: 'bg-gradient-stop-2', textIconColor: 'text-primary-foreground' }, // Card 2: #2D5391
  { headerBg: 'bg-gradient-stop-3', textIconColor: 'text-primary-foreground' }, // Card 3: #583F7C
  { headerBg: 'bg-gradient-stop-4', textIconColor: 'text-primary-foreground' }, // Card 4: #832B67
  { headerBg: 'bg-gradient-stop-5', textIconColor: 'text-primary-foreground' }, // Card 5: #AE1752
  { headerBg: 'bg-gradient-stop-6', textIconColor: 'text-primary-foreground' }, // Card 6: #D9043D
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-foreground">
          Rauxa Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const currentStyle = cardStyles[index]; 
            return (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl overflow-hidden">
                <CardHeader className={`p-6 ${currentStyle.headerBg}`}>
                  <step.icon className={`h-12 w-12 mx-auto mb-4 ${currentStyle.textIconColor}`} />
                  <CardTitle className={`text-2xl font-semibold ${currentStyle.textIconColor}`}>{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-card">
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
