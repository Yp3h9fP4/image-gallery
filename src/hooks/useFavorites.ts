import { useState, useEffect } from "react";

const FAVORITES_KEY = "favorite-images";

type Favorites = Record<string, boolean> | {};

let favoritesCache: Favorites | null = null;
let isInitialized = false;

function initializeCache() {
  if (typeof window === "undefined" || isInitialized) return;

  favoritesCache = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "{}");

  isInitialized = true;
}

export function useFavorites(id: string) {
  useEffect(() => {
    initializeCache();
  }, []);

  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = getFavorites();
    if (favorites !== undefined && Object.keys(favorites).length === 0) {
      return false;
    }
    // TODO: fix type issue
    // @ts-expect-error favorites[id] might be undefined
    return !!favorites[id];
  });

  const toggleFavorite = () => {
    const newStatus = !isFavorite;
    setIsFavorite(newStatus);
    setFavorite(id, newStatus);
  };

  return {
    isFavorite,
    toggleFavorite,
  };
}

function getFavorites(): Favorites {
  if (favoritesCache) return favoritesCache;

  favoritesCache = JSON.parse(
    localStorage.getItem(FAVORITES_KEY) || "{}"
  ) as Favorites;

  return favoritesCache;
}

function setFavorites(favorites: Favorites) {
  favoritesCache = favorites;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function setFavorite(id: string, status: boolean) {
  const favorites = getFavorites();

  // TODO: fix type issue
  // @ts-expect-error favorites[id] might be undefined
  favorites[id] = status;
  setFavorites(favorites);
}
