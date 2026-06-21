'use client';

import { useRef, useState } from 'react';
import { Icon } from '@/app/components/ui/Icon';

type TestimonialCard = {
  id: number;
  title: string;
  description: string;
  video: string;
};

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

export function TestimonialsMarquee() {
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
