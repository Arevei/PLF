import type { Metadata } from "next";
export const metadata: Metadata = { title: "Activity Gallery", description: "Explore visual records of PLF learning, collaboration and field activity.", alternates: { canonical: "/gallery" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
