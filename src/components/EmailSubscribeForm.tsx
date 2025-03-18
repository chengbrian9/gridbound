'use client';

import { useState } from 'react';
import { Button } from './Button';

/**
 * Email subscription form component
 * Client component for handling form state and submission
 */
export default function EmailSubscribeForm() {
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
    <div className="w-full mb-12">
      {submitted ? (
        <div className="p-4 rounded bg-[#78A66B33]">

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
            className="w-full px-4 py-3 border-2 bg-transparent focus:outline-none transition-all duration-100"
            style={{ 
              borderColor: '#78A66B',
              borderWidth: '2px',
            }}
          />
          <Button
            variant="primary"
            onClick={handleSubmit}
          >
            SUBSCRIBE
          </Button>
        </form>
      )}
    </div>
  );
}
