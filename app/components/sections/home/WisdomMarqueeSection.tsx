'use client';

import { Icon } from '@/app/components/ui/Icon';

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

export function WisdomMarqueeSection() {
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
