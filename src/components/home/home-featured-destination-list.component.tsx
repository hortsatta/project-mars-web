import { memo } from 'react';

import { MarsDestination } from '#/models/mars.model';
import { BaseLink } from '../base/base-link.component';
import { BaseIcon } from '../base/base-icon.component';
import { MarsFeaturedDestinationCard } from '../mars/mars-featured-destination-card.component';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'> & {
  destinations: MarsDestination[];
};

const PLACEHOLDER_CLASSNAME = 'h-full shrink-0 basis-[304px]';

const ViewAllLink = memo(function () {
  return (
    <BaseLink
      href='/destinations'
      className='mt-14 inline-flex h-[350px] flex-1 items-center justify-center gap-5 rounded-sm [text-orientation:upright] [writing-mode:vertical-rl]'
    >
      <BaseIcon name='arrow-fat-up' size={30} />
      <span className='text-2xl'>VIEW ALL</span>
    </BaseLink>
  );
});

export const HomeFeaturedDestinationList = memo(function ({
  destinations,
  ...moreProps
}: Props) {
  return (
    <div {...moreProps}>
      <div className='relative flex justify-between'>
        {destinations.map((destination) => (
          <MarsFeaturedDestinationCard
            key={`featd-${destination}`}
            className='relative z-10'
            destination={destination}
          />
        ))}
        <div className='absolute flex w-full items-center justify-center gap-4 opacity-0 transition-opacity duration-500 hover:opacity-100'>
          <div className={PLACEHOLDER_CLASSNAME} />
          <ViewAllLink />
          <div className={PLACEHOLDER_CLASSNAME} />
          <ViewAllLink />
          <div className={PLACEHOLDER_CLASSNAME} />
        </div>
      </div>
    </div>
  );
});
