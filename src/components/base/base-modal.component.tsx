import { Fragment, useCallback } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import cx from 'classix';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'> & {
  open: boolean;
  title?: string;
  onClose?: () => void;
};

export function BaseModal({
  className,
  title,
  open,
  children,
  onClose,
  ...moreProps
}: Props) {
  const handleClose = useCallback(() => {
    !!onClose && onClose();
  }, [onClose]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as='div' className='relative z-20' onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-backdrop/30' />
        </Transition.Child>
        {/* Content */}
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                className={cx(
                  'w-full max-w-md transform overflow-hidden rounded-lg bg-backdrop px-5 pb-5 text-left align-middle shadow-xl transition-all',
                  title ? 'pt-4' : 'pt-5',
                )}
              >
                {title && (
                  <Dialog.Title
                    as='h3'
                    className='mb-2.5 text-center font-display text-lg font-medium uppercase leading-6 tracking-normal'
                  >
                    {title}
                  </Dialog.Title>
                )}
                <div
                  className={cx(
                    'relative h-full min-h-[150px] w-full overflow-hidden rounded border border-white-border px-4 py-2.5',
                    className,
                  )}
                  {...moreProps}
                >
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
