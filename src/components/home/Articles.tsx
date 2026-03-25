'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { articles } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Articles() {
  return (
    <section className="bg-bg py-20 md:py-28 lg:py-36">
      <Container>
        <SectionHeading
          label="Blog"
          title="Read Our Latest"
          subtitle="Insights, tips, and news from the world of aquatic management."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article) => (
            <motion.article key={article.slug} variants={staggerItem}>
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-5">
                  <span className="inline-block rounded-full bg-bg-alt px-3 py-1 text-xs font-medium text-text-light">
                    {article.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-text transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-light">
                    {formatDate(article.date)} &middot; {article.readTime}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
