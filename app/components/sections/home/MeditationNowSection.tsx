'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/app/components/ui/Icon';
import { VideoModal } from '@/app/components/ui/VideoModal';

export function MeditationNowSection() {
  const [showMeditationVideo, setShowMeditationVideo] = useState(false);

  return (
    <section className="relative mx-auto w-full overflow-hidden bg-black px-6 py-24 text-white lg:px-12">
      <div className="absolute left-[-10%] top-[-15%] h-[700px] w-[700px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-3 text-4xl font-black uppercase leading-tight tracking-tight md:text-7xl">
            Be A <span className="text-[#D4AF37]">Meditator</span>
          </h2>
          <p className="mb-4 text-2xl font-medium italic text-white md:text-3xl">
            Let&apos;s Meditate Now
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75">
            Begin with a quick guided meditation and experience the simplicity of Anapanasati:
            observing natural breath with awareness.
          </p>
        </motion.div>

        <motion.div
          className="group relative mx-auto mt-16 flex max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl cursor-pointer lg:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
          onClick={() => setShowMeditationVideo(true)}
        >
          <div className="relative aspect-video w-full overflow-hidden bg-slate-900 lg:aspect-auto lg:w-2/5">
            <div
              aria-label="Guided meditation"
              className="h-full w-full bg-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              role="img"
              style={{
                backgroundImage: 'url("/images/be_a_meditator.png")',
                backgroundPosition: 'left center',
              }}
            />
          </div>
          <div className="relative flex w-full flex-1 flex-col justify-center gap-6 overflow-hidden bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-8 md:p-10">
            <Icon
              name="sparkles"
              className="absolute -right-4 -top-4 h-32 w-32 text-black/10"
            />
            <div className="relative">
              <h3 className="text-3xl font-black italic leading-none text-white md:text-5xl">
                Quick 20 min
              </h3>
              <p className="mt-2 text-2xl font-thin italic text-white/80 md:text-4xl">
                Guided Meditation
              </p>
            </div>
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-110">
              <Icon name="play" className="ml-1 h-6 w-6" />
            </span>
          </div>
        </motion.div>
      </div>

      <VideoModal
        open={showMeditationVideo}
        onClose={() => setShowMeditationVideo(false)}
        src="https://www.youtube.com/embed/aVkehicsHao?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1"
        title="Quick 20 minutes meditation"
      />
    </section>
  );
}
