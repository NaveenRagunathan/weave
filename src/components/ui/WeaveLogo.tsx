import React from 'react';
import { cn } from '@/lib/utils';

interface WeaveLogoProps {
  className?: string;
}

const WeaveLogo: React.FC<WeaveLogoProps> = ({ className }) => {
  return (
    <span
      className={cn('font-logo', className)}
      style={{ fontWeight: 500, letterSpacing: '0.5px', display: 'inline-block' }}
    >
      weave
    </span>
  );
};

export default WeaveLogo;
