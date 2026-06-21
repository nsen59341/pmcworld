'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation } from '@/app/components/layout/Navigation';
import { Footer } from '@/app/components/layout/Footer';
import { VideoModal } from '@/app/components/ui/VideoModal';
import { Icon } from '@/app/components/ui/Icon';

const stats = [
  { value: '1979', label: 'Year of Enlightenment' },
  { value: '40+', label: 'Countries Reached' },
  { value: 'Crores', label: 'Lives Touched' },
];

const featuredLogos = ['PSSM', 'PMC', 'Dhyan Jagat', 'PMC World'];

function AboutPatrijiPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />

      <div className="h-20" />

      {/* Hero - heading-first layout, mirrors the homepage "Do you have a hunger" section */}
      <section className="relative w-full overflow-hidden bg-slate-900 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-24 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-16"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              About Patriji
            </span>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Do you have a hunger{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                to increase the quality of your life?
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr_1fr] lg:items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#3674cf] to-[#1d3f7a] shadow-2xl">
                <Image
                  alt="Brahmarshi Pitamaha Patriji"
                  fill
                  priority
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-top"
                  src="/images/patriji-about.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Text content - centered between image and video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="px-2 text-center"
            >
              <p className="mx-auto max-w-sm text-base leading-relaxed text-slate-300 sm:text-lg">
                Dr. Brahmarshi Pitamaha Patriji hails from Telangana, a family man with an
                Ag.Msc degree, flutist, avid reader with many more feathers to his hat. He
                became enlightened in the year 1979, since then his journey to awaken and
                enlighten every individual on the spiritual path began. Hence, PSSM now has
                presence in more than 40 countries with crores and crores of people imbibing
                meditation.
              </p>

              <motion.a
                href="#patriji-story"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(212,175,55,0.3)] transition hover:bg-[#C49A2F]"
              >
                Know Patriji
                <Icon name="arrow" className="h-4 w-4" />
              </motion.a>

              <div className="mx-auto mt-10 grid max-w-sm grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-[#D4AF37] sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Video - matches portrait size */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <button
                onClick={() => setIsVideoModalOpen(true)}
                aria-label="Watch Patriji's video"
                className="group relative block aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
              >
                <Image
                  alt="Patriji video thumbnail"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover opacity-90 transition group-hover:scale-105"
                  src="/images/patriji2.jfif"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon name="play" className="ml-1 h-6 w-6" />
                  </span>
                </div>
                <span className="absolute left-4 top-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white drop-shadow">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  Watch video
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <motion.section
        id="patriji-story"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden border-y border-white/5 bg-slate-950 px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="font-serif text-6xl leading-none text-[#D4AF37]/40">&ldquo;</span>
          <p className="mt-2 text-2xl font-semibold leading-relaxed tracking-tight text-white sm:text-3xl">
            Meditation is not an escape from life — it is the practice that brings you
            fully into it.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Brahmarshi Pitamaha Patriji
          </p>
        </div>
      </motion.section>

      {/* Featured / affiliated organizations */}
      <section className="relative px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1160px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500"
          >
            Founded &amp; Inspired Organizations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {featuredLogos.map((logo) => (
              <div
                key={logo}
                className="flex min-h-14 items-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-black tracking-tight text-slate-200 backdrop-blur-sm transition-colors hover:border-[#D4AF37]/40 hover:text-[#D4AF37] sm:text-xl"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-[1160px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-8 py-16 text-center shadow-2xl sm:px-16">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Begin your own journey{' '}
            <span className="bg-gradient-to-r from-[#F4DF8D] via-[#D4AF37] to-[#B3782C] bg-clip-text text-transparent">
              towards enlightenment.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
            Join millions practicing Anapanasati meditation under Patriji&apos;s guidance.
          </p>
          <motion.button
            onClick={() => setIsVideoModalOpen(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(212,175,55,0.3)] transition hover:bg-[#C49A2F]"
          >
            Watch Patriji&apos;s Story
            <Icon name="play" className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.section>

      <VideoModal
        open={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        src="https://www.youtube.com/embed/3cuO6F8tpdk?enablejsapi=1&autoplay=1&rel=0&showinfo=0&modestbranding=1&disablekb=1&iv_load_policy=3"
        title="Patriji's Video"
        panelClassName="relative w-[min(56rem,calc(100vw-2rem),calc(85vh*16/9))] aspect-video rounded-2xl overflow-hidden"
        closeButtonClassName="absolute top-4 right-4 bg-[#D4AF37] hover:bg-[#E8C547] text-black rounded-full p-2 transition-colors z-10"
        closeIcon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        }
      />

      <Footer />
    </div>
  );
}

export default AboutPatrijiPage;
