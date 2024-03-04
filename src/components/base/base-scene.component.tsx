import { memo } from 'react';
import cx from 'classix';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'> & { wrapperProps?: ComponentProps<'div'> };

export const BaseScene = memo(function ({
  className,
  children,
  wrapperProps: { className: wrapperClassName, ...moreWrapperProps } = {},
  ...moreProps
}: Props) {
  return (
    <div
      className={cx(
        'mx-10 flex-1 rounded border border-white-border',
        className,
      )}
      {...moreProps}
    >
      <div
        className={cx('mx-auto w-full max-w-6xl px-8 py-4', wrapperClassName)}
        {...moreWrapperProps}
      >
        {children}
      </div>
    </div>
  );
});
