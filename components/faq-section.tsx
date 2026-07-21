"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Where is Luv At 1st Slice located?",
    a: "At 8440 Phelan Blvd, Beaumont, TX. Find us on Google Maps or call (409) 228-5902.",
  },
  {
    q: "What are your hours?",
    a: "Tuesday through Saturday, 11 AM to 8 PM. Closed Sunday and Monday. Hours adjust if we sell out, and extended weekend hours are coming soon.",
  },
  {
    q: "What kind of pizza do you make?",
    a: "Authentic New York–style pizza with a little Texas heat. Tiffany trained at the Goodfellas Pizza School of New York, and Steven was born and raised in Staten Island.",
  },
  {
    q: "What is the Oxtail Pizza?",
    a: "Our signature pie — NY-style pizza topped with slow-cooked oxtail. It sold out completely on grand-opening day.",
  },
  {
    q: "Do you really sell out?",
    a: "Yes — we make everything fresh and sell out daily. Order early to beat the rush, and watch our Facebook page for daily updates.",
  },
  {
    q: "Do you host groups, field trips, or pizza parties?",
    a: "Yes! We take group bookings for field trips and pizza parties. Call (409) 228-5902 or message us on Facebook to book your spot.",
  },
  {
    q: "How do I order?",
    a: "Call (409) 228-5902, email Order@Luvat1stslice.com, or message us on Facebook.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#0d1512] py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-10 text-center">
          <span className="font-heading text-xs tracking-[0.4em] text-[var(--gold)]">
            GOOD QUESTIONS
          </span>
          <h2 className="font-display mt-2 text-4xl text-[var(--paper)] sm:text-5xl">
            FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border-2 border-[var(--gold)]/30 bg-[#152019]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-heading text-base text-[var(--paper)] sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-[var(--gold)] transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--paper)]/70">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
