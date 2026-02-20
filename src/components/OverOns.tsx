import Image from "next/image";

const KERNPUNTEN = [
  "Met of zonder afspraak",
  "Voor alle leeftijden",
  "Jarenlange ervaring",
  "Persoonlijke aandacht",
  "Focus op rust en vertrouwen",
] as const;

export function OverOns() {
  return (
    <section
      id="over-ons"
      className="border-t border-neutral-800/80 px-6 py-28 md:px-12 md:py-32 lg:px-20 lg:py-40"
      aria-labelledby="over-ons-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20 xl:gap-24">
          {/* Left: text column, max-width for readability */}
          <div className="max-w-2xl">
            <h2
              id="over-ons-heading"
              className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
            >
              Over ons
            </h2>

            <p className="mt-12 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-white/95 sm:text-3xl lg:mt-14 lg:text-[1.75rem]">
              Vakmanschap is geen toeval. Het is aandacht, ervaring en rust.
            </p>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-neutral-400 sm:text-lg lg:mt-12">
              <p>
                Barbershop Heiloo is een plek waar kwaliteit voorop staat. Met
                jarenlange ervaring en oog voor detail zorgen wij voor een strak
                en verzorgd resultaat — elke keer opnieuw.
              </p>
              <p>
                Met of zonder afspraak bieden wij ambachtelijk barberwerk voor
                haar en baard, voor iedereen die waarde hecht aan
                professionaliteit en persoonlijke aandacht.
              </p>
            </div>

            <ul className="mt-12 space-y-5 lg:mt-14" role="list">
              {KERNPUNTEN.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-neutral-500"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                    aria-hidden="true"
                  />
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: hele afbeelding zichtbaar, hoogte volgt beeld (geen oprekken) */}
          <div className="relative w-full self-start">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/barbershop-interior.png"
                alt="Interieur van Barbershop Heiloo"
                width={1200}
                height={1600}
                className="w-full h-auto rounded-xl"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-black/25 rounded-xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
