'use client';

import { forwardRef, memo, useCallback, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import cx from 'classix';

import { useController } from 'react-hook-form';
import { BaseIcon } from '../base/base-icon.component';
import { BaseDateRangePicker } from '../base/base-date-range-picker.component';
import { BaseModal } from '../base/base-modal.component';

import type { ComponentProps } from 'react';
import type { UseControllerProps } from 'react-hook-form';

type Props = Omit<ComponentProps<'button'>, 'value' | 'onChange'> & {
  name?: string;
  value?: { from: Date; to: Date };
  label?: string;
  errorMessage?: string;
  onChange?: (value?: any) => void;
};

export const BookingDateRangePicker = memo(
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
      disabled,
      onChange,
      ...moreProps
    },
    ref,
  ) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const transformedValue = useMemo(() => {
      const { from, to } = value || {};

      if (!value || (!from && !to)) {
        return '—';
      }

      const fromDateText = !from ? '' : dayjs(from).format('MM.DD');
      const toDateText = !to ? '' : dayjs(to).format('MM.DD');

      return `${fromDateText}-${toDateText}`;
    }, [value]);

    const toggleModal = useCallback(
      (open: boolean) => () => {
        setModalOpen(open);
      },
      [],
    );

    const handleChange = useCallback(
      (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;

        setStartDate(start);
        setEndDate(end);
        onChange && onChange({ from: start, to: end });

        if (start && end) {
          toggleModal(false)();
        }
      },
      [onChange],
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
            {transformedValue}
          </span>
        </button>
        <BaseModal
          className='flex flex-col items-start !p-0'
          open={modalOpen}
          title='Select Dates'
          onClose={toggleModal(false)}
        >
          <BaseDateRangePicker
            startDate={startDate}
            endDate={endDate}
            onChange={handleChange}
          />
        </BaseModal>
      </>
    );
  }),
);

export function BookingControlledDateRangePicker(
  props: Props & UseControllerProps<any>,
) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <BookingDateRangePicker
      {...props}
      {...field}
      errorMessage={error?.message}
    />
  );
}
