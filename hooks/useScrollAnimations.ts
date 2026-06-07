'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to('.hero-content', {
        y: 120,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.hero-overlay', {
        opacity: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      document.querySelectorAll('.section-bridge').forEach((bridge) => {
        const line = bridge.querySelector('.section-bridge-line');
        const label = bridge.querySelector('.section-bridge-label');
        if (!line || !label) return;

        gsap.fromTo(
          line,
          { height: 0, opacity: 0 },
          {
            height: 60,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bridge,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );

        gsap.to(label, {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bridge,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((el) => {
        gsap.from(el, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((el) => {
        gsap.from(el, {
          x: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      document.querySelectorAll('.section-block').forEach((section) => {
        const cards = section.querySelectorAll('.reveal-stagger');
        if (!cards.length) return;

        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach((bg) => {
        gsap.to(bg, {
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: bg.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      const processLineFill = document.querySelector('.process-line-fill');
      if (processLineFill) {
        gsap.to(processLineFill, {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.process-track',
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          },
        });
      }

      document.querySelectorAll('[data-counter]').forEach((counter) => {
        const el = counter as HTMLElement;
        const target = parseInt(el.dataset.counter || '0', 10);
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(
              { val: 0 },
              {
                val: target,
                duration: 2,
                ease: 'power2.out',
                onUpdate: function () {
                  el.textContent = String(Math.round(this.targets()[0].val));
                },
              }
            );
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.section-block').forEach((section) => {
        gsap.from(section, {
          opacity: 0.3,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 95%',
            end: 'top 60%',
            scrub: 0.5,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}
