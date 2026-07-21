import { MenuRow, MenuPanelTitle } from "@/components/menu-row";

const snowCones = [
  { name: "Small", price: "$5.00" },
  { name: "Medium", price: "$6.00" },
  { name: "Large", price: "$7.00" },
];

const waterIce = [
  { name: "1 Scoop", price: "$3.00" },
  { name: "2 Scoops", price: "$6.00" },
  { name: "3 Scoops", price: "$9.00" },
];

export function SweetsSection() {
  return (
    <section id="sweets" className="relative bg-[#0d1512] py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 15% 80%, rgba(28,107,76,0.4), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <span className="font-heading text-xs tracking-[0.4em] text-[var(--gold)]">
            COOL DOWN
          </span>
          <h2 className="font-display mt-2 text-4xl text-[var(--paper)] sm:text-5xl">
            Icees &amp; Sweets
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#152019] p-6 sm:p-8">
            <MenuPanelTitle color="green">Pineapple Stuffed Fruit</MenuPanelTitle>
            <div className="mt-4">
              <MenuRow name="Whole Pineapple" price="$14.99" />
            </div>
            <p className="mt-2 text-xs italic text-[var(--paper)]/55">
              Packed fresh with seasonal fruit
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#152019] p-6 sm:p-8">
            <MenuPanelTitle>Snow Cones</MenuPanelTitle>
            <div className="mt-4 divide-y divide-[var(--paper)]/10">
              {snowCones.map((s) => (
                <MenuRow key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#152019] p-6 sm:p-8">
            <MenuPanelTitle color="red">Water Ice</MenuPanelTitle>
            <div className="mt-4 divide-y divide-[var(--paper)]/10">
              {waterIce.map((s) => (
                <MenuRow key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
