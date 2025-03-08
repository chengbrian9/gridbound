import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 bg-[#FBFCF0] text-center">
      {/* Header */}
      <div className="w-full mb-8">
        <Link href="/" className="inline-block">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-[#78A66B]">
            GRID + BOUND
          </h1>
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-xs mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-black mb-6">
          Stay tuned :)
        </h2>
        
        <p className="text-lg mb-8">
          Thank you for showing interest! We can&apos;t wait to help bring some ideas to life
        </p>
      </div>

      {/* Footer */}
      <div className="w-full mt-auto pt-6 flex flex-col items-center">
        {/* Donation Link */}
        <div className="mb-6">
          <a 
            href="mailto:donations@gridandbound.com" 
            className="text-[#78A66B] hover:text-black transition-colors text-lg tracking-wide"
          >
            Interested in charitably donating? Contact us
          </a>
        </div>
        
        {/* Back to QR Page */}
        <Link 
          href="/qr" 
          className="text-[#78A66B] hover:text-black transition-colors text-base tracking-wide mb-4"
        >
          Back to QR Page
        </Link>
        
        {/* Instagram Link */}
        <a 
          href="https://instagram.com/gridandbound" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mb-4"
        >
          <div className="w-10 h-10 rounded-full bg-[#78A66B] flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#FBFCF0" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
