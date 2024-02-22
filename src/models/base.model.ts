export type IconName =
  | 'cloud-fog'
  | 'cloud-snow'
  | 'magnifying-glass'
  | 'sun-horizon'
  | 'wind';

export enum WeatherType {
  Foggy = 0,
  Snowy,
  Sunny,
  Windy,
  __LENGTH,
}

export enum MarsLocation {
  'Olympus Mons',
  'Tharsis Volcanoes',
  'Valles Marineris',
  'Aeolis Mons',
  'Ghost Dunes',
  __LENGTH,
}

export type Weather = {
  temp: number;
  type: WeatherType;
  location: MarsLocation;
};

export type ButtonVariant = 'link' | 'border';

export type ButtonSize = 'base' | 'sm';
