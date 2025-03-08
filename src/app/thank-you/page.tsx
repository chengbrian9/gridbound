import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ThankYouPage() {
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
          Stay tuned :)
        </h2>
        
        <p className="text-lg mb-8">
          Thank you for showing interest! We can&apos;t wait to help bring some ideas to life
        </p>
      </div>

      {/* Footer */}
      <Footer showDonationLink={true} />
    </div>
  );
}
