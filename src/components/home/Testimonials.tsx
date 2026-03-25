'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  function prev() {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }

  return (
    <section className="bg-bg py-20 md:py-28 lg:py-36">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg px-6 py-12 sm:px-8 md:px-12">
            {/* Quote icon */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="mb-6 text-primary/20"
            >
              <path
                d="M10.5 25.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c.3 0 .5 0 .8.1C12.5 12.5 15 9 18 8l1 2.5c-2.5 1-4.5 3.5-5 6 .5-.2 1-.3 1.5-.3 2.5 0 4.5 2 4.5 4.5s-2 4.8-4.5 4.8h-5zm17 0c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c.3 0 .5 0 .8.1C29.5 12.5 32 9 35 8l1 2.5c-2.5 1-4.5 3.5-5 6 .5-.2 1-.3 1.5-.3 2.5 0 4.5 2 4.5 4.5s-2 4.8-4.5 4.8h-5z"
                fill="currentColor"
              />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-lg font-medium leading-relaxed text-text sm:text-xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-text">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-text-light">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 bg-primary'
                        : 'w-2 bg-border hover:bg-text-light'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:bg-text hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 3L5 8l5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:bg-text hover:text-white"
                  aria-label="Next testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
