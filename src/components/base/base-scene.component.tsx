import { memo } from 'react';
import cx from 'classix';

import type { ComponentProps } from 'react';

export const BaseScene = memo(function ({
  className,
  children,
  ...moreProps
}: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        'border-white-border mx-10 flex-1 rounded border',
        className,
      )}
      {...moreProps}
    >
      <div className='mx-auto w-full max-w-6xl px-8 py-4'>{children}</div>
    </div>
  );
});
