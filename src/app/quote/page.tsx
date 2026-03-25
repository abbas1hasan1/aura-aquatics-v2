import type { Metadata } from 'next';
import QuoteContent from '@/components/pages/QuoteContent';

export const metadata: Metadata = {
  title: 'Request a Quote | Aura Aquatics',
  description:
    'Request a free quote for pool management, lifeguard staffing, maintenance, or swim lessons from Aura Aquatics in Houston, TX.',
};

export default function QuotePage() {
  return <QuoteContent />;
}
