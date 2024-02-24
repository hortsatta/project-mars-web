import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classix';

import { footerNavItems } from '#/nav-menu';

import type { ComponentProps } from 'react';

import logoPng from '#/assets/images/logo.png';
import blackholePng from '#/assets/images/blackhole.png';

const currentYear = new Date().getFullYear();

const NavMenu = memo(function () {
  return (
    <nav>
      <ul className='flex items-center gap-7'>
        {footerNavItems.map(({ name, label, ...moreItem }) => (
          <li
            key={`navitem-${name}`}
            className='flex items-center justify-center'
          >
            <Link
              className='text-base font-bold uppercase transition-colors hover:text-primary'
              {...moreItem}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export const CoreFooter = memo(function ({
  className,
}: ComponentProps<'footer'>) {
  return (
    <footer
      className={cx(
        'flex w-full items-center justify-between px-10',
        className,
      )}
    >
      <div className='flex flex-col gap-7'>
        <div className='flex items-end gap-7'>
          <Image
            src={logoPng}
            alt='footer logo'
            width={256}
            height={50}
            loading='eager'
            priority
          />
          <span className='font-display text-sm uppercase leading-none'>
            Copyright © {currentYear}
          </span>
        </div>
        <NavMenu />
      </div>
      <div>
        <Image
          src={blackholePng}
          alt='blackhole'
          width={82}
          height={90}
          loading='eager'
          priority
        />
      </div>
    </footer>
  );
});
