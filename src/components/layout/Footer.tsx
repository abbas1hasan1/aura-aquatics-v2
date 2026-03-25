'use client';

import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { services } from '@/lib/data';
import Container from '@/components/ui/Container';

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socialIcons: Record<string, React.FC> = {
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
};

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400">
      <Container>
        {/* Logo */}
        <div className="flex justify-center pt-16 pb-12">
          <Image
            src="/images/logo.png"
            alt={COMPANY.name}
            width={160}
            height={46}
            className="h-10 w-auto brightness-0 invert"
          />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-12 pb-12 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          {/* Pages */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Pages
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm transition-colors duration-200 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="text-sm transition-colors duration-200 hover:text-white"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="text-sm transition-colors duration-200 hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="text-sm">{COMPANY.location}</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Socials
            </h4>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
                    >
                      {Icon && <Icon />}
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-md text-center">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h4>
            <p className="mb-6 text-sm">
              Subscribe for pool management tips and company news.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-white/40"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111111] transition-colors hover:bg-gray-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
