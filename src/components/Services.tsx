const DIENSTEN = [
  {
    title: "Knippen & wassen",
    lead: "Begint met een verzorgende wasbeurt, gevolgd door een strakke knipbeurt op maat.",
    secondary: "Strak en passend bij jouw gezicht.",
  },
  {
    title: "Baard verzorgen",
    lead: "Vormgeven, bijwerken en verzorgen van je baard.",
    secondary: "Voor een verzorgde, consistente look.",
  },
  {
    title: "Trimmen",
    lead: "Snel en precies bijgewerkt.",
    secondary: "Ideaal om de lijnen scherp te houden tussen bezoeken.",
  },
  {
    title: "Epileren met touw",
    lead: "Met de hand gedaan, zoals van oudsher.",
    secondary: "Zacht voor de huid en heel precies.",
  },
] as const;

export function Services() {
  return (
    <section
      id="diensten"
      className="border-t border-neutral-800/80 px-6 py-28 md:px-12 md:py-32 lg:px-20 lg:py-40"
      aria-labelledby="diensten-heading"
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <h2
          id="diensten-heading"
          className="text-center text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
        >
          Diensten
        </h2>

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Gecentreerde verticale lijn (desktop) */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-800/60 lg:block"
            aria-hidden
          />
          <ul
            className="space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0"
            role="list"
          >
            {DIENSTEN.map((dienst) => (
              <li
                key={dienst.title}
                className="border-t border-neutral-800/60 py-10 first:border-t-0 sm:py-12 lg:py-16 lg:[&:nth-child(1)]:border-t-0 lg:[&:nth-child(2)]:border-t-0"
              >
              <h3 className="text-xl font-medium tracking-tight text-white transition-colors duration-200 hover:text-accent sm:text-2xl lg:text-[1.5rem]">
                {dienst.title}
              </h3>
              {dienst.lead && (
                <p className="mt-3 text-base leading-relaxed text-neutral-400 sm:text-lg lg:mt-4">
                  {dienst.lead}
                </p>
              )}
              {dienst.secondary && (
                <p className="mt-1 text-sm leading-relaxed text-neutral-500 sm:text-base lg:mt-2">
                  {dienst.secondary}
                </p>
              )}
            </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
