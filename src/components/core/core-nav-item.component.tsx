'use client';

import { memo } from 'react';
import Link from 'next/link';
import cx from 'classix';

import type { NavItem } from '#/models/core.model';

type Props = Omit<NavItem, 'label' | 'name'> & {
  active?: boolean;
};

export const CoreNavItem = memo(function ({
  className,
  active,
  children,
  ...moreProps
}: Props) {
  return (
    <Link
      className={cx(
        'hover:text-primary min-w-[124px] px-6 font-bold uppercase transition-colors',
        active && 'text-primary',
        className,
      )}
      {...moreProps}
    >
      {children}
    </Link>
  );
});
