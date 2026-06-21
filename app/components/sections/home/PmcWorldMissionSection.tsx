'use client';

import { motion } from 'framer-motion';
import { Icon } from '@/app/components/ui/Icon';
import { fadeUp } from '@/app/lib/motion-variants';

type FeatureIcon = 'globe' | 'heart' | 'sparkles';

type FeatureItem = {
  label: string;
  icon: FeatureIcon;
};

const movementContent = {
  eyebrow: 'PMC WORLD:',
  title: 'A Spiritual Movement for Transformation',
  paragraphs: [
    <>
      <strong className="text-slate-900">PMC WORLD</strong> is the media wing of Pyramid Spiritual
      Societies Movement (PSSM), a non-profit spiritual organisation dedicated to spreading awareness
      on Anapanasati Meditation, Pyramid Power and Vegetarianism across the world at free of cost.
    </>,
    <>
      Our Inspiration, mentor and friend is{' '}
      <strong className="bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37] bg-clip-text text-transparent">
        Brahmarshi Pitamaha Patriji
      </strong>
      , the visionary behind PSSM. Through PMC World, we strive to share his wisdom and teachings with
      people all over the globe...
    </>,
  ],
  visionStart:
    'Meditation is the key to a happy, healthy, and successful life. As the world enters a',
  visionHighlight: 'Great Spiritual Revolution',
  visionEnd:
    'we aim to make meditation a daily habit for every individual, helping them unlock their true potential.',
};

const featureItems: FeatureItem[] = [
  { label: 'Global Reach', icon: 'globe' },
  { label: 'Free of Cost', icon: 'heart' },
  { label: 'Spiritual Transformation', icon: 'sparkles' },
];

export function PmcWorldMissionSection() {
  return (
    <section className="relative mx-auto my-0 w-full overflow-hidden bg-slate-50 px-6 py-24 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50 opacity-100" />
      <div className="absolute left-0 top-0 z-10 h-[400px] w-full bg-gradient-to-b from-white to-transparent" />

      <div className="relative z-20 mx-auto max-w-6xl text-center">
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            {movementContent.eyebrow}{' '}
            <span className="bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37] bg-clip-text text-transparent">
              {movementContent.title}
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mb-16 max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700 md:text-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {movementContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          className="relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-amber-50/30 p-8 shadow-2xl backdrop-blur-sm md:p-16">
            <div className="absolute right-0 top-0 z-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 z-0 h-48 w-48 rounded-full bg-blue-200/20 blur-[80px]" />
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-center gap-3">
                <Icon name="sparkles" className="h-8 w-8 text-[#D4AF37]" />
                <h3 className="bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  Our Vision
                </h3>
                <Icon name="sparkles" className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-slate-800 md:text-2xl">
                {movementContent.visionStart}{' '}
                <span className="bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37] bg-clip-text font-bold text-transparent">
                  {movementContent.visionHighlight}
                </span>
                , {movementContent.visionEnd}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {featureItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F4DF8D] to-[#D4AF37] shadow-lg">
                <Icon name={item.icon} className="h-8 w-8 text-black" />
              </div>
              <p className="text-lg font-semibold text-slate-700">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
