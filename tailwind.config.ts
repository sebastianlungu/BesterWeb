import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        'brand-primary': 'var(--color-brand-primary)',
        'brand-secondary': 'var(--color-brand-secondary)',
        'brand-accent': 'var(--color-brand-accent)',
        'brand-surface': 'var(--color-brand-surface)',
        'brand-base': 'var(--color-brand-base)',

        // Primary scale (Forest)
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },

        // Secondary scale (Mint Frost)
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
        },

        // Accent scale (Blush)
        accent: {
          50: 'var(--color-accent-50)',
          100: 'var(--color-accent-100)',
          200: 'var(--color-accent-200)',
          300: 'var(--color-accent-300)',
          400: 'var(--color-accent-400)',
          500: 'var(--color-accent-500)',
          600: 'var(--color-accent-600)',
          700: 'var(--color-accent-700)',
          800: 'var(--color-accent-800)',
          900: 'var(--color-accent-900)',
        },

        // Surface scale (Cream)
        surface: {
          50: 'var(--color-surface-50)',
          100: 'var(--color-surface-100)',
          200: 'var(--color-surface-200)',
          300: 'var(--color-surface-300)',
          400: 'var(--color-surface-400)',
          500: 'var(--color-surface-500)',
          600: 'var(--color-surface-600)',
          700: 'var(--color-surface-700)',
          800: 'var(--color-surface-800)',
          900: 'var(--color-surface-900)',
        },

        // Success scale (Sage)
        success: {
          50: 'var(--color-success-50)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
          800: 'var(--color-success-800)',
          900: 'var(--color-success-900)',
        },

        // Danger scale (Burgundy)
        danger: {
          50: 'var(--color-danger-50)',
          100: 'var(--color-danger-100)',
          200: 'var(--color-danger-200)',
          300: 'var(--color-danger-300)',
          400: 'var(--color-danger-400)',
          500: 'var(--color-danger-500)',
          600: 'var(--color-danger-600)',
          700: 'var(--color-danger-700)',
          800: 'var(--color-danger-800)',
          900: 'var(--color-danger-900)',
        },

        // Realm colors
        'realm-mind-forge': 'var(--color-realm-mind-forge)',
        'realm-vital-body': 'var(--color-realm-vital-body)',
        'realm-creative-flow': 'var(--color-realm-creative-flow)',
        'realm-heart-lab': 'var(--color-realm-heart-lab)',
        'realm-system-sanctum': 'var(--color-realm-system-sanctum)',
        'realm-playground-earth': 'var(--color-realm-playground-earth)',
        'realm-inner-cosmos': 'var(--color-realm-inner-cosmos)',

        // Background colors (Cream + Mint Alternation)
        bg: {
          cream: {
            subtle: 'var(--color-bg-cream-subtle)',
            strong: 'var(--color-bg-cream-strong)',
          },
          mint: {
            subtle: 'var(--color-bg-mint-subtle)',
            strong: 'var(--color-bg-mint-strong)',
          },
          inverse: 'var(--color-bg-inverse)',
        },
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
        // Primary UI font (Satoshi)
        sans: ['var(--font-satoshi)', 'var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        // Secondary body font (Inter)
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        // Display font (Cabinet Grotesk)
        display: ['var(--font-cabinet)', 'var(--font-satoshi)', 'Inter', 'system-ui', 'sans-serif'],
        // Monospace
        mono: ['SF Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand-primary': 'var(--gradient-brand-primary)',
        'gradient-brand-secondary': 'var(--gradient-brand-secondary)',
        'gradient-brand-accent': 'var(--gradient-brand-accent)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-surface': 'var(--gradient-surface)',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
    },
  },
  plugins: [],
};

export default config;
