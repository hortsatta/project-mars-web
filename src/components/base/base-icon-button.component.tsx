import { forwardRef, memo } from 'react';
import cx from 'classix';

import { BaseIcon } from './base-icon.component';

import type { ComponentProps } from 'react';
import type { IconName, ButtonVariant, ButtonSize } from '#/models/base.model';

type Props = ComponentProps<'button'> & {
  name: IconName;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconProps?: Omit<ComponentProps<typeof BaseIcon>, 'name'>;
};

export const BaseIconButton = memo(
  forwardRef<HTMLButtonElement, Props>(function (
    {
      className,
      name,
      variant = 'link',
      size = 'base',
      loading,
      disabled,
      iconProps,
      ...moreProps
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cx(
          'rounded-sm px-2.5 transition-colors hover:text-primary',
          variant === 'border'
            ? 'border border-white-border py-1.5 hover:border-primary-border'
            : 'py-1',
          (loading || disabled) && '!pointer-events-none',
          className,
        )}
        type='button'
        disabled={loading || disabled}
        {...moreProps}
      >
        <BaseIcon
          size={size === 'base' ? 30 : 24}
          weight='regular'
          name={name}
          {...iconProps}
        />
      </button>
    );
  }),
);
