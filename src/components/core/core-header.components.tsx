import { memo, useCallback, useMemo } from 'react';
import cx from 'classix';

import { generateWeather } from '#/helpers/randomize.helper';
import { WeatherType } from '#/models/base.model';
import { BaseIconButton } from '../base/base-icon-button.component';
import { CoreNav } from './core-nav.components';
import { CoreWeatherCard } from './core-weather-card.component';

import type { ComponentProps } from 'react';
import type { Weather } from '#/models/base.model';

const navItems = [
  {
    href: '/destinations',
    name: 'destinations',
    label: 'Destinations',
  },
  {
    href: '/technology',
    name: 'technology',
    label: 'Technology',
  },
  {
    href: '/',
    name: 'home',
  },
  {
    href: '/blast-offs',
    name: 'blast-offs',
    label: 'Blast Offs',
  },
  {
    href: '/expeditions',
    name: 'expeditions',
    label: 'My Expeditions',
  },
];

export const CoreHeader = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'header'>) {
  const weather = useMemo(() => generateWeather(), []);

  return (
    <header
      className={cx(
        'flex min-h-[90px] items-center justify-between px-10',
        className,
      )}
      {...moreProps}
    >
      <CoreWeatherCard className='min-w-[100px]' weather={weather} />
      <CoreNav items={navItems} />
      <div className='flex min-w-[100px] items-center justify-end'>
        <BaseIconButton name='magnifying-glass' />
        {/* TODO onclick and modal */}
      </div>
    </header>
  );
});
