import localFont from 'next/font/local';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';

export const bodyFont: NextFontWithVariable = localFont({
  variable: '--font-body',
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/body-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/body-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const displayFont: NextFontWithVariable = localFont({
  variable: '--font-display',
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/display-400.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
