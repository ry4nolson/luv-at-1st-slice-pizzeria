import { MenuPanelTitle } from "@/components/menu-row";
import { flatbreadSpecials } from "@/lib/menu-data";

export function FlatbreadSection() {
  return (
    <section id="flatbread" className="relative bg-[var(--ink)] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-heading rotate-[-2deg] rounded bg-[var(--gold)] px-3 py-1 text-xs tracking-[0.3em] text-[var(--ink)]">
            NEW!
          </span>
          <h2 className="font-display mt-3 text-4xl text-[var(--paper)] sm:text-5xl">
            Flatbread Specials
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {flatbreadSpecials.map((f) => (
            <div
              key={f.name}
              className="group relative overflow-hidden rounded-2xl border-2 border-[var(--green)]/50 bg-[#101a15] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <MenuPanelTitle color="green">{f.name}</MenuPanelTitle>
                <span className="font-display shrink-0 text-3xl text-[var(--red)]">
                  {f.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--paper)]/70">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm italic text-[var(--paper)]/50">
          All flatbreads are made fresh to order!
        </p>
      </div>
    </section>
  );
}
