import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms and Conditions", alternates: { canonical: "/terms" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
