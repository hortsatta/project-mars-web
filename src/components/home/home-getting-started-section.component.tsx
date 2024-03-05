import { memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cx from 'classix';

import { BaseHeaderTitle } from '../base/base-header-title.component';
import { BaseIcon } from '../base/base-icon.component';

import type { ComponentProps } from 'react';
import type { IconName } from '#/models/base.model';

import featuredDestinationsBg from '#/assets/images/home-featured-destinations-bg.png';
import gettingStartedPng from '#/assets/images/getting-started.png';

type ItemProps = ComponentProps<'div'> & {
  title: string;
  description: string;
  iconName: IconName;
};

const items = [
  {
    title: 'Interplanetary Clearance',
    description:
      'Obtain the necessary permits and permissions for your journey to Mars from the Space Exploration Authority.',
    iconName: 'air-traffic-control',
  },
  {
    title: 'Equip with Futuristic Gear',
    description:
      'Gear up with state-of-the-art exosuits with advanced features to survive the harsh Martian environment.',
    iconName: 'gear-fine',
  },
  {
    title: 'Engage Advanced Spacecraft',
    description:
      'Board a spacecraft equipped with AI navigation systems, ensuring a smooth voyage across the cosmic void.',
    iconName: 'cpu',
  },
];

const Item = memo(function ({
  className,
  title,
  description,
  iconName,
  ...moreProps
}: ItemProps) {
  return (
    <div
      className={cx(
        'flex flex-1 flex-col items-center gap-y-[30px] py-[30px] text-primary',
        className,
      )}
      {...moreProps}
    >
      <BaseIcon name={iconName} size={55} weight='light' />
      <h5 className='text-2xl'>{title}</h5>
      <p className='w-[324px] text-center text-base leading-7 text-white'>
        {description}
      </p>
    </div>
  );
});

export const HomeGettingStartedSection = memo(function ({
  className,
  ...moreProps
}: ComponentProps<typeof motion.section>) {
  return (
    <motion.section
      className={cx(
        'relative flex flex-col items-center gap-y-[130px]',
        className,
      )}
      {...moreProps}
    >
      <Image
        src={featuredDestinationsBg}
        alt='footer trail'
        width={1647}
        height={1248}
        className='absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180 object-none object-top'
      />
      <div className='relative z-10'>
        <BaseHeaderTitle
          className='relative z-10'
          title='Plan Your Trip'
          subtitle='Getting Started'
        />
        <Image
          src={gettingStartedPng}
          alt='getting started icon'
          width={149}
          height={150}
          quality={100}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='relative z-10 mx-auto flex w-full max-w-6xl items-center rounded-sm border border-white-border'>
        {items.map(({ title, description, iconName }, index) => (
          <Item
            key={`gsitem-${index}`}
            className={cx(
              index < items.length - 1 && 'border-r border-white-border',
            )}
            title={title}
            description={description}
            iconName={iconName as IconName}
          />
        ))}
      </div>
    </motion.section>
  );
});
