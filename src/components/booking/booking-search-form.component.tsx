'use client';

import { memo, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import {
  MarsLocation,
  Spaceport,
  destinationOptions,
  spaceportOptions,
} from '#/models/mars.model';
import { passengerCountOptions } from '#/models/booking.model';
import { BaseButton } from '../base/base-button.component';
import { BookingControlledSelect } from './booking-select.component';
import { BookingDateRangePicker } from './booking-date-range-picker.component';

import type { FormProps } from '#/models/base.model';
import type { SearchBookingFormData } from '#/models/booking.model';

type Props = Omit<
  FormProps<'div', SearchBookingFormData, Promise<null>>,
  'onSubmit'
> & {
  onSubmit: (data: SearchBookingFormData) => Promise<null>;
};

type FormData = Omit<SearchBookingFormData, 'from' | 'to'> & {
  dates: {
    from: Date;
    to: Date;
  };
};

const SELECT_BUTTON_CLASSNAME = 'flex-1 border-r border-white-border';

const today = new Date();

const schema = z
  .object({
    spaceport: z
      .number({
        required_error: 'Spaceport is invalid',
        invalid_type_error: 'Spaceport is invalid',
      })
      .int()
      .min(0)
      .max(Spaceport.__LENGTH),
    destination: z
      .number({
        required_error: 'Destination is invalid',
        invalid_type_error: 'Destination is invalid',
      })
      .int()
      .min(0)
      .max(MarsLocation.__LENGTH),
    dates: z.object({
      from: z
        .date({ required_error: 'Date is invalid' })
        .min(new Date(), 'Date exceeds minimum')
        .max(
          new Date(today.setMonth(today.getMonth() + 6)),
          'Date exceeds maximum',
        ),
      to: z
        .date({ required_error: 'Date is invalid' })
        .min(new Date(), 'Date exceeds minimum')
        .max(
          new Date(today.setMonth(today.getMonth() + 6)),
          'Date exceeds maximum',
        ),
    }),
    passengerCount: z
      .number({
        required_error: 'Passenger is invalid',
        invalid_type_error: 'Passenger is invalid',
      })
      .int()
      .gt(0),
  })
  .superRefine((data, ctx) => {
    if (!data.dates.from || !data.dates.to) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select dates',
        path: ['dates'],
      });
    }

    if (data.dates.from.valueOf() > data.dates.to.valueOf()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'From date is more than end date',
        path: ['dates'],
      });
    }
  });

const defaultValues: Partial<FormData> = {
  spaceport: Spaceport.Asia,
  destination: MarsLocation['Ghost Dunes'],
  dates: undefined,
  passengerCount: 1,
};

export const BookingSearchForm = memo(function ({
  loading: formLoading,
  isDone,
  onDone,
  onSubmit,
  ...moreProps
}: Props) {
  const { control, handleSubmit } = useForm<FormData>({
    shouldFocusError: false,
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const submitForm = useCallback(
    async (data: FormData) => {
      console.log('data', data);
    },
    [onSubmit, onDone],
  );

  return (
    <div {...moreProps}>
      <form
        className='flex rounded-2sm border border-white-border'
        onSubmit={handleSubmit(submitForm)}
      >
        <BookingControlledSelect
          className={SELECT_BUTTON_CLASSNAME}
          name='spaceport'
          label='Spaceport'
          control={control}
          options={spaceportOptions}
          optionIconName='air-traffic-control'
        />
        <BookingControlledSelect
          className={SELECT_BUTTON_CLASSNAME}
          name='destination'
          label='Destination'
          control={control}
          options={destinationOptions}
          optionIconName='globe-simple'
        />
        <Controller
          control={control}
          name='dates'
          render={({ field: { value, onChange } }) => (
            <BookingDateRangePicker
              className={SELECT_BUTTON_CLASSNAME}
              label='Dates'
              value={value}
              onChange={onChange}
            />
          )}
        />
        <BookingControlledSelect
          className={SELECT_BUTTON_CLASSNAME}
          name='passengerCount'
          label='Passengers'
          control={control}
          options={passengerCountOptions}
          optionIconName='person'
        />
        <BaseButton className='basis-[132px]' type='submit'>
          Search
        </BaseButton>
      </form>
    </div>
  );
});
