import Image from "next/image";
import { MapPin } from "lucide-react";

const LOGO_URL =
  "https://galaxy-prod.tlcdn.com/gen/user_30fRMzu78brBsb39sqp02zFAOkl/e720749f-29bd-450d-9913-9d11c2f50e25.png";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--ink)] pb-24 pt-14"
    >
      {/* Backdrop skyline glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(200,30,44,0.25), transparent 45%), radial-gradient(circle at 80% 10%, rgba(240,180,41,0.18), transparent 40%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 40px, rgba(240,180,41,0.4) 40px 42px)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="font-heading mb-4 inline-block -rotate-2 rounded-sm bg-[var(--gold)] px-3 py-1 text-xs tracking-[0.3em] text-[var(--ink)]">
            BEAUMONT, TEXAS
          </p>
          <h1 className="font-display text-6xl leading-[0.95] text-[var(--paper)] sm:text-7xl md:text-8xl">
            <span className="block text-stroke text-[var(--paper)]">LUV</span>
            <span className="block text-[var(--red)]">at 1st Slice</span>
          </h1>
          <p className="font-heading mt-5 max-w-md text-lg text-[var(--gold)] sm:text-xl">
            New York Style Pizza &middot; Snow Cones &middot; Icees &middot;
            Homemade Jamaican Beef Patties
          </p>
          <p className="mt-4 max-w-md text-base text-[var(--paper)]/70">
            Good Food. Good Vibes. Made with Love. Hand-tossed NY slices and
            whole pies, baked fresh daily right here in Beaumont.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#pies"
              className="font-heading rounded-full border-2 border-[var(--gold)] bg-[var(--red)] px-7 py-3 text-lg text-[var(--paper)] shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]"
            >
              SEE THE MENU
            </a>
            <a
              href="#visit"
              className="font-heading flex items-center gap-2 rounded-full border-2 border-[var(--paper)]/40 px-7 py-3 text-lg text-[var(--paper)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <MapPin className="h-5 w-5" /> FIND US
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[var(--paper)]/60">
            <MapPin className="h-4 w-4 text-[var(--gold)]" />
            8440 Phelan Blvd. Suite 300, Beaumont, TX 77706
          </div>
        </div>

        <div className="wobble order-1 flex justify-center lg:order-2">
          <div className="relative aspect-[1213/1087] w-full max-w-lg">
            <Image
              src={LOGO_URL}
              alt="Luv At 1st Slice Pizzeria logo"
              fill
              priority
              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
