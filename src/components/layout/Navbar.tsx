'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !scrolled && !isOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 shadow-sm backdrop-blur-md'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative z-50 shrink-0">
            <Image
              src="/images/logo.png"
              alt={COMPANY.name}
              width={140}
              height={40}
              priority
              className={`h-9 w-auto transition-all duration-300 ${
                isTransparent ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isTransparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-text-light hover:text-text'
                } ${pathname === link.href ? (isTransparent ? 'text-white' : 'text-text') : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              href="/contact"
              variant={isTransparent ? 'outline' : 'primary'}
              size="sm"
              className={
                isTransparent
                  ? 'border-white text-white hover:bg-white hover:text-text'
                  : ''
              }
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex w-6 flex-col items-end gap-1.5">
              <span
                className={`block h-[2px] transition-all duration-300 ${
                  isOpen
                    ? 'w-6 translate-y-[5px] rotate-45 bg-white'
                    : `w-6 ${isTransparent ? 'bg-white' : 'bg-text'}`
                }`}
              />
              <span
                className={`block h-[2px] transition-all duration-300 ${
                  isOpen
                    ? 'w-6 -translate-y-[3px] -rotate-45 bg-white'
                    : `w-4 ${isTransparent ? 'bg-white' : 'bg-text'}`
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#111111]"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-4 flex flex-col items-center gap-4"
              >
                <a
                  href={COMPANY.phoneHref}
                  className="text-lg text-gray-400 transition-colors hover:text-white"
                >
                  {COMPANY.phone}
                </a>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-text"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
