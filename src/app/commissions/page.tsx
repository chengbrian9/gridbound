import Link from 'next/link';

export default function CommissionsPage() {
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
          EARN COMMISSIONS
        </h2>
        
        <p className="text-lg mb-8">
          Bring Grid+Bound to your college bookstore and earn up to 25% of their first purchase
        </p>
        
        {/* Steps */}
        <div className="space-y-6 mb-8 text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <p>Find a contact at your college bookstore</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <p>Reach out via email or phone and try and convince them to buy. Show up with a notebook if you have to</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Email Example</h3>
            <p className="bg-white p-4 rounded border border-[#78A66B]">
              Wholesale Pricing
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <p>When they are ready to put in an order CC in our team <a href="mailto:crew@grid-bound.com" className="text-[#78A66B] underline">crew@grid-bound.com</a> and let us finish the deal.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Step 4</h3>
            <p>We&apos;ll send you the money once the deal completes</p>
          </div>
        </div>
        
        {/* Questions */}
        <div className="text-center mb-8">
          <a 
            href="mailto:questions@gridandbound.com" 
            className="text-[#78A66B] hover:text-black transition-colors text-lg tracking-wide"
          >
            Questions? Contact us
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-auto pt-6 flex flex-col items-center">
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
