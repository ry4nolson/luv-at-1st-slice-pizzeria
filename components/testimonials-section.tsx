import { Star } from "lucide-react";

const quotes = [
  {
    text: "I just ordered a few slices. Unbelievable — I feel like I'm back on Staten Island.",
    author: "Joe B., Staten Island native",
  },
  {
    text: "So glad I ordered early dinner tonight, and beat the rush! It was fantastic. Thank you!!!",
    author: "Facebook review",
  },
  {
    text: "The oxtail looks amazing!! 🍕🍕🍕",
    author: "Facebook comment",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative bg-[var(--ink)] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <span className="font-heading text-xs tracking-[0.4em] text-[var(--gold)]">
            THE STAMP OF APPROVAL
          </span>
          <h2 className="font-display mt-2 flex items-center justify-center gap-2 text-4xl text-[var(--paper)] sm:text-5xl">
            <Star className="h-8 w-8 fill-[var(--gold)] text-[var(--gold)]" />
            100% Recommended
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <div
              key={q.author}
              className="flex flex-col justify-between rounded-2xl border-2 border-[var(--gold)]/30 bg-[#151515] p-6"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]"
                  />
                ))}
              </div>
              <p className="text-base italic leading-relaxed text-[var(--paper)]/85">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="font-heading mt-4 text-xs tracking-wide text-[var(--red)]">
                — {q.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
