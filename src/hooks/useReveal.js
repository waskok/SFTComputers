import { useEffect, useRef, useState } from "react";

/**
 * Odsłania element (fade-in-up) gdy wejdzie w viewport podczas scrollowania.
 * Zwraca ref do podczepienia pod element oraz flagę widoczności.
 */
export function useReveal({ threshold = 0.15, rootMargin = "0px 0px -80px 0px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
