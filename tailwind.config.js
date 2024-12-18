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
        black: {
          pure: '#000000',
          light: '#363636',
          dark: '#110C11',
          medium: '#2e2d2e',
          DEFAULT: '#272527',
          mid: '#2E2D2E',
          soft: '#1C1C1C',
        },
        blue: {
          light: '#90AFC5',
          DEFAULT: '#336B87',
          dark: '#274C69',
          aqua: '#43B4B4',
          smoke: '#527087',
          electric: '#44C1EE',
        },
        gray: {
          DEFAULT: '#999999',
          light: '#CCCCCC',
          medium: '#676767',
          opacity: '#66666605' /* rgba(102, 102, 102, 0.02) */,
          soft: '#666666',
        },
        /* New list of colors */
        brand: {
          primary: '#254D6E' /* rgba(37, 77, 110, 1) */,
          'primary-light': '#E0E5E5' /* rgba(224, 229, 229, 1) */,
          'primary-medium': '#90AFC5' /* rgba(144, 175, 197, 1) */,
          'primary-soft': '#527087' /* rgba(82, 112, 135, 1) */,
          'primary-dark': '#12293B' /* rgba(18, 41, 59, 1) */,
          secondary: '#864117' /* rgba(134, 65, 23, 1) */,
          'secondary-light': '#EDECE4' /* rgba(237, 236, 228, 1) */,
        },
        neutral: {
          0: '#FFFFFF' /* rgba(255, 255, 255, 1) */,
          50: '#F8F8F8' /* rgba(248, 248, 248, 1) */,
          100: '#E4E4E4' /* rgba(228, 228, 228, 1) */,
          500: '#DBDADA' /* rgba(219, 218, 218, 1) */,
          600: '#999999' /* rgba(153, 153, 153, 1) */,
          800: '#666666' /* rgba(102, 102, 102, 1) */,
          900: '#1C1C1C' /* rgba(28, 28, 28, 1) */,
          1000: '#000000' /* rgba(0, 0, 0, 1) */,
        },
        informative: {
          light: '#EFF6FF' /* rgba(239, 246, 255, 1) */,
          medium: '#254D6E' /* rgba(37, 77, 110, 1) */,
          dark: '#12293B' /* rgba(18, 41, 59, 1) */,
        },
        error: {
          light: '#FEF2F2' /* rgba(254, 242, 242, 1) */,
          medium: '#DE3C3C' /* rgba(222, 60, 60, 1) */,
          dark: '#991B1B' /* rgba(153, 27, 27, 1) */,
        },
        warning: {
          light: '#FFFBEB' /* rgba(255, 251, 235, 1) */,
          medium: '#F5890B' /* rgba(245, 137, 11, 1) */,
          dark: '#92400E' /* rgba(146, 64, 14, 1) */,
        },
        success: {
          light: '#F0FDF4' /* rgba(240, 253, 244, 1) */,
          medium: '#4CAF50' /* rgba(76, 175, 80, 1) */,
          dark: '#166534' /* rgba(22, 101, 52, 1) */,
        },
        icon: {
          blue: {
            visa: '#1434CB' /* rgba(20, 52, 203, 1) */,
          },
          green: {
            tripadvisor: '#35E0A1' /* rgba(53, 224, 161, 1) */,
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
