import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        gold: {
          400: '#E8C872',
          500: '#D4A853',
          600: '#B8892E',
        },
        slate: {
          950: '#0A0C0F',
        },
      },
    },
  },
  plugins: [],
};

export default config;
