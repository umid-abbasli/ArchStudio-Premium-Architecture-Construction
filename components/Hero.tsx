import { heroStats } from '@/lib/site';
import { ArrowIcon, PlayIcon } from './icons';

export default function Hero() {
  return (
    <section id="home" className="hero-section relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video className="hero-video h-full w-full object-cover" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <div className="grain-overlay absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="absolute left-6 top-1/2 z-10 hidden h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gold-500/60 to-transparent lg:left-10 lg:block" />

      <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="max-w-3xl">
          <div className="hero-animate hero-animate-1 mb-8 inline-flex items-center gap-3 border border-gold-500/30 bg-gold-500/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">Premium Construction Solutions</span>
          </div>

          <h1 className="hero-animate hero-animate-2 font-display text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Building the
            <span className="block italic text-gold-400">Architecture</span>
            of Tomorrow
          </h1>

          <p className="hero-animate hero-animate-3 mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
            We deliver residential, commercial, and industrial projects with modern design, premium materials, and a dedicated professional team.
          </p>

          <div className="hero-animate hero-animate-4 mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary group">
              Start Your Project
              <ArrowIcon />
            </a>
            <a href="#projects" className="btn-secondary group">
              <PlayIcon />
              View Projects
            </a>
          </div>

          <div className="hero-animate hero-animate-5 mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 sm:gap-10">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/50 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <div className="scroll-line h-12 w-px bg-gradient-to-b from-gold-500/60 to-transparent" />
      </div>
    </section>
  );
}
