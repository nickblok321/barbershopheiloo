"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const REVIEWS = [
  {
    text: "Altijd strak knippen, fijne sfeer. Ga hier al jaren.",
    name: "Google review",
  },
  {
    text: "Beste barbier in de buurt. Mijn baard is nog nooit zo goed verzorgd.",
    name: "Google review",
  },
  {
    text: "Netjes gedaan, rustig tempo. Echt een aanrader.",
    name: "Thomas",
  },
  {
    text: "Prettige gesprekken en een professionele knipbeurt. Blijf terugkomen.",
    name: "Google review",
  },
  {
    text: "Geen haast, oog voor detail. Zo hoort het.",
    name: "Ruben",
  },
  {
    text: "Rustige ruimte en altijd tevreden met het resultaat.",
    name: "Google review",
  },
] as const;

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
  }, [mounted]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const card = el.querySelector(`[data-index="${index}"]`) as HTMLElement;
      if (card) {
        const containerRect = el.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const left = el.scrollLeft + (cardRect.left - containerRect.left);
        el.scrollTo({ left, behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    },
    [prefersReducedMotion]
  );

  const getVisibleCount = useCallback(() => {
    if (!mounted || typeof window === "undefined") return 1;
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1024) return 2;
    return 3;
  }, [mounted]);

  const maxIndex = Math.max(0, REVIEWS.length - getVisibleCount());

  const goToPrev = useCallback(() => {
    const next = activeIndex <= 0 ? maxIndex : activeIndex - 1;
    setActiveIndex(next);
    scrollToIndex(next);
  }, [activeIndex, maxIndex, scrollToIndex]);

  const goToNext = useCallback(() => {
    const next = activeIndex >= maxIndex ? 0 : activeIndex + 1;
    setActiveIndex(next);
    scrollToIndex(next);
  }, [activeIndex, maxIndex, scrollToIndex]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-index]");
    const scrollLeft = el.scrollLeft;
    const containerWidth = el.clientWidth;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const offset = card.offsetLeft - scrollLeft;
      if (offset >= -containerWidth / 2 && offset < containerWidth / 2) {
        setActiveIndex(i);
        break;
      }
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      id="reviews"
      className="border-t border-neutral-800/80 px-6 py-20 sm:py-24 md:px-12 lg:px-20 lg:py-32"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="reviews-heading" className="sr-only">
          Wat anderen zeggen
        </h2>

        <p
          className="mb-12 text-center text-sm tracking-wide text-neutral-500 md:mb-14 lg:mb-16"
          aria-hidden="true"
        >
          Gebaseerd op 230+ Google reviews
        </p>

        <div className="relative flex items-stretch gap-2 md:gap-4">
          {maxIndex > 0 && (
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Vorige review"
              className="z-10 flex shrink-0 items-center justify-center self-center rounded-full border border-neutral-700/60 bg-neutral-900/80 p-2.5 text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-950 md:p-3"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="scrollbar-hide flex min-w-0 flex-1 snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-2 md:gap-8 md:px-4"
            style={{
              scrollBehavior: prefersReducedMotion ? "auto" : "smooth",
              WebkitOverflowScrolling: "touch",
            }}
            role="region"
            aria-label="Klantreviews"
          >
            {REVIEWS.map((review, i) => (
              <article
                key={i}
                data-index={i}
                className="flex-shrink-0 snap-start min-w-[min(100%,320px)] md:min-w-[min(50%,360px)] lg:min-w-[min(33.333%,380px)]"
              >
                <blockquote
                  className="flex h-full flex-col rounded-2xl border border-neutral-800/60 bg-neutral-900/60 px-6 py-8 shadow-[0_0_40px_-12px_rgba(0,0,0,0.5)] transition-colors duration-200 md:px-8 md:py-10 lg:px-10 lg:py-12"
                >
                  <span
                    className="mb-4 text-amber-400/80"
                    aria-hidden="true"
                    style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}
                  >
                    ★★★★★
                  </span>
                  <p className="flex-1 text-base leading-relaxed text-neutral-300 sm:text-lg lg:text-[1.125rem]">
                    "{review.text}"
                  </p>
                  <footer className="mt-5 text-sm text-neutral-500">
                    — <cite className="not-italic">{review.name}</cite>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>

          {maxIndex > 0 && (
            <button
              type="button"
              onClick={goToNext}
              aria-label="Volgende review"
              className="z-10 flex shrink-0 items-center justify-center self-center rounded-full border border-neutral-700/60 bg-neutral-900/80 p-2.5 text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-950 md:p-3"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>

        {maxIndex > 0 && (
          <div
            className="mt-10 flex justify-center gap-1.5 md:mt-12 lg:mt-14"
            role="tablist"
            aria-label="Review positie"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Review ${i + 1} van ${maxIndex + 1}`}
                onClick={() => {
                  setActiveIndex(i);
                  scrollToIndex(i);
                }}
                className="h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-950"
                style={{
                  width: i === activeIndex ? 24 : 6,
                  backgroundColor: i === activeIndex ? "rgba(250,250,250,0.4)" : "rgba(250,250,250,0.15)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
