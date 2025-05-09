import Link from 'next/link';
import Image from 'next/image';
import RauxaLogo from '@/components/RauxaLogo';

const Header = () => {
  return (
    <header className="py-4 md:py-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" aria-label="Rauxa Home">
          <RauxaLogo 
            icon={
              <Image 
                src="/rauxa-logo.png" 
                alt="Rauxa App Icon" 
                width={32} 
                height={32} 
                data-ai-hint="app logo"
              />
            } 
          />
        </Link>
        {/* Future navigation items can go here */}
      </div>
    </header>
  );
};

export default Header;

