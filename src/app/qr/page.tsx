import Footer from '@/components/Footer';

export default function QRLandingPage() {
  return (
    <div className="flex flex-col items-center px-6 py-8 bg-[#FBFCF0] text-center">
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
      <div className="w-full max-w-xs mx-auto flex flex-col gap-4 mb-8">
        <a 
          href="/shop" 
          className="w-full bg-[#78A66B] text-[#FBFCF0] py-3 px-6 text-xl tracking-wider hover:bg-[#78A66B]/80 text-center active:scale-95 active:bg-[#5e8353] active:shadow-inner transform transition-all duration-100"
        >
          BUY NOTEBOOK
        </a>
        
        <a 
          href="/grants" 
          className="w-full border-2 border-[#78A66B] text-[#78A66B] py-3 px-6 text-xl tracking-wider hover:bg-[#78A66B] hover:text-[#FBFCF0] text-center active:scale-95 active:bg-[#78A66B] active:text-[#FBFCF0] active:shadow-inner transform transition-all duration-100"
        >
          APPLY FOR ENGINEERING GRANTS
        </a>
        
        <a 
          href="/commissions" 
          className="w-full border-2 border-[#78A66B] text-[#78A66B] py-3 px-6 text-xl tracking-wider hover:bg-[#78A66B] hover:text-[#FBFCF0] text-center active:scale-95 active:bg-[#78A66B] active:text-[#FBFCF0] active:shadow-inner transform transition-all duration-100"
        >
          EARN COMMISSIONS
        </a>
      </div>

      {/* Footer */}
      <Footer showBackToQR={false} contactEmail="contact@gridbound.com" />
    </div>
  );
}
