import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#004080',
          50: '#e6f0ff',
          100: '#b3d9ff',
          200: '#80c2ff',
          300: '#4dabff',
          400: '#1a94ff',
          500: '#004080',
          600: '#003366',
          700: '#00264d',
          800: '#001a33',
          900: '#000d1a',
        },
        accent: {
          DEFAULT: '#0066cc',
          light: '#3385d6',
          dark: '#004d99',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config