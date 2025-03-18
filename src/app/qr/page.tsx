import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import { CONTACT } from '@/constants/theme';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRID + BOUND | Home',
  description: 'Spiral bound engineering paper notebooks for students and professionals',
};

/**
 * QR Landing Page Component
 * Main entry point from QR code scans
 */
export default function QRLandingPage() {
  return (
    <div className="flex flex-col min-h-[85vh] justify-between items-center px-6 py-8 bg-[#FBFCF0] text-center">
      {/* Header */}
      <div className="w-full flex justify-center">
        <Image
          src={logo}
          alt="GridBound Logo"
          width={300}
          height={100}
          className="mb-6"
          priority
        />
      </div>

      {/* Main Content - Buttons */}
      <div className="w-full max-w-xs mx-auto flex flex-col gap-4 mb-8">
        <Button href="/shop" variant="primary">
          BUY NOTEBOOK
        </Button>
        
        <Button href="/grants" variant="primary">
          APPLY FOR ENGINEERING GRANTS
        </Button>
        
        <Button href="/commissions" variant="primary">
          EARN COMMISSIONS
        </Button>
      </div>

      {/* Footer */}
      <Footer showDonationLink={false} contactEmail={CONTACT.EMAIL} />
    </div>
  );
}
