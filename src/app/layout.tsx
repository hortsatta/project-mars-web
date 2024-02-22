import { bodyFont, displayFont } from '#/config/fonts.config';
import cx from 'classix';

import { CoreHeader } from '#/components/core/core-header.components';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Scarlet',
  description: 'The only way to tour the Red Planet.',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className={cx(bodyFont.variable, displayFont.variable)}>
        <CoreHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
