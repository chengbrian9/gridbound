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
    <div className="flex flex-col min-h-screen px-6 py-8 bg-[#FBFCF0] overflow-y-auto">
      {/* Header */}
      <PageHeader title="GRID + BOUND" href="/qr" />
    
      {/* Main Content */}
      <div className="w-full max-w-xs mx-auto">
        <h2 className="text-3xl md:text-5xl mb-6 text-center">
          Earn Commissions
        </h2>
          <p className="text-lg mb-6 text-center">
          Earn Up to 25% Commission by Bringing Grid+Bound to Your College Bookstore

          </p>
    
        {/* Steps */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#78A66B]">Step 1: Find the Right Contact</h3>
            <p className="text-lg">Identify who handles purchasing at your campus bookstore.</p>
          </div>
    
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#78A66B]">Step 2: Reach Out</h3>
            <p className="text-lg">Call, email, or visit in person with your notebook.</p>
            <p className="text-lg">You can download our product details below and attach it to the email template to send off to the bookstore.</p>
            <div className="flex flex-wrap gap-3 mt-3">
              <a 
                href={`mailto:?subject=Grid%2BBound%20Engineering%20Notebooks&body=${encodeURIComponent(`Hi [First Name],

I'm reaching out to introduce Grid+Bound — the first spiral-bound engineering notebook designed specifically for students who need more than a glue-top pad.

We've solved the usual complaints with:

• Clean tear-off perforated pages
• Durable spiral binding
• Built-in kangaroo pocket for loose sheets
• Traditional green grid paper, 3-hole punched and binder-ready
• QR code for easy reordering + student grant entry

We're already stocked in 10+ university bookstores and on Amazon — students love it, and it stands out instantly on shelves.

🔗 Attached is a one-page PDF with product images and pricing.

We'd love to send samples or help get this into your store.

Best,
[Your Full Name]
Grid+Bound (https://grid-bound.com)
[Your Contact Info]
[Website or Amazon link, if applicable]`)}`}
                className="px-4 py-2 bg-[#78A66B] text-white rounded-md hover:bg-[#5e8353] transition-colors"
              >
                Use Template
              </a>
              <a 
                href="/assets/gridbound-bookstore-info.pdf" 
                target="_blank"
                className="px-4 py-2 border border-[#78A66B] text-[#78A66B] rounded-md hover:bg-[#f0f7ed] transition-colors"
                download
              >
                Download PDF
              </a>
            </div>
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
              </a>, and we&apos;ll share pricing and take it from there.
            </p>
          </div>
    
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#78A66B]">Step 4: Get Paid</h3>
            <p className="text-lg">When the order is complete, we&apos;ll send your commission.</p>
          </div>
        </div>
      </div>
    
      <Footer showDonationLink={false} contactEmail={CONTACT.EMAIL} emailSubject="Commission Question" />
    </div>
  );
}