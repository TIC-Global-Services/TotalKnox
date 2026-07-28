import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = localFont({
  src: [
    { path: "./fonts/hkgroteskwide-light.woff2", weight: "300" },
    { path: "./fonts/hkgroteskwide-regular.woff2", weight: "400" },
    { path: "./fonts/hkgroteskwide-medium.woff2", weight: "500" },
    { path: "./fonts/hkgroteskwide-semibold.woff2", weight: "600" },
    { path: "./fonts/hkgroteskwide-bold.woff2", weight: "700" },
    { path: "./fonts/hkgroteskwide-extrabold.woff2", weight: "800" },
    { path: "./fonts/hkgroteskwide-black.woff2", weight: "900" },
  ],
  variable: "--font-display",
  display: "swap",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TotalKnox — Built for Impact",
  description:
    "Precision-engineered combat gear for those who demand more from every session.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-bone text-black antialiased">{children}</body>
    </html>
  );
}
