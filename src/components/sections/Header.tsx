import Link from 'next/link';
import RauxaLogo from '@/components/RauxaLogo';
import { Shapes } from 'lucide-react'; // Changed from Sparkles to Shapes

const Header = () => {
  return (
    <header className="py-4 md:py-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" aria-label="Rauxa Home">
          <RauxaLogo icon={<Shapes className="text-accent" />} /> {/* Changed icon here */}
        </Link>
        {/* Future navigation items can go here */}
      </div>
    </header>
  );
};

export default Header;
