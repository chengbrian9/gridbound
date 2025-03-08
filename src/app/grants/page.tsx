'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function GrantsPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
  };

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
        <div className="w-full mb-12">
          {submitted ? (
            <div className="bg-[#78A66B]/20 p-4 rounded">
              <p className="text-lg font-medium">Thank you! We&apos;ll keep you updated.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 border-2 border-[#78A66B] bg-transparent focus:outline-none focus:border-[#5e8353] transition-all duration-100"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#78A66B] text-[#FBFCF0] text-lg tracking-wider hover:bg-[#78A66B]/80 active:bg-[#5e8353] active:scale-95 active:shadow-inner transform transition-all duration-100"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer showDonationLink={true} />
    </div>
  );
}
