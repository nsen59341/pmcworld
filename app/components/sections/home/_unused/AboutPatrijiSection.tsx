'use client';

import { motion } from 'framer-motion';

export function AboutPatrijiSection() {
  return (
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
            whileInView={{ opacity: 1, x: 0 }}
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37]">
                Patriji
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#D4AF37] font-semibold mb-8 tracking-wide">
              &lt;1947 – 2026&gt;
            </p>

            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                Patriji was born in the year 1947 at Bodhan, Andhra Pradesh. Family man, ag. M.sc. He became enlightened in the year 1979, since then his journey to awaken and enlighten every individual on the Spiritual path began. He was conferred with titles of "Brahmarshi" and "Pitamaha". Patriji was a great flutist and singer, wonderful cook and avid reader who read over 1 Lakh books in this lifetime.
              </p>

              <p>
                Patriji established The Kurnool Spiritual Society in the year 1990 in Kurnool, since then till his last breath Patriji worked relentlessly for the sole mission to provide physical, mental, intellectual and spiritual health to one and all at free of cost. As a result of his work PSSM now has its presence in more than 40 countries, with lakhs and lakhs of people transformed into Meditator and Vegetarian.
              </p>
            </div>

            {/* View More Button */}
            <motion.a
              href="/about-patriji"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37] text-black rounded-full font-bold text-lg shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all group w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View More
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
