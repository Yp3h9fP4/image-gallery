"use client";

import { useEffect } from "react";
import { Grid } from "@/components/ui/Grid/Grid";
import { useInView } from "@/hooks/useInView";
import { usePexelsPhotos } from "@/hooks/usePexelsPhotos";
import { GalleryItem } from "./GalleryItem/GalleryItem";

function Gallery() {
  const { images, loadMore, hasMore, isLoading, error } = usePexelsPhotos();
  const { elementRef, isInView } = useInView();

  useEffect(() => {
    if (isInView && hasMore && !isLoading) {
      loadMore();
    }
  }, [isInView, hasMore, isLoading, loadMore]);

  return (
    <>
      <Grid cols={1} sm={2} md={3} lg={4} gap="lg">
        {images?.map((image, index) => (
          <GalleryItem
            key={`${image.id}-duplicate-fix-${index}`}
            image={image}
          />
        ))}
      </Grid>

      {!isLoading && images.length > 0 && hasMore && (
        <div ref={elementRef}>Load More</div>
      )}

      {error && <div>Error loading images: {error.message}</div>}

      {!hasMore && !isLoading && images.length > 0 && (
        <div>No more images to load</div>
      )}
    </>
  );
}

export default Gallery;
