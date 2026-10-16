import type { Metadata } from "next";
export const metadata: Metadata = { title: "Membership", description: "Join the PLF network and connect with a learning-focused civil-society ecosystem.", alternates: { canonical: "/membership" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
