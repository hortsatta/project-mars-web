import { memo } from 'react';
import cx from 'classix';

import { CoreNav } from './core-nav.components';

import type { ComponentProps } from 'react';

const navItems = [
  {
    href: '/destinations',
    name: 'destinations',
    label: 'Destinations',
  },
  {
    href: '/technology',
    name: 'technology',
    label: 'Technology',
  },
  {
    href: '/',
    name: 'home',
  },
  {
    href: '/blast-offs',
    name: 'blast-offs',
    label: 'Blast Offs',
  },
  {
    href: '/expeditions',
    name: 'expeditions',
    label: 'My Expeditions',
  },
];

export const CoreHeader = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'header'>) {
  return (
    <header
      className={cx(
        'flex min-h-[90px] items-center justify-between',
        className,
      )}
      {...moreProps}
    >
      <div>{/* mars weather */}</div>
      <CoreNav items={navItems} />
      <div>{/* search iconbutton */}</div>
    </header>
  );
});
