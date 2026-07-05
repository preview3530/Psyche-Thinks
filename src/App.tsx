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
const generateUpiLink = (price: number, scheme: 'upi' | 'phonepe' | 'gpay' | 'paytm' = 'upi'): string => {
  const params = `pa=8013025757@upi&pn=Anisul%20Alam&am=${price}&cu=INR`;
  switch (scheme) {
    case 'phonepe':
      return `phonepe://pay?${params}`;
    case 'gpay':
      return `tez://upi/pay?${params}`;
    case 'paytm':
      return `paytmmp://pay?${params}`;
    case 'upi':
    default:
      return `upi://pay?${params}`;
  }
};

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [copied, setCopied] = useState(false);
  const [isIframe] = useState(() => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  });

  const handleBuyClick = (e: React.MouseEvent<HTMLAnchorElement>, product: typeof PRODUCTS[0]) => {
    e.preventDefault();
    setSelectedProduct(product);
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

      {/* Embedded Preview Banner */}
      {isIframe && (
        <div className="bg-gradient-to-r from-purple-950 to-indigo-950 border-b border-purple-500/20 py-2.5 px-4 text-center text-xs text-purple-200">
          <span className="font-semibold text-purple-300">💡 Running in Preview:</span> UPI mobile app launch may be restricted by iframe sandboxing. For the best checkout experience, <a href={window.location.href} target="_blank" rel="noopener noreferrer" className="underline font-bold text-white hover:text-purple-300">open this app in a new tab</a> or use the QR Code option.
        </div>
      )}

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
                  <Smartphone className="w-6 h-6 text-purple-400" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-1 font-sans">Complete Your Payment</h3>
                <p className="text-xs text-slate-400 mb-6">Paying <span className="font-semibold text-slate-200 font-mono">₹{selectedProduct.price}</span> for "{selectedProduct.title}"</p>
                
                {/* 1. Single Universal Button for all apps */}
                <div className="w-full mb-6">
                  <a 
                    href={generateUpiLink(selectedProduct.price, 'upi')}
                    target="_top"
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 active:scale-98 text-center text-base"
                  >
                    <Smartphone className="w-5 h-5 animate-pulse" />
                    <span>Pay with GPay, PhonePe, Paytm, Mobikwik, etc.</span>
                  </a>
                  <p className="text-[11px] text-slate-500 mt-2.5 leading-normal max-w-sm mx-auto">
                    Supported apps: GPay, PhonePe, Paytm, Cred, Mobikwik Pocket UPI, BHIM, and all other UPI wallet apps.
                  </p>
                </div>

                <div className="relative flex py-1 items-center w-full mb-5">
                  <div className="flex-grow border-t border-slate-800"></div>
                  <span className="flex-shrink mx-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">or scan QR on another device</span>
                  <div className="flex-grow border-t border-slate-800"></div>
                </div>

                {/* 2. QR Code (For Desktop / Tablet / Screen Mirroring) */}
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-white p-2.5 rounded-2xl shadow-inner border border-slate-200">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=581c87&data=${encodeURIComponent(generateUpiLink(selectedProduct.price, 'upi'))}`}
                      alt="Scan to pay"
                      className="w-[120px] h-[120px]"
                    />
                  </div>
                </div>

                <div className="text-center mb-4">
                  <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold block mb-0.5">Amount to pay</span>
                  <span className="text-xl font-extrabold text-slate-100">₹{selectedProduct.price}</span>
                </div>

                {/* 3. Copy UPI Address Helper */}
                <div className="w-full bg-slate-950/60 rounded-xl p-3 border border-slate-800 flex items-center justify-between gap-2 mb-4">
                  <div className="text-left">
                    <span className="text-[9px] text-slate-500 font-bold block uppercase">UPI ID</span>
                    <span className="text-xs text-slate-300 font-mono select-all">8013025757@upi</span>
                  </div>
                  <button 
                    onClick={copyUpiId}
                    className="flex items-center gap-1 text-xs font-semibold bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-200 px-2.5 py-1.5 rounded-lg border border-slate-700 transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copied' : 'Copy ID'}
                  </button>
                </div>

                <div className="text-left bg-purple-950/20 border border-purple-500/10 rounded-xl p-3.5 w-full text-[11px] text-slate-400 leading-normal space-y-1">
                  <p className="font-semibold text-purple-300">💡 Tip for Mobile Webviews & Wallets:</p>
                  <p>If your browser blocks automatic redirection, copy the UPI ID above, pay <strong>₹{selectedProduct.price}</strong> inside any payment app or wallet (like GPay, PhonePe, Paytm, or Mobikwik Pocket UPI), and send the screenshot on WhatsApp.</p>
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