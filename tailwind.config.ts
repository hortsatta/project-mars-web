import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#e8ced3',
        primary: {
          DEFAULT: '#d75c54',
        },
        backdrop: {
          DEFAULT: '#0c0507',
        },
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
