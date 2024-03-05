import { memo } from 'react';
import { motion } from 'framer-motion';
import cx from 'classix';

import { BaseHeaderTitle } from '../base/base-header-title.component';
import { BaseIcon } from '../base/base-icon.component';
import { BaseLink } from '../base/base-link.component';

import type { ComponentProps } from 'react';

const description = `Mars is no place for the faint-hearted. It's dry, rocky, and bitter cold. The fourth planet from the Sun, Mars is one of Earth's two closest planetary neighbors (Venus is the other). Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light.`;

const PROPERTY_WRAPPER_CLASSNAME =
  'flex flex-col items-center border-r border-white-border px-6 pb-5 pt-2.5';
const PROPERTY_VALUE_CLASSNAME = 'text-[64px] font-bold leading-[1.15]';
const PROPERTY_LABEL_CLASSNAME = 'font-display uppercase tracking-normal';

export const HomeMarsInfoSection = memo(function ({
  className,
  ...moreProps
}: ComponentProps<typeof motion.section>) {
  return (
    <motion.section
      className={cx('flex items-center justify-between', className)}
      {...moreProps}
    >
      <div className='max-w-[455px]'>
        <div className='mb-[25px] flex items-center justify-between border-b-2 border-white-border pb-7'>
          <BaseHeaderTitle
            className='!items-start'
            title='The Red Planet'
            subtitle='Explore Mars'
          />
          <BaseIcon
            name='planet'
            weight='light'
            size={60}
            className='text-white/60'
          />
        </div>
        <p className='mb-[75px] leading-8'>{description}</p>
        <div className='rounded-sm border border-white-border'>
          <div className='flex items-center border-b border-white-border'>
            <div className={PROPERTY_WRAPPER_CLASSNAME}>
              <span className={PROPERTY_VALUE_CLASSNAME}>2</span>
              <span className={PROPERTY_LABEL_CLASSNAME}>Moons</span>
            </div>
            <div className={PROPERTY_WRAPPER_CLASSNAME}>
              <span className={PROPERTY_VALUE_CLASSNAME}>38%</span>
              <span className={PROPERTY_LABEL_CLASSNAME}>Gravity</span>
            </div>
            <div
              className={cx(PROPERTY_WRAPPER_CLASSNAME, 'flex-1 !border-r-0')}
            >
              <span className={PROPERTY_VALUE_CLASSNAME}>-63 °C</span>
              <span className={PROPERTY_LABEL_CLASSNAME}>Avg Temp</span>
            </div>
          </div>
          <BaseLink href='/' className='w-full py-3'>
            Learn More
          </BaseLink>
        </div>
      </div>
      <div className='translate-x-12'>
        <video width='600' autoPlay loop muted>
          <source src='/videos/planet-loop.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.section>
  );
});
