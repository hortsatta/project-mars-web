import { memo } from 'react';
import Image from 'next/image';
import cx from 'classix';

import { MarsDestination } from '#/models/mars.model';
import { BaseHeaderTitle } from '#/components/base/base-header-title.component';
import { HomeFeaturedDestinationList } from './home-featured-destination-list.component';

import type { ComponentProps } from 'react';

import featuredDestinationsBg from '#/assets/images/home-featured-destinations-bg.png';

const featuredDestinations = [
  MarsDestination['Olympus Mons'],
  MarsDestination['Face on Mars'],
  MarsDestination['Valles Marineris'],
];

export const HomeFeaturedDestinationsSection = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'section'>) {
  return (
    <section className={cx('relative', className)} {...moreProps}>
      <Image
        src={featuredDestinationsBg}
        alt='trail'
        width={1647}
        height={1248}
        className='absolute -top-2.5 left-1/2 -translate-x-1/2 object-none object-top'
      />
      <div className='mx-auto w-full max-w-6xl'>
        <BaseHeaderTitle
          className='mb-[100px]'
          title='Destinations'
          subtitle='Featured'
        />
        <HomeFeaturedDestinationList destinations={featuredDestinations} />
      </div>
    </section>
  );
});
