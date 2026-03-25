'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/lib/constants';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section className="relative min-h-screen bg-bg pt-24 pb-16 md:pt-32 md:pb-20 lg:flex lg:items-center lg:pt-0 lg:pb-0">
      <Container className="w-full">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              {COMPANY.tagline}
            </motion.p>

            <motion.h1
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Designing pools that feel as good as they look
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-base text-text-light sm:text-lg lg:max-w-none"
            >
              {COMPANY.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button href="/quote" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            ref={imageRef}
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="w-full flex-1 lg:max-w-[55%]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[3/2] lg:aspect-[4/5]">
              <motion.div style={{ y: imageY }} className="absolute inset-0">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Luxury pool managed by Aura Aquatics"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
