'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Server-side rendering placeholder
    return (
      <div className="w-full aspect-square bg-gray-100 animate-pulse">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-400">Loading carousel...</p>
        </div>
      </div>
    );
  }

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      swipeable={true}
      emulateTouch={true}
      className="w-full"
    >
      {images.map((image, index) => (
        <div key={index} className="w-full aspect-square relative">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
}
