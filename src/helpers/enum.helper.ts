import type { Enum } from '#/models/base.model';

export function enumValues<T extends Enum>(
  enumData: T,
  filter?: 'string',
): string[];

export function enumValues<T extends Enum>(
  enumData: T,
  filter?: 'number',
): number[];

export function enumValues<T extends Enum>(
  enumData: T,
  filter?: undefined,
): (string | number)[];

export function enumValues<T extends Enum>(
  enumData: T,
  filter?: 'string' | 'number',
): any {
  return Object.values(enumData).filter((x) => !filter || typeof x === filter);
}
