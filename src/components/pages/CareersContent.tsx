'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';
import { positions } from '@/lib/data';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '@/lib/animations';

const benefits = [
  {
    title: 'Competitive Pay',
    description:
      'We offer above-market compensation because we value the hard work and dedication of our team members.',
  },
  {
    title: 'Flexible Schedules',
    description:
      'Choose shifts that work for your lifestyle. We offer part-time, full-time, and seasonal scheduling options.',
  },
  {
    title: 'Training Provided',
    description:
      'No experience? No problem. We provide comprehensive training for all new hires to ensure you succeed.',
  },
  {
    title: 'Leadership Growth',
    description:
      'We promote from within. Many of our managers started as lifeguards. Your career path is in your hands.',
  },
  {
    title: 'Outdoor Environment',
    description:
      'Ditch the cubicle. Work outdoors in a dynamic, active environment that keeps every day interesting.',
  },
  {
    title: 'Certification Assistance',
    description:
      'We help cover the cost of lifeguard certifications, CPR training, and other professional credentials.',
  },
];

const requirements: Record<string, string[]> = {
  Lifeguard: [
    'Current Lifeguard Certification (or willingness to obtain)',
    'CPR/AED and First Aid certified',
    'Strong swimming ability',
    'Must be at least 16 years old',
    'Ability to work weekends and holidays',
  ],
  'Lifeguard Assistant Manager': [
    'Prior lifeguard experience (1+ years preferred)',
    'Current Lifeguard and CPR/AED certifications',
    'Leadership or supervisory experience',
    'Strong communication skills',
    'Availability for full-time seasonal work',
  ],
  Supervisor: [
    '2+ years pool management or supervisory experience',
    'Current Lifeguard and CPR/AED certifications',
    'Valid driver\u2019s license and reliable transportation',
    'Strong leadership and problem-solving skills',
    'Ability to manage multiple locations',
  ],
  'Pool Cleaning Technician': [
    'Experience with pool cleaning equipment',
    'Knowledge of water chemistry basics',
    'Valid driver\u2019s license',
    'Ability to lift up to 50 lbs',
    'Available for year-round employment',
  ],
  'Pool Repair Technician': [
    'Mechanical aptitude and troubleshooting skills',
    'Experience with pool pumps, filters, and heaters',
    'Valid driver\u2019s license and reliable transportation',
    'Ability to work independently',
    'CPO certification preferred',
  ],
};

function PositionAccordion({
  position,
}: {
  position: (typeof positions)[number];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-bg-alt">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div>
          <h3 className="text-lg font-semibold text-text">{position.title}</h3>
          <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {position.type}
          </span>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-text-light transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-6 pb-6 pt-5">
              <p className="text-sm text-text-light">{position.description}</p>
              {requirements[position.title] && (
                <div className="mt-4">
                  <p className="mb-2 text-sm font-medium text-text">
                    Requirements:
                  </p>
                  <ul className="space-y-2">
                    {requirements[position.title].map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-sm text-text-light"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
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
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-6">
                <Button href="/contact">Apply Now</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CareersContent() {
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
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              We&apos;re Hiring!
            </span>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Careers
            </p>
            <h1 className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
              Get Hired. Get Trained. Get Working.
            </h1>
            <p className="mt-5 text-base text-text-light lg:text-lg">
              Join Houston&apos;s fastest-growing pool management team. We offer
              competitive pay, flexible schedules, and real opportunities for
              growth.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Benefits"
            title="Why Work With Us"
            subtitle="We invest in our team because our people are the foundation of everything we do."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-bg-alt p-8"
              >
                <h3 className="mb-2 text-lg font-semibold text-text">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="bg-bg-alt py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Open Positions"
            title="Find Your Role"
            subtitle="Click on a position to learn more and apply."
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {positions.map((position, index) => (
              <AnimateOnScroll key={position.title} delay={index * 0.05}>
                <PositionAccordion position={position} />
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-text sm:text-3xl">
                Ready to join the team?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-text-light">
                We&apos;re always looking for motivated individuals who are
                passionate about aquatics and community safety.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Get in Touch
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
