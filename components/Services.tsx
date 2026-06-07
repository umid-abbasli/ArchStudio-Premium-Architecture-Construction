import { services } from '@/lib/site';

function ServiceIcon({ type }: { type: string }) {
  const props = { className: 'h-6 w-6', fill: 'none' as const, viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.5 };

  switch (type) {
    case 'home':
      return <svg {...props}><path strokeLinecap="round" d="M2 20h20M4 20V10l8-6 8 6v10M9 20v-6h6v6" /></svg>;
    case 'building':
      return <svg {...props}><path strokeLinecap="round" d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-4h4v4" /></svg>;
    case 'interior':
      return <svg {...props}><path strokeLinecap="round" d="M9 12h6m-3-3v6M5 21h14a2 2 0 002-2V7l-5-5H5a2 2 0 00-2 2v15a2 2 0 002 2z" /></svg>;
    case 'design':
      return <svg {...props}><path strokeLinecap="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
    case 'renovation':
      return (
        <svg {...props}>
          <path strokeLinecap="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return <svg {...props}><path strokeLinecap="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
  }
}

export default function Services() {
  return (
    <section id="services" className="section-block relative overflow-hidden py-24 lg:py-32">
      <div className="section-bg parallax-bg absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,83,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label reveal">Our Services</span>
          <h2 className="reveal mt-4 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Full-Spectrum <span className="italic text-gold-400">Solutions</span>
          </h2>
          <p className="reveal mt-4 text-white/60">From concept to handover, we manage the entire construction process.</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card reveal-stagger group border border-white/8 bg-white/[0.03] p-8 transition-colors hover:border-gold-500/30 hover:bg-gold-500/[0.04]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-gold-500/30 text-gold-500 transition-colors group-hover:bg-gold-500/10">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{service.description}</p>
              <span className="mt-6 inline-block text-xs uppercase tracking-widest text-gold-500/70 transition-colors group-hover:text-gold-400">
                Learn More →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
