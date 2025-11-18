'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[var(--color-border-subtle)] shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-primary)]/80 transition-colors">
              Bester
            </span>
          </Link>

          {/* Navigation */}
          <Link
            href="/about"
            className="text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-brand-primary)] after:transition-all hover:after:w-full"
          >
            About
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
