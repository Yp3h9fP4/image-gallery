import { useCallback, useEffect, useRef, useState } from "react";

export function useInView(
  options: IntersectionObserverInit = { rootMargin: "100px", threshold: 0 }
) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return { elementRef: ref, isInView };
}
