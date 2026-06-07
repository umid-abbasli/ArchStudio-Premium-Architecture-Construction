'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionBridge from '@/components/SectionBridge';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { sectionBridges } from '@/lib/site';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

export default function HomePage() {
  useScrollAnimations();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionBridge label={sectionBridges[0].label} />
        <About />
        <SectionBridge label={sectionBridges[1].label} />
        <Services />
        <SectionBridge label={sectionBridges[2].label} />
        <Projects />
        <SectionBridge label={sectionBridges[3].label} />
        <Process />
        <SectionBridge label={sectionBridges[4].label} />
        <Testimonials />
        <SectionBridge label={sectionBridges[5].label} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
