import { MenuPanelTitle } from "@/components/menu-row";

const patties = ["Mild Beef", "Spicy Beef", "Jerk Chicken", "Regular Chicken"];

export function PattiesSection() {
  return (
    <section id="patties" className="relative bg-[var(--ink)] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border-2 border-[var(--gold)]/40 bg-gradient-to-br from-[#2a1006] to-[#150a05] p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="font-heading text-xs tracking-[0.4em] text-[var(--red)]">
              HOMEMADE
            </span>
            <MenuPanelTitle color="gold">
              Homemade Jamaican Beef Patties
            </MenuPanelTitle>

            <ul className="mt-6 space-y-3">
              {patties.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 font-heading text-lg text-[var(--paper)]/90"
                >
                  <span className="h-2.5 w-2.5 rotate-45 bg-[var(--red)]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--gold)]/50 bg-[var(--ink)]/40 p-10 text-center">
            <p className="font-heading text-sm tracking-[0.3em] text-[var(--paper)]/60">
              EACH
            </p>
            <p className="font-display text-7xl text-[var(--gold)] sm:text-8xl">
              $4.99
            </p>
            <p className="mt-2 text-sm text-[var(--paper)]/60">
              Flaky, golden, baked fresh in-house
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
