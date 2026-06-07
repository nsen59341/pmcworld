'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

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
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800/95 backdrop-blur-sm z-40 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/favicon.png"
                alt="PMC World Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Nav Items */}
            <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
              <a href="#" className="hover:text-[#D4AF37] transition">Home</a>
              <a href="#" className="hover:text-[#D4AF37] transition">Meditation</a>
              <a href="#" className="hover:text-[#D4AF37] transition">PSSM</a>
              <a href="#" className="hover:text-[#D4AF37] transition">Patriji</a>
              <a href="#" className="hover:text-[#D4AF37] transition">Music</a>
              <a href="#" className="hover:text-[#D4AF37] transition">Spiritual Service</a>
              <a href="#" className="hover:text-[#D4AF37] transition">More</a>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              <div className="hidden xl:flex items-center gap-3 border-r border-white/10 pr-4 mr-2">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Pmcworldd?rdid=ctbz6J5hPvXJhrrM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CGH3vgBrX%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1877F2] transition-colors"
                  title="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/pmc_world?utm_source=qr&igsh=MWVpNnBsdHBseWxsbQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E4405F] transition-colors"
                  title="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@pmcworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF0000] transition-colors"
                  title="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </a>
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <span className="text-xs font-medium uppercase">{selectedLanguage}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                {/* Language Dropdown Menu */}
                {showLanguageMenu && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1 z-50">
                    <button
                      onClick={() => {
                        setSelectedLanguage('EN');
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-slate-50 transition-colors ${
                        selectedLanguage === 'EN' ? 'bg-blue-50 text-yellow-500' : 'text-slate-700'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLanguage('MR');
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-slate-50 transition-colors ${
                        selectedLanguage === 'MR' ? 'bg-blue-50 text-yellow-500' : 'text-slate-700'
                      }`}
                    >
                      मराठी
                    </button>
                  </div>
                )}
              </div>
              <button className="px-6 py-2 bg-[#D4AF37] hover:bg-[#C49A2F] text-gray-900 font-bold rounded-full transition text-sm">
                Be a Volunteer
              </button>
            </div>
          </div>
        </div>
      </nav>

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
                  backgroundAttachment: 'fixed'
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

            {!playVideo ? (
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
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" style={{ transform: 'scale(1.19371)' }}></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[4/3]">
                {/* Unmuted Video with Audio */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3cuO6F8tpdk?autoplay=1&controls=1&loop=1&playlist=3cuO6F8tpdk&rel=0&showinfo=0&modestbranding=1"
                  title="About Patriji"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        </motion.div>

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

      {/* About Patriji Section */}
      <AboutPatrijiSection />
    </div>
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
              &lt;1947 – 2022&gt;
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
              href="/"
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
    video: '/videos/vegeterians.mp4',
    link: '#'
  },
  {
    id: 2,
    title: 'ANAPANSATI MEDITATION',
    video: '/videos/meditation.mp4',
    link: '#'
  },
  {
    id: 3,
    title: 'ABOUT THE PSSM',
    video: '/videos/pssm.mp4',
    link: '#'
  },
  {
    id: 4,
    title: 'LITERATURES',
    video: '/videos/literatures.mp4',
    link: '#'
  },
  {
    id: 5,
    title: 'FAQ',
    video: '/videos/faq.mp4',
    link: '#'
  },
  {
    id: 6,
    title: 'NEWS',
    video: '/videos/news.mp4',
    link: '#'
  }
];

function QualityOfLifeSection() {
  const swiperRef = useRef(null);
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
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
              className="w-12 h-12 rounded-full bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center transition-all duration-300 flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current rotate-180">
                <path d="M13.1685 12.0007L8.21875 7.05093L9.63296 5.63672L15.997 12.0007L9.63296 18.3646L8.21875 16.9504L13.1685 12.0007Z"></path>
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.swiper?.slideNext()}
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
          ref={swiperRef}
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
