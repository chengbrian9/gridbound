export default function QRLandingPage() {
  return (
    <div className="flex flex-col items-center h-screen px-6 py-8 bg-[#FBFCF0] text-center">
      {/* Header */}
      <div className="w-full mb-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-[#78A66B]">
          GRID + BOUND
        </h1>
        <p className="text-xl tracking-wide mt-2">
          THANK YOU FOR YOUR PURCHASE
        </p>
      </div>

      {/* Main Content - Buttons */}
      <div className="w-full max-w-xs mx-auto flex flex-col gap-4">
        <a href="/shop" className="w-full bg-[#78A66B] text-[#FBFCF0] py-3 px-6 text-xl tracking-wider hover:bg-[#78A66B]/80 transition-colors text-center">
          BUY NOTEBOOK
        </a>
        
        <a href="/grants" className="w-full border-2 border-[#78A66B] text-[#78A66B] py-3 px-6 text-xl tracking-wider hover:bg-[#78A66B] hover:text-[#FBFCF0] transition-colors text-center">
          APPLY FOR ENGINEERING GRANTS
        </a>
        
        <a href="/commissions" className="w-full border-2 border-[#78A66B] text-[#78A66B] py-3 px-6 text-xl tracking-wider hover:bg-[#78A66B] hover:text-[#FBFCF0] transition-colors text-center">
          EARN COMMISSIONS
        </a>
      </div>

      {/* Footer - Moved up to eliminate scrolling */}
      <div className="w-full mt-auto pt-6 flex flex-col items-center">
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
        
        {/* Contact Link */}
        <a 
          href="mailto:contact@gridandbound.com" 
          className="text-[#78A66B] hover:text-black transition-colors text-base tracking-wide"
        >
          Need to get in touch? Contact us.
        </a>
      </div>
    </div>
  );
}
