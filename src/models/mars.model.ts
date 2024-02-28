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

export enum MarsLocation {
  'Olympus Mons' = 0,
  'Tharsis Volcanoes',
  'Valles Marineris',
  'Aeolis Mons',
  'Ghost Dunes',
  __LENGTH,
}

export enum WeatherType {
  Foggy = 0,
  Snowy,
  Sunny,
  Windy,
  __LENGTH,
}

export type Weather = {
  temp: number;
  type: WeatherType;
  location: MarsLocation;
};

export const spaceportOptions = enumValues(Spaceport, 'string')
  .slice(0, -1)
  .map((value, index) => ({
    label: value,
    value: index,
  }));

export const destinationOptions = enumValues(MarsLocation, 'string')
  .slice(0, -1)
  .map((value, index) => ({
    label: value,
    value: index,
  }));
