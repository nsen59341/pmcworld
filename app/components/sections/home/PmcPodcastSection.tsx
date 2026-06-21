'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

function PlatformLink({
  iconBg,
  label,
  name,
  svg,
  href = '#',
}: {
  iconBg: string;
  label: string;
  name: string;
  svg: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      target='_blank'
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all hover:border-[#D4AF37]/50 hover:bg-white/[0.08] group"
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm ${iconBg} text-white`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {svg}
        </svg>
      </div>
      <div className="text-left">
        <p className="text-[10px] font-bold uppercase tracking-wide text-white/40">{label}</p>
        <p className="font-bold leading-none text-white">{name}</p>
      </div>
    </a>
  );
}

export function PmcPodcastSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  function getEmbedUrl(url: string) {
    if (url.includes('watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('playlist?list=')) {
      const list = url.split('list=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/videoseries?list=${list}`;
    }
    return url;
  }

  const episodes = [
    {
      title: 'The Science of Meditation',
      meta: 'Meditation • Science • JAN 14, 2025',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400',
      video: "https://www.youtube.com/watch?v=py-j-2g8Ric"
    },
    {
      title: 'Conscious Living',
      meta: 'Lifestyle • Health • JAN 21, 2025',
      img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=400',
      video: "https://www.youtube.com/watch?v=JulwmDeg4RI"
    },
    {
      title: 'Energy Healing Basics',
      meta: 'Healing • Energy • JAN 28, 2025',
      img: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80&w=400',
      video: "https://www.youtube.com/watch?v=Nnn1NH8T7Ek"

    },
    {
      title: 'Vegetarianism & Spirituality',
      meta: 'Philosophy • Life • FEB 04, 2025',
      img: 'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400',
      video: "https://www.youtube.com/watch?v=bpSsuIDQ2NM"
    },
    {
      title: 'The Power of Silence',
      meta: 'Silence • Peace • FEB 11, 2025',
      img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=400',
      video: "https://www.youtube.com/watch?v=2Sb7sZB9TYE"
    },
    {
      title: 'Oneness with All',
      meta: 'Unity • Oneness • FEB 18, 2025',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
      video: "https://www.youtube.com/playlist?list=PLbNU53JJdvs3GPq2rurnbnmo4sgdz8mbG"
    },
  ];

  return (
    <section className="relative mx-auto w-full overflow-hidden bg-[#0a0a0a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-10%] top-0 h-[800px] w-[800px] rounded-full bg-[#D4AF37]/5 opacity-70 blur-[100px]" />
        <div className="absolute bottom-0 left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 opacity-60 blur-[80px]" />
        <div className="absolute left-[20%] top-[30%] h-[300px] w-[300px] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,rgba(212,175,55,0.05),transparent)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Top row: phone mockup + description */}
        <div className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div
              className="relative h-[600px] w-[300px] overflow-hidden rounded-[40px] border-[8px] border-white/5 bg-black shadow-[20px_20px_60px_rgba(0,0,0,0.5)]"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-5deg)' }}
            >
              <div className="pointer-events-none absolute right-0 top-0 z-20 h-[80%] w-full rounded-[32px] bg-gradient-to-bl from-white/10 to-transparent" />
              <div className="flex h-full flex-col bg-slate-900 p-6">
                <div className="mb-8 flex items-center justify-between text-xs font-medium text-white/70">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="h-2 w-4 rounded-sm bg-white" />
                    <div className="h-2 w-3 rounded-sm bg-white/50" />
                  </div>
                </div>
                <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    alt="Podcast Cover"
                    className="h-full w-full object-cover"
                    src="/images/podcast-cover.png"
                  />
                  <div className="shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none absolute inset-0" />
                </div>
                <div className="mb-8">
                  <h3 className="mb-1 text-xl font-bold leading-tight text-white">
                    It&apos;s Supposed to be Relaxing
                  </h3>
                  <p className="text-sm text-white/50">PMC World</p>
                </div>
                <div className="mb-2 h-1 w-full rounded-full bg-white/20">
                  <div className="h-full w-[30%] rounded-full bg-white" />
                </div>
                <div className="mb-8 flex justify-between text-[10px] text-white/50">
                  <span>26:00</span>
                  <span>-13:00</span>
                </div>
                <div className="flex items-center justify-between px-2 text-white">
                  <span className="text-xl opacity-60">1x</span>
                  <span className="text-3xl opacity-80">↺</span>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black">
                    <div className="mr-[2px] h-4 w-4 rounded-[1px] bg-black" />
                    <div className="ml-[2px] h-4 w-4 rounded-[1px] bg-black" />
                  </div>
                  <span className="text-3xl opacity-80">↻</span>
                  <span className="text-xl opacity-60">☾</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="mb-6 text-4xl font-black leading-[1.1] text-white md:text-5xl lg:text-6xl">
              PMC WORLD{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#B3782C] bg-clip-text text-transparent">
                Podcast
              </span>
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
              The PMC World podcast brings you transformative wisdom from Brahmarshi Pitamaha
              Patriji – guiding seekers across the world into the power of meditation and spiritual
              science. Through profound insights and practical experiences, Patriji inspires YOU to
              awaken your inner self, live with higher consciousness and experience true joy, health
              and harmony every moment.
            </p>
            <div className="grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
              <PlatformLink
                iconBg="bg-purple-600"
                label="Listen on"
                name="Apple Podcasts"
                href="https://apps.apple.com/in/app/pmc-app-meditation-wisdom/id6736380776"
                svg={
                  <path d="M12 19v3M19 10v2a7 7 0 0 1-14 0v-2M9 2h6v13a3 3 0 0 1-6 0V2Z" />
                }
              />
              <PlatformLink
                iconBg="bg-green-500"
                label="Listen on"
                name="Spotify"
                href="https://open.spotify.com/show/4Rr8YO5zpgJF2x1ICbdUYT"
                svg={
                  <path d="M9 18V5l12-2v13M6 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM18 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                }
              />

              <PlatformLink
                iconBg="bg-orange-500"
                label="Listen on"
                name="SoundCloud"
                href="https://soundcloud.com/pssmovement/sets"
                svg={
                  <path d="M4 17h1v-4H4v4zm2 2h1V7H6v12zm13-10c-.54 0-1.04.13-1.5.36A3.97 3.97 0 0 0 14 6c-1.6 0-2.99 1-3.5 2.5C9.9 8.1 9.4 8 9 8c-.55 0-1.05.1-1.5.29A4.07 4.07 0 0 0 4 12c0 2.21 1.79 4 4 4h11c2.21 0 4-1.79 4-4s-1.79-4-4-4z" />
                }
              />

              <PlatformLink
                iconBg="bg-red-600"
                label="Listen on"
                name="YouTube"
                href="https://www.youtube.com/playlist?list=PLKTneqWDHT46MJ34b_zWJECDpTJYl0fy8"
                svg={
                  <>
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3Z" />
                  </>
                }
              />
            </div>
          </motion.div>
        </div>

        {/* Episode cards grid */}
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
          {episodes.map((ep, i) => (
            <motion.div
              key={ep.title}
              onClick={() => setActiveVideo(ep.video)}
              className="group relative flex cursor-pointer items-center gap-6 overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-4 shadow-xl transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[#D4AF37]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#D4AF37]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:rotate-1 group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)] lg:h-32 lg:w-32">
                <img
                  alt={ep.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={ep.img}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]/60 lg:text-xs">
                  {ep.meta}
                </p>
                <h4 className="truncate text-xl font-bold text-white transition-colors group-hover:text-[#D4AF37]">
                  {ep.title}
                </h4>
              </div>
              <div className="translate-x-4 pr-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 font-bold text-[#D4AF37]">
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                  </svg>
                  <span className="hidden lg:inline">Listen</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>

      {/* {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={getEmbedUrl(activeVideo)}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}
