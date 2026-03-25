'use client';

import Container from '@/components/ui/Container';
import Marquee from '@/components/ui/Marquee';

const clients = [
  'Dallas CC',
  'Houston Racquet Club',
  'Sugar Land HOA',
  'Woodlands CC',
  'Katy Aquatics',
  'Memorial Club',
  'Pearland Swim',
  'Cypress Lakes',
];

export default function ClientLogos() {
  return (
    <section className="border-y border-border py-10">
      <Container>
        <Marquee speed={40}>
          {clients.map((client) => (
            <span
              key={client}
              className="mx-10 inline-block whitespace-nowrap text-sm font-bold uppercase tracking-widest text-text-light/50 sm:mx-14 sm:text-base"
            >
              {client}
            </span>
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
