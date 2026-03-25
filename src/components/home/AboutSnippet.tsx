'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';

export default function AboutSnippet() {
  return (
    <section className="bg-bg-alt py-20 md:py-28 lg:py-36">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Inside Aura Aquatics
            </p>
            <h2 className="text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
              We bring expertise, reliability, and a genuine passion for aquatic
              excellence
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-light lg:text-lg">
              With over a decade of experience managing pools across Texas, our
              team combines industry-leading training with a commitment to safety
              and cleanliness. We treat every facility as if it were our own,
              delivering results that communities trust season after season.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/about-story.jpg"
                alt="The Aura Aquatics team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
