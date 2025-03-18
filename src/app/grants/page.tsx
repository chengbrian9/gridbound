

import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EmailSubscribeForm from '@/components/EmailSubscribeForm';
import { CONTACT } from '@/constants/theme';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRID + BOUND | Engineering Grants',
  description: 'Apply for engineering project grants ranging from $5,000 to $10,000 for qualified projects.',
};

/**
 * Grants Page Component
 * Provides information about the grant program and collects email subscriptions
 */
export default function GrantsPage() {

  return (
    <div className="flex flex-col min-h-screen px-6 py-8 bg-[#FBFCF0] text-center">
      {/* Header */}
      <PageHeader title="GRID + BOUND" href="/qr" />

      {/* Main Content */}
      <div className="w-full max-w-xs mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-black mb-6">
          GRANT PROGRAM
        </h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-lg">
            Do you have an engineering project that needs a little funding to get started or complete?
          </p>
          
          <p className="text-lg">
            Through our non-profit we plan to offer $5k - $10k grants for qualified projects.
          </p>
          
          <p className="text-lg font-medium">
            Information on how to apply and qualify coming soon.
          </p>
          
          <p className="text-lg">
            To stay updated enter your email below:
          </p>
        </div>
        
        {/* Email Form */}
        <EmailSubscribeForm />
      </div>
      <Footer showDonationLink={true} contactEmail={CONTACT.EMAIL} />
    </div>
  );
}
