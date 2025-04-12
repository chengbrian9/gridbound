import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { CONTACT } from '@/constants/theme';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRID + BOUND | Engineering Notebooks',
  description: 'Spiral-bound engineering notebooks with clean tear-off perforated pages, durable binding, and built-in features for students and professionals.',
};

/**
 * Home Page Component
 * Mobile-first design with carousel gallery and minimal content
 */
export default function Home() {
  // Carousel image
  const carouselImages = [
    {
      src: '/assets/Amazon Product Photos.png',
      alt: 'Grid+Bound engineering notebooks product photos'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFCF0] overflow-y-auto">
      {/* Main Content */}
      <main className="flex-grow px-6 py-8">
        {/* Carousel Gallery */}
        <div className="w-full max-w-md mx-auto mb-10">
          <ImageCarousel images={carouselImages} />
        </div>
        
        {/* Heading */}
        <div className="w-full max-w-xs mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-black mb-6">
            We&apos;ve improved engineering paper. By alot. Seriously.
          </h2>
        </div>
      </main>
      
      {/* Footer */}
      <Footer showDonationLink={false} contactEmail={CONTACT.EMAIL} />
    </div>
  );
}
