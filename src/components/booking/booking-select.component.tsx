'use clients';

import { forwardRef, memo, useCallback, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import cx from 'classix';

import { BaseIcon } from '../base/base-icon.component';
import { BaseModal } from '../base/base-modal.component';

import type { ComponentProps } from 'react';
import type { UseControllerProps } from 'react-hook-form';
import type { IconName, Option } from '#/models/base.model';

type Props = Omit<ComponentProps<'button'>, 'onChange'> & {
  name?: string;
  value?: string | null;
  label?: string;
  errorMessage?: string;
  options?: Option[];
  optionIconName?: IconName;
  onChange?: (value?: Option['value']) => void;
};

export const BookingSelect = memo(
  forwardRef<HTMLButtonElement, Props>(function (
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      name,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id,
      className,
      value,
      label,
      errorMessage,
      options,
      optionIconName,
      disabled,
      onChange,
      ...moreProps
    },
    ref,
  ) {
    const [modalOpen, setModalOpen] = useState(false);

    const selectedOptionLabel = useMemo(() => {
      if (!options || !options.length) {
        return value;
      }

      return options.find((option) => option.value === value)?.label || '';
    }, [value, options]);

    const toggleModal = useCallback(
      (open: boolean) => () => {
        setModalOpen(open);
      },
      [],
    );

    const handleChange = useCallback(
      (value: Option['value']) => () => {
        toggleModal(false)();
        onChange && onChange(value);
      },
      [onChange, toggleModal],
    );

    return (
      <>
        <button
          ref={ref}
          className={cx(
            'group/select-button flex h-[90px] flex-col items-start justify-center gap-1.5 pl-4 pr-3 transition-colors hover:text-primary',
            className,
          )}
          type='button'
          onClick={toggleModal(true)}
          {...moreProps}
        >
          <div className='flex w-full items-center justify-between'>
            <span className='font-display text-[13px] uppercase tracking-normal'>
              {label}
            </span>
            <BaseIcon
              name='caret-circle-down'
              size={16}
              className='text-white/60 transition-colors group-hover/select-button:text-primary'
            />
          </div>
          <span className='text-2xl font-bold uppercase '>
            {selectedOptionLabel}
          </span>
        </button>
        <BaseModal
          className='flex flex-col items-start !py-1'
          open={modalOpen}
          title={label}
          onClose={toggleModal(false)}
        >
          {options?.map(({ label: optionLabel, value: optionValue }, index) => (
            <button
              key={`bso-${index}`}
              className={cx(
                'flex min-h-12 w-full items-center gap-2 border-b text-left uppercase tracking-wider transition-colors hover:text-primary',
                index < options.length - 1
                  ? 'border-white-border'
                  : 'border-transparent',
              )}
              type='button'
              onClick={handleChange(optionValue)}
            >
              {optionIconName && (
                <BaseIcon
                  name={optionIconName}
                  size={24}
                  className='opacity-60'
                />
              )}
              <span>{optionLabel}</span>
            </button>
          ))}
        </BaseModal>
      </>
    );
  }),
);

export function BookingControlledSelect(
  props: Props & UseControllerProps<any>,
) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return <BookingSelect {...props} {...field} errorMessage={error?.message} />;
}
