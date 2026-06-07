import { processSteps } from '@/lib/site';

export default function Process() {
  return (
    <section id="process" className="section-block relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label reveal">Our Process</span>
          <h2 className="reveal mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            How We <span className="italic text-gold-400">Work</span>
          </h2>
        </div>

        <div className="process-track relative mt-16">
          <div className="process-line absolute left-0 right-0 top-8 hidden h-px bg-white/10 lg:block">
            <div className="process-line-fill h-full w-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400" />
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="process-step reveal-stagger text-center lg:text-left">
                <div className="process-number mx-auto flex h-16 w-16 items-center justify-center border border-gold-500/40 bg-slate-950 font-display text-2xl font-semibold text-gold-400 lg:mx-0">
                  {step.step}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/55">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
