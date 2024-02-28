import { forwardRef, memo } from 'react';
import cx from 'classix';

import type { ComponentProps } from 'react';
import type { ButtonVariant, ButtonSize } from '#/models/base.model';

type Props = ComponentProps<'button'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

export const BaseButton = memo(
  forwardRef<HTMLButtonElement, Props>(function (
    {
      className,
      name,
      variant = 'link',
      size = 'base',
      loading,
      disabled,
      ...moreProps
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type='button'
        className={cx(
          'rounded-sm font-display uppercase text-primary transition-colors hover:text-red-600',
          variant === 'border'
            ? 'border border-white-border px-6 hover:border-primary-border'
            : 'px-2.5 py-2',
          size === 'base' ? 'text-2xl' : 'text-xl',
          variant === 'border' && size === 'base' && 'min-h-[42px]',
          variant === 'border' && size === 'sm' && 'min-h-12',
          className,
        )}
        disabled={loading || disabled}
        {...moreProps}
      />
    );
  }),
);
