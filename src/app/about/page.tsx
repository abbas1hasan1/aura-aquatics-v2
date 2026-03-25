import type { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About | Aura Aquatics',
  description:
    'Learn about Aura Aquatics — our story, our values, and our commitment to delivering exceptional pool management and lifeguard staffing in Houston.',
};

export default function AboutPage() {
  return <AboutContent />;
}
