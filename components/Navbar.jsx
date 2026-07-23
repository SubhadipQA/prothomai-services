'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="/images/logo-full.webp"
          alt="Prothom Analytica"
          width={180}
          height={40}
          className="h-8 w-auto"
          priority
        />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-ink">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#plans" className="hover:text-primary transition-colors">Plans</a>
          <a href="#process" className="hover:text-primary transition-colors">How It Works</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+919242404198"
            className="bg-accent hover:bg-accent-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Contact
          </a>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-offwhite border-t border-border px-6 py-4 space-y-4">
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-ink font-semibold hover:text-primary transition-colors">Services</a>
          <a href="#plans" onClick={() => setIsOpen(false)} className="block text-ink font-semibold hover:text-primary transition-colors">Plans</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="block text-ink font-semibold hover:text-primary transition-colors">How It Works</a>
          <a 
            href="tel:+919242404198" 
            className="block bg-primary text-white text-center font-semibold py-3 rounded-lg"
          >
            📞 +91 92424 04198
          </a>
        </nav>
      )}
    </header>
  );
}