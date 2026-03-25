'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { services } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Services() {
  const featured = services.slice(0, 3);

  return (
    <section className="bg-bg py-20 md:py-28 lg:py-36">
      <Container>
        <SectionHeading
          label="What We Do"
          title="From Consultation to Completion"
          subtitle="Comprehensive aquatic management services tailored to your facility's unique needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((service, i) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <Link
                href={`/services#${service.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">
                    {service.description.slice(0, 120)}...
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-text transition-colors group-hover:text-primary">
                    Learn More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <AnimateOnScroll className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-text underline underline-offset-4 transition-colors hover:text-primary"
          >
            Browse all services
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
