import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import RauxaLogo from '@/components/RauxaLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center">
          <div className="flex justify-center md:justify-start">
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
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <p className="font-semibold text-foreground">Get the App</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                App Store
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Google Play
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="#" aria-label="Rauxa on Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Rauxa on Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Rauxa on Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          &copy; {currentYear} Rauxa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

