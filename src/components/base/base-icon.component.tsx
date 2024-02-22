'use client';

import { forwardRef, memo, useMemo } from 'react';
import {
  CloudFog,
  CloudSnow,
  MagnifyingGlass,
  SunHorizon,
  Wind,
} from '@phosphor-icons/react';

import type { Icon, IconProps } from '@phosphor-icons/react';
import type { IconName } from '#/models/base.model';

type Props = IconProps & {
  name: IconName;
};

export const BaseIcon = memo(
  forwardRef<SVGSVGElement, Props>(function ({ name, ...moreProps }, ref) {
    const PIcon: Icon | null = useMemo(() => {
      switch (name) {
        case 'cloud-fog':
          return CloudFog;
        case 'cloud-snow':
          return CloudSnow;
        case 'magnifying-glass':
          return MagnifyingGlass;
        case 'sun-horizon':
          return SunHorizon;
        case 'wind':
          return Wind;
      }
    }, [name]);

    if (!PIcon) {
      return null;
    }

    return <PIcon ref={ref} {...moreProps} />;
  }),
);
