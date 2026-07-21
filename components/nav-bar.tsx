"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Heart } from "lucide-react";

const WORDMARK_URL =
  "https://galaxy-prod.tlcdn.com/gen/user_30fRMzu78brBsb39sqp02zFAOkl/63de097a-b842-438e-a6b2-bf174055b186.png";

const links = [
  { href: "#about", label: "Our Story" },
  { href: "#slices", label: "Slices" },
  { href: "#pies", label: "Whole Pies" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit Us" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-[var(--gold)] bg-[var(--ink)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
        <a
          href="#top"
          className="relative block h-7 w-32 shrink-0 overflow-hidden sm:h-8 sm:w-36"
        >
          <Image
            src={WORDMARK_URL}
            alt="Luv At 1st Slice"
            fill
            priority
            sizes="150px"
            className="object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-sm tracking-wider text-[var(--paper)]/85 transition-colors hover:text-[var(--gold)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#visit"
          className="hidden items-center gap-2 rounded-full border-2 border-[var(--red)] bg-[var(--red)] px-4 py-2 font-heading text-sm text-[var(--paper)] shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5 lg:flex"
        >
          <Heart className="h-4 w-4" /> ORDER NOW
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-[var(--gold)] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t-2 border-[var(--gold)]/40 bg-[var(--ink)] px-5 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-heading py-2 text-base tracking-wide text-[var(--paper)]/90"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border-2 border-[var(--red)] bg-[var(--red)] px-4 py-2 text-center font-heading text-sm text-[var(--paper)]"
          >
            ORDER NOW
          </a>
        </div>
      )}
    </header>
  );
}
