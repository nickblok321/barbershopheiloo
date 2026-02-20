export function Reviews() {
  return (
    <section
      id="reviews"
      className="border-t border-neutral-800/80 px-6 py-20 sm:py-24 md:px-12 lg:px-20 lg:py-32"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="reviews-heading" className="sr-only">
          Wat anderen zeggen
        </h2>
        <p className="text-3xl tracking-wide text-neutral-500" aria-hidden="true">
          ★★★★★
        </p>
        <p className="mt-4 text-lg text-neutral-400">
          Gebaseerd op 230+ Google reviews
        </p>
        <blockquote className="mt-10 text-left text-base italic leading-relaxed text-neutral-500 sm:text-center sm:text-lg">
          “Prettige sfeer en altijd een strak resultaat. Een vaste plek geworden.”
        </blockquote>
      </div>
    </section>
  );
}
