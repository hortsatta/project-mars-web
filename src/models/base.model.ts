import type { ComponentProps, JSXElementConstructor } from 'react';

export type Enum = Record<string | number, string | number>;

export type IconName =
  | 'air-traffic-control'
  | 'caret-circle-down'
  | 'cloud-fog'
  | 'cloud-snow'
  | 'globe-simple'
  | 'magnifying-glass'
  | 'person'
  | 'sun-horizon'
  | 'wind';

export type ButtonVariant = 'link' | 'border';

export type ButtonSize = 'base' | 'sm';

export type Option = {
  label: string | number;
  value: string | number;
};

export type FormProps<
  TProps extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  TData,
  TDataReturn,
> = Omit<ComponentProps<TProps>, 'onSubmit'> & {
  onSubmit: (data: TData) => TDataReturn;
  formData?: TData;
  loading?: boolean;
  isDone?: boolean;
  onDone?: (isDone: boolean) => void;
};
