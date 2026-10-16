import type { Metadata } from "next";
export const metadata: Metadata = { title: "Donate", description: "Support active PLF initiatives through the secure donation platform.", alternates: { canonical: "/donate" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
