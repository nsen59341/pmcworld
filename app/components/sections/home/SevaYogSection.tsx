'use client';

import { motion } from 'framer-motion';

export function SevaYogSection() {
  return (
    <section className="relative mx-auto w-full overflow-hidden bg-black px-6 py-20 text-white lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#D4AF37] p-8 md:p-12">
          <div className="relative z-10 mb-8">
            <h2 className="text-4xl font-bold leading-[0.85] tracking-tight text-white opacity-90 mix-blend-overlay md:text-7xl">
              SEVA
            </h2>
            <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white md:text-8xl">
              YOG
            </h2>
          </div>
          <motion.div
            aria-label="Global volunteers meditating"
            className="-mx-4 -mb-6 mt-auto h-72 w-[calc(100%+2rem)] translate-y-8 rounded-b-[2.5rem] bg-cover bg-center brightness-105 drop-shadow-2xl md:-mx-6 md:-mb-8 md:h-96 md:w-[calc(100%+3rem)]"
            role="img"
            style={{
              backgroundImage:
                'url("/images/volunteers-meditating.png")',
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        <div>
          <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">SEVA YOG</h2>
          <h3 className="mb-6 text-xl font-bold text-[#D4AF37] md:text-2xl">
            Become a member of LokaKalyana
          </h3>
          <div className="mb-8 h-px w-full bg-white/20" />
          <p className="mb-8 text-2xl font-bold leading-tight text-[#D4AF37]">
            Transform your Soul, uplift your life, create an Impact
          </p>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            PMC WORLD warmly welcomes you to join us and become a valued member. We sincerely
            thank you for your interest in contributing to one of the noblest causes.
          </p>
          <p className="mb-12 text-lg leading-relaxed text-slate-400">
            Our mission is to bring meditation into every household, school, college, and
            institution, to every nook and corner of the World.
          </p>
          <form className="flex flex-col gap-4 sm:flex-row">
            <input
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white transition-colors focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              placeholder="Your email address"
              type="email"
            />
            <button
              className="rounded-full bg-[#D4AF37] px-10 py-4 font-bold text-black shadow-lg shadow-yellow-900/20 transition-colors hover:bg-yellow-400"
              type="button"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-600">Your data is safe with us. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
