'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Projects() {
  return (
    <section className="bg-bg py-20 md:py-28 lg:py-36">
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Selected Works"
          subtitle="A look at the communities and clubs we proudly serve across Texas."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
