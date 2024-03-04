import { forwardRef, memo } from 'react';
import Link from 'next/link';
import cx from 'classix';

import type { ComponentProps } from 'react';
import type { ButtonSize } from '#/models/base.model';

type Props = ComponentProps<typeof Link> & {
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
};

export const BaseLink = memo(
  forwardRef<HTMLAnchorElement, Props>(function (
    { className, size = 'base', loading, disabled, ...moreProps },
    ref,
  ) {
    return (
      <Link
        ref={ref}
        className={cx(
          'inline-block px-2.5 py-2 text-center font-display uppercase text-primary transition-colors hover:text-red-600',
          size === 'base' ? 'text-2xl' : 'text-xl',
          (loading || disabled) && 'pointer-events-none',
          className,
        )}
        {...moreProps}
      />
    );
  }),
);
