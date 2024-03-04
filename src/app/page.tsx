'use client';

import { useBookingSearch } from '#/hooks/use-booking-search';
import { BaseScene } from '#/components/base/base-scene.component';
import { BookingSearchForm } from '#/components/booking/booking-search-form.component';
import { HomeHeroSection } from '#/components/home/home-hero-section.component';
import { HomeFeaturedDestinationsSection } from '#/components/home/home-featured-destinations-section.component';
import { HomeMarsInfoSection } from '#/components/home/home-mars-info-section.component';
import { HomeExosuitUpgradeSection } from '#/components/home/home-exosuit-upgrade-section.component';
import { HomeGettingStartedSection } from '#/components/home/home-getting-started-section.component';

const wrapperProps = {
  className: '!max-w-full !px-0',
};

const SECTION_CLASSNAME = 'mx-auto mb-[240px] max-w-6xl relative z-10';

export default function HomePage() {
  const { handleSubmit: handleBookingSearchSubmit } = useBookingSearch();

  return (
    <div className='flex flex-1 flex-col'>
      <section className='absolute left-0 top-0 w-full overflow-hidden'>
        <div className='relative left-1/2 flex w-fhd -translate-x-1/2 justify-center'>
          <HomeHeroSection />
        </div>
      </section>
      <BaseScene
        className='relative z-10 flex-1 pt-[690px]'
        wrapperProps={wrapperProps}
      >
        <section className='mx-auto max-w-6xl pb-[204px]'>
          <BookingSearchForm onSubmit={handleBookingSearchSubmit} />
        </section>
        <HomeFeaturedDestinationsSection className='mb-[240px]' />
        <HomeMarsInfoSection className={SECTION_CLASSNAME} />
        <HomeExosuitUpgradeSection className={SECTION_CLASSNAME} />
        <HomeGettingStartedSection className='mb-10 pb-[600px]' />
      </BaseScene>
    </div>
  );
}
