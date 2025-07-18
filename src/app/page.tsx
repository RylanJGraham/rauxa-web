
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import RauxaDefinitionSection from '@/components/sections/RauxaDefinitionSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ScreenshotsCarousel from '@/components/sections/ScreenshotsCarousel';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <RauxaDefinitionSection />
        <HowItWorksSection />
        <ScreenshotsCarousel />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
