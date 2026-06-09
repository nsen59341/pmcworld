'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/footer';

function AboutPatrijiPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Content Spacer for Fixed Nav */}
      <div className="h-20"></div>

      {/* About Patriji Section */}
      <section className="relative w-full mx-auto overflow-hidden my-0 py-24 px-6 lg:px-12 bg-black">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-amber-900/30"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left - Image with Video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:w-1/2 flex-shrink-0"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
                <img
                  alt="Patriji"
                  className="w-full h-auto object-cover"
                  src="/images/patriji-about.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Small Video - Diagonally Touched Bottom Right */}
              <div className="absolute bottom-0 right-0 h-40 w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4AF37] bg-black z-10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/3cuO6F8tpdk?enablejsapi=1&mute=1&controls=0&loop=1&playlist=3cuO6F8tpdk&rel=0&showinfo=0&modestbranding=1&disablekb=1&iv_load_policy=3"
                  title="Patriji's Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Play Button on Small Video */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 group"
                  aria-label="Play video with audio"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-4 h-4 text-black ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-[80px] -z-10"></div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              className="flex flex-col justify-start w-full lg:w-1/2 pt-0 lg:pt-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-2">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37]">
                  Patriji
                </span>
              </h1>

              <p className="text-base md:text-lg text-[#D4AF37] font-semibold mb-4 tracking-wide">
                &lt;1947 – 2022&gt;
              </p>

              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                <p>
                  Dr. Brahmarshi Pitamaha Patriji hails from Telangana, a Family man with Ag.Msc degree, flutist, avid reader with many more feathers to his hat. Became enlightened in the year 1979, since then his journey to awaken and enlighten every individual on the Spiritual path began. Hence, PSSM now has presence in more than 40 countries with crores and crores of people imbibing meditation.
                </p>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3cuO6F8tpdk?enablejsapi=1&autoplay=1&rel=0&showinfo=0&modestbranding=1&disablekb=1&iv_load_policy=3"
              title="Patriji's Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 bg-[#D4AF37] hover:bg-[#E8C547] text-black rounded-full p-2 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AboutPatrijiPage;
