'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';
import { services, processSteps } from '@/lib/data';
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
} from '@/lib/animations';

export default function ServicesContent() {
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
              Our Services
            </p>
            <h1 className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
              Everything Your Pool Needs
            </h1>
            <p className="mt-5 text-base text-text-light lg:text-lg">
              From comprehensive pool management to certified lifeguard
              staffing, we provide the full spectrum of aquatic services.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="space-y-20 lg:space-y-28">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.slug}
                  className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
                >
                  <AnimateOnScroll
                    variant={isEven ? slideInLeft : slideInRight}
                    className={isEven ? '' : 'lg:order-2'}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll
                    variant={isEven ? slideInRight : slideInLeft}
                    className={isEven ? '' : 'lg:order-1'}
                  >
                    <div>
                      <h3 className="text-center text-2xl font-bold text-text sm:text-3xl lg:text-left">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-center text-text-light lg:text-left">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-text-light"
                          >
                            <svg
                              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 text-center lg:text-left">
                        <Button href="/quote">Get a Quote</Button>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-bg-alt py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Our Process"
            title="How We Work"
            subtitle="A straightforward process designed to get your pool running smoothly as quickly as possible."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto max-w-3xl space-y-8"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="flex gap-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-dark text-sm font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-text sm:text-3xl">
                Let&apos;s discuss your needs
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-text-light">
                Every facility is unique. Tell us about yours and we&apos;ll
                craft a custom management plan.
              </p>
              <div className="mt-8">
                <Button href="/quote" size="lg">
                  Request a Quote
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
