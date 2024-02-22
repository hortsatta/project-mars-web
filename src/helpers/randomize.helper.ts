import { randomInt } from 'crypto';
import { MarsLocation, WeatherType } from '#/models/base.model';

export function generateWeather() {
  const temp = randomInt(-225, 70);
  const type = randomInt(0, WeatherType.__LENGTH) as WeatherType;
  const location = randomInt(0, MarsLocation.__LENGTH) as MarsLocation;

  return {
    temp,
    type,
    location,
  };
}
