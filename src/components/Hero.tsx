import { ComingSoonLink } from "./ComingSoonLink";

// High-end barber / grooming atmosphere — object-cover, centered
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col justify-end bg-neutral-950 pb-20 pt-24 md:justify-center md:pb-32 md:pt-28 lg:pb-40 lg:pt-32"
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

      {/* Content: left-aligned, asymmetric */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-left md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-2xl">
          <h1
            id="hero-heading"
            className="font-sans text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[1.05]"
          >
            Welkom bij barbershop Heiloo. 
          </h1>
          <div
            className="mt-6 h-px w-20 bg-accent md:mt-8"
            aria-hidden="true"
          />
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 md:mt-8 md:text-xl">
          Ambachtelijk barberwerk met aandacht voor elk detail.
          </p>
          <p className="mt-4 text-base text-neutral-500 md:text-lg">
          </p>

          <div className="mt-12 md:mt-16">
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
      </div>
    </section>
  );
}
