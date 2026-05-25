import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A2E',
          light: '#16213E',
        },
        accent: {
          DEFAULT: '#C9A84C',
          light: '#E2C97E',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          subtle: '#F7F4EF',
          dark: '#1A1A2E',
        },
        text: {
          DEFAULT: '#1A1A2E',
          muted: '#6B6B88',
        },
        border: {
          DEFAULT: '#E8E0D4',
          strong: '#C9A84C',
        },
        ivory: '#F5F0E8',
        navy: '#1A1A2E',
        gold: '#C9A84C',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', fontWeight: '600' }],
        h1: ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', fontWeight: '600' }],
        h2: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', fontWeight: '500' }],
        h3: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        badge: '6px',
      },
      boxShadow: {
        card: '0 2px 16px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.12)',
        gold: '0 0 0 2px #C9A84C',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
