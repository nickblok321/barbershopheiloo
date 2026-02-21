import { ComingSoonLink } from "./ComingSoonLink";

// High-end barber / grooming atmosphere — object-cover, centered
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80";

const TRUST_TEXT = "Gebaseerd op 230+ Google reviews";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[min(100dvh,100vh)] w-full flex-col justify-center bg-neutral-950 pb-[max(4rem,env(safe-area-inset-bottom))] pt-[max(3rem,env(safe-area-inset-top))] sm:pb-20 sm:pt-20 md:pb-32 md:pt-24 lg:pb-40 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      {/* Background image: full-width, object-cover, centered */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
        aria-hidden="true"
      />
      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 md:from-black/60 md:via-black/45 md:to-black/75"
        aria-hidden="true"
      />

      {/* Content: left + trust on desktop, stacked on mobile */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] text-left md:flex-row md:items-center md:justify-between md:gap-16 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-2xl">
          <h1
            id="hero-heading"
            className="font-sans text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[1.05]"
          >
            Welkom bij barbershop Heiloo.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 md:mt-8 md:text-xl">
            Ambachtelijk barberwerk met aandacht voor elk detail.
          </p>

          {/* Trust: compact onder headline op mobiel */}
          <p
            className="mt-8 flex items-center gap-2 text-sm tracking-wide text-white/90 md:hidden"
            aria-label={`${TRUST_TEXT}. 5 van 5 sterren.`}
          >
            <span className="text-amber-400">★★★★★</span>
            {TRUST_TEXT}
          </p>

          {/* Primary CTA */}
          <div className="mt-10 md:mt-16">
            <ComingSoonLink
              href="#contact"
              className="group inline-flex items-baseline gap-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-950 md:text-lg"
            >
              <span className="border-b border-accent pb-0.5 transition-colors group-hover:border-white">
                Neem contact op
              </span>
            </ComingSoonLink>
          </div>
        </div>

        {/* Trust: rechts van content op desktop, visueel in balans */}
        <p
          className="hidden text-right text-sm font-medium tracking-wide md:block md:text-base lg:text-[0.95rem]"
          aria-label={`${TRUST_TEXT}. 5 van 5 sterren.`}
        >
          <span className="text-amber-400">★★★★★</span>
          <span className="mt-1 block text-white/80">{TRUST_TEXT}</span>
        </p>
      </div>
    </section>
  );
}
