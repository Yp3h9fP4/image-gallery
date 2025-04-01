import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

type SrcSetConfig = {
  tiny?: string;
  small?: string;
  medium?: string;
  large?: string;
  large2x?: string;
};

export function constructSrcSet(src: SrcSetConfig): string {
  return [
    src.tiny && `${src.tiny} 280w`,
    src.small && `${src.small} 400w`,
    src.medium && `${src.medium} 800w`,
    src.large && `${src.large} 940w`,
    src.large2x && `${src.large2x} 1880w`,
  ]
    .filter(Boolean)
    .join(", ");
}
