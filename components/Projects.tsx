import Image from 'next/image';
import { projects } from '@/lib/site';

export default function Projects() {
  return (
    <section id="projects" className="section-block relative overflow-hidden py-24 lg:py-32">
      <div className="section-bg parallax-bg absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/[0.03] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="section-label reveal">Portfolio</span>
            <h2 className="reveal mt-4 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Featured <span className="italic text-gold-400">Projects</span>
            </h2>
          </div>
          <a href="#contact" className="reveal btn-secondary shrink-0">View All Projects</a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className={`project-card reveal-stagger group relative overflow-hidden ${project.offset}`}>
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={480}
                className="img-zoom h-72 w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6">
                <span className="text-xs uppercase tracking-widest text-gold-400">{project.category}</span>
                <h3 className="mt-1 font-display text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 translate-y-4 text-sm text-white/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
