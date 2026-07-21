import { MapPin, Heart, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-[var(--gold)] bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center">
        <p className="font-display text-2xl text-[var(--gold)]">
          LUV <span className="text-[var(--red)]">&#9829;</span> 1ST SLICE
        </p>

        <div className="flex items-center gap-2 text-sm text-[var(--paper)]/70">
          <MapPin className="h-4 w-4 text-[var(--gold)]" />
          8440 Phelan Blvd. Suite 300 &bull; Beaumont, TX 77706
        </div>

        <div className="flex items-center gap-2 font-heading text-sm text-[var(--red)]">
          <Heart className="h-4 w-4" /> THANK YOU FOR SUPPORTING LOCAL!
        </div>

        <div className="flex items-center gap-2 text-sm text-[var(--paper)]/70">
          <Instagram className="h-4 w-4 text-[var(--gold)]" />
          @luvat1stslice
        </div>

        <p className="mt-4 text-xs text-[var(--paper)]/30">
          &copy; {new Date().getFullYear()} Luv At 1st Slice Pizzeria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
