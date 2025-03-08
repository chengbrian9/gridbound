import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 md:px-8 flex justify-between items-center border-b border-[#78A66B]">
      <Link href="/" className="flex items-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-[#78A66B]">
          GRID + BOUND
        </h1>
      </Link>
      
      {/* Mobile menu button - hidden on larger screens */}
      <button className="md:hidden text-[#78A66B]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Navigation links - hidden on mobile, visible on larger screens */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-[#78A66B] hover:text-black transition-colors text-xl tracking-wide">
          PRODUCTS
        </Link>
        <Link href="/about" className="text-[#78A66B] hover:text-black transition-colors text-xl tracking-wide">
          ABOUT
        </Link>
        <Link href="/shop" className="text-[#78A66B] hover:text-black transition-colors text-xl tracking-wide">
          SHOP
        </Link>
        <Link href="/contact" className="text-[#78A66B] hover:text-black transition-colors text-xl tracking-wide">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
