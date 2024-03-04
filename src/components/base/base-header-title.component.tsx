import { memo } from 'react';
import cx from 'classix';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'> & {
  title: string;
  subtitle?: string;
};

export const BaseHeaderTitle = memo(function ({
  className,
  title,
  subtitle,
  ...moreProps
}: Props) {
  return (
    <div className={cx('flex flex-col items-center', className)} {...moreProps}>
      {subtitle && (
        <h4 className='font-display text-base uppercase tracking-[5px] text-primary'>
          {subtitle}
        </h4>
      )}
      <h3 className='text-[32px] font-bold uppercase tracking-[2px]'>
        {title}
      </h3>
    </div>
  );
});
