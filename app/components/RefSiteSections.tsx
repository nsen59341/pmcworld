'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type IconName = 'activity' | 'arrow' | 'globe' | 'heart' | 'mapPin' | 'play' | 'sparkles' | 'users';

type TestimonialCard = {
  id: Number,
  title: string;
  description: string;
  video: string;
};

type ImpactCard = {
  value: string;
  title: string;
  description: string;
  image: string;
  icon: IconName;
};

const meditationQuestions = [
  'Why should one do Meditation?',
  'How should one do Meditation?',
  'What is Meditation?',
  'What is the right age for Meditation?',
];

const testimonialCards: TestimonialCard[] = [
  {
    id: 1,
    title: 'Health',
    description: 'Head ache to Cancer anything can be cured through Meditation.',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327209/health_dwh2f8.mp4',
  },
  {
    id: 2,
    title: 'Students',
    description: 'Unlock powerful benefits like sharpened memory, greater self-confidence, increased focus etc.',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327215/students_e3uhbj.mp4',
  },
  {
    id: 3,
    title: 'Career',
    description: 'Career excellence, sharper decision-making and strong leadership skills.',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327219/carrier_yeuq2j.mp4',
  },
  {
    id: 4,
    title: 'Relationships',
    description: 'Nurture meaningful, fruitful relationships through inner calm and clarity.',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327210/relation_ocvcxp.mp4',
  },
  {
    id: 5,
    title: 'Business',
    description: 'Build focus, emotional balance, creativity, and calm decision-making.',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327212/business_fnwm65.mp4',
  },
  {
    id: 6,
    title: 'Spiritual Seekers',
    description: 'Deepen meditation practice and move toward self-realisation.',
    video: 'https://res.cloudinary.com/dtmtujxht/video/upload/v1781327209/meditation_fnqyoh.mp4',
  },
];

const wisdomCards = [
  {
    title: 'Breath is the Guru',
    quote: 'When the mind becomes silent, inner wisdom begins to speak.',
  },
  {
    title: 'Meditation is Natural',
    quote: 'A simple daily practice can transform the quality of life.',
  },
  {
    title: 'Know Yourself',
    quote: 'Self-realisation is the greatest journey a human can take.',
  },
  {
    title: 'Share the Light',
    quote: 'The joy of meditation grows when it is shared freely.',
  },
];

const impactCards: ImpactCard[] = [
  {
    value: '35+',
    title: 'Years of vigorous Spiritual Service',
    description: 'A relentless journey of transforming lives through meditation and spiritual science.',
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80&w=600',
    icon: 'activity',
  },
  {
    value: '30,000+',
    title: 'Worldwide pyramid meditation centres',
    description: 'Sanctuaries of peace spread across the globe for spiritual seekers.',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=600',
    icon: 'globe',
  },
  {
    value: '20,000+',
    title: 'Meditation Pyramids Built',
    description: 'High-energy spaces specifically engineered for deep spiritual practice.',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=600',
    icon: 'mapPin',
  },
  {
    value: '11,44,000+',
    title: 'Pyramid Meditation Masters',
    description: 'A growing community of awakened souls leading the world to enlightenment.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    icon: 'users',
  },
];

