import { TeamMember } from "./TeamMember";

const MEMBERS = [
  {
    name: "Younes",
    role: "Eigenaar & Master Barber",
    bio: "Younes is de oprichter van de barbershop en heeft jarenlange ervaring in het vak. Hij staat bekend om zijn oog voor detail, strakke fades en persoonlijke aanpak. Voor Younes draait een knipbeurt om meer dan haar: het is een beleving.",
    imageSrc: "/team-younes.png",
    imageSide: "left" as const,
  },
  {
    name: "Edward",
    role: "Barbier",
    bio: "Edward is een gedreven barbier met een passie voor moderne herenkapsels. Hij combineert klassieke technieken met een frisse, eigentijdse stijl. Klanten waarderen zijn precisie en relaxte sfeer in de stoel.",
    imageSrc: "/team-edward.png",
    imageSide: "right" as const,
  },
] as const;

export function Team() {
  return (
    <section
      id="team"
      className="border-t border-neutral-800/80 px-6 py-20 sm:py-24 md:px-12 md:py-32 lg:px-20 lg:py-40"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="team-heading"
          className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
        >
          Ons team
        </h2>
        <p className="mt-6 text-neutral-500">
          Het gezicht achter de kapsalon. Ervaren en met oog voor detail.
        </p>

        <div className="mt-14 space-y-20 sm:mt-16 sm:space-y-24 lg:space-y-28">
          {MEMBERS.map((member) => (
            <div key={member.name} className="animate-stagger-item">
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
