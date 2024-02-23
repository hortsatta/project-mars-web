import { memo, useMemo } from 'react';
import cx from 'classix';

import { headerNavItems } from '#/nav-menu';
import { generateWeather } from '#/helpers/randomize.helper';
import { BaseIconButton } from '../base/base-icon-button.component';
import { CoreNav } from './core-nav.components';
import { CoreWeatherCard } from './core-weather-card.component';

import type { ComponentProps } from 'react';

export const CoreHeader = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'header'>) {
  const weather = useMemo(() => generateWeather(), []);

  return (
    <header
      className={cx(
        'relative z-10 flex min-h-[90px] items-center justify-between px-10',
        className,
      )}
      {...moreProps}
    >
      <CoreWeatherCard className='min-w-[118px]' weather={weather} />
      <CoreNav items={headerNavItems} />
      <div className='flex min-w-[118px] items-center justify-end'>
        <BaseIconButton name='magnifying-glass' />
        {/* TODO onclick and modal */}
      </div>
    </header>
  );
});
