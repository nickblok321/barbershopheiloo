import Image from "next/image";

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  imageSide: "left" | "right";
};

const isLocalImage = (src: string) => src.startsWith("/");

export function TeamMember({
  name,
  role,
  bio,
  imageSrc,
  imageSide,
}: TeamMemberProps) {
  return (
    <article
      className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16 ${
        imageSide === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-neutral-800/60 md:max-w-sm lg:max-w-md">
        {isLocalImage(imageSrc) ? (
          <Image
            src={imageSrc}
            alt={`${name}, ${role}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 24rem, 28rem"
            className="object-cover"
            quality={90}
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt={`${name}, ${role}`}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="min-w-0 flex-1 space-y-4">
        <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
          {name}
        </h3>
        <p className="text-neutral-500">{role}</p>
        <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
          {bio}
        </p>
      </div>
    </article>
  );
}
