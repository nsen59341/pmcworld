'use client';

import { useState } from 'react';

export function MastersSpeakSection() {
  const masters = [
    {
      name: 'Dalai Lama',
      quote: 'Mindfulness is a technique for keeping your mind continuously on the object of your meditation. It is the antidote to forgetfulness.',
      img: '/images/masters-speak/dalai-lama.jpg',
    },
    {
      name: 'Narendra Modi',
      quote: 'Meditation is not just about personal well-being; it is about creating a more compassionate and peaceful world.',
      img: '/images/masters-speak/narendra-modi.jpg',
    },
    {
      name: 'Malala Yousafzai',
      quote: 'We realize the importance of our voices only when we are silenced.',
      img: '/images/masters-speak/malala-yousafzai.jpg',
    },
    {
      name: 'Dr. A P J Abdul Kalam',
      quote: 'To succeed in your mission, you must have single-minded devotion to your goal.',
      img: '/images/masters-speak/abdul-kalam.jpg',
    },
    {
      name: 'Rabindranath Tagore',
      quote: 'Everything comes to us that belongs to us if we create the capacity to receive it.',
      img: '/images/masters-speak/rabindranath-tagore.jpg',
    },
  ];

  const [activeMaster, setActiveMaster] = useState<(typeof masters)[number]>(masters[0]);

  return (
    <section className="relative mx-auto w-full overflow-hidden bg-white text-slate-900 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-50%] right-[-50%] h-[150%] w-[150%] animate-[spin_60s_linear_infinite] opacity-30">
          <div className="absolute left-0 top-0 h-full w-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,#F4DF8D_180deg,transparent_270deg,transparent_360deg)] blur-[100px]" />
        </div>
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-amber-100/50 mix-blend-multiply blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[10%] h-[600px] w-[600px] rounded-full bg-blue-50/50 mix-blend-multiply blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6">
        <div className="mb-12 text-center">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Masters Speak
          </h3>
          <h2 className="text-4xl font-black text-slate-900 md:text-5xl">Wisdom of the Ages</h2>
        </div>

        <div className="mb-12 grid grid-cols-1 items-center gap-8 rounded-[3rem] border border-white/60 bg-white/40 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl lg:grid-cols-12 lg:gap-16 lg:p-12">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[2rem] shadow-2xl lg:col-span-5 lg:h-[500px]">
            <img
              alt={activeMaster.name}
              className="absolute inset-0 h-full w-full object-cover"
              src={activeMaster.img}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8 z-10 text-white">
              <h4 className="font-serif text-3xl font-bold leading-none">{activeMaster.name}</h4>
            </div>
          </div>
          <div className="relative flex flex-col justify-center lg:col-span-7">
            <div className="absolute -left-10 -top-10 select-none font-serif text-9xl leading-none text-[#D4AF37]/10">
              &ldquo;
            </div>
            <p className="relative z-10 mb-8 font-serif text-3xl font-medium leading-tight tracking-tight text-slate-800 md:text-4xl lg:text-5xl">
              &ldquo;{activeMaster.quote}&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full border-t border-slate-100 bg-white/50 py-8 backdrop-blur-sm">
        <div className="group/marquee flex overflow-hidden">
          <div className="masters-scroll flex w-max">
            {[...masters, ...masters, ...masters, ...masters].map((m, i) => (
              <button
                key={`${m.name}-${i}`}
                onClick={() => setActiveMaster(m)}
                className={`mx-6 flex cursor-pointer flex-col items-center gap-4 transition-all duration-300 group/item ${
                  activeMaster.name === m.name ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <div className="relative h-20 w-20 rounded-full bg-transparent p-1">
                  <img
                    alt={m.name}
                    className="h-full w-full rounded-full border-2 border-white bg-slate-100 object-cover"
                    src={m.img}
                  />
                </div>
                <span className="text-sm font-bold tracking-wider text-slate-500">{m.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
