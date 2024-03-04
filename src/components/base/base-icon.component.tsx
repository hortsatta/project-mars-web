'use client';

import { forwardRef, memo, useMemo } from 'react';
import {
  AirTrafficControl,
  ArrowFatUp,
  CaretCircleDown,
  Circuitry,
  CloudFog,
  CloudSnow,
  Cpu,
  GearFine,
  GlobeSimple,
  MagnifyingGlass,
  Person,
  Planet,
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
        case 'air-traffic-control':
          return AirTrafficControl;
        case 'arrow-fat-up':
          return ArrowFatUp;
        case 'caret-circle-down':
          return CaretCircleDown;
        case 'circuitry':
          return Circuitry;
        case 'cloud-fog':
          return CloudFog;
        case 'cloud-snow':
          return CloudSnow;
        case 'cpu':
          return Cpu;
        case 'gear-fine':
          return GearFine;
        case 'globe-simple':
          return GlobeSimple;
        case 'magnifying-glass':
          return MagnifyingGlass;
        case 'person':
          return Person;
        case 'planet':
          return Planet;
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
