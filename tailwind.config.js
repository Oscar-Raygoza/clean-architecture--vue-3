/** @type {import('tailwindcss').Config} */
import flyonui from 'flyonui'
import flyonuiJs from 'flyonui/plugin'

import defaultTheme from 'tailwindcss/defaultTheme'
const sans = defaultTheme.fontFamily.sans.filter((font) => font !== 'Roboto')

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flyonui/dist/js/*.js'],
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
      backgroundImage: {
        'gradient-radial-light':
          'radial-gradient(circle 300px at 30% -180%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
        'gradient-radial-dark':
          'radial-gradient(circle 300px at 30% -180%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
      },
      colors: {
        brand: {
          primary: {
            light: {
              DEFAULT: '#3B82F6', // blue-500
              lighter: '#60A5FA', // blue-400
              dark: '#2563EB', // blue-600
            },
            dark: {
              DEFAULT: '#60A5FA', // blue-400
              lighter: '#93C5FD', // blue-300
              dark: '#3B82F6', // blue-500
            },
          },
          secondary: {
            light: {
              DEFAULT: '#EF4444', // red-500
              lighter: '#F87171', // red-400
              dark: '#DC2626', // red-600
            },
            dark: {
              DEFAULT: '#F87171', // red-400
              lighter: '#FCA5A5', // red-300
              dark: '#EF4444', // red-500
            },
          },
        },
        default: {
          light: {
            DEFAULT: '#FFFFFF', // white
            lighter: '#FAFAFA', // gray-50
            dark: '#F4F4F5', // zinc-100
          },
          dark: {
            DEFAULT: '#18181B', // zinc-900
            lighter: '#27272A', // zinc-800
            dark: '#09090B', // zinc-950
          },
        },
        accent: {
          light: {
            DEFAULT: '#FACC15', // yellow-400
            lighter: '#FDE047', // yellow-300
            dark: '#EAB308', // yellow-500
          },
          dark: {
            DEFAULT: '#FDE047', // yellow-300
            lighter: '#FEF08A', // yellow-200
            dark: '#FACC15', // yellow-400
          },
        },
        success: {
          light: {
            DEFAULT: '#22C55E', // green-500
            lighter: '#4ADE80', // green-400
            dark: '#16A34A', // green-600
          },
          dark: {
            DEFAULT: '#4ADE80', // green-400
            lighter: '#86EFAC', // green-300
            dark: '#22C55E', // green-500
          },
        },
        warning: {
          light: {
            DEFAULT: '#F97316', // orange-500
            lighter: '#FB923C', // orange-400
            dark: '#EA580C', // orange-600
          },
          dark: {
            DEFAULT: '#FB923C', // orange-400
            lighter: '#FDBA74', // orange-300
            dark: '#F97316', // orange-500
          },
        },
        error: {
          light: {
            DEFAULT: '#DC2626', // red-600
            lighter: '#EF4444', // red-500
            dark: '#B91C1C', // red-700
          },
          dark: {
            DEFAULT: '#EF4444', // red-500
            lighter: '#F87171', // red-400
            dark: '#DC2626', // red-600
          },
        },
        neutral: {
          light: {
            DEFAULT: '#6B7280', // gray-500
            lighter: '#9CA3AF', // gray-400
            dark: '#4B5563', // gray-600
          },
          dark: {
            DEFAULT: '#4B5563', // gray-600
            lighter: '#6B7280', // gray-500
            dark: '#374151', // gray-700
          },
        },
        background: {
          light: {
            DEFAULT: '#F3F4F6', // gray-100
            lighter: '#F9FAFB', // gray-50
            dark: '#E5E7EB', // gray-200
          },
          dark: {
            DEFAULT: '#111827', // gray-900
            lighter: '#1F2937', // gray-800
            dark: '#030712', // gray-950
          },
        },
        gradient: {
          light: {
            from: '#60A5FA', // blue-500
            to: '#2563EB', // blue-300
          },
          dark: {
            from: '#60A5FA', // blue-400
            to: '#BFDBFE', // blue-200
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
  plugins: [
    flyonui,
    flyonuiJs,
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'text-shadow': '0 0 4px rgba(255, 255, 255, .1), 0 0 14px rgba(130, 168, 236, .2)',
        },
      })
    },
  ],
  flyonui: {
    themes: [
      {
        light: {
          primary: '#60A5FA',
          'primary-content': '#FFFFFF',
          secondary: '#EF4444',
          'secondary-content': '#FFFFFF',
          accent: '#FACC15',
          'accent-content': '#18181B',
          neutral: '#6B7280',
          'neutral-content': '#FFFFFF',
          'base-100': '#FFFFFF',
          'base-200': '#F4F4F5',
          'base-300': '#E5E7EB',
          'base-content': '#18181B',
          info: '#3B82F6',
          'info-content': '#FFFFFF',
          success: '#22C55E',
          'success-content': '#FFFFFF',
          warning: '#F97316',
          'warning-content': '#FFFFFF',
          error: '#DC2626',
          'error-content': '#FFFFFF',
        },
      },
      {
        dark: {
          primary: '#60A5FA',
          'primary-content': '#010811',
          secondary: '#F87171',
          'secondary-content': '#130201',
          accent: '#FDE047',
          'accent-content': '#1F2937',
          neutral: '#4B5563',
          'neutral-content': '#FFFFFF',
          'base-100': '#111827',
          'base-200': '#27272A',
          'base-300': '#18181B',
          'base-content': '#F9FAFB',
          info: '#60A5FA',
          'info-content': '#FFFFFF',
          success: '#4ADE80',
          'success-content': '#FFFFFF',
          warning: '#FB923C',
          'warning-content': '#FFFFFF',
          error: '#EF4444',
          'error-content': '#FFFFFF',
        },
      },
    ],
  },
}
