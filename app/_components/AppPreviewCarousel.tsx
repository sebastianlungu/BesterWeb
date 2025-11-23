'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const realms = [
  {
    id: 'social-feed',
    name: 'Social Feed',
    description: 'See what your community is working on, share your wins, and celebrate progress together.',
    color: 'var(--color-brand-primary)',
    emoji: '🌟',
  },
  {
    id: 'ai-routine',
    name: 'Smart AI Routine Engine',
    description: 'Personalized routines that adapt to you. AI learns your patterns and helps you build better habits.',
    color: 'var(--color-realm-system-sanctum)',
    emoji: '🤖',
  },
  {
    id: 'iteration-fun',
    name: 'Iteration & Fun Trying',
    description: 'Playful experimentation, no guilt, just growth. Try new things, learn what works, iterate.',
    color: 'var(--color-brand-accent)',
    emoji: '🎯',
  },
];

interface AppPreviewCarouselProps {
  onRealmChange?: (realmId: string) => void;
}

export default function AppPreviewCarousel({ onRealmChange }: AppPreviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % realms.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Notify parent component when realm changes
    if (onRealmChange) {
      onRealmChange(realms[currentIndex].id);
    }
  }, [currentIndex, onRealmChange]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-80 bg-white rounded-[var(--radius-2xl)] shadow-xl overflow-hidden border border-[var(--color-border-default)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
            style={{
              background: `linear-gradient(135deg, ${realms[currentIndex].color}15, ${realms[currentIndex].color}05)`,
            }}
          >
            <div className="text-6xl mb-4">{realms[currentIndex].emoji}</div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: realms[currentIndex].color }}
            >
              {realms[currentIndex].name}
            </h3>
            <p className="text-[var(--color-text-secondary)] text-lg">
              {realms[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {realms.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-[var(--color-brand-primary)]'
                  : 'bg-[var(--color-border-strong)]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* TODO: Replace with actual app screenshots/mockups */}
      <p className="text-xs text-center text-[var(--color-text-tertiary)] mt-2">
        App preview mockup - to be replaced with actual screenshots
      </p>
    </div>
  );
}
