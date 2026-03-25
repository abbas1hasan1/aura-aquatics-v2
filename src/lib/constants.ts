export const COMPANY = {
  name: 'Aura Aquatics',
  phone: '281-214-8025',
  phoneHref: 'tel:+12812148025',
  email: 'info@auraaquatics.com',
  emailHref: 'mailto:info@auraaquatics.com',
  location: 'Houston, TX',
  description:
    'Houston\'s premier pool management and lifeguard staffing company. We deliver exceptional aquatic experiences through professional management, certified lifeguards, and meticulous maintenance.',
  tagline: 'Elevating Aquatic Experiences',
  url: 'https://auraaquatics.com',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/auraaquatics',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/auraaquatics',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/auraaquatics',
    icon: 'facebook',
  },
] as const;
