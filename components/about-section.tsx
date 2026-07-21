const owners = [
  {
    emoji: "🗽",
    name: "Steven Silva",
    role: "Owner",
    bio: "Born and raised in Staten Island, NY — the reason every pie here tastes like it came straight outta NYC.",
  },
  {
    emoji: "👩‍🍳",
    name: "Tiffany Silva",
    role: "Owner & Pizzaiola",
    bio: "Spent 10 years on Staten Island and trained at the Goodfellas Pizza School of New York before bringing it all home to Beaumont.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#140b0b] py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, rgba(240,180,41,0.3), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <span className="font-heading text-xs tracking-[0.4em] text-[var(--red)]">
            OUR STORY
          </span>
          <h2 className="font-display mt-2 text-4xl text-[var(--paper)] sm:text-5xl">
            From Staten Island, with Luv
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--paper)]/70">
            Steven was born and raised in Staten Island, NY. Tiffany spent ten
            years there too, training at the Goodfellas Pizza School of New
            York. Together they bring authentic NY-style pizza to Beaumont —
            with a little Texas heat on top. Everything is made fresh and
            sells out daily.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {owners.map((o) => (
            <div
              key={o.name}
              className="rounded-2xl border-2 border-[var(--gold)]/40 bg-[#1c1010] p-7 text-center"
            >
              <div className="text-5xl">{o.emoji}</div>
              <h3 className="font-display mt-3 text-2xl text-[var(--gold)]">
                {o.name}
              </h3>
              <p className="font-heading text-xs tracking-[0.2em] text-[var(--red)]">
                {o.role.toUpperCase()}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--paper)]/70">
                {o.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
