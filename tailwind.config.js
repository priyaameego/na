/** @type {import('tailwindcss').Config} */

module.exports = {

  content: ['./index.html', './**/*.html', './assets/**/*.js', './src/**/*.css'],

  theme: {

    extend: {

      colors: {

        surface: '#FAFBFC',

        'surface-secondary': '#F4F6F9',

        primary: '#111827',

        secondary: '#0B1F3A',

        gold: '#C9A96E',

        'gold-light': '#D4B87A',

        accent: '#C9A96E',

        'accent-hover': '#D4B87A',

        dark: '#111827',

        muted: '#64748B',

        border: 'rgba(15, 23, 42, 0.08)',

        alertbar: '#0B1F3A',

        cyan: '#C9A96E',

        purple: '#142B4D',

        navy: '#0B1F3A',

      },

      fontFamily: {

        sans: ['Inter', 'system-ui', 'sans-serif'],

        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],

        display: ['"Playfair Display"', 'Georgia', 'serif'],

      },

      boxShadow: {

        premium: '0 8px 32px rgba(15, 23, 42, 0.08)',

        'premium-lg': '0 16px 48px rgba(15, 23, 42, 0.08)',

        'premium-xl': '0 24px 64px rgba(15, 23, 42, 0.1)',

        glow: '0 8px 28px rgba(15, 23, 42, 0.12)',

        glass: '0 8px 32px rgba(15, 23, 42, 0.06)',

      },

      borderRadius: {

        '4xl': '2rem',

        '5xl': '2.5rem',

      },

      spacing: {

        '18': '4.5rem',

        '22': '5.5rem',

        '30': '7.5rem',

      },

      animation: {

        'fade-up': 'fadeUp 0.8s ease-out forwards',

        'fade-in': 'fadeIn 0.6s ease-out forwards',

        'float': 'float 6s ease-in-out infinite',

        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',

        'marquee': 'marquee 30s linear infinite',

        'shimmer': 'shimmer 2s linear infinite',

      },

      keyframes: {

        fadeUp: {

          '0%': { opacity: '0', transform: 'translateY(32px)' },

          '100%': { opacity: '1', transform: 'translateY(0)' },

        },

        fadeIn: {

          '0%': { opacity: '0' },

          '100%': { opacity: '1' },

        },

        float: {

          '0%, 100%': { transform: 'translateY(0)' },

          '50%': { transform: 'translateY(-12px)' },

        },

        pulseSoft: {

          '0%, 100%': { opacity: '0.4' },

          '50%': { opacity: '0.8' },

        },

        marquee: {

          '0%': { transform: 'translateX(0)' },

          '100%': { transform: 'translateX(-50%)' },

        },

        shimmer: {

          '0%': { backgroundPosition: '-200% 0' },

          '100%': { backgroundPosition: '200% 0' },

        },

      },

      backdropBlur: {

        xs: '2px',

      },

    },

  },

  plugins: [],

};

