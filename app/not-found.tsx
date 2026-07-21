import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0b0b0b] text-center text-[#f4ede0]">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg text-[#f4ede0]/70">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-full border-2 border-[#f0b429] bg-[#c81e2c] px-6 py-3 font-semibold"
      >
        Back to the menu
      </Link>
    </div>
  );
}
