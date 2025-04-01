import { fetchPexelsImages } from "@/lib/pexels/pexels-api";
import { PexelsPhoto, PexelsResponse } from "@/lib/pexels/types";
import { tryFetch } from "@/lib/try-fetch";
import { useCallback, useEffect, useState } from "react";

export function usePexelsPhotos(initialPage = 1, perPage = 15) {
  const [images, setImages] = useState<PexelsPhoto[]>([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setError(null);

    const [res, err] = await tryFetch<PexelsResponse>(() =>
      fetchPexelsImages(page, perPage)
    );
    if (err) {
      setError(err);
      setHasMore(false);
      setIsLoading(false);

      return;
    }

    if (res) {
      setImages((prevImages) => [...prevImages, ...res.photos]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(!!res.next_page && res.photos.length > 0);
    }

    setIsLoading(false);
  }, [page, perPage, isLoading, hasMore]);

  useEffect(() => {
    if (images.length === 0 && hasMore && !isLoading) {
      // Kick off first load
      loadMore();
    }
  }, [loadMore, images.length, hasMore, isLoading]);

  return { images, loadMore, hasMore, isLoading, error };
}
