import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RauxaLogoProps extends HTMLAttributes<HTMLHeadingElement> {
  icon?: ReactNode;
  iconClassName?: string;
}

const RauxaLogo: React.FC<RauxaLogoProps> = ({ className, icon, iconClassName, ...props }) => {
  return (
    <div className="flex items-center gap-2">
      {icon && <span className={cn("h-7 w-7 sm:h-8 sm:w-8", iconClassName)}>{icon}</span>}
      <h1
        className={cn(
          "font-poppins text-3xl font-bold tracking-tight bg-gradient-to-r from-[#0367A6] to-[#D9043D] bg-clip-text text-transparent",
          className
        )}
        {...props}
      >
        Rauxa
      </h1>
    </div>
  );
};

export default RauxaLogo;
