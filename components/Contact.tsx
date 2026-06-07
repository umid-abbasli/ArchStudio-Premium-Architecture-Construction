'use client';

import { siteConfig, serviceOptions } from '@/lib/site';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="section-block relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="section-label reveal">Contact</span>
            <h2 className="reveal mt-4 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Discuss <span className="italic text-gold-400">Your Project</span>
            </h2>
            <p className="reveal mt-6 text-white/60">
              Fill out the form for a free consultation — we&apos;ll get back to you within 24 hours.
            </p>

            <div className="reveal mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold-500/30 text-gold-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="mt-1 text-sm text-white/55">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold-500/30 text-gold-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="mt-1 text-sm text-white/55">{siteConfig.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold-500/30 text-gold-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="mt-1 text-sm text-white/55">{siteConfig.email}</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal-right contact-form border border-white/10 bg-white/[0.03] p-8 lg:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-white/50">Full Name</label>
                <input type="text" id="name" name="name" required className="form-input" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-widest text-white/50">Phone</label>
                <input type="tel" id="phone" name="phone" required className="form-input" placeholder="+44" />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-white/50">Email</label>
              <input type="email" id="email" name="email" required className="form-input" placeholder="email@example.com" />
            </div>
            <div className="mt-6">
              <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-widest text-white/50">Service Type</label>
              <select id="service" name="service" className="form-input" defaultValue="">
                <option value="">Select...</option>
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-white/50">Message</label>
              <textarea id="message" name="message" rows={4} className="form-input resize-none" placeholder="Tell us briefly about your project..." />
            </div>
            <button type="submit" className="btn-primary mt-8 w-full justify-center sm:w-auto">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
