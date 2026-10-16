import type { Metadata } from "next";
import CampaignDetail from "@/app/campaign-detail/page";
import { getDb } from "@/lib/db";
import { absoluteUrl, toPlainText } from "@/lib/site-url";

type Props = { params: Promise<{ id: string }> };
type CampaignMetaDoc = { id: number; title: string; description: string; imageUrl?: string | null };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number((await params).id);
  try {
    const campaign = await (await getDb()).collection<CampaignMetaDoc>("campaigns").findOne({ id });
    if (!campaign) return { title: "Campaign not found", robots: { index: false, follow: false } };
    const description = toPlainText(campaign.description) || `Support ${campaign.title} through PLF.`;
    const canonical = `/campaigns/${campaign.id}`;
    const image = campaign.imageUrl || "/og/plf-open-graph.jpg";
    return {
      title: campaign.title,
      description,
      alternates: { canonical },
      openGraph: { type: "website", url: canonical, title: campaign.title, description, images: [{ url: image }] },
      twitter: { card: "summary_large_image", title: campaign.title, description, images: [image] },
    };
  } catch {
    return {
      title: "PLF Campaign",
      description: "Support an active PLF initiative.",
      alternates: { canonical: absoluteUrl(`/campaigns/${id}`) },
    };
  }
}

export default function CampaignPage() {
  return <CampaignDetail />;
}
