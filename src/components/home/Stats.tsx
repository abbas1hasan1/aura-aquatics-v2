'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Counter from '@/components/ui/Counter';
import { stats } from '@/lib/data';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Stats() {
  return (
    <section className="bg-primary-dark py-20 md:py-28 lg:py-36">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            A reputation for client satisfaction
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
