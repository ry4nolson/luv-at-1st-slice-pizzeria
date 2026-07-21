import { Phone } from "lucide-react";

export function FieldTripsSection() {
  return (
    <section className="relative bg-[#1c1010] py-16">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <div className="text-4xl">🎉🍕🚌</div>
        <h2 className="font-display mt-3 text-3xl text-[var(--paper)] sm:text-4xl">
          Field Trips &amp; Pizza Parties
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-[var(--paper)]/70">
          We host group bookings — summer field trips, childcare outings, and
          pizza parties. Spots are limited, so book yours early.
        </p>
        <a
          href="tel:+14092285902"
          className="font-heading mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[var(--gold)] bg-[var(--red)] px-7 py-3 text-lg text-[var(--paper)] shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-1"
        >
          <Phone className="h-5 w-5" /> Book Your Spot — (409) 228-5902
        </a>
      </div>
    </section>
  );
}
