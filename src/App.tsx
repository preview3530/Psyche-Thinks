import React from 'react';
import { Brain, MessageCircle, Camera, CheckCircle, Smartphone } from 'lucide-react';

// Product Data
const PRODUCTS = [
  {
    id: 1,
    title: 'Social Media Hacks',
    price: 199,
    cover: '/Yellow%20and%20Purple%20Illustrative%20Social%20Media%20Hacks%20Ebook%20Cover%20(1).jpg',
  },
  {
    id: 2,
    title: 'The Way We Think',
    price: 149,
    cover: '/THE%20WAY%20WE%20THINK%20(1).jpg',
  },
  {
    id: 3,
    title: 'Six-Phase The Inner',
    price: 249,
    cover: '/SIX-PHASE%20THE%20INNER%20(1).jpg',
  },
  {
    id: 4,
    title: 'The Echo of Numbness',
    price: 199,
    cover: '/THE%20ECHO%20OF%20NUMBNESS%20IMAGE.jpg',
  },
  {
    id: 5,
    title: 'The Point Of No Reason',
    price: 299,
    cover: '/Blue%20and%20Brown%20Photogrpahy%20Journey%20Of%20Life%20Ebook%20Cover.jpg',
  },
  {
    id: 6,
    title: 'Human Reaction Protocol',
    price: 199,
    cover: '/Monochrome%20Simple%20Memoir%20eBook%20Cover.jpg',
  },
  {
    id: 7,
    title: 'The First Deffence',
    price: 99,
    cover: '/TH.jpg',
  },
];

// Helper to generate dynamic UPI links
const generateUpiLink = (price: number): string => {
  return `upi://pay?pa=8013025757@upi&pn=Anisul%20Alam&am=${price}&cu=INR`;
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="bg-slate-950/80 backdrop-blur-md shadow-md border-b border-purple-900/30 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-500" />
          <h1 className="text-xl font-bold tracking-tight text-slate-100">
            Psyche Thinks
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 md:py-12 flex flex-col gap-12">
        {/* Products Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-100 mb-3">Premium Ebooks</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Upgrade your skills with our curated collection of digital guides. Instant delivery to your WhatsApp after payment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg shadow-purple-900/10 border border-slate-800 hover:border-purple-500/30 hover:shadow-purple-900/20 transition-all flex flex-col group"
              >
                <div className="aspect-[3/4] bg-slate-950 overflow-hidden relative p-4 flex justify-center items-center">
                  <img 
                    src={product.cover} 
                    alt={`Cover of ${product.title}`}
                    className="w-full h-full object-contain drop-shadow-2xl rounded-sm group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg text-slate-100 mb-4 line-clamp-2 flex-1 text-center">
                    {product.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <a 
                      href={generateUpiLink(product.price)}
                      className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-purple-600/20"
                    >
                      Buy Now
                    </a>
                    <p className="text-[11px] text-center text-slate-500 leading-tight">
                      Payment only works directly on mobile devices (GPay, PhonePe, Paytm, etc.).
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Instructions Section */}
        <section className="bg-slate-900 rounded-3xl p-6 md:p-10 shadow-xl border border-slate-800 mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 text-center">
            How to get your Ebooks
          </h2>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-purple-900/30 text-purple-400 rounded-full flex items-center justify-center mb-2 border border-purple-500/20">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-slate-200">Step 1</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs">
                Click "Buy Now" on your chosen book and complete the payment via your UPI app.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-purple-900/30 text-purple-400 rounded-full flex items-center justify-center mb-2 border border-purple-500/20">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-slate-200">Step 2</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs">
                Take a screenshot of the successful payment showing the transaction ID.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-purple-900/30 text-purple-400 rounded-full flex items-center justify-center mb-2 border border-purple-500/20">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-slate-200">Step 3</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs">
                Click the button below to send the screenshot to my WhatsApp. I will verify it and send your PDF instantly.
              </p>
            </div>
          </div>

          <div className="flex justify-center border-t border-slate-800 pt-8">
            <a 
              href="https://wa.me/919330273530" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 px-8 rounded-full transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-6 h-6" />
              Send Screenshot on WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-600 py-8 text-center mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-sm">
          <p>© {new Date().getFullYear()} Psyche Thinks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}