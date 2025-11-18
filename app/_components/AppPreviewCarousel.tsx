'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const realms = [
  {
    name: 'Social Feed',
    description: 'See what your community is working on',
    color: 'var(--color-brand-primary)',
    emoji: '🌟',
  },
  {
    name: 'Smart AI Routine Engine',
    description: 'Personalized routines that adapt to you',
    color: 'var(--color-realm-system-sanctum)',
    emoji: '🤖',
  },
  {
    name: 'Quests & Realms',
    description: 'Explore different growth universes',
    color: 'var(--color-realm-creative-flow)',
    emoji: '🎯',
  },
  {
    name: 'Mind Forge',
    description: 'Mental clarity, focus, learning',
    color: 'var(--color-realm-mind-forge)',
    emoji: '🧠',
  },
  {
    name: 'Vital Body',
    description: 'Physical health, fitness, movement',
    color: 'var(--color-realm-vital-body)',
    emoji: '💪',
  },
];

export default function AppPreviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % realms.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
