import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns",
  description: "Explore and support active initiatives published through the PLF crowdfunding platform.",
  alternates: { canonical: "/campaigns" },
};

export default function CampaignsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
