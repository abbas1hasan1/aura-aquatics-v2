import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact | Aura Aquatics',
  description:
    'Get in touch with Aura Aquatics. Call us at 281-214-8025 or send a message to discuss your pool management needs in Houston, TX.',
};

export default function ContactPage() {
  return <ContactContent />;
}
