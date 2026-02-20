"use client";

import { useState } from "react";

const MESSAGE =
  "Deze website is momenteel in ontwikkeling. Na goedkeuring wordt dit actief.";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ComingSoonLink({ href, children, className = "" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className={className}
      >
        {children}
      </a>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
        >
          <div className="w-full max-w-md rounded-lg bg-neutral-900 p-6 shadow-xl ring-1 ring-neutral-700">
            <p id="coming-soon-title" className="text-foreground text-center text-base leading-relaxed">
              {MESSAGE}
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
