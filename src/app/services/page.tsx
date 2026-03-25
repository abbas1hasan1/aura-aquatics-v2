import type { Metadata } from 'next';
import ServicesContent from '@/components/pages/ServicesContent';

export const metadata: Metadata = {
  title: 'Services | Aura Aquatics',
  description:
    'Explore our full range of aquatic services including pool management, lifeguard staffing, maintenance, and swim lessons in Houston, TX.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
