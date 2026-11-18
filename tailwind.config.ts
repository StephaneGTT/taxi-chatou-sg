import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Univers « Signature marine » (Taxi Stéphane Géatti) — tokens CSS dans src/app/globals.css
        ink: {
          900: '#001138', // marine profond (logo)
          800: '#0A1C44', // marine
          700: '#16294F',
          600: '#22315A',
        },
        // Accent de marque = champagne / or clair du logo.
        // (Nom de token « champagne » conservé pour éviter un renommage global.)
        champagne: {
          DEFAULT: '#DBC3A5', // champagne : accent sur marine + fond de bouton
          light: '#ECDCC0', // survol
          dark: '#8A6A2E', // or foncé : texte/liens sur fond clair (AA ≥ 4.5)
        },
        cream: '#F6F1E7',
        mist: '#A9ADB0',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Fraunces', 'Georgia', 'serif'],
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
        card: '0 24px 60px -30px rgba(0, 17, 56, 0.45)',
        'card-hover': '0 34px 80px -34px rgba(0, 17, 56, 0.55)',
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
