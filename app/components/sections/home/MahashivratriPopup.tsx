'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MahashivratriPopup() {
  const [showMahashivratriPopup, setShowMahashivratriPopup] = useState(false);

  useEffect(() => {
    setShowMahashivratriPopup(true);
  }, []);

  return (
    <>
      {/* Mahashivratri Popup Modal */}
      <AnimatePresence>
        {showMahashivratriPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMahashivratriPopup(false)}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-black border border-[#D4AF37]/20 rounded-3xl shadow-[0_0_100px_rgba(212,175,55,0.2)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowMahashivratriPopup(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white hover:text-black rounded-full text-white transition-all border border-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>

              {/* Image Section */}
              <div className="relative h-40 sm:h-64 md:h-80 overflow-hidden rounded-t-3xl">
                <img
                  alt="Akhand PC Brahma Dhyan"
                  className="w-full h-full object-cover object-[center_35%] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                  src="/images/hero-patriji.jfif"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-5 sm:p-8 text-center relative">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase leading-none">
                  Akhand PC{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37]">
                      Brahma Dhyan
                    </span>
                </h2>

                {/* Content Section */}

                  <motion.div
                    className="mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs">
                      By Senior Master C Vijay Kumar
                    </span>
                  </motion.div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto mb-6 font-medium">
                  Join us for an exclusive spiritual session on <span className="text-[#D4AF37] font-semibold">@Kothrud</span> at <span className="text-[#D4AF37] font-semibold">9 AM - 4 PM, July 24</span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-xl hover:bg-[#F4DF8D] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Join Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setShowMahashivratriPopup(true)}
        className="fixed bottom-8 right-8 z-40 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4DF8D] text-black font-bold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🙏 Event
      </motion.button>
    </>
  );
}
