import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact", description: "Contact PLF to discuss capacity building, research, learning, institutional development or partnership.", alternates: { canonical: "/contact" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
