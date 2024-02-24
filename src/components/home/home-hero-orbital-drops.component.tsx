'use client';

import { memo, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useInterval } from 'usehooks-ts';
import { nanoid } from 'nanoid';

import { getRandomInt } from '#/helpers/randomize.helper';

import type { ComponentProps } from 'react';

import homeHeroOrbitalDropPng from '#/assets/images/home-hero-orbital-drop.png';
import homeHeroOrbitalDropLensFlarePng from '#/assets/images/home-hero-orbital-drop-lens-flare.png';

const MAX_LENGTH = 2;

const OrbitalDrop = memo(function () {
  const mainWrapperStyle = useMemo(
    () => ({
      left: `${getRandomInt(0, 80)}%`,
    }),
    [],
  );

  const subWrapperStyle = useMemo(() => {
    const target = 1 - +`0.${getRandomInt(0, 6)}`;

    return {
      transform: `scale(${target})`,
      opacity: target + 0.2,
    };
  }, []);

  return (
    <div
      style={mainWrapperStyle}
      className='animate-drop absolute top-0 w-[318px]'
    >
      <div style={subWrapperStyle}>
        <Image
          src={homeHeroOrbitalDropPng}
          alt='home hero orbital drop'
          width={318}
          height={278}
          quality={100}
          loading='eager'
          priority
        />
        <Image
          src={homeHeroOrbitalDropLensFlarePng}
          alt='home hero orbital drop lens flare'
          width={318}
          height={278}
          quality={100}
          loading='eager'
          className='animate-blink absolute left-0 top-0'
          priority
        />
      </div>
    </div>
  );
});

export const HomeHeroOrbitalDrops = memo(function (
  props: ComponentProps<'div'>,
) {
  const [ready, setReady] = useState(false);
  const [list, setList] = useState([{ id: `od-${nanoid()}` }]);

  useInterval(() => {
    setList((prev) => {
      const drop = { id: `od-${nanoid()}` };
      const list = [...prev, drop];
      const excess = list.length - MAX_LENGTH;
      return excess > 0 ? list.slice(excess) : list;
    });
  }, 10000);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return false;
  }

  return (
    <div {...props}>
      {list.map(({ id }) => (
        <OrbitalDrop key={id} />
      ))}
    </div>
  );
});
