'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on route change
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`w-full py-4 px-6 md:px-8 flex flex-wrap justify-between items-center border-b border-[#78A66B] sticky top-0 z-50 ${scrolled ? 'bg-[#FBFCF0] shadow-md' : 'bg-[#FBFCF0]'} transition-all duration-300`}>
      <Link href="/" className="flex items-center active:scale-95 transform transition-all duration-100">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-[#78A66B]">
          GRID + BOUND
        </h1>
      </Link>
      
      {/* Mobile menu button - hidden on larger screens */}
      <button 
        onClick={toggleMenu} 
        className="md:hidden text-[#78A66B] active:scale-95 active:text-[#5e8353] transform transition-all duration-100 active:shadow-inner p-1 rounded hover:bg-[#f0f2e6]"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Navigation links - hidden on mobile, visible on larger screens */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-xl tracking-wide active:scale-95 transform hover:underline">
          PRODUCTS
        </Link>
        <Link href="/about" className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-xl tracking-wide active:scale-95 transform hover:underline">
          ABOUT
        </Link>
        <Link href="/shop" className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-xl tracking-wide active:scale-95 transform hover:underline">
          SHOP
        </Link>
        <Link href="/contact" className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-xl tracking-wide active:scale-95 transform hover:underline">
          CONTACT
        </Link>
      </div>
      
      {/* Mobile menu - animated slide down when menu is open */}
      <div 
        className={`w-full md:hidden absolute left-0 right-0 top-[72px] bg-[#FBFCF0] shadow-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}
      >
        <div className="flex flex-col space-y-1 py-3 px-6">
          <Link 
            href="/" 
            className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-xl tracking-wide active:scale-95 transform py-3 border-b border-[#e9edd8]"
            onClick={handleLinkClick}
          >
            PRODUCTS
          </Link>
          <Link 
            href="/about" 
            className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-xl tracking-wide active:scale-95 transform py-3 border-b border-[#e9edd8]"
            onClick={handleLinkClick}
          >
            ABOUT
          </Link>
          <Link 
            href="/shop" 
            className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-xl tracking-wide active:scale-95 transform py-3 border-b border-[#e9edd8]"
            onClick={handleLinkClick}
          >
            SHOP
          </Link>
          <Link 
            href="/contact" 
            className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-xl tracking-wide active:scale-95 transform py-3"
            onClick={handleLinkClick}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
