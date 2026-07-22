import { MenuRow, MenuPanelTitle } from "@/components/menu-row";
import {
  nyStylePizzaSizes,
  nyStylePizzaChoices,
  premiumOxtailPizza,
  optionalToppings,
} from "@/lib/menu-data";

export function PiesSection() {
  return (
    <section id="pies" className="relative bg-[#120a0a] py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(200,30,44,0.35), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <span className="font-heading text-xs tracking-[0.4em] text-[var(--gold)]">
            MADE FRESH DAILY
          </span>
          <h2 className="font-display mt-2 text-4xl text-[var(--paper)] sm:text-5xl">
            Whole Pies
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#1c1010] p-6 sm:p-8">
            <MenuPanelTitle>{nyStylePizzaSizes.title}</MenuPanelTitle>
            <div className="mt-4 divide-y divide-[var(--paper)]/10">
              {nyStylePizzaSizes.items.map((s) => (
                <MenuRow key={s.name} {...s} />
              ))}
            </div>
            <p className="font-heading mt-5 text-sm tracking-wide text-[var(--green)]">
              CHOOSE FROM:
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--paper)]/75">
              {nyStylePizzaChoices.join(" • ")}
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[var(--red)]/50 bg-[#1c1010] p-6 sm:p-8">
            <MenuPanelTitle color="red">{premiumOxtailPizza.title}</MenuPanelTitle>
            <div className="mt-4">
              {premiumOxtailPizza.items.map((s) => (
                <MenuRow key={s.name} {...s} />
              ))}
            </div>
            <p className="mt-4 rounded-lg border border-[var(--gold)]/30 bg-[var(--ink)]/40 p-3 text-xs italic text-[var(--paper)]/60">
              Good Food. Good Vibes. Made with Love.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#1c1010] p-6 sm:p-8">
            <MenuPanelTitle>{optionalToppings.title}</MenuPanelTitle>
            <div className="mt-4 divide-y divide-[var(--paper)]/10">
              {optionalToppings.items.map((s) => (
                <MenuRow key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