function Icon({ name, className }: { name: IconName; className?: string }) {
  const baseProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (name === 'arrow') {
    return (
      <svg {...baseProps}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  }

  if (name === 'activity') {
    return (
      <svg {...baseProps}>
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
      </svg>
    );
  }

  if (name === 'globe') {
    return (
      <svg {...baseProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    );
  }

  if (name === 'heart') {
    return (
      <svg {...baseProps}>
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
      </svg>
    );
  }

  if (name === 'mapPin') {
    return (
      <svg {...baseProps}>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  if (name === 'play') {
    return (
      <svg {...baseProps} fill="currentColor">
        <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
      </svg>
    );
  }

  if (name === 'users') {
    return (
      <svg {...baseProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4" />
      <path d="M22 4h-4" />
      <circle cx="4" cy="20" r="2" />
    </svg>
  );
}

function MeditationIntro() {
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
                <iframe
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

function TestimonialsMarquee() {
  const cards = [...testimonialCards, ...testimonialCards];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const videoRef = videoRefs.current[index];
    if (videoRef) {
      videoRef.play().catch(() => {
        // Handle autoplay policy restrictions
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const videoRef = videoRefs.current[index];
    if (videoRef) {
      videoRef.pause();
      videoRef.currentTime = 0;
    }
  };

  return (
    <section className="relative mx-auto flex w-full flex-col justify-center overflow-hidden bg-slate-50 py-24">
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F4DF8D_0%,_transparent_70%)] opacity-20" />
        <div className="absolute left-[-10%] top-[-20%] h-[800px] w-[800px] rounded-full bg-amber-100/40 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-[100px]" />
      </div>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-40 w-full bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-20 mb-16 px-6 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Icon name="sparkles" className="h-5 w-5 text-[#D4AF37]" />
          <span className="text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
            Real Stories, Real Change
          </span>
          <Icon name="sparkles" className="h-5 w-5 text-[#D4AF37]" />
        </div>
        <h2 className="mb-4 text-4xl font-black uppercase leading-tight tracking-tighter text-slate-900 md:text-6xl">
          Transformative <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4DF8D] bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-600">
          Explore testimonials across categories and see how meditation supports every area of life.
        </p>
      </div>

      <div className="group/marquee relative z-10 w-full overflow-hidden py-4">
        <div className="animate-ref-marquee-left flex w-max">
          {cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="group relative mx-5 h-[400px] w-[300px] shrink-0 cursor-pointer overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                loop
                playsInline
                muted
                className="absolute inset-0 h-full w-full bg-black object-cover"
                src={card.video}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 opacity-70 transition-all duration-300 group-hover:opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <h3 className="inline-block max-w-[85%] border-b-2 border-[#D4AF37]/80 pb-1 text-right text-2xl font-bold leading-tight text-white drop-shadow-lg">
                    {card.title}
                  </h3>
                </div>
                <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="mb-4 line-clamp-4 text-sm font-medium leading-relaxed text-white/95 drop-shadow-md transition-all group-hover:line-clamp-none md:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeditationNow() {
  return (
    <section className="relative mx-auto w-full overflow-hidden bg-black px-6 py-24 text-white lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#D4AF37_0%,_transparent_45%)] opacity-15" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Be A Meditator
          </p>
          <h2 className="mb-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-7xl">
            Let&apos;s Meditate Now
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/75">
            Begin with a quick guided meditation and experience the simplicity of Anapanasati:
            observing natural breath with awareness.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-slate-900">
            <div
              aria-label="Guided meditation"
              className="h-full w-full bg-cover bg-center opacity-70"
              role="img"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop")',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                <Icon name="play" className="ml-1 h-7 w-7" />
              </span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-3xl font-black italic leading-none md:text-5xl">Quick 20 min</h3>
            <p className="mt-2 text-2xl font-thin italic text-white/80 md:text-4xl">
              Guided Meditation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WisdomSection() {
  const cards = [...wisdomCards, ...wisdomCards];

  return (
    <section className="relative mx-auto w-full overflow-hidden bg-slate-50 px-6 py-24 text-slate-900 lg:px-12">
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
          Masters Speak
        </h3>
        <h2 className="text-4xl font-black md:text-5xl">Wisdom of the Ages</h2>
      </div>
      <div className="group/marquee flex overflow-hidden">
        <div className="animate-ref-marquee-right flex w-max gap-6">
          {cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="w-[320px] shrink-0 rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-xl"
            >
              <Icon name="sparkles" className="mb-6 h-8 w-8 text-[#D4AF37]" />
              <h3 className="mb-3 text-xl font-bold text-slate-950">{card.title}</h3>
              <p className="text-base leading-relaxed text-slate-600">{card.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SevaYogSection() {
  return (
    <section className="relative mx-auto w-full overflow-hidden bg-black px-6 py-20 text-white lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="relative z-10 mb-8">
            <h2 className="text-4xl font-bold leading-[0.85] tracking-tight text-white opacity-90 mix-blend-overlay md:text-7xl">
              SEVA
            </h2>
            <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white md:text-8xl">
              YOG
            </h2>
          </div>
          <div
            aria-label="Global volunteers meditating"
            className="-mx-8 -mb-12 mt-auto h-72 w-[calc(100%+4rem)] translate-y-8 rounded-b-[2.5rem] bg-cover bg-center brightness-105 drop-shadow-2xl md:-mx-12 md:-mb-16 md:h-96 md:w-[calc(100%+6rem)]"
            role="img"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop")',
            }}
          />
        </div>

        <div>
          <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">SEVA YOG</h2>
          <h3 className="mb-6 text-xl font-bold text-[#D4AF37] md:text-2xl">
            Become a member of LokaKalyana
          </h3>
          <div className="mb-8 h-px w-full bg-white/20" />
          <p className="mb-8 text-2xl font-bold leading-tight text-[#D4AF37]">
            Transform your Soul, uplift your life, create an Impact
          </p>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            PMC WORLD warmly welcomes you to join us and become a valued member. We sincerely
            thank you for your interest in contributing to one of the noblest causes.
          </p>
          <p className="mb-12 text-lg leading-relaxed text-slate-400">
            Our mission is to bring meditation into every household, school, college, and
            institution, to every nook and corner of the World.
          </p>
          <form className="flex flex-col gap-4 sm:flex-row">
            <input
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white transition-colors focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              placeholder="Your email address"
              type="email"
            />
            <button
              className="rounded-full bg-[#D4AF37] px-10 py-4 font-bold text-black shadow-lg shadow-yellow-900/20 transition-colors hover:bg-yellow-400"
              type="button"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-600">Your data is safe with us. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}

function ImpactNumbers() {
  return (
    <section className="relative mx-auto w-full overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-20%] h-[800px] w-[800px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4">
            <span className="border-b-2 border-[#D4AF37]/30 pb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Our Impact
            </span>
          </div>
          <h2 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Our Journey <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] bg-clip-text text-transparent">
              In Numbers.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
            Celebrating over three decades of spiritual awakening and the global expansion of Pyramid Power.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactCards.map((card) => (
            <article
              key={card.title}
              className="group relative h-[450px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900 shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                <div
                  aria-label={card.title}
                  className="h-full w-full bg-cover bg-center opacity-60 brightness-50 transition-transform duration-700 group-hover:scale-110"
                  role="img"
                  style={{ backgroundImage: `url("${card.image}")` }}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
              </div>
              <div className="relative z-20 flex h-full flex-col justify-end p-8">
                <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:rotate-12 group-hover:bg-[#D4AF37] group-hover:text-black">
                  <Icon name={card.icon} className="h-[22px] w-[22px]" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-white transition-colors duration-300 group-hover:text-[#D4AF37] md:text-5xl">
                    {card.value}
                  </h3>
                  <div>
                    <h4 className="mb-2 text-lg font-bold leading-snug text-white">{card.title}</h4>
                    <p className="translate-y-4 text-sm leading-relaxed text-slate-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {card.description}
                    </p>
                  </div>
                </div>
                <button className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37]/60 transition-colors group-hover:text-[#D4AF37]">
                  Experience Now <Icon name="play" className="h-3 w-3" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RefSiteSections() {
  return (
    <>
      <style>{`
        @keyframes ref-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes ref-marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-ref-marquee-left {
          animation: ref-marquee-left 60s linear infinite;
        }

        .animate-ref-marquee-right {
          animation: ref-marquee-right 45s linear infinite;
        }

        .group\\/marquee:hover .animate-ref-marquee-left,
        .group\\/marquee:hover .animate-ref-marquee-right {
          animation-play-state: paused;
        }
      `}</style>
      <MeditationIntro />
      <TestimonialsMarquee />
      <MeditationNow />
      <WisdomSection />
      <SevaYogSection />
      <ImpactNumbers />
    </>
  );
}
