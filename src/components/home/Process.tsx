'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { processSteps } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Process() {
  return (
    <section className="bg-bg-blue py-20 md:py-28 lg:py-36">
      <Container>
        <SectionHeading
          label="Our Approach"
          title="How Our Process Works"
          subtitle="A straightforward path from initial consultation to a professionally managed aquatic facility."
        />

        {/* Desktop: horizontal */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden lg:grid lg:grid-cols-4 lg:gap-8"
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="relative text-center"
            >
              {/* Connecting line */}
              {i < processSteps.length - 1 && (
                <div className="absolute top-5 left-[calc(50%+28px)] h-[2px] w-[calc(100%-56px)] bg-border" />
              )}

              <div className="relative mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-bg text-sm font-bold text-primary">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: vertical with connecting line */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative lg:hidden"
        >
          {/* Vertical line */}
          <div className="absolute left-5 top-5 bottom-5 w-[2px] bg-border" />

          <div className="flex flex-col gap-10">
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="relative flex items-start gap-5 pl-0"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-bg text-sm font-bold text-primary">
                  {step.step}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
