import { siteConfig } from '@/lib/site';
import { Logo } from './icons';

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-gold-500/40 bg-gold-500/10 text-gold-500">
              <Logo className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-semibold text-white">{siteConfig.name}</span>
          </a>
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs uppercase tracking-widest text-white/45 transition-colors hover:text-gold-400">
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-white/35">© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
