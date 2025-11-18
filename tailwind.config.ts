import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--color-brand-primary)',
        'brand-secondary': 'var(--color-brand-secondary)',
        'brand-accent': 'var(--color-brand-accent)',
        'brand-surface': 'var(--color-brand-surface)',
        'brand-base': 'var(--color-brand-base)',
        'realm-mind-forge': 'var(--color-realm-mind-forge)',
        'realm-vital-body': 'var(--color-realm-vital-body)',
        'realm-creative-flow': 'var(--color-realm-creative-flow)',
        'realm-heart-lab': 'var(--color-realm-heart-lab)',
        'realm-system-sanctum': 'var(--color-realm-system-sanctum)',
        'realm-playground-earth': 'var(--color-realm-playground-earth)',
        'realm-inner-cosmos': 'var(--color-realm-inner-cosmos)',
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        'xxl': 'var(--spacing-xxl)',
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
