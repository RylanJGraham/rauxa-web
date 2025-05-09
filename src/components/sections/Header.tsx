
import Link from 'next/link';
import Image from 'next/image';
import RauxaLogo from '@/components/RauxaLogo';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="py-4 md:py-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" aria-label="Rauxa Home">
          <RauxaLogo 
            icon={
              <Image 
                src="/rauxalogo.png" 
                alt="Rauxa App Icon" 
                width={32} 
                height={32} 
                data-ai-hint="app logo"
              />
            } 
          />
        </Link>
        <Button 
          size="default" 
          variant="default"
          className="bg-gradient-to-r from-[#0367A6] to-[#D9043D] text-primary-foreground hover:brightness-90 rounded-full text-sm px-6 py-2 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          aria-label="Download the Rauxa App"
        >
          Download the App
        </Button>
      </div>
    </header>
  );
};

export default Header;
