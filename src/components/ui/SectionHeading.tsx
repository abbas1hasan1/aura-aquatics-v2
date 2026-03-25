'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignment =
    align === 'center'
      ? 'text-center'
      : 'text-center lg:text-left';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-12 max-w-3xl ${alignment} ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {label && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          {label}
        </p>
      )}
      <h2 className="text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-text-light lg:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
