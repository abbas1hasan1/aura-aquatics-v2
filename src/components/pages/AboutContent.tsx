'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Counter from '@/components/ui/Counter';
import Button from '@/components/ui/Button';
import { stats } from '@/lib/data';
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
} from '@/lib/animations';

const values = [
  {
    title: 'Safety First',
    description:
      'Every decision we make prioritizes the safety of swimmers, staff, and the communities we serve. Safety is non-negotiable.',
  },
  {
    title: 'Professional Excellence',
    description:
      'We hold ourselves to the highest standards. From training to execution, excellence defines everything we do.',
  },
  {
    title: 'Community Focus',
    description:
      'We build lasting relationships with the communities we serve, treating every facility as if it were our own.',
  },
  {
    title: 'Reliability',
    description:
      'Our clients count on us to show up, deliver, and exceed expectations consistently. Reliability is the foundation of trust.',
  },
  {
    title: 'Training & Development',
    description:
      'We invest in our people through continuous training, mentorship, and opportunities for professional growth.',
  },
  {
    title: 'Fun Environment',
    description:
      'We believe great work happens when people enjoy what they do. We foster a positive, energetic culture at every pool.',
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-alt py-32 lg:py-40">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>
            <h1 className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
              We bring expertise and passion to every pool we manage
            </h1>
            <p className="mt-5 text-base text-text-light lg:text-lg">
              Learn about our story, our values, and what drives us to deliver
              exceptional aquatic experiences across Houston and beyond.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <AnimateOnScroll variant={slideInLeft}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  Our Story
                </p>
                <h2 className="text-center text-2xl font-bold text-text sm:text-3xl lg:text-left lg:text-4xl">
                  Built on a Passion for Aquatic Excellence
                </h2>
                <div className="mt-6 space-y-4 text-center text-text-light lg:text-left">
                  <p>
                    Aura Aquatics was founded with a simple yet powerful vision:
                    to transform the way aquatic facilities are managed in the
                    Houston area. What began as a small operation driven by a
                    love for swimming and community has grown into one of the
                    region&apos;s most trusted pool management companies.
                  </p>
                  <p>
                    Our founders recognized a gap in the market &mdash;
                    facilities deserved more than basic upkeep. They deserved a
                    partner who would treat every pool with the same care and
                    attention as their own. That commitment to excellence became
                    the cornerstone of Aura Aquatics.
                  </p>
                  <p>
                    Today, we manage over 50 pools across Houston, deploying
                    more than 200 certified lifeguards and maintenance
                    professionals. From HOA community pools to exclusive country
                    clubs, our team brings the same passion, professionalism, and
                    dedication to every facility we serve.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll variant={slideInRight}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/about-story.jpg"
                  alt="Aura Aquatics team at a pool facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-primary-dark py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Our Values"
            title="The Principles That Guide Everything We Do"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-bg-alt p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border">
                  <div className="h-5 w-5 rounded-md bg-primary/20" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-bg-alt py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-text sm:text-3xl">
                Ready to work with us?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-text-light">
                Let&apos;s discuss how Aura Aquatics can elevate your aquatic
                facility with professional management and staffing.
              </p>
              <div className="mt-8">
                <Button href="/quote" size="lg">
                  Get a Quote
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
