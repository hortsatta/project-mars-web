import { useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}
