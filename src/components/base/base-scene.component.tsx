'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import cx from 'classix';

import type { ComponentProps, ReactNode } from 'react';

type Props = Omit<ComponentProps<typeof motion.div>, 'children'> & {
  children?: ReactNode;
  wrapperProps?: ComponentProps<'div'>;
};

const animationProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: { duration: 0.4, ease: 'easeIn' },
};

export const BaseScene = memo(function ({
  className,
  children,
  wrapperProps: { className: wrapperClassName, ...moreWrapperProps } = {},
  ...moreProps
}: Props) {
  return (
    <motion.div
      className={cx(
        'mx-10 flex-1 rounded border border-white-border',
        className,
      )}
      {...animationProps}
      {...moreProps}
    >
      <div
        className={cx('mx-auto w-full max-w-6xl px-8 py-4', wrapperClassName)}
        {...moreWrapperProps}
      >
        {children}
      </div>
    </motion.div>
  );
});
