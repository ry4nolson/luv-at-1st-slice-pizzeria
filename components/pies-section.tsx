import { MenuRow, MenuPanelTitle } from "@/components/menu-row";

const sizes = [
  { name: '16" Large', price: "$19.99" },
  { name: '18" XL', price: "$24.99" },
];

const toppings = [
  { name: "Pepperoni", price: "$2.00" },
  { name: "Sausage", price: "$2.00" },
  { name: "Bacon", price: "$3.00" },
  { name: "Onions", price: "$2.00" },
  { name: "Green Peppers", price: "$2.00" },
  { name: "Black Olives", price: "$2.00" },
  { name: "Jalapenos", price: "$2.00" },
  { name: "Extra Cheese", price: "$3.00" },
  { name: "Extra Oxtail", price: "$6.00" },
];

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
            <MenuPanelTitle>New York Style Pizzas</MenuPanelTitle>
            <div className="mt-4 divide-y divide-[var(--paper)]/10">
              {sizes.map((s) => (
                <MenuRow key={s.name} {...s} />
              ))}
            </div>
            <p className="font-heading mt-5 text-sm tracking-wide text-[var(--green)]">
              CHOOSE FROM:
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--paper)]/75">
              Cheese &bull; Pepperoni &bull; Sausage &bull; Margherita &bull;
              Veggie &bull; Buffalo Chicken &bull; Boudain &amp; Bacon &bull;
              5 Borough (Meat Lovers)
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[var(--red)]/50 bg-[#1c1010] p-6 sm:p-8">
            <MenuPanelTitle color="red">Premium Oxtail Pizza</MenuPanelTitle>
            <div className="mt-4">
              <MenuRow name='One Size (18")' price="$49.99" />
            </div>
            <p className="mt-4 rounded-lg border border-[var(--gold)]/30 bg-[var(--ink)]/40 p-3 text-xs italic text-[var(--paper)]/60">
              Good Food. Good Vibes. Made with Love.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#1c1010] p-6 sm:p-8">
            <MenuPanelTitle>Optional Toppings</MenuPanelTitle>
            <div className="mt-4 divide-y divide-[var(--paper)]/10">
              {toppings.map((s) => (
                <MenuRow key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
