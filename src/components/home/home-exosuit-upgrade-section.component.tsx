import { memo } from 'react';
import Image from 'next/image';
import cx from 'classix';

import { BaseHeaderTitle } from '../base/base-header-title.component';
import { BaseIcon } from '../base/base-icon.component';
import { BaseLink } from '../base/base-link.component';

import type { ComponentProps } from 'react';

import exosuitUpgradePng from '#/assets/images/exosuit-upgrade.png';

const description = `The pinnacle of exosuit innovation, the Sigma emerges as the ultimate upgrade, boasting a luxurious gold coating alongside an array of groundbreaking features that redefine the possibilities of enhanced mobility, protection, and connectivity.`;

const upgradePrice = 20000;

const PROPERTY_WRAPPER_CLASSNAME =
  'flex flex-col items-center border-r border-white-border px-6 pb-5 pt-2.5';
const PROPERTY_VALUE_CLASSNAME = 'text-[64px] font-bold leading-[1.15]';
const PROPERTY_LABEL_CLASSNAME = 'font-display uppercase tracking-normal';

export const HomeExosuitUpgradeSection = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'section'>) {
  return (
    <section
      className={cx('flex items-center justify-between', className)}
      {...moreProps}
    >
      <div>
        <Image
          src={exosuitUpgradePng}
          alt='exosuit upgrade'
          width={739}
          height={588}
          quality={100}
        />
      </div>
      <div className='max-w-[455px]'>
        <div className='mb-[25px] flex items-center justify-between border-b-2 border-white-border pb-7'>
          <BaseHeaderTitle
            className='!items-start'
            title='Exosuit Sigma'
            subtitle='Enhanced Gear'
          />
          <BaseIcon
            name='circuitry'
            weight='light'
            size={60}
            className='text-white/60'
          />
        </div>
        <p className='mb-[75px] leading-8'>{description}</p>
        <div className='rounded-sm border border-white-border'>
          <div className='flex items-center border-b border-white-border'>
            <div className={PROPERTY_WRAPPER_CLASSNAME}>
              <span className={PROPERTY_VALUE_CLASSNAME}>40%</span>
              <span className={PROPERTY_LABEL_CLASSNAME}>Lighter</span>
            </div>
            <div className={PROPERTY_WRAPPER_CLASSNAME}>
              <span className={PROPERTY_VALUE_CLASSNAME}>X2</span>
              <span className={PROPERTY_LABEL_CLASSNAME}>Oxygen</span>
            </div>
            <div
              className={cx(PROPERTY_WRAPPER_CLASSNAME, 'flex-1 !border-r-0')}
            >
              <span className={PROPERTY_VALUE_CLASSNAME}>HUD</span>
              <span className={PROPERTY_LABEL_CLASSNAME}>Controls</span>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex h-14 w-[152.63px] items-center justify-center bg-white px-4 text-[28px] font-bold tracking-[1px] text-primary'>
              ${upgradePrice}
            </div>
            <BaseLink href='/' className='w-full flex-1 py-3'>
              Upgrade
            </BaseLink>
          </div>
        </div>
      </div>
    </section>
  );
});
