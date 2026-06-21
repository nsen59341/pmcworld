'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutPatrijiCard } from './AboutPatrijiCard';

const heroSlides = [
  {
    badge: 'GLOBAL PSSM MOVEMENT',
    heading: 'Meditation',
    description: 'Unlock the infinite potential within you through the practice of Anapanasati Meditation.',
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=900&fit=crop")',
    bgColor: '#1a1a1a'
  },
  {
    badge: 'DIVINE FREQUENCIES',
    heading: 'Music & Sound',
    description: 'Experience healing and elevation through the power of spiritual music.',
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1600&h=900&fit=crop")',
    bgColor: '#1a1a1a'
  },
  {
    badge: 'HARMONY WITH NATURE',
    heading: 'Conscious Living',
    description: 'Embracing a plant-based lifestyle and respecting all forms of life.',
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.48), rgba(0,0,0,0.48)), url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop")',
    bgColor: '#1a1a1a'
  },
  {
    badge: 'GLOBAL PSSM MOVEMENT',
    heading: 'Awaken Your Inner Self',
    description: 'Join the Global PSSM movement and transform your life through Anapanasati Meditation, Vegetarianism and Pyramid Power – by Meditation experts and enriching online sessions on PMC WORLD media wing.',
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images//hero-patriji.jfif")',
    bgColor: '#1a1a1a'
  },
  {
    badge: 'ONE FAMILY',
    heading: 'Global Satsang',
    description: 'Uniting spiritual seekers worldwide in a shared journey of awakening.',
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop")',
    bgColor: '#1a1a1a'
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden pt-20">
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: slide.bgImage,
                backgroundColor: slide.bgColor,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll'
              }}
            >
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex w-fit px-4 py-2 border border-[#D4AF37] rounded-full mb-6"
                >
                  <span className="text-[#D4AF37] text-sm font-bold">{slide.badge}</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-7xl font-bold text-[#D4AF37] mb-6 leading-tight"
                >
                  {slide.heading}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                {/* Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-fit px-8 py-3 bg-[#D4AF37] hover:bg-[#C49A2F] text-gray-900 font-bold rounded-full transition"
                >
                  Start Journey
                </motion.button>

                {/* Slider Dots */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-12 left-8 md:left-16 flex gap-2 hidden"
                >
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`transition ${
                        idx === currentSlide
                          ? 'w-8 h-2 bg-[#D4AF37]'
                          : 'w-2 h-2 bg-gray-500 hover:bg-gray-400'
                      } rounded-full`}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Right Side - About Patriji Card */}

            </motion.div>
          )
        ))}
      </AnimatePresence>

      <AboutPatrijiCard />

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 pointer-events-none z-10 hidden">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 text-[#D4AF37] rounded-full flex items-center justify-center transition"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 text-[#D4AF37] rounded-full flex items-center justify-center transition"
        >
          →
        </button>
      </div>
    </section>
  );
}
