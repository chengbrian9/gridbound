import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CommissionsPage() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 bg-[#FBFCF0] text-center">
      {/* Header */}
      <div className="w-full mb-8">
        <Link href="/" className="inline-block active:scale-95 transform transition-all duration-100">
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
            <p>When they are ready to put in an order CC in our team <a href="mailto:crew@grid-bound.com" className="text-[#78A66B] underline hover:text-[#5e8353] active:text-[#5e8353] active:scale-95 transform transition-all duration-100">crew@grid-bound.com</a> and let us finish the deal.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Step 4</h3>
            <p>We&apos;ll send you the money once the deal completes</p>
          </div>
        </div>
        
        {/* Questions */}
        <div className="text-center mb-8">
          <a 
            href="mailto:questions@gridbound.com" 
            className="text-[#78A66B] hover:text-black active:text-[#5e8353] transition-all duration-100 text-lg tracking-wide active:scale-95 transform"
          >
            Questions? Contact us
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer contactEmail="questions@gridbound.com" />
    </div>
  );
}
