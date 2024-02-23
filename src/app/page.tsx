import { BaseScene } from '#/components/base/base-scene.component';
import { HomeHeroSection } from '#/components/home/home-hero-section.component';

export default function HomePage() {
  return (
    <div className='flex flex-1 flex-col'>
      <section className='absolute left-0 top-0 w-full overflow-hidden'>
        <div className='w-fhd relative left-1/2 flex -translate-x-1/2 justify-center'>
          <HomeHeroSection />
        </div>
      </section>
      <BaseScene className='relative z-10 min-h-[4000px] flex-1'></BaseScene>
    </div>
  );
}
