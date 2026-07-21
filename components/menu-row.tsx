interface MenuRowProps {
  name: string;
  price: string;
  note?: string;
}

export function MenuRow({ name, price, note }: MenuRowProps) {
  return (
    <div className="py-2.5">
      <div className="flex items-baseline gap-2">
        <span className="font-heading text-base tracking-wide text-[var(--paper)] sm:text-lg">
          {name}
        </span>
        <span className="crayon-underline mx-1 h-0 flex-1 border-b-2 border-dotted border-[var(--paper)]/25" />
        <span className="font-display text-xl text-[var(--gold)] sm:text-2xl">
          {price}
        </span>
      </div>
      {note && (
        <p className="mt-1 text-xs italic text-[var(--paper)]/55">{note}</p>
      )}
    </div>
  );
}

export function MenuPanelTitle({
  children,
  color = "gold",
}: {
  children: React.ReactNode;
  color?: "gold" | "red" | "green";
}) {
  const colorMap = {
    gold: "text-[var(--gold)]",
    red: "text-[var(--red)]",
    green: "text-[var(--green)]",
  };
  return (
    <h3
      className={`font-display -rotate-1 text-2xl tracking-wide sm:text-3xl ${colorMap[color]}`}
    >
      {children}
    </h3>
  );
}
