'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { YouTubeEmbed } from '@/app/components/ui/YouTubeEmbed';
import { VideoModal } from '@/app/components/ui/VideoModal';

export function AboutPatrijiCard() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      {/* Video Player - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="lg:absolute lg:bottom-10 lg:right-12 lg:w-80 z-30 relative w-full max-w-[240px] mx-auto mt-4 sm:mt-6 px-5 sm:px-8 lg:px-0 lg:mt-0 lg:mx-0"
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
            <YouTubeEmbed
              src="https://www.youtube.com/embed/3cuO6F8tpdk?enablejsapi=1&autoplay=1&mute=1&controls=0&loop=1&playlist=3cuO6F8tpdk&rel=0&showinfo=0&modestbranding=1&disablekb=1&iv_load_policy=3"
              title="About Patriji"
              className="w-full h-full object-cover scale-150 opacity-30 mix-blend-screen transition-all duration-500 group-hover:opacity-100"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity bg-black/20">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" style={{ transform: 'scale(1.19371)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <VideoModal
        open={playVideo}
        onClose={() => setPlayVideo(false)}
        src="https://www.youtube.com/embed/3cuO6F8tpdk?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1"
        title="About Patriji"
      />
    </>
  );
}
