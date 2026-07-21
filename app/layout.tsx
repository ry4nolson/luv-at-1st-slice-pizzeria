import type { Metadata } from "next";
import { Bangers, Anton, Kalam } from "next/font/google";
import "./globals.css";

const display = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const heading = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Luv At 1st Slice Pizzeria | NY Style Slices & Icees — Beaumont, TX",
  description:
    "Luv At 1st Slice Pizzeria — New York style pizza slices, whole pies, snow cones, water ice, and homemade Jamaican beef patties in Beaumont, TX. Good food. Good vibes. Made with love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${heading.variable} ${body.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
