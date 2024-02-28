'use client';

import { memo, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import cx from 'classix';

import type { ComponentProps } from 'react';
import type { ReactDatePickerProps } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

type Props = Omit<ComponentProps<'div'>, 'onChange'> & {
  onChange: ReactDatePickerProps<true>['onChange'];
  selected?: Date | null;
  startDate?: Date | null;
  endDate?: Date | null;
  datePickerProps?: ReactDatePickerProps<true>;
};

export const BaseDateRangePicker = memo(function ({
  className,
  selected,
  startDate,
  endDate,
  onChange,
  datePickerProps,
  ...moreProps
}: Props) {
  const weekDayClassName = useCallback(
    () => 'uppercase text-md font-body flex-1 !text-white',
    [],
  );

  const dayClassName = useCallback(
    () => 'font-body text-base flex-1 !text-white',
    [],
  );

  return (
    <div className={cx('flex w-full', className)} {...moreProps}>
      <DatePicker
        calendarClassName='!rounded-none !border-none w-full min-h-[280px] !bg-white/10 !border-white-border'
        weekDayClassName={weekDayClassName}
        dayClassName={dayClassName}
        selected={selected}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        {...datePickerProps}
      />
    </div>
  );
});
