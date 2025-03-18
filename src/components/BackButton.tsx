/**
 * BackButton component
 * Provides navigation to previous page with consistent styling
 */
'use client';

import Link from 'next/link';
import { BackButtonProps } from '@/types';

export default function BackButton({ href }: BackButtonProps) {
  return (
    <Link href={href} className="absolute left-0 p-2 transition-transform hover:scale-105 active:scale-95">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#78A66B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label="Back"
        role="img"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </Link>
  );
}