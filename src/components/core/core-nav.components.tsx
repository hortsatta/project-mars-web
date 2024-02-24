'use client';

import { memo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classix';

import { CoreNavItem } from './core-nav-item.component';

import type { ComponentProps } from 'react';
import type { LinkProps } from 'next/link';
import type { NavItem } from '#/models/core.model';

import logoPng from '#/assets/images/logo.png';

type Props = ComponentProps<'nav'> & {
  items: NavItem[];
};

type HomeLinkProps = {
  href: LinkProps['href'];
};

const HomeLink = memo(function ({ href }: HomeLinkProps) {
  return (
    <Link className='inline-block px-4 py-2.5' href={href}>
      <Image
        src={logoPng}
        alt='logo'
        width={256}
        height={50}
        loading='eager'
        priority
      />
    </Link>
  );
});

export const CoreNav = memo(function ({
  className,
  items,
  ...moreProps
}: Props) {
  const pathname = usePathname();

  return (
    <nav className={cx('flex items-center', className)} {...moreProps}>
      <ul className='flex items-center'>
        {items.map(({ href, name, label, ...moreItem }) =>
          name === 'home' ? (
            <li
              key={`navitem-${name}`}
              className='flex items-center justify-center px-7'
            >
              <HomeLink href={href} />
            </li>
          ) : (
            <li
              key={`navitem-${name}`}
              className='flex items-center justify-center'
            >
              <CoreNavItem href={href} active={pathname === href} {...moreItem}>
                {label}
              </CoreNavItem>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
});
