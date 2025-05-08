import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import Image from 'next/image';
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
      src: '/assets/1 FRONT COVER.png',
      alt: 'Grid+Bound notebook front cover',
    },
    {
      src: '/assets/3 FRONT SHEET.png',
      alt: 'Grid+Bound notebook front sheet',
    },
    {
      src: '/assets/4 INSIDE POCKET.png',
      alt: 'Grid+Bound notebook inside pocket',
    },
    {
      src: '/assets/5 BACK SHEET.png',
      alt: 'Grid+Bound notebook back sheet',
    },
    {
      src: '/assets/6 SPREAD POCKET.png',
      alt: 'Grid+Bound notebook spread with pocket',
    },
    {
      src: '/assets/7 SPREAD SHEETS.png',
      alt: 'Grid+Bound notebook spread sheets',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFCF0] overflow-y-auto">
      {/* Main Content */}
      <main className="flex-grow px-6 py-8">
        {/* Logo */}
        <div className="w-full flex justify-center mb-8">
          <Image
            src="/assets/Grid Bound Logo.svg"
            alt="Grid+Bound Logo"
            width={300}
            height={100}
            className="mb-2"
            priority
          />
        </div>
        
        {/* Carousel Gallery */}
        <div className="w-full max-w-md mx-auto mb-10">
          <ImageCarousel images={carouselImages} />
        </div>
        
        {/* Heading */}
        <div className="w-full max-w-xs mx-auto">
          <h2 className="text-5xl md:text-4xl font-bold tracking-wider text-black mb-6 text-left">
            We&apos;ve improved <span className="text-[#78A66B]">engineering paper</span>. By alot. Seriously.
          </h2>
        </div>
        
        {/* Side-by-side product photos */}
        <div className="w-full max-w-md mx-auto mb-10 flex justify-between gap-4">
          <div className="w-1/2">
            <Image 
              src="/assets/Amazon Product Photos.png" 
              alt="Grid+Bound engineering notebook - front view" 
              width={500} 
              height={500} 
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2">
            <Image 
              src="/assets/Amazon Product Photos.png" 
              alt="Grid+Bound engineering notebook - inside view" 
              width={500} 
              height={500} 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Product Traits */}
        <div className="w-full max-w-xs mx-auto mb-8">
          <h2 className="text-4xl md:text-3xl font-bold tracking-wider text-black mb-4 text-left">
            9&quot;x11&quot; notebook<br/>
            3-hole punched<br/>
            Pocket included<br/>
            Perforated<br/>
            150 pages
          </h2>
          <h2 className="text-4xl text-[#78A66B] font-bold mt-4 mb-6">
            We were the first
          </h2>
          <div className="text-xl text-left">
            <p>Engineering paper used to only come in glue-top pads.</p>
            <br />
            <p>You had to tear each sheet off in order to save them.</p>
            <br />
            <p>Or else papers got ripped off, lost or crumbled.</p>
            <br />
            <p>It was annoying to keep organized.</p>
            <br />
            <p>And we eventually got fed up.</p>
            <br />
            <p>So in 2018 we created</p>
            <p className="text-2xl  text-[#78A66B] font-bold mt-2">GRID+BOUND</p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer showDonationLink={false} contactEmail={CONTACT.EMAIL} />
    </div>
  );
}
