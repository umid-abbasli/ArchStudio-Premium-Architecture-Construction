'use client';

import { useEffect, useState } from 'react';
import { navLinks, siteConfig } from '@/lib/site';
import { Logo } from './icons';

function scrollToHash(href: string) {
  if (href === '#') return;
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToHash(href);
    setMenuOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-gold-500/40 bg-gold-500/10 text-gold-500 transition-colors group-hover:border-gold-500/70 group-hover:bg-gold-500/20">
            <Logo />
          </div>
          <div>
            <span className="block font-display text-xl font-semibold tracking-wide text-white">{siteConfig.name}</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-white/50">{siteConfig.tagline}</span>
          </div>
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link text-sm font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-primary hidden sm:inline-flex">
            Consultation
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold-500/50 hover:text-gold-400 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="mobile-nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-primary mt-4 justify-center">
            Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
