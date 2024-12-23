/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

const sans = defaultTheme.fontFamily.sans.filter((font) => font !== 'Roboto')

export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', ...sans],
      serif: ['"Gowun Batang"', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      fontSize: {
        '3.5xl': [
          '2rem',
          {
            lineHeight: '38px',
          },
        ],
      },
      colors: {
        cardType: {
          electric: '#FFDD00',
          fire: '#FF4500',
          water: '#1E90FF',
          grass: '#32CD32',
          psychic: '#9932CC',
          neutral: '#A9A9A9',
        },
        brand: {
          primary: {
            light: '#224459',
            DEFAULT: '#224459',
            dark: '#224459',
          },
          secondary: {
            light: '#41A664',
            DEFAULT: '#41A664',
            dark: '#41A664',
          },
          tertiary: {
            light: '#A69E76',
            DEFAULT: '#A69E76',
            dark: '#A69E76',
          },
          accent: {
            light: '#A68A38',
            DEFAULT: '#A68A38',
            dark: '#A68A38',
          },
          base: {
            light: '#D9A441',
            DEFAULT: '#D9A441',
            dark: '#D9A441',
          },
        },
        neutral: {
          dark: {
            light: '#2D3748',
            DEFAULT: '#1A202C',
            dark: '#121924',
          },
          white: {
            light: '#F7FAFC',
            DEFAULT: '#FFFFFF',
            dark: '#EDF2F7',
          },
          gray: {
            light: '#CBD5E0',
            DEFAULT: '#A0AEC0',
            dark: '#718096',
          },
        },
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          '2xl': '3rem',
        },
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
}
