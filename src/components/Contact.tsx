const PHONE = "0721234567";
const WHATSAPP_NUMBER = "31612345678";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const TEL_URL = `tel:+31${PHONE.replace(/^0/, "")}`;

export function Contact() {
  return (
    <>
      <section
        id="contact"
        className="border-t border-neutral-800/80 px-6 py-20 sm:py-24 md:px-12 lg:px-20 lg:py-32"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-heading"
            className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          >
            Contact & afspraak
          </h2>
          <p className="mt-6 text-neutral-400">
            Bel of app. We helpen je graag.
          </p>
          {/* Primary: WhatsApp. Secondary: Bellen as subtle text link. Mobile: stacked, thumb reach. */}
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#25D366] px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-neutral-950"
            >
              WhatsApp
            </a>
            <a
              href={TEL_URL}
              className="group inline-flex items-baseline text-base font-medium text-neutral-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-950"
            >
              <span className="border-b border-neutral-500 pb-0.5 transition-colors group-hover:border-white">
                Bellen
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp on mobile only */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] right-[max(1.5rem,env(safe-area-inset-right,0px))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-neutral-950 lg:hidden"
        aria-label="Open WhatsApp"
      >
        <svg
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
