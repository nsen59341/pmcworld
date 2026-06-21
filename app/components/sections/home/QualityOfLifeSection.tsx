'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export function QualityOfLifeSection() {
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
          modules={[Navigation]}
          slidesPerView={1.5}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          pagination={false}
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
