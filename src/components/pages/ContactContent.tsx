'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/lib/constants';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';

const contactInfo = [
  {
    label: 'Phone',
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: COMPANY.email,
    href: COMPANY.emailHref,
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: COMPANY.location,
    href: undefined,
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

export default function ContactContent() {
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
              Contact Us
            </p>
            <h1 className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
              Let&apos;s Talk
            </h1>
            <p className="mt-5 text-base text-text-light lg:text-lg">
              Have a question or ready to get started? Reach out and our team
              will get back to you promptly.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Form */}
            <AnimateOnScroll variant={slideInLeft}>
              <form className="space-y-6">
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
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
                    placeholder="Tell us about your facility and how we can help..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll variant={slideInRight}>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-bg-alt p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-text-light">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-lg font-medium text-text transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-lg font-medium text-text">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-8 rounded-2xl border border-border bg-bg-alt p-6">
                  <h3 className="mb-2 text-lg font-semibold text-text">
                    Office Hours
                  </h3>
                  <div className="space-y-1 text-sm text-text-light">
                    <p>Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM</p>
                    <p>Saturday: 9:00 AM &ndash; 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
