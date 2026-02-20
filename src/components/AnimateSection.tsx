"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Root margin: when element is this far from viewport, trigger. Default 80px. */
  rootMargin?: string;
  /** Run animation only once (default) or every time element enters view */
  once?: boolean;
};

export function AnimateSection({
  children,
  className = "",
  rootMargin = "0px 0px -80px 0px",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, once]);

  return (
    <div
      ref={ref}
      data-visible={isVisible || undefined}
      className={`${isVisible ? "animate-fade-slide-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
