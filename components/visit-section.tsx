import { MapPin, Instagram, Heart } from "lucide-react";

export function VisitSection() {
  return (
    <section id="visit" className="relative overflow-hidden bg-[#1a0d0d] py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(240,180,41,0.25), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <span className="font-heading text-xs tracking-[0.4em] text-[var(--gold)]">
          COME THROUGH
        </span>
        <h2 className="font-display mt-3 text-5xl text-[var(--paper)] sm:text-6xl">
          Visit Luv At 1st Slice
        </h2>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-[var(--gold)]/30 bg-[#241212] p-6">
            <MapPin className="mx-auto h-6 w-6 text-[var(--gold)]" />
            <p className="font-heading mt-3 text-sm text-[var(--paper)]/90">
              8440 Phelan Blvd. Suite 300
              <br />
              Beaumont, TX 77706
            </p>
          </div>
          <div className="rounded-2xl border-2 border-[var(--gold)]/30 bg-[#241212] p-6">
            <Instagram className="mx-auto h-6 w-6 text-[var(--gold)]" />
            <p className="font-heading mt-3 text-sm text-[var(--paper)]/90">
              Follow along
              <br />
              @luvat1stslice
            </p>
          </div>
        </div>

        <a
          href="#top"
          className="font-heading mt-10 inline-flex items-center gap-2 rounded-full border-2 border-[var(--gold)] bg-[var(--red)] px-9 py-4 text-xl text-[var(--paper)] shadow-[5px_5px_0_#000] transition-transform hover:-translate-y-1"
        >
          <Heart className="h-5 w-5" /> ORDER YOUR SLICE
        </a>

        <p className="mt-4 text-xs text-[var(--paper)]/40">
          Call your local store for today&apos;s hours &amp; delivery options.
        </p>
      </div>
    </section>
  );
}
