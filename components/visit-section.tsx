import { MapPin, Instagram, Heart, Phone, Mail } from "lucide-react";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11 AM – 8 PM" },
  { day: "Wednesday", time: "11 AM – 8 PM" },
  { day: "Thursday", time: "11 AM – 8 PM" },
  { day: "Friday", time: "11 AM – 8 PM" },
  { day: "Saturday", time: "11 AM – 8 PM" },
  { day: "Sunday", time: "Closed" },
];

export function VisitSection() {
  return (
    <section id="visit" className="relative overflow-hidden bg-[#1a0d0d] py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(240,180,41,0.25), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <span className="font-heading text-xs tracking-[0.4em] text-[var(--gold)]">
          COME THROUGH
        </span>
        <h2 className="font-display mt-3 text-5xl text-[var(--paper)] sm:text-6xl">
          Visit Luv At 1st Slice
        </h2>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-[var(--gold)]/30 bg-[#241212] p-6">
            <MapPin className="mx-auto h-6 w-6 text-[var(--gold)]" />
            <p className="font-heading mt-3 text-sm text-[var(--paper)]/90">
              8440 Phelan Blvd
              <br />
              Beaumont, TX 77706
            </p>
          </div>
          <div className="rounded-2xl border-2 border-[var(--gold)]/30 bg-[#241212] p-6">
            <Phone className="mx-auto h-6 w-6 text-[var(--gold)]" />
            <a
              href="tel:+14092285902"
              className="font-heading mt-3 block text-sm text-[var(--paper)]/90"
            >
              (409) 228-5902
            </a>
          </div>
          <div className="rounded-2xl border-2 border-[var(--gold)]/30 bg-[#241212] p-6">
            <Mail className="mx-auto h-6 w-6 text-[var(--gold)]" />
            <a
              href="mailto:Order@Luvat1stslice.com"
              className="font-heading mt-3 block break-words text-sm text-[var(--paper)]/90"
            >
              Order@Luvat1stslice.com
            </a>
          </div>
          <div className="rounded-2xl border-2 border-[var(--gold)]/30 bg-[#241212] p-6">
            <Instagram className="mx-auto h-6 w-6 text-[var(--gold)]" />
            <p className="font-heading mt-3 text-sm text-[var(--paper)]/90">
              Follow along
              <br />
              @luvat1stslice
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-[var(--gold)]/30 bg-[#241212] p-6">
          <h3 className="font-heading mb-4 text-xs tracking-[0.3em] text-[var(--gold)]">
            HOURS OF OPERATION
          </h3>
          <div className="divide-y divide-[var(--paper)]/10">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between py-1.5 text-sm"
              >
                <span className="text-[var(--paper)]/80">{h.day}</span>
                <span
                  className={
                    h.time === "Closed"
                      ? "text-[var(--paper)]/40"
                      : "font-heading text-[var(--paper)]"
                  }
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs italic text-[var(--paper)]/50">
            Hours adjust if we sell out — and we sell out daily.
          </p>
        </div>

        <a
          href="tel:+14092285902"
          className="font-heading mt-10 inline-flex items-center gap-2 rounded-full border-2 border-[var(--gold)] bg-[var(--red)] px-9 py-4 text-xl text-[var(--paper)] shadow-[5px_5px_0_#000] transition-transform hover:-translate-y-1"
        >
          <Heart className="h-5 w-5" /> ORDER YOUR SLICE
        </a>
      </div>
    </section>
  );
}
