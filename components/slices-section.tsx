import { MenuRow, MenuPanelTitle } from "@/components/menu-row";
import {
  pizzaSlices,
  cheeseGarlicBread,
  luvLemonade,
  cannedDrinks,
} from "@/lib/menu-data";

export function SlicesSection() {
  return (
    <section id="slices" className="relative bg-[var(--ink)] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <span className="font-heading text-xs tracking-[0.4em] text-[var(--red)]">
            BY THE SLICE
          </span>
          <h2 className="font-display mt-2 text-4xl text-[var(--paper)] sm:text-5xl">
            Pizza Slices
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border-2 border-[var(--gold)]/40 bg-[#151515] p-6 sm:p-8">
            <MenuPanelTitle>{pizzaSlices.title}</MenuPanelTitle>
            <div className="mt-4 divide-y divide-[var(--paper)]/10">
              {pizzaSlices.items.map((s) => (
                <MenuRow key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#151515] p-6">
              <MenuPanelTitle color="red">{cheeseGarlicBread.title}</MenuPanelTitle>
              <div className="mt-4 divide-y divide-[var(--paper)]/10">
                {cheeseGarlicBread.items.map((s) => (
                  <MenuRow key={s.name} {...s} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#151515] p-6">
              <MenuPanelTitle color="green">{luvLemonade.title}</MenuPanelTitle>
              <div className="mt-4 divide-y divide-[var(--paper)]/10">
                {luvLemonade.items.map((s) => (
                  <MenuRow key={s.name} {...s} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#151515] p-6">
              <MenuPanelTitle>{cannedDrinks.title}</MenuPanelTitle>
              <div className="mt-4 divide-y divide-[var(--paper)]/10">
                {cannedDrinks.items.map((s) => (
                  <MenuRow key={s.name} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
