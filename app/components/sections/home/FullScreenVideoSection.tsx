'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videoSections = [
  {
    id: 1,
    title: 'About Patriji',
    description: 'Discover the path to inner peace and spiritual awakening through Anapanasati Meditation',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327209/patriji_slider_org_dxfy7d.mp4'
  },
  {
    id: 2,
    title: 'About Patriji',
    description: 'Experience the profound benefits of meditation and conscious living',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327209/patriji_slider_org_dxfy7d.mp4'
  },
  {
    id: 3,
    title: 'About Patriji',
    description: 'Join our global community of spiritual seekers and meditation practitioners',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327209/patriji_slider_org_dxfy7d.mp4'
  }
];

export function FullScreenVideoSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const currentVideo = videoSections[currentVideoIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoSections.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 md:pt-56 pb-32 md:pb-56 z-10">
      {/* Video Background */}
      <video
        key={currentVideo.id}
        loop
        playsInline
        autoPlay
        muted
        className="absolute inset-0 h-full w-full bg-black object-cover"
        src={currentVideo.video}
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 hidden">
        {videoSections.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentVideoIndex
                ? 'w-8 bg-[#D4AF37]'
                : 'w-3 bg-white/30 hover:bg-white/50'
            }`}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center min-h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo.id}
            className="max-w-3xl space-y-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                {currentVideo.title}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4DF8D] to-[#D4AF37]">
                  .
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                {currentVideo.description}
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-8 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/about-patriji"
                className="inline-flex items-center justify-center gap-2 font-bold text-center tracking-wide rounded-full duration-500 border border-[#D4AF37] bg-[#D4AF37] hover:bg-[#C49A2F] text-black w-auto text-sm md:text-base py-3 md:py-4 px-8 md:px-10 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                <span>Know More</span>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
