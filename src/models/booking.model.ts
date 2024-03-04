import type { MarsDestination, Spaceport } from './mars.model';

export type SearchBookingFormData = {
  spaceport: Spaceport;
  destination: MarsDestination;
  from: Date;
  to: Date;
  passengerCount: number;
};

export const passengerCountOptions = [
  { label: '1 Pax', value: 1 },
  { label: '2 Pax', value: 2 },
  { label: '3 Pax', value: 3 },
  { label: '4 Pax', value: 4 },
];
