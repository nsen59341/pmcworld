'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/app/components/ui/Icon';
import { YouTubeEmbed } from '@/app/components/ui/YouTubeEmbed';

const meditationQuestions = [
  'Why should one do Meditation?',
  'How should one do Meditation?',
  'What is Meditation?',
  'What is the right age for Meditation?',
];

export function MeditationWhySection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative mx-auto flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 py-20 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F4DF8D_0%,_#000000_60%)] opacity-20" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="group relative mx-auto aspect-square w-full max-w-sm lg:mx-0 lg:max-w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(212,175,55,0.2)]">
              {isVideoPlaying ? (
                <YouTubeEmbed
                  className="h-full w-full bg-black"
                  src="https://www.youtube.com/embed/P9ktQk2RCvE?autoplay=1&rel=0&modestbranding=1"
                  title="Guided meditation short"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  className="group/video relative h-full w-full text-left"
                  onClick={() => setIsVideoPlaying(true)}
                  type="button"
                  aria-label="Play guided meditation short"
                >
                  <div
                    aria-hidden="true"
                    className="h-full w-full bg-cover bg-center sepia-[0.3] grayscale-[0.35] transition-transform duration-1000 group-hover:scale-110 group-hover/video:grayscale-0"
                    style={{
                      backgroundImage: 'url("https://img.youtube.com/vi/P9ktQk2RCvE/hqdefault.jpg")',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-[0_0_40px_rgba(212,175,55,0.55)] transition-transform group-hover/video:scale-110">
                      <Icon name="play" className="ml-1 h-8 w-8" />
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-4 shadow-xl backdrop-blur-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50" />
                      <div className="relative flex items-center gap-3">
                        <div className="rounded-full bg-[#D4AF37] p-2 text-black shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                          <Icon name="sparkles" className="h-4 w-4 fill-black" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold leading-none text-white">Inner Potential</h4>
                          <p className="mt-1 text-xs text-amber-100/80">Unlock your true self.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Why{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
                Meditation?
              </span>
            </h2>
            <div className="mb-8 space-y-3 text-left">
              {meditationQuestions.map((question) => (
                <p key={question} className="text-lg font-semibold text-[#D4AF37] md:text-xl">
                  - {question}
                </p>
              ))}
            </div>
            <div className="mb-8 space-y-4">
              <p className="mx-auto max-w-lg text-lg leading-relaxed text-white/90 lg:mx-0">
                Meditation is silencing the incessant chatter of the restless mind for that.. one needs to be with the <span className="font-semibold text-[#D4AF37]">BREATH</span>.
              </p>
              <p className="mx-auto max-w-lg text-lg leading-relaxed text-white/90 lg:mx-0">
                Meditation has numerous benefits..{' '}
                <span className="font-semibold text-[#D4AF37]">
                  to name a few all diseases healed quickly, stress-free life, career excellence, increased mind power, qualitative relationships
                </span>{' '}
                and <span className="font-semibold text-[#D4AF37]">self-realisation</span>
              </p>
            </div>
            <button className="mx-auto block rounded-full bg-white px-8 py-3 text-base font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:bg-[#D4AF37] hover:text-white hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] lg:mx-0">
              Let’s Meditate Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
