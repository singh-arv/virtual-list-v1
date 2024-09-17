import { useEffect, useState, useRef, RefObject } from "react";

export default function useIntersectionObserver(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      {
        root: document.getElementById("list"),
        rootMargin: "0px",
      }
    );
  }, []);

  useEffect(() => {
    console.log("ue 1");
    if (!ref.current) {
      return;
    }
    console.log("ue 2");
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
