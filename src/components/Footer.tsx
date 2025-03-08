import Link from 'next/link';

interface FooterProps {
  showBackToQR?: boolean;
  showDonationLink?: boolean;
  contactEmail?: string;
}

export default function Footer({ 
  showBackToQR = true, 
  showDonationLink = false,
  contactEmail = "contact@gridbound.com" 
}: FooterProps) {
  return (
    <div className="w-full pt-6 flex flex-col items-center">
      {/* Donation Link */}
      {showDonationLink && (
        <div className="mb-6">
          <a 
            href={`mailto:donations@gridbound.com`}
            className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-lg tracking-wide active:scale-95 transform"
          >
            Interested in charitably donating? Contact us
          </a>
        </div>
      )}
      
      {/* Back to QR Page */}
      {showBackToQR && (
        <Link 
          href="/qr" 
          className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-base tracking-wide mb-4 active:scale-95 transform"
        >
          Back to QR Page
        </Link>
      )}
      
      {/* Instagram Link */}
      <a 
        href="https://instagram.com/gridbound" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mb-4 active:scale-95 transform transition-all duration-100"
      >
        <div className="w-10 h-10 rounded-full bg-[#78A66B] hover:bg-[#78A66B]/90 active:bg-[#5e8353] flex items-center justify-center active:shadow-inner transition-all duration-100">
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
      {!showDonationLink && (
        <a 
          href={`mailto:${contactEmail}`}
          className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-base tracking-wide active:scale-95 transform"
        >
          Need to get in touch? Contact us.
        </a>
      )}
    </div>
  );
}
