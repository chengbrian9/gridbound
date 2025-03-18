import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { CONTACT } from '@/constants/theme';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRID + BOUND | Earn Commissions',
  description: 'Earn up to 25% commission by bringing Grid+Bound notebooks to your college bookstore',
};

/**
 * Commissions Page Component
 * Provides information about earning commissions through bookstore partnerships
 */
export default function CommissionsPage() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 bg-[#FBFCF0]">
      {/* Header */}
      <PageHeader title="GRID + BOUND" href="/qr" />
    
      {/* Main Content */}
      <div className="w-full max-w-xs mx-auto">
        <h2 className="text-3xl md:text-5xl mb-6 text-center">
          Earn Up to 25% Commission by Bringing Grid+Bound to Your College Bookstore
        </h2>
    
        {/* Steps */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#78A66B]">Step 1: Find the Right Contact</h3>
            <p className="text-lg">Identify who handles purchasing at your campus bookstore.</p>
          </div>
    
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#78A66B]">Step 2: Reach Out</h3>
            <p className="text-lg">Call, email, or visit in person. Use our email template and share our wholesale pricing.</p>
          </div>
    
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#78A66B]">Step 3: Loop Us In</h3>
            <p className="text-lg">
              Once they&apos;re ready to order, CC{' '}
              <a 
                href={`mailto:${CONTACT.CREW_EMAIL}`} 
                className="text-[#78A66B] underline transition-colors"
              >
                {CONTACT.CREW_EMAIL}
              </a>, and we&apos;ll take it from there.
            </p>
          </div>
    
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#78A66B]">Step 4: Get Paid</h3>
            <p className="text-lg">When the order is complete, we&apos;ll send you your commission.</p>
          </div>
        </div>
      </div>
    
      <Footer showDonationLink={false} contactEmail={CONTACT.EMAIL} />
    </div>
  );
}