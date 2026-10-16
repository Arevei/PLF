import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Noto_Sans_Devanagari, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { getSiteUrl } from "@/lib/site-url";

const sans = DM_Sans({ variable: "--font-sans-display", subsets: ["latin"] });
const display = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const devanagari = Noto_Sans_Devanagari({ variable: "--font-devanagari", subsets: ["devanagari"] });

const description =
  "Passion for the Least Foundation strengthens India's civil society through knowledge, capacity building, leadership, governance and collaboration.";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: "PLF — Passion for the Least Foundation", template: "%s | PLF" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Passion for the Least Foundation",
    title: "PLF — Passion for the Least Foundation",
    description,
    images: [{ url: "/og/plf-open-graph.jpg", width: 1200, height: 630, alt: "PLF professionals collaborating in an Indian office" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PLF — Passion for the Least Foundation",
    description,
    images: ["/og/plf-open-graph.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = getSiteUrl();
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Passion for the Least Foundation",
        alternateName: "PLF",
        url: siteUrl.toString(),
        logo: new URL("/brand/navbar-logo.png", siteUrl).toString(),
        address: {
          "@type": "PostalAddress",
          streetAddress: "104A, Exotica Eastern Court, Crossing Republik",
          addressLocality: "Ghaziabad",
          addressRegion: "Uttar Pradesh",
          postalCode: "201016",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl.toString(),
        name: "Passion for the Least Foundation",
        publisher: { "@id": `${siteUrl}#organization` },
      },
    ],
  };

  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${geistMono.variable} ${devanagari.variable} h-full antialiased bg-background`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
