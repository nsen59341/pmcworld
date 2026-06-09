'use client';

export function Footer() {
  return (
    <footer className="relative w-full mx-auto my-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-300 pt-24 pb-12 border-t border-slate-800/50 font-sans transition-colors duration-500 overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"></div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-20 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Branding & About */}
          <div className="lg:col-span-1 space-y-4">
            <div className="space-y-2 mb-6">
              <h2 className="text-2xl font-black text-white">PMC</h2>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37]/80 font-semibold">World</p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Join millions on a journey of spiritual awakening and conscious living.</p>
            <div className="pt-4 border-t border-slate-800/30">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Follow Us</p>
              <div className="flex gap-3 mt-3">
                <a href="https://www.facebook.com/Pmcworldd" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800/50 hover:bg-[#D4AF37] text-slate-300 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/pmc_world" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800/50 hover:bg-[#D4AF37] text-slate-300 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="https://youtu.be/3cuO6F8tpdk" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800/50 hover:bg-[#D4AF37] text-slate-300 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                </a>
                <a href="https://whatsapp.com/channel/0029VakoVq1KWEKq78POdH1j" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800/50 hover:bg-[#D4AF37] text-slate-300 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Programs</h3>
            <nav className="space-y-3">
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">Anapanasati Meditation</a>
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">Vegetarianism</a>
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">Yoga &amp; Wellness</a>
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">Isha Home School</a>
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">Music &amp; Arts</a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Resources</h3>
            <nav className="space-y-3">
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">Blog</a>
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">Literatures</a>
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">Media &amp; Press</a>
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">FAQ</a>
              <a href="/" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-300 block">Careers</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="text-sm">
                <p className="text-slate-400 mb-2">📍Headquarters</p>
                <p className="text-slate-500 text-xs leading-relaxed">D-203, Divya Heights,<br />Rahatani, Pune 411009</p>
              </div>
              <div className="space-y-2">
                <a href="tel:+918300083111" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span>📞</span> +91 8300083111
                </a>
                <a href="mailto:support@pmc.org" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span>✉️</span> support@pmc.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
