'use client';

import { useState } from 'react';
import Link from 'next/link';

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
        <Link href="/" className="inline-block">
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
                className="w-full px-4 py-3 border-2 border-[#78A66B] bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#78A66B] text-[#FBFCF0] text-lg tracking-wider hover:bg-[#78A66B]/80 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
        
        {/* Donation Link */}
        <div>
          <a 
            href="mailto:donations@gridandbound.com" 
            className="text-[#78A66B] hover:text-black transition-colors text-lg tracking-wide"
          >
            Interested in charitably donating? Contact us
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-auto pt-6 flex flex-col items-center">
        {/* Back to QR Page */}
        <Link 
          href="/qr" 
          className="text-[#78A66B] hover:text-black transition-colors text-base tracking-wide mb-4"
        >
          Back to QR Page
        </Link>
        
        {/* Instagram Link */}
        <a 
          href="https://instagram.com/gridandbound" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mb-4"
        >
          <div className="w-10 h-10 rounded-full bg-[#78A66B] flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#FBFCF0" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
