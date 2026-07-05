import React, { useState } from 'react';
import { Brain, MessageCircle, Camera, CheckCircle, Smartphone, X, Copy, Check, QrCode, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [copied, setCopied] = useState(false);

  const handleBuyClick = (e: React.MouseEvent<HTMLAnchorElement>, product: typeof PRODUCTS[0]) => {
    // Detect if client device is mobile
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault(); // Stop the broken upi:// link browser action on desktop
      setSelectedProduct(product); // Display QR code fallback modal instead
    }
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText('8013025757@upi');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            {PRODUCTS.map((product) => {
              const upiLink = generateUpiLink(product.price);
              return (
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
                        href={upiLink}
                        onClick={(e) => handleBuyClick(e, product)}
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
              );
            })}
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

      {/* QR Code / Desktop Checkout Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md p-6 overflow-hidden shadow-2xl shadow-purple-500/10 z-10 text-center"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 p-1 bg-slate-950/40 rounded-full border border-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center mt-2">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-3 border border-purple-500/20">
                  <QrCode className="w-6 h-6 text-purple-400" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-1">Pay with UPI</h3>
                <p className="text-sm text-slate-400 mb-4">{selectedProduct.title}</p>
                
                {/* QR Code Generator API (returns a clean vector QR image) */}
                <div className="bg-white p-4 rounded-2xl mb-5 shadow-inner">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=581c87&data=${encodeURIComponent(generateUpiLink(selectedProduct.price))}`}
                    alt="Scan to pay"
                    className="w-[180px] h-[180px]"
                  />
                </div>

                <div className="text-center mb-5">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block mb-1">Amount to pay</span>
                  <span className="text-3xl font-extrabold text-slate-100">₹{selectedProduct.price}</span>
                </div>

                {/* Copy UPI Address Helper */}
                <div className="w-full bg-slate-950/60 rounded-xl p-3 border border-slate-800 flex items-center justify-between gap-2 mb-6">
                  <div className="text-left">
                    <span className="text-[10px] text-slate-500 font-semibold block uppercase">UPI Address</span>
                    <span className="text-sm text-slate-300 font-mono">8013025757@upi</span>
                  </div>
                  <button 
                    onClick={copyUpiId}
                    className="flex items-center gap-1.5 text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded-lg transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <div className="flex flex-col gap-2.5 w-full">
                  <a 
                    href={generateUpiLink(selectedProduct.price)}
                    className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors py-2 border border-dashed border-slate-800 rounded-xl hover:border-slate-700 bg-slate-950/30"
                  >
                    <span>Force open custom UPI protocol</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Scan the QR code above with Google Pay, PhonePe, Paytm or any UPI application on your mobile device to complete payment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-600 py-8 text-center mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-sm">
          <p>© {new Date().getFullYear()} Psyche Thinks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}