'use client';

import { useEffect } from 'react';
import { Button } from './Button';

/**
 * Error boundary component for handling runtime errors
 */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#FBFCF0]">
      <div className="w-full max-w-md p-8 space-y-6 text-center">
        <h1 className="text-3xl font-bold text-[#78A66B]">
          Something went wrong
        </h1>
        
        <p className="text-lg">
          We apologize for the inconvenience. Please try again or contact support if the problem persists.
        </p>
        
        <div className="flex flex-col space-y-4 mt-6">
          <Button onClick={() => reset()} variant="primary">
            Try again
          </Button>
          
          <Button href="/" variant="outline">
            Return to home
          </Button>
        </div>
      </div>
    </div>
  );
}
