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
    },
  },
  plugins: [],
};
export default config;
