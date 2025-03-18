

/**
 * Loading state component
 * Displayed while page content is loading
 */
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#FBFCF0]">

      <div className="w-full max-w-md p-8 space-y-6 text-center">
        <div className="inline-block relative w-16 h-16">
          <div className="absolute w-full h-full rounded-full opacity-75 animate-ping bg-[#78A66B]"></div>
          <div className="relative w-16 h-16 rounded-full bg-[#78A66B]"></div>
        </div>
        
        <p className="text-xl font-medium mt-4">
          Loading...
        </p>
      </div>
    </div>
  );
}
