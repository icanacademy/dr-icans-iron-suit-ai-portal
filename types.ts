import type { ReactElement } from 'react';

export interface Tool {
  name: string;
  icon: ReactElement;
  url: string;
}

export interface Category {
  title: string;
  tools: Tool[];
}

export type Language = 'en' | 'ko';
