import { memo, useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';
import cx from 'classix';

import {
  MarsDestination,
  destinationOptions,
  marsPackages,
  regionOptions,
} from '#/models/mars.model';

import type { ComponentProps } from 'react';

import featEmblemFaceOnMars from '#/assets/images/feat-emblem-face-on-mars.png';
import featEmblemOlympusMons from '#/assets/images/feat-emblem-olympus-mons.png';
import featEmblemVallesMarineris from '#/assets/images/feat-emblem-valles-marineris.png';
import featPosterFaceOnMars from '#/assets/images/feat-poster-face-on-mars.png';
import featPosterOlympusMons from '#/assets/images/feat-poster-olympus-mons.png';
import featPosterVallesMarineris from '#/assets/images/feat-poster-valles-marineris.png';
import Link from 'next/link';

type Props = ComponentProps<'article'> & {
  destination: MarsDestination;
};

const featAssets: {
  [key: number]: { emblem: StaticImageData; poster: StaticImageData };
} = {
  [MarsDestination['Face on Mars']]: {
    emblem: featEmblemFaceOnMars,
    poster: featPosterFaceOnMars,
  },
  [MarsDestination['Olympus Mons']]: {
    emblem: featEmblemOlympusMons,
    poster: featPosterOlympusMons,
  },
  [MarsDestination['Valles Marineris']]: {
    emblem: featEmblemVallesMarineris,
    poster: featPosterVallesMarineris,
  },
};

export const MarsFeaturedDestinationCard = memo(function ({
  className,
  destination,
  ...moreProps
}: Props) {
  const [marsDestinationName, regionName, startingPrice, emblemSrc, posterSrc] =
    useMemo(() => {
      const targetPackage = marsPackages.find(
        (mp) => mp.destination === destination,
      );

      if (!targetPackage) {
        return [] as any;
      }

      return [
        destinationOptions[targetPackage.destination].label,
        `${regionOptions[targetPackage.region].label} Region`,
        `$${targetPackage.startingPrice}`,
        featAssets[destination].emblem,
        featAssets[destination].poster,
      ];
    }, [destination]);

  return (
    <Link href='/' className='group/feat'>
      <article
        className={cx('relative inline-block rounded pt-9', className)}
        {...moreProps}
      >
        <div className='absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center'>
          <Image
            src={emblemSrc}
            alt={`${marsDestinationName} Emblem`}
            width={72}
            height={72}
            className='pb-7 transition-transform duration-500 group-hover/feat:translate-y-20'
          />
          <div className='flex flex-col items-center transition-transform duration-500 group-hover/feat:translate-y-24'>
            <h5 className='font-display text-sm font-normal'>{regionName}</h5>
            <h4 className='text-4xl'>{marsDestinationName}</h4>
          </div>
          <div
            className={cx(
              'absolute bottom-0 left-0 flex w-[100px] items-center justify-center rounded-bl rounded-br-none rounded-tr bg-white pb-[3px] pt-[1px] transition-all',
              'duration-500 group-hover/feat:w-full group-hover/feat:rounded-br group-hover/feat:rounded-tr-none',
            )}
          >
            <span className='text-2xl font-bold tracking-[1px] text-primary'>
              {startingPrice}
            </span>
          </div>
        </div>
        <div className='relative overflow-hidden rounded border-2 border-white transition-colors'>
          <div className='absolute left-0 top-0 h-full w-full bg-red-700/70 opacity-0 transition-opacity duration-500 group-hover/feat:opacity-100' />
          <Image
            src={posterSrc}
            alt={`${marsDestinationName} Poster`}
            width={300}
            height={381}
          />
        </div>
      </article>
    </Link>
  );
});
