
import { Button } from '@/components/Button';

/**
 * Custom 404 Not Found page
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#FBFCF0]">

      <div className="w-full max-w-md p-8 space-y-6 text-center">
        <h1 className="text-5xl font-bold mb-4 text-[#78A66B]">
          404
        </h1>
        
        <h2 className="text-3xl font-semibold mb-6">
          Page Not Found
        </h2>
        
        <p className="text-lg mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col space-y-4">
          <Button href="/" variant="primary">
            Return to Home
          </Button>
          
          <Button href="/qr" variant="outline">
            Go to QR Landing
          </Button>
        </div>
      </div>
    </div>
  );
}
