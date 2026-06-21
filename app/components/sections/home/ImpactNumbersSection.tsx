'use client';

import { Icon, type IconName } from '@/app/components/ui/Icon';

type ImpactCard = {
  value: string;
  title: string;
  description: string;
  image: string;
  icon: IconName;
};

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

export function ImpactNumbersSection() {
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
