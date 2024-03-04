import { BaseHeaderTitle } from '#/components/base/base-header-title.component';
import { BaseIcon } from '#/components/base/base-icon.component';
import { BaseScene } from '#/components/base/base-scene.component';

export default function TechnologyPage() {
  return (
    <BaseScene>
      <BaseHeaderTitle title='Technology' />
      <div className='flex justify-center pt-20'>
        <BaseIcon name='coffee' size={85} weight='light' />
      </div>
    </BaseScene>
  );
}
