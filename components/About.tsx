import Image from 'next/image';
import { aboutFeatures } from '@/lib/site';
import { CheckIcon } from './icons';

export default function About() {
  return (
    <section id="about" className="section-block relative overflow-hidden py-24 lg:py-32">
      <div className="section-bg parallax-bg absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,83,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="section-label reveal">About Us</span>
            <h2 className="reveal mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Turning Vision <span className="italic text-gold-400">Into Reality</span>
            </h2>
            <p className="reveal mt-6 text-base leading-relaxed text-white/60 lg:text-lg">
              With over 18 years of experience, we deliver high-quality construction projects across the region. Every build combines functionality, aesthetics, and long-term durability.
            </p>
            <ul className="reveal mt-8 space-y-4">
              {aboutFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-gold-500/40 text-gold-500">
                    <CheckIcon />
                  </span>
                  <span className="text-white/70">{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="reveal btn-primary mt-10 inline-flex">Get to Know Us</a>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <div className="reveal-right col-span-2 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Modern building exterior"
                width={800}
                height={500}
                className="img-zoom h-64 w-full object-cover sm:h-80"
              />
            </div>
            <div className="reveal-right overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                alt="Architecture blueprint"
                width={600}
                height={400}
                className="img-zoom h-48 w-full object-cover"
              />
            </div>
            <div className="reveal-right overflow-hidden">
              <div className="flex h-48 flex-col justify-center border border-gold-500/20 bg-gold-500/5 p-6">
                <p className="font-display text-5xl font-semibold text-gold-400" data-counter="18">0</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/50">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
