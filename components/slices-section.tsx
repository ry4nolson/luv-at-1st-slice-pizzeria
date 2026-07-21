import { MenuRow, MenuPanelTitle } from "@/components/menu-row";

const slices = [
  { name: "Boudain & Bacon Slice", price: "$6.99" },
  { name: "Buffalo Chicken Slice", price: "$6.99" },
  { name: "Cheese Slice", price: "$4.99" },
  { name: "Margherita Slice", price: "$5.99" },
  { name: "Oxtail Slice", price: "$12.99" },
  { name: "Pepperoni Slice", price: "$5.99" },
  { name: "Sausage Slice", price: "$5.99" },
  { name: "Veggie Slice", price: "$6.99" },
  {
    name: "5 Borough (Meat Lovers) Slice",
    price: "$6.99",
    note: "Pepperoni, Bacon, Buffalo Chicken, Italian Sausage, Beef",
  },
];

const sides = [
  { name: "Cheese Garlic Bread", price: "$8.99" },
];

const lemonade = [
  { name: "Small", price: "$2.99" },
  { name: "Medium", price: "$3.99" },
  { name: "Large", price: "$4.99" },
];

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
            <MenuPanelTitle>Grab a Slice</MenuPanelTitle>
            <div className="mt-4 divide-y divide-[var(--paper)]/10">
              {slices.map((s) => (
                <MenuRow key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#151515] p-6">
              <MenuPanelTitle color="red">Cheese Garlic Bread</MenuPanelTitle>
              <div className="mt-4 divide-y divide-[var(--paper)]/10">
                {sides.map((s) => (
                  <MenuRow key={s.name} {...s} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#151515] p-6">
              <MenuPanelTitle color="green">Luv Lemonade</MenuPanelTitle>
              <div className="mt-4 divide-y divide-[var(--paper)]/10">
                {lemonade.map((s) => (
                  <MenuRow key={s.name} {...s} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#151515] p-6">
              <MenuPanelTitle>Canned Drinks</MenuPanelTitle>
              <div className="mt-4 divide-y divide-[var(--paper)]/10">
                <MenuRow name="Any Can" price="$2.00" note="Coca-Cola, Sprite, Fanta, Dr Pepper" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
