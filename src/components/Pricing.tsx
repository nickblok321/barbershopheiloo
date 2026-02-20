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
      className="border-t border-neutral-800/80 px-6 py-28 md:px-12 md:py-32 lg:px-20 lg:py-32"
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
              className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="text-base font-medium tracking-tight text-neutral-200 sm:text-lg">
                {name}
              </span>
              <span className="shrink-0 text-right text-lg font-medium text-white sm:text-xl">
                {price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
