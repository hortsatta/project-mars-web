import { MarsLocation, WeatherType } from '#/models/base.model';

export function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export function generateWeather() {
  const temp = getRandomInt(-225, 70);
  const type = getRandomInt(0, WeatherType.__LENGTH) as WeatherType;
  const location = getRandomInt(0, MarsLocation.__LENGTH) as MarsLocation;

  return {
    temp,
    type,
    location,
  };
}
