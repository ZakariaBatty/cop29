import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function getFullUrl(path: string): string {
   // Check if we're in development or production
   const basePath = process.env.NODE_ENV === 'production' ? '/cop29' : '';
   return `${basePath}${path}`;
}
