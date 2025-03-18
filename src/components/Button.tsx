'use client';

import React from 'react';
import { ButtonProps } from '@/types';

/**
 * Reusable button component that can render as a button or link
 * Supports primary and outline variants
 */
export const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseClasses = 'w-full px-6 py-3 text-xl tracking-wider text-center active:scale-95 active:shadow-inner transform transition-all duration-100 rounded-lg font-primary';
  
  const variantClasses = {
    primary: 'bg-[#78A66B] text-[#FBFCF0] hover:bg-[#78A66B]/80 active:bg-[#5e8353]',
    outline: 'border-2 border-[#78A66B] text-[#78A66B] hover:bg-[#78A66B] hover:text-[#FBFCF0] active:bg-[#78A66B] active:text-[#FBFCF0]'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};
