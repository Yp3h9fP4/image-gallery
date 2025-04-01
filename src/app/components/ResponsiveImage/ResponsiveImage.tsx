"use client";

import styles from "./ResponsiveImage.module.css";
import { cn, constructSrcSet } from "@/lib/utils";

interface ResponsiveImageProps {
  src: {
    original: string;
    large2x?: string;
    large?: string;
    medium?: string;
    small?: string;
    portrait?: string;
    landscape?: string;
    tiny?: string;
  };
  alt: string;
  avg_color?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
}

function ResponsiveImage({
  src,
  alt,
  avg_color,
  className,
  width = 800,
  height = 600,
  loading = "lazy",
  objectFit = "cover",
  objectPosition,
}: ResponsiveImageProps) {
  return (
    <div
      className={cn(styles.imageContainer, className)}
      style={{
        backgroundColor: avg_color,
      }}
    >
      <img
        className={styles.image}
        src={src.original}
        srcSet={constructSrcSet(src)}
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               (max-width: 1440px) 33vw,
               25vw"
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        style={{
          objectFit,
          objectPosition,
        }}
      />
    </div>
  );
}

export { ResponsiveImage };
