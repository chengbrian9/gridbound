export default function Home() {
  return (
    <div className="px-4 py-8 md:px-8 md:py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider text-black">GRID + BOUND</h1>
          <p className="text-xl md:text-2xl text-black max-w-2xl tracking-wide">
            SPIRAL BOUND ENGINEERING PAPER
          </p>
        </div>
        <div className="border-2 border-[#78A66B] rounded-none p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">PRECISION MEETS CREATIVITY</h2>
            <p className="text-black mb-8 text-lg">
              Our engineering paper combines the precision you need with the flexibility you want. Perfect for sketches, calculations, and technical drawings.
            </p>
            <button className="btn-primary text-[#78A66B] border-2 border-[#78A66B] hover:bg-[#78A66B] hover:text-[#FBFCF0] py-3 px-8 text-xl tracking-wider transition-colors">
              SHOP NOW
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="w-full h-full bg-[#78A66B]/10 flex items-center justify-center">
                <div className="border-4 border-[#78A66B] w-4/5 h-4/5 flex items-center justify-center">
                  <h3 className="text-4xl text-[#78A66B] tracking-widest">GRID+BOUND</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">OUR PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="border-2 border-[#78A66B] p-6">
            <div className="w-16 h-16 bg-[#78A66B]/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#78A66B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-wide">ENGINEERING PAD</h3>
            <p className="text-black mb-6">100 sheets of high-quality 5x5 grid paper, perfect for technical drawings and calculations.</p>
            <button className="text-[#78A66B] hover:text-black transition-colors text-lg tracking-wide">
              VIEW DETAILS →
            </button>
          </div>
          
          {/* Product 2 */}
          <div className="border-2 border-[#78A66B] p-6">
            <div className="w-16 h-16 bg-[#78A66B]/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#78A66B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-wide">GRAPH NOTEBOOK</h3>
            <p className="text-black mb-6">Spiral-bound notebook with premium graph paper, designed for durability and precision.</p>
            <button className="text-[#78A66B] hover:text-black transition-colors text-lg tracking-wide">
              VIEW DETAILS →
            </button>
          </div>
          
          {/* Product 3 */}
          <div className="border-2 border-[#78A66B] p-6">
            <div className="w-16 h-16 bg-[#78A66B]/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#78A66B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-wide">ISOMETRIC PAD</h3>
            <p className="text-black mb-6">Specialized isometric grid paper for creating 3D technical drawings and illustrations.</p>
            <button className="text-[#78A66B] hover:text-black transition-colors text-lg tracking-wide">
              VIEW DETAILS →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 px-6 border-2 border-[#78A66B] mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">PRECISION ON PAPER</h2>
        <p className="text-black mb-10 max-w-2xl mx-auto text-lg">
          Join engineers, architects, and designers who trust GRID + BOUND for their technical documentation needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn-primary text-[#78A66B] border-2 border-[#78A66B] hover:bg-[#78A66B] hover:text-[#FBFCF0] py-3 px-8 text-xl tracking-wider transition-colors">
            SHOP COLLECTION
          </button>
          <button className="bg-[#78A66B] text-[#FBFCF0] py-3 px-8 text-xl tracking-wider hover:bg-[#78A66B]/80 transition-colors">
            LEARN MORE
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t-2 border-[#78A66B] text-center text-[#78A66B] text-lg">
        <p>© {new Date().getFullYear()} GRID + BOUND. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
