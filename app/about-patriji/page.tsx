'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/app/components/Navigation';

function AboutPatrijiPage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
                <img
                  alt="Patriji"
                  className="w-full h-auto object-cover"
                  src="/images/patriji-about.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-[80px] -z-10"></div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37]">
                  Patriji
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-[#D4AF37] font-semibold mb-8 tracking-wide">
                &lt;1947 – 2022&gt;
              </p>

              <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed">
                <p>
                  Dr. Brahmarshi Pitamaha Patriji hails from Telangana, a Family man with Ag.Msc degree, flutist, avid reader with many more feathers to his hat. Became enlightened in the year 1979, since then his journey to awaken and enlighten every individual on the Spiritual path began. Hence, PSSM now has presence in more than 40 countries with crores and crores of people imbibing meditation.
                </p>

              </div>

              {/* Back Button */}
              <motion.a
                href="/"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37] text-black rounded-full font-bold text-lg shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                ← Back to Home
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPatrijiPage;
