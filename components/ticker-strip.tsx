const items = [
  "GOOD FOOD",
  "GOOD VIBES",
  "MADE WITH LOVE",
  "NY STYLE SLICES",
  "SNOW CONES",
  "JAMAICAN PATTIES",
];

export function TickerStrip() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-4 border-[var(--ink)] bg-[var(--gold)] py-2.5">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-3 text-xl tracking-wider text-[var(--ink)]"
          >
            {item} <span className="text-[var(--red)]">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
