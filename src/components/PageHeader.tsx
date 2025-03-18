'use client';

import Link from 'next/link';
import BackButton from './BackButton';
import { PageHeaderProps } from '@/types';

/**
 * Reusable page header component with back button and title
 */
export default function PageHeader({ title, href }: PageHeaderProps) {
  return (
    <div className="relative w-full mb-8 flex justify-center items-center">
      <BackButton href={href} />
      <Link href={href} className="inline-block active:scale-95 transform transition-all duration-100">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-[#78A66B]">
          {title}
        </h1>
      </Link>
    </div>
  );
}
