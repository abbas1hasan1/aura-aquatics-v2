'use client';

import { motion, type Variants } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variant?: Variants;
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  variant = fadeInUp,
  delay = 0,
  className = '',
}: AnimateOnScrollProps) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
