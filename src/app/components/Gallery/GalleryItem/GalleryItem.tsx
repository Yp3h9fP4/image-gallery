"use client";

import { PexelsPhoto } from "@/lib/pexels/types";
import { ResponsiveImage } from "../../ResponsiveImage/ResponsiveImage";

import { ImageOverlay } from "../../ImageOverlay/ImageOverlay";
import { useFavorites } from "@/hooks/useFavorites";

import { Button } from "@/components/ui/Button/Button";
import { Text } from "@/components/ui/Text/Text";
import { Separator } from "@/components/ui/Separator/Separator";
import { Space } from "@/components/ui/Space/Space";
import styles from "./GalleryItem.module.css";

interface GalleryItemProps {
  image: PexelsPhoto;
}

function GalleryItem({ image }: GalleryItemProps) {
  const { isFavorite, toggleFavorite } = useFavorites(image.id);

  return (
    <div className={`${styles.item} group`}>
      <ResponsiveImage
        src={image.src}
        alt={image.alt}
        avg_color={image.avg_color}
        loading="lazy"
      />
      <ImageOverlay className="p-4">
        {image.alt && (
          <>
            <Space mb={1} asChild>
              <Text align="center" weight="bold" size="md" truncated>
                {image.alt}
              </Text>
            </Space>
            <Space mb={1} asChild>
              <Separator />
            </Space>
          </>
        )}

        {image.photographer && (
          <Space mb={4} asChild>
            <Text fontStyle="italic" weight="medium">
              {image.photographer}
            </Text>
          </Space>
        )}

        <Button onClick={toggleFavorite}>
          {isFavorite ? "Unfavorite" : "Favorite"}
        </Button>
      </ImageOverlay>
    </div>
  );
}

export { GalleryItem };
