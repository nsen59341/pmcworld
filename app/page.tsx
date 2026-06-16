'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import { Navigation as NavBar } from '@/app/components/Navigation';
import { Footer } from '@/app/components/footer';
import { PmcWorldMovementSection } from '@/app/components/PmcWorldMovementSection';
import { RefSiteSections } from '@/app/components/RefSiteSections';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showMahashivratriPopup, setShowMahashivratriPopup] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  useEffect(() => {
    setShowMahashivratriPopup(true);
  }, []);

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
    <div className="min-h-screen bg-gray-900">
      {/* Shared Navigation Component */}
      <NavBar />

      {/* Hero Carousel */}
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
                    className="absolute bottom-12 left-8 md:left-16 flex gap-2"
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

        {/* Video Player - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden lg:block absolute bottom-10 right-12 w-80 z-30"
        >
          <div
            className="relative block rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] bg-transparent cursor-pointer"
            onClick={() => setPlayVideo(true)}
          >
            {/* About Patriji Label */}
            <span className="absolute top-3 left-3 z-20 flex items-center gap-2 text-[10px] font-bold tracking-widest text-white uppercase opacity-90 drop-shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              About Patriji
            </span>

            <div className="relative aspect-[4/3] bg-transparent">
              {/* Muted Video Background */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3cuO6F8tpdk?enablejsapi=1&autoplay=1&mute=1&controls=0&loop=1&playlist=3cuO6F8tpdk&rel=0&showinfo=0&modestbranding=1&disablekb=1&iv_load_policy=3"
                title="About Patriji"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full object-cover scale-150 opacity-30 mix-blend-screen transition-all duration-500 group-hover:opacity-100"
              ></iframe>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" style={{ transform: 'scale(1.19371)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Modal Popup */}
        <AnimatePresence>
          {playVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPlayVideo(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black border border-[#D4AF37]/30 shadow-2xl"
              >
                {/* Video with Audio */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3cuO6F8tpdk?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1"
                  title="About Patriji"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>

                {/* Close Button */}
                <button
                  onClick={() => setPlayVideo(false)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black flex items-center justify-center transition-all duration-300 border border-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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

      {/* Do You Have a Hunger Section */}
      <QualityOfLifeSection />

      {/* About Patriji Section
      <AboutPatrijiSection /> */}

      {/* Full Screen Video Section */}
      <FullScreenVideoSection />

      {/* Mahashivratri Popup Modal */}
      <AnimatePresence>
        {showMahashivratriPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMahashivratriPopup(false)}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-black border border-[#D4AF37]/20 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.2)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowMahashivratriPopup(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white hover:text-black rounded-full text-white transition-all border border-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>

              {/* Image Section */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  alt="Akhand PC Brahma Dhyan"
                  className="w-full h-full object-cover object-[center_35%] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                  src="/images/hero-patriji.jfif"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 text-center relative">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase leading-none">
                  Akhand PC{' '}                
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37]">
                      Brahma Dhyan
                    </span>
                </h2>

                {/* Content Section */}

                  <motion.div
                    className="mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs">
                      By Senior Master C Vijay Kumar
                    </span>
                  </motion.div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto mb-6 font-medium">
                  Join us for an exclusive spiritual session on <span className="text-[#D4AF37] font-semibold">@Kothrud</span> at <span className="text-[#D4AF37] font-semibold">9 AM - 4 PM, July 24</span> 
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-xl hover:bg-[#F4DF8D] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Join Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setShowMahashivratriPopup(true)}
        className="fixed bottom-8 right-8 z-40 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4DF8D] text-black font-bold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🙏 Event
      </motion.button>

      <PmcWorldMovementSection />

      <RefSiteSections />

      <Footer />

    </div>
  );
}

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

function FullScreenVideoSection() {
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
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

function AboutPatrijiSection() {
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

const qualityCards = [
  {
    id: 1,
    title: 'VEGETARIANISM',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327209/vegeterians_nr7zqo.mp4',
    link: '#'
  },
  {
    id: 2,
    title: 'ANAPANSATI MEDITATION',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327209/meditation_fnqyoh.mp4',
    link: '#'
  },
  {
    id: 3,
    title: 'ABOUT THE PSSM',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327213/pssm_erlngc.mp4',
    link: '#'
  },
  {
    id: 4,
    title: 'LITERATURES',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327207/literatures_cgctef.mp4',
    link: '#'
  },
  {
    id: 5,
    title: 'FAQ',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327207/faq_yxrykw.mp4',
    link: '#'
  },
  {
    id: 6,
    title: 'NEWS',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327210/news_lq9mau.mp4',
    link: '#'
  }
];

function QualityOfLifeSection() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement>>({});

  useEffect(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.currentTime = 0;
        video.pause();
        video.load();
      }
    });
  }, []);

  const handleCardHover = (cardId: number, isHovering: boolean) => {
    const video = videoRefs.current[cardId];
    if (video) {
      if (isHovering) {
        video.play().catch((err) => console.log('Play error:', err));
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  return (
    <section className="relative w-full mx-auto overflow-hidden py-24 px-6 lg:px-12 bg-slate-900">
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Header with Title and Navigation */}
        <motion.div
          className="mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Do you have a hunger <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">
                to increase the quality of your life?
              </span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 hidden">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center transition-all duration-300 flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current rotate-180">
                <path d="M13.1685 12.0007L8.21875 7.05093L9.63296 5.63672L15.997 12.0007L9.63296 18.3646L8.21875 16.9504L13.1685 12.0007Z"></path>
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center transition-all duration-300 flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M13.1685 12.0007L8.21875 7.05093L9.63296 5.63672L15.997 12.0007L9.63296 18.3646L8.21875 16.9504L13.1685 12.0007Z"></path>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1.5}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          pagination={{ clickable: true }}
          className="!pb-20"
        >
          {qualityCards.map((card) => (
            <SwiperSlide key={card.id} className="!h-96">
              <motion.div
                className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
                onMouseEnter={() => handleCardHover(card.id, true)}
                onMouseLeave={() => handleCardHover(card.id, false)}
              >
                {/* Fallback Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>

                {/* Video Background */}
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[card.id] = el;
                  }}
                  className="absolute inset-0 w-full h-full object-cover bg-slate-800"
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={card.video} type="video/mp4" />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-end text-center">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-[#D4AF37] transition-colors">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Pagination Styles */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: rgba(212, 175, 55, 0.4);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #D4AF37;
        }
      `}</style>
    </section>
  );
}
