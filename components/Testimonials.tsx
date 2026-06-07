import { testimonials } from '@/lib/site';
import { StarRating } from './icons';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-block relative overflow-hidden py-24 lg:py-32">
      <div className="section-bg parallax-bg absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.05),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label reveal">Client Testimonials</span>
          <h2 className="reveal mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            Trusted by <span className="italic text-gold-400">Our Clients</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className={`testimonial-card reveal-stagger border border-white/8 bg-white/[0.03] p-8 ${item.offset}`}
            >
              <StarRating />
              <p className="mt-4 text-sm leading-relaxed text-white/65">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-gold-500/20 font-display text-sm font-semibold text-gold-400">
                  {item.initials}
                </div>
                <div>
                  <cite className="not-italic text-sm font-medium text-white">{item.name}</cite>
                  <p className="text-xs text-white/45">{item.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
