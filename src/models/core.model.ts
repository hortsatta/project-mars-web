import type Link from 'next/link';
import type { ComponentProps } from 'react';

export type NavItem = ComponentProps<typeof Link> & {
  name: string;
  label?: string;
};
