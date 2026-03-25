import Hero from '@/components/home/Hero';
import ClientLogos from '@/components/home/ClientLogos';
import Services from '@/components/home/Services';
import AboutSnippet from '@/components/home/AboutSnippet';
import Projects from '@/components/home/Projects';
import CTABanner from '@/components/home/CTABanner';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import Stats from '@/components/home/Stats';
import Articles from '@/components/home/Articles';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Services />
      <AboutSnippet />
      <Projects />
      <CTABanner />
      <Process />
      <Testimonials />
      <Stats />
      <Articles />
    </>
  );
}
