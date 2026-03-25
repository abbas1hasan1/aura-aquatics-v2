'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { slideInLeft, slideInRight } from '@/lib/animations';

export default function CTABanner() {
  return (
    <section className="bg-bg py-20 md:py-28 lg:py-36">
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
            <h2 className="text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
              Let&apos;s work together.
              <br />
              Get a quote today.
            </h2>
            <p className="mt-5 text-base text-text-light lg:text-lg">
              Ready to elevate your aquatic facility? Reach out and let us craft
              a management plan tailored to your needs.
            </p>
            <div className="mt-8">
              <Button href="/quote" variant="primary" size="lg">
                Get a Quote
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
                src="/images/pool-underwater.jpg"
                alt="Crystal-clear pool water"
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
