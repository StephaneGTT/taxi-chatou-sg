import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Univers « Premium marine & beige » (Taxi Stéphane Géatti) — tokens CSS dans src/app/globals.css
        ink: {
          900: '#0B1D3A', // bleu marine profond
          800: '#07152C', // bleu nuit
          700: '#13294A',
          600: '#2A3E63',
        },
        // Accent de marque = beige élégant.
        // (Nom de token « champagne » conservé pour éviter un renommage global.)
        champagne: {
          DEFAULT: '#D8C3A5', // beige : accent sur marine + fond de bouton
          light: '#E7D7BE', // survol
          dark: '#8A6E42', // beige foncé : texte/liens sur fond clair (AA ≥ 4.5)
        },
        cream: '#FAF9F6', // blanc cassé : fond principal
        sand: '#F3EBDD', // beige clair : fonds secondaires
        mist: '#9AA6BD',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Outfit', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 5.5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        h2: ['clamp(2rem, 3vw, 2.9rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        eyebrow: '0.3em',
        wide: '0.18em',
      },
      maxWidth: {
        container: '1320px',
        prose: '68ch',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 4vw, 3rem)',
      },
      boxShadow: {
        card: '0 24px 60px -30px rgba(11, 29, 58, 0.35)',
        'card-hover': '0 34px 80px -34px rgba(11, 29, 58, 0.45)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
