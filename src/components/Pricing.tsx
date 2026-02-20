const PRICES = [
  { name: "Knippen & wassen", price: "€ 28" },
  { name: "Knippen (kort)", price: "€ 24" },
  { name: "Baard verzorgen", price: "€ 18" },
  { name: "Trimmen", price: "€ 15" },
  { name: "Epileren met touw", price: "€ 12" },
  { name: "Knippen + baard", price: "€ 38" },
] as const;

export function Pricing() {
  return (
    <section
      id="prijzen"
      className="border-t border-neutral-800/80 px-6 py-20 sm:py-24 md:px-12 md:py-32 lg:px-20 lg:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-2xl">
        <header className="space-y-3">
          <h2
            id="pricing-heading"
            className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          >
            Prijzen
          </h2>
          <p className="text-neutral-500">
            Transparant. Geen verrassingen.
          </p>
          <p className="text-sm text-neutral-500/90">
            Alle behandelingen zijn inclusief styling.
          </p>
        </header>

        <ul
          className="mt-14 space-y-10 md:mt-16 md:space-y-12"
          role="list"
        >
          {PRICES.map(({ name, price }) => (
            <li
              key={name}
              className="animate-stagger-item grid grid-cols-[1fr_minmax(4.5rem,auto)] items-baseline gap-x-4 gap-y-0.5 sm:flex sm:justify-between sm:gap-8"
            >
              <span className="min-w-0 text-base font-medium tracking-tight text-neutral-200 sm:text-lg">
                {name}
              </span>
              <span className="min-w-[4.5rem] text-right text-lg font-medium text-white sm:min-w-0 sm:text-xl">
                {price}
              </span>
            </li>
          ))}
        </ul>

        {/* Single CTA after prices: high intent. Same style as hero for consistency. */}
        <p className="mt-14 md:mt-16">
          <a
            href="#contact"
            className="group inline-flex items-baseline text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-950 md:text-lg"
          >
            <span className="border-b border-accent pb-0.5 transition-colors group-hover:border-white">
              Afspraak maken
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}
