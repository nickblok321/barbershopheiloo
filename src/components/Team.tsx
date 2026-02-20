const MEMBERS = [
  { name: "Barber 1", role: "Senior barber" },
  { name: "Barber 2", role: "Barber" },
] as const;

export function Team() {
  return (
    <section
      id="team"
      className="border-t border-neutral-800/80 px-6 py-24 md:px-12 lg:px-20 lg:py-32"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="team-heading"
          className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
        >
          Ons team
        </h2>
        <div className="mt-4 h-px w-16 bg-accent" aria-hidden="true" />
        <p className="mt-6 text-neutral-500">
          Het gezicht achter de kapsalon. Ervaren en met oog voor detail.
        </p>
        <ul className="mt-14 space-y-12 sm:space-y-16" role="list">
          {MEMBERS.map(({ name, role }) => (
            <li key={name} className="flex flex-col sm:flex-row sm:items-end sm:gap-12">
              <div className="h-48 w-full max-w-xs shrink-0 bg-neutral-800/60 sm:h-56 sm:max-w-[14rem]" aria-hidden="true" />
              <div className="mt-4 sm:mt-0 sm:pb-1">
                <p className="text-xl font-medium text-white">{name}</p>
                <p className="mt-1 text-neutral-500">{role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
