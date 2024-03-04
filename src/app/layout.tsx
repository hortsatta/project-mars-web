import { bodyFont, displayFont } from '#/config/fonts.config';
import cx from 'classix';

import { CoreHeader } from '#/components/core/core-header.components';
import { CoreFooter } from '#/components/core/core-footer.component';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Crimson Airways',
  description: 'The only way to Explore Mars.',
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang='en'
      className='overflow-y-scroll scrollbar-thin scrollbar-track-backdrop scrollbar-thumb-primary/30 hover:scrollbar-thumb-primary/50 active:scrollbar-thumb-primary/60'
    >
      <body
        className={cx(
          'flex min-h-screen flex-col',
          bodyFont.variable,
          displayFont.variable,
        )}
      >
        <CoreHeader />
        <main className='flex flex-1 flex-col'>{children}</main>
        <CoreFooter className='py-[50px]' />
      </body>
    </html>
  );
}
