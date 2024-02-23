import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

const colorWhite = '232 206 211';
const colorPrimary = '215 92 84';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        fhd: '1920px',
      },
      colors: {
        white: {
          DEFAULT: `rgb(${colorWhite})`,
          border: `rgb(${colorWhite} / 0.3)`,
        },
        primary: {
          DEFAULT: `rgb(${colorPrimary})`,
          border: `rgb(${colorPrimary} / 0.5)`,
        },
        backdrop: '#0c0507',
      },
      fontFamily: {
        body: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-display)'],
      },
      keyframes: {
        rainbow: {
          '0%': { filter: 'hue-rotate(0deg)', opacity: '1' },
          '25%': { filter: 'hue-rotate(90deg)', opacity: '0.2' },
          '50%': { filter: 'hue-rotate(180deg)', opacity: '1' },
          '75%': { filter: 'hue-rotate(270deg)', opacity: '0.2' },
          '100%': { filter: 'hue-rotate(360deg)', opacity: '1' },
        },
        fade: {
          '0%': { opacity: '0' },
          '25%': { opacity: '1' },
          '50%': { opacity: '0' },
          '75%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        rainbow: 'rainbow 5s linear infinite',
        fade: 'fade 5s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
