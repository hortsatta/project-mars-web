import { enumValues } from '#/helpers/enum.helper';

export enum Spaceport {
  Asia = 0,
  Africa,
  'North America',
  'South America',
  Antarctica,
  Europe,
  __LENGTH,
}

export enum MarsDestination {
  'Aeolis Mons' = 0,
  'Face on Mars',
  'Ghost Dunes',
  'Olympus Mons',
  'Tharsis Volcanoes',
  'Valles Marineris',
  __LENGTH,
}

export enum MarsRegion {
  'Arcadia' = 0,
  'Cydonia',
  'Gale Crater',
  'Tharsis',
  __LENGTH,
}

export enum WeatherType {
  Foggy = 0,
  Snowy,
  Sunny,
  Windy,
  __LENGTH,
}

export type MarsPackage = {
  destination: MarsDestination;
  region: MarsRegion;
  startingPrice: number;
};

export type Weather = {
  temp: number;
  type: WeatherType;
  destination: MarsDestination;
};

export const spaceportOptions = enumValues(Spaceport, 'string')
  .slice(0, -1)
  .map((value, index) => ({
    label: value,
    value: index,
  }));

export const destinationOptions = enumValues(MarsDestination, 'string')
  .slice(0, -1)
  .map((value, index) => ({
    label: value,
    value: index,
  }));

export const regionOptions = enumValues(MarsRegion, 'string')
  .slice(0, -1)
  .map((value, index) => ({
    label: value,
    value: index,
  }));

export const marsPackages: MarsPackage[] = [
  {
    destination: MarsDestination['Aeolis Mons'],
    region: MarsRegion['Gale Crater'],
    startingPrice: 18000,
  },
  {
    destination: MarsDestination['Face on Mars'],
    region: MarsRegion['Cydonia'],
    startingPrice: 16000,
  },
  {
    destination: MarsDestination['Ghost Dunes'],
    region: MarsRegion['Arcadia'],
    startingPrice: 16000,
  },
  {
    destination: MarsDestination['Olympus Mons'],
    region: MarsRegion['Tharsis'],
    startingPrice: 25000,
  },
  {
    destination: MarsDestination['Tharsis Volcanoes'],
    region: MarsRegion['Tharsis'],
    startingPrice: 25000,
  },
  {
    destination: MarsDestination['Valles Marineris'],
    region: MarsRegion['Tharsis'],
    startingPrice: 20000,
  },
];
