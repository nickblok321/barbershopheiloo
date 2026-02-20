"use client";

import { useState } from "react";

const PHONE = "0721234567";
const WHATSAPP_NUMBER = "31612345678";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const TEL_URL = `tel:+31${PHONE.replace(/^0/, "")}`;

const BEHANDELINGEN = [
  { value: "", label: "Selecteer behandeling" },
  { value: "knippen-wassen", label: "Knippen & wassen" },
  { value: "knippen-kort", label: "Knippen (kort)" },
  { value: "baard", label: "Baard verzorgen" },
  { value: "trimmen", label: "Trimmen" },
  { value: "epileren-touw", label: "Epileren met touw" },
  { value: "knippen-baard", label: "Knippen + baard" },
] as const;

const DAGEN = [
  { value: "", label: "Geen voorkeur" },
  { value: "ma", label: "Maandag" },
  { value: "di", label: "Dinsdag" },
  { value: "wo", label: "Woensdag" },
  { value: "do", label: "Donderdag" },
  { value: "vr", label: "Vrijdag" },
  { value: "za", label: "Zaterdag" },
] as const;

const FORM_INPUT_CLASSES =
  "mt-2 w-full rounded-md border border-neutral-700 bg-neutral-900/80 px-4 py-3.5 text-base text-white placeholder-neutral-500 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 disabled:opacity-50 min-h-[48px]";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    // Simuleer verzending — vervang met Formspree/API: fetch(url, { method: "POST", body: new FormData(form) })
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <section
        id="contact"
        className="border-t border-neutral-800/80 px-6 py-20 sm:py-24 md:px-12 lg:px-20 lg:py-32"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-xl lg:max-w-2xl">
          <header className="text-center">
            <h2
              id="contact-heading"
              className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
            >
              Contact & afspraak
            </h2>
            <p className="mt-6 text-neutral-400">
              Plan een bezoek of stel een vraag. We reageren binnen 24 uur.
            </p>
          </header>

          {submitted ? (
            <div className="mt-14 rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 py-12 text-center">
              <p className="text-lg font-medium text-white">
                Bedankt voor je bericht.
              </p>
              <p className="mt-2 text-neutral-400">
                We nemen zo snel mogelijk contact op.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm font-medium text-neutral-400 underline underline-offset-2 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-950"
              >
                Nog een bericht sturen
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-14 space-y-6 sm:space-y-8"
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="block text-sm font-medium text-neutral-300">
                    Naam
                  </span>
                  <input
                    type="text"
                    name="naam"
                    required
                    placeholder="Jouw naam"
                    className={FORM_INPUT_CLASSES}
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-neutral-300">
                    E-mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="naam@voorbeeld.nl"
                    className={FORM_INPUT_CLASSES}
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block text-sm font-medium text-neutral-300">
                  Telefoonnummer
                </span>
                <input
                  type="tel"
                  name="telefoon"
                  placeholder="06 12345678"
                  className={FORM_INPUT_CLASSES}
                  autoComplete="tel"
                />
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="block text-sm font-medium text-neutral-300">
                    Behandeling
                  </span>
                  <select
                    name="behandeling"
                    className={`${FORM_INPUT_CLASSES} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")] bg-[length:1.5rem_1.5rem] bg-[right_0.75rem_center] bg-no-repeat pr-12`}
                    aria-label="Selecteer behandeling"
                  >
                    {BEHANDELINGEN.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-neutral-300">
                    Voorkeur dag
                  </span>
                  <select
                    name="dag"
                    className={`${FORM_INPUT_CLASSES} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")] bg-[length:1.5rem_1.5rem] bg-[right_0.75rem_center] bg-no-repeat pr-12`}
                    aria-label="Selecteer voorkeursdag"
                  >
                    {DAGEN.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="block text-sm font-medium text-neutral-300">
                  Bericht
                </span>
                <textarea
                  name="bericht"
                  rows={4}
                  placeholder="Extra wensen of vragen?"
                  className={`${FORM_INPUT_CLASSES} resize-y min-h-[120px] py-3.5`}
                  aria-label="Bericht"
                />
              </label>

              <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="order-2 min-h-[48px] w-full rounded-md border border-white/20 bg-white px-6 py-3.5 text-base font-medium text-neutral-950 transition-colors hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:opacity-70 sm:order-1 sm:w-auto"
                >
                  {isSubmitting ? "Versturen…" : "Verstuur bericht"}
                </button>
                <p className="order-1 text-center text-sm text-neutral-500 sm:order-2">
                  Of bel/app{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] underline underline-offset-2 hover:opacity-90"
                  >
                    WhatsApp
                  </a>{" "}
                  ·{" "}
                  <a
                    href={TEL_URL}
                    className="text-neutral-400 underline underline-offset-2 hover:text-white"
                  >
                    Bellen
                  </a>
                </p>
              </div>
            </form>
          )}
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
