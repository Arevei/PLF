import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Noto_Sans_Devanagari, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const sans = DM_Sans({
  variable: "--font-sans-display",
  subsets: ["latin"],
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: {
    default: "PLF — Passion for the Least Foundation",
    template: "%s | PLF",
  },
  description:
    "PLF partners with communities to lift the least, expand opportunity, and build a kinder, more resilient India through education, health, livelihoods, and environmental action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${geistMono.variable} ${devanagari.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>

        

       




      </body>
    </html>
  );
}
