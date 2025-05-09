import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface RauxaLogoProps extends HTMLAttributes<HTMLHeadingElement> {
  // Additional props can be defined here if needed
}

const RauxaLogo: React.FC<RauxaLogoProps> = ({ className, ...props }) => {
  return (
    <h1
      className={cn(
        "font-poppins text-3xl font-bold tracking-tight text-secondary hover:text-opacity-80 transition-colors",
        className
      )}
      {...props}
    >
      Rauxa
    </h1>
  );
};

export default RauxaLogo;
