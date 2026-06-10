'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/footer';

function AboutPatrijiPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const featuredLogos = ['PSSM', 'PMC', 'Dhyan Jagat', 'PMC World'];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Content Spacer for Fixed Nav */}
      <div className="h-20"></div>

      {/* About Patriji Section */}
      <section className="relative overflow-hidden bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1160px]">
          <div className="relative grid min-h-[535px] grid-cols-1 gap-0 lg:grid-cols-[2fr_1fr]">
            {/* Left - Portrait Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[360px] overflow-hidden rounded-t-[10px] bg-[#3674cf] sm:min-h-[430px] lg:min-h-[410px] lg:rounded-bl-none lg:rounded-tr-none"
            >
              <Image
                alt="Patriji"
                fill
                priority
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-contain object-bottom"
                src="/images/patriji-about.png"
              />
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              className="relative flex min-h-[260px] flex-col justify-center bg-white px-8 py-10 text-black sm:px-12 lg:min-h-[410px] lg:rounded-bl-[24px] lg:px-14"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-[280px] text-[13px] font-semibold leading-[1.45] text-neutral-950 sm:text-sm">
                Dr. Brahmarshi Pitamaha Patriji hails from Telangana, a Family man with Ag.Msc degree, flutist, avid reader with many more feathers to his hat. Became enlightened in the year 1979, since then his journey to awaken and enlighten every individual on the Spiritual path began. Hence, PSSM now has presence in more than 40 countries with crores and crores of people imbibing meditation.
              </p>

              <motion.a
                href="#patriji-story"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="mt-5 inline-flex w-fit items-center rounded-full bg-neutral-100 px-8 py-3 text-[11px] font-extrabold text-neutral-900 shadow-sm transition hover:bg-neutral-200"
              >
                Know Patriji
              </motion.a>
            </motion.div>

            <motion.div
              id="patriji-story"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative z-10 bg-white px-0 py-10 lg:col-span-2 lg:mt-0 lg:grid lg:min-h-[190px] lg:grid-cols-[2fr_1fr]"
            >
              <div className="px-0 lg:rounded-tr-[24px] lg:bg-white lg:pt-10">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 pr-0 sm:grid-cols-4 lg:pr-10">
                  {featuredLogos.map((logo) => (
                    <div
                      key={logo}
                      className="flex min-h-10 items-center text-[22px] font-black leading-none text-neutral-300 sm:text-[24px] lg:text-[28px]"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-end justify-start lg:mt-0 lg:justify-end">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group relative aspect-[16/9] w-full max-w-[360px] overflow-hidden rounded-[10px] bg-neutral-900 text-left shadow-xl lg:-mt-20 lg:max-w-none"
                  aria-label="Watch Patriji video"
                >
                  <Image
                    alt="Patriji video thumbnail"
                    fill
                    sizes="(min-width: 1024px) 33vw, 360px"
                    className="object-cover opacity-90 transition group-hover:scale-105"
                    src="/images/patriji2.jfif"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-[12px] font-bold text-white backdrop-blur-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-900">
                        <svg className="ml-0.5 h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                      Watch video
                    </span>
                  </div>
                </button>
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
