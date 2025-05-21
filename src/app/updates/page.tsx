
import Header from '@/components/sections/Header';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, CalendarClock, CheckCircle } from 'lucide-react';

export default function UpdatesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Rocket className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-primary-foreground tracking-tight">
            Something <span className="text-primary">Exciting</span> is Coming!
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Rauxa is preparing for launch! We're working hard to bring you the best platform for spontaneous connections and instant event discovery.
          </p>

          <div className="bg-card p-6 sm:p-8 rounded-xl shadow-xl mb-10 border border-border">
            <div className="flex items-center justify-center mb-4">
              <CalendarClock className="h-8 w-8 mr-3 text-accent" />
              <h2 className="text-2xl sm:text-3xl font-bold text-accent">Open Beta Coming Soon!</h2>
            </div>
            <p className="text-md sm:text-lg text-card-foreground/90 mb-6">
              Want to be among the first to experience Rauxa? Our open beta will be launching soon. This is your chance to help shape the future of Rauxa and get early access to all the features.
            </p>
            <CheckCircle className="h-10 w-10 mx-auto text-secondary mb-4" />
             <p className="text-md sm:text-lg text-card-foreground/90">
              Sign up for our waitlist below to get notified about the beta and the official launch!
            </p>
          </div>
          
          <div className="my-10">
             <hr className="border-border" />
          </div>

        </div>
        <NewsletterSection />
         <div className="text-center mt-12">
            <Link href="/">
              <Button variant="outline" className="rounded-full px-6 py-3 text-lg">
                Back to Homepage
              </Button>
            </Link>
          </div>
      </main>
      <Footer />
    </div>
  );
}
