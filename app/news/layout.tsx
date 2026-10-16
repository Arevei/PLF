import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News and Learning",
  description: "Read PLF news, evidence, learning and organisational capacity-building updates.",
  alternates: { canonical: "/news" },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
