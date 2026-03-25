'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';
import { fadeInUp } from '@/lib/animations';

const serviceOptions = [
  'Pool Management',
  'Lifeguard Staffing',
  'Maintenance',
  'Swim Lessons',
];

export default function QuoteContent() {
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
              Request a Quote
            </p>
            <h1 className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
              Get a Free Estimate
            </h1>
            <p className="mt-5 text-base text-text-light lg:text-lg">
              Tell us about your facility and we&apos;ll put together a
              customized management plan and pricing.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Form */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <form className="mx-auto max-w-2xl space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
                    placeholder="(281) 555-0123"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pools"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Number of Pools
                  </label>
                  <input
                    type="number"
                    id="pools"
                    name="pools"
                    min={1}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
                    placeholder="1"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="facility-type"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  Facility Type
                </label>
                <select
                  id="facility-type"
                  name="facility-type"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select a type</option>
                  <option value="hoa">HOA</option>
                  <option value="private-club">Private Club</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-text">
                  Services Needed
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 transition-colors hover:border-primary/30"
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        className="h-4 w-4 rounded border-border text-primary accent-primary"
                      />
                      <span className="text-sm text-text">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell us more about your facility, timeline, and any specific requirements..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Submit Request
              </Button>
            </form>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
