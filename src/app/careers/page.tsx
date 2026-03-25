import type { Metadata } from 'next';
import CareersContent from '@/components/pages/CareersContent';

export const metadata: Metadata = {
  title: 'Careers | Aura Aquatics',
  description:
    'Join the Aura Aquatics team. We are hiring lifeguards, supervisors, and pool technicians in Houston, TX. Competitive pay and flexible schedules.',
};

export default function CareersPage() {
  return <CareersContent />;
}
