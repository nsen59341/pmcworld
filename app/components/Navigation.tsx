'use client';

import { useState } from 'react';

export function Navigation() {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  return (
    <nav className="fixed top-0 w-full bg-gray-800/95 backdrop-blur-sm z-40 border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/favicon.png"
                alt="PMC World Logo"
                className="w-10 h-10 object-contain"
              />
            </a>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
            <a href="/" className="hover:text-[#D4AF37] transition">Home</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Meditation</a>
            <a href="#" className="hover:text-[#D4AF37] transition">PSSM</a>
            <a href="/about-patriji" className="hover:text-[#D4AF37] transition">Patriji</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Music</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Spiritual Service</a>
            <a href="#" className="hover:text-[#D4AF37] transition">More</a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-3 border-r border-white/10 pr-4 mr-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/Pmcworldd"
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
                href="https://www.instagram.com/pmc_world"
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
                href="https://www.youtube.com/@pmcworldd"
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
                  <path d="M12 2a14.9 14.9 0 0 1 0 20m0-20a14.9 14.9 0 0 0 0 20M2 12h20"></path>
                </svg>
                <span className="text-xs font-semibold">{selectedLanguage}</span>
              </button>

              {showLanguageMenu && (
                <div className="absolute top-full right-0 mt-2 bg-gray-700 rounded-lg shadow-lg border border-white/10 z-50">
                  <button
                    onClick={() => {
                      setSelectedLanguage('EN');
                      setShowLanguageMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600 first:rounded-t-lg"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage('MR');
                      setShowLanguageMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600 last:rounded-b-lg"
                  >
                    मराठी
                  </button>
                </div>
              )}
            </div>

            <button className="px-4 py-2 bg-[#D4AF37] text-black font-bold rounded-full hover:bg-[#C49A2F] transition text-sm">
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
